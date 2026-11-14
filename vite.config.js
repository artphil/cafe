import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { artigosHtml, entradasArtigos } from './scripts/vite-plugin-artigos.js'

// Endereço oficial do site. A Cloudflare serve as páginas sem ".html" (/v60) e
// redireciona o endereço com ".html" para elas, então o canônico segue esse formato.
const SITE_URL = 'https://cafealmanaque.com'

// Acrescenta <link rel="canonical"> e og:url em cada página, só no build.
function metasDoSite() {
  return {
    name: 'metas-do-site',
    apply: 'build',
    transformIndexHtml(html, ctx) {
      const nome = (ctx.path || '').split('?')[0].replace(/^\//, '').replace(/\.html$/, '')
      const url = nome === '' || nome === 'index' ? `${SITE_URL}/` : `${SITE_URL}/${nome}`
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: url }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: url }, injectTo: 'head' },
      ]
    },
  }
}

// Gera sitemap.xml e robots.txt a partir das páginas HTML do build, com os mesmos
// endereços (sem ".html") usados no canonical. Ignora o build SSR do pré-render.
function sitemapERobots() {
  let ssr = false
  return {
    name: 'sitemap-e-robots',
    apply: 'build',
    configResolved(config) {
      ssr = !!config.build.ssr
    },
    generateBundle(_, bundle) {
      if (ssr) return
      const urls = Object.keys(bundle)
        .filter((arquivo) => arquivo.endsWith('.html'))
        .map((arquivo) => arquivo.replace(/\.html$/, ''))
        .map((nome) => (nome === 'index' ? `${SITE_URL}/` : `${SITE_URL}/${nome}`))
        .sort((a, b) => (a.endsWith('.com/') ? -1 : b.endsWith('.com/') ? 1 : a.localeCompare(b)))

      const sitemap =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
        '\n</urlset>\n'
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })

      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
    },
  }
}

export default defineConfig({
  plugins: [vue(), artigosHtml(__dirname), metasDoSite(), sitemapERobots()],

  // Importante para GitHub Pages: se o site ficar em
  // https://seu-usuario.github.io/nome-do-repositorio/
  // troque './' por '/nome-do-repositorio/'
  base: './',

  // Permite abrir o `npm run dev` por um túnel (cloudflared, localtunnel);
  // sem isso o Vite bloqueia o nome de host desconhecido.
  server: { allowedHosts: ['.trycloudflare.com', '.loca.lt'] },

  build: {
    rollupOptions: {
      // Cada chave vira um HTML real e separado no build (pasta dist/),
      // sem router e sem carregamento client-side de conteúdo.
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        preparo: resolve(__dirname, 'preparo.html'),
        'saiba-mais': resolve(__dirname, 'saiba-mais.html'),
        cafeterias: resolve(__dirname, 'cafeterias.html'),
        sobre: resolve(__dirname, 'sobre.html'),
        contato: resolve(__dirname, 'contato.html'),
        privacidade: resolve(__dirname, 'privacidade.html'),
        // Artigos: páginas geradas a partir de src/data/artigos.js
        ...entradasArtigos(__dirname),
      }
    }
  }
})
