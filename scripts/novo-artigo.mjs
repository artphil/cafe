// Cria um artigo novo: o arquivo do texto em src/artigos/<slug>.vue (com o molde)
// e o item em src/data/artigos.js. Uso:
//   npm run novo-artigo -- <slug> <secao> "<Título>" [--metodo]
// Seções: historia | preparo | saiba-mais. Com --metodo, usa o molde de método de
// preparo (ficha de receita e seções padrão do claude.md). Na seção preparo, o item
// entra no grupo 'metodo' (com --metodo) ou 'guia' (sem).
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const raiz = process.cwd()
const args = process.argv.slice(2)
const metodo = args.includes('--metodo')
const [slug, secao, ...resto] = args.filter((a) => a !== '--metodo')
const titulo = resto.join(' ').trim()

const { ARTIGOS, SECOES } = await import(pathToFileURL(resolve(raiz, 'src/data/artigos.js')).href)

function falha(msg) {
  console.error(`\nErro: ${msg}\n`)
  console.error('Uso: npm run novo-artigo -- <slug> <secao> "<Título>" [--metodo]')
  console.error(`Seções: ${Object.keys(SECOES).join(' | ')}`)
  console.error('Exemplo: npm run novo-artigo -- armazenamento saiba-mais "Como armazenar café" ')
  process.exit(1)
}

if (!slug || !secao || !titulo) falha('faltam argumentos.')
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) falha('o slug deve ter só minúsculas, números e hífens (ex.: agua-ideal).')
if (!SECOES[secao]) falha(`seção inválida: "${secao}".`)
if (ARTIGOS.some((a) => a.slug === slug)) falha(`já existe um artigo com o slug "${slug}".`)
if (existsSync(resolve(raiz, `${slug}.html`))) falha(`"${slug}" já é uma página (${slug}.html na raiz).`)
const arquivo = resolve(raiz, `src/artigos/${slug}.vue`)
if (existsSync(arquivo)) falha(`já existe src/artigos/${slug}.vue.`)

const molde = metodo
  ? `<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>[PREENCHER: introdução, 1 a 2 parágrafos: o que é e para quem serve]</p>

  <h2>Receita de partida</h2>
  <FichaReceita cafe="[PREENCHER] g" agua="[PREENCHER] g" proporcao="1:[PREENCHER]" temperatura="90 a 96 °C"
    moagem="[PREENCHER]" tempo="[PREENCHER]" indicado="[PREENCHER]" />

  <h2>O que você vai precisar</h2>
  <ul>
    <li>[PREENCHER]</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li>[PREENCHER]</li>
  </ol>

  <h2>Como ajustar o gosto</h2>
  <h3>Ficou amargo ou seco</h3>
  <p>[PREENCHER]</p>
  <h3>Ficou ácido ou aguado</h3>
  <p>[PREENCHER]</p>

  <h2>Erros comuns</h2>
  <ul>
    <li>[PREENCHER]</li>
  </ul>
</template>
`
  : `<template>
  <p>[PREENCHER: introdução, 1 a 2 parágrafos]</p>

  <h2>[PREENCHER: primeira seção]</h2>
  <p>[PREENCHER]</p>

  <h2>[PREENCHER: segunda seção]</h2>
  <p>[PREENCHER]</p>

  <h2>Erros comuns</h2>
  <ul>
    <li>[PREENCHER]</li>
  </ul>
</template>
`

writeFileSync(arquivo, molde)

const js = (t) => `'${t.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
const item = `  {
    slug: ${js(slug)},
    titulo: ${js(titulo)},
    secao: ${js(secao)},${secao === 'preparo' ? `\n    grupo: '${metodo ? 'metodo' : 'guia'}',` : ''}
    descricao: '[PREENCHER: 1 a 2 frases para o card, o lede e a meta description]',
    // imagem: { src: './img/artigos/${slug}.jpg', alt: '', credito: '', creditoUrl: '' },
    // relacionados: ['outro-slug'],
  },
`
const caminhoDados = resolve(raiz, 'src/data/artigos.js')
const dados = readFileSync(caminhoDados, 'utf8')
const marca = /\n\]\n\nexport function relacionadosDe/
if (!marca.test(dados)) {
  console.error('Não achei o fim da lista em src/data/artigos.js. O arquivo do texto foi criado; acrescente o item à mão.')
  process.exit(1)
}
writeFileSync(caminhoDados, dados.replace(marca, `\n${item}]\n\nexport function relacionadosDe`))

console.log(`\nCriado: src/artigos/${slug}.vue e item "${slug}" em src/data/artigos.js (seção: ${secao}${metodo ? ', molde de método' : ''}).`)
console.log('\nPróximos passos:')
console.log('  1. Escreva o texto e preencha tudo que está como [PREENCHER] (inclusive a descrição no artigos.js).')
console.log(`  2. Coloque a foto em public/img/artigos/${slug}.jpg (1600 px) e descomente o bloco "imagem".`)
console.log('  3. Veja no navegador: npm run dev  e abra  /' + slug + '.html')
console.log('  4. Commit na develop, confira na Vercel e publique com: npm run deploy\n')
