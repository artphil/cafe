// Pré-renderiza as páginas: depois do `vite build`, renderiza cada componente
// de página para HTML e injeta o resultado em dist/<página>.html.
import { build } from 'vite'
import { readdir, readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const ssrDir = resolve(root, 'dist-ssr')
const distDir = resolve(root, 'dist')

await build({
  logLevel: 'warn',
  build: { ssr: 'src/entry-server.js', outDir: ssrDir, emptyOutDir: true, copyPublicDir: false },
})

try {
  const entry = (await readdir(ssrDir)).find((f) => /^entry-server\.m?js$/.test(f))
  const { render, PAGE_NAMES, CAFES_API_URL } = await import(pathToFileURL(resolve(ssrDir, entry)).href)

  // Lista de cafeterias vem da planilha em tempo de build; se falhar, a página
  // sai sem a lista pré-renderizada e o navegador busca depois.
  let cafes = null
  try {
    const res = await fetch(CAFES_API_URL)
    if (!res.ok) throw new Error(`status ${res.status}`)
    const dados = await res.json()
    if (!Array.isArray(dados) || dados.length === 0) throw new Error('sem dados')
    cafes = dados
  } catch (err) {
    console.warn(`[prerender] cafeterias não pré-renderizadas (${err.message})`)
  }

  const MARCA = '<div id="app"></div>'

  for (const page of PAGE_NAMES) {
    const file = resolve(distDir, `${page}.html`)
    const html = await readFile(file, 'utf8')
    if (!html.includes(MARCA)) throw new Error(`${page}.html: ${MARCA} não encontrado`)

    const comCafes = page === 'cafeterias' && cafes
    const corpo = await render(page, comCafes ? { cafes } : {})
    const dados = comCafes
      ? `<script type="application/json" id="cafes-data">${JSON.stringify(cafes).replace(/</g, '\\u003c')}</script>`
      : ''

    await writeFile(file, html.replace(MARCA, () => `<div id="app">${corpo}</div>${dados}`))
    console.log(`[prerender] ${page}.html`)
  }
} finally {
  await rm(ssrDir, { recursive: true, force: true })
}
