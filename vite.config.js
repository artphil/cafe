import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { artigosHtml, entradasArtigos } from './scripts/vite-plugin-artigos.js'

// Endereço oficial do site. A Cloudflare serve as páginas sem ".html" (/v60) e
// redireciona o endereço com ".html" para elas, então o canônico segue esse formato.
const SITE_URL = 'https://cafealmanaque.com'

// Ambiente de teste (ex.: a branch develop na Vercel): defina VITE_AMBIENTE=teste.
// Nele o site não carrega AdSense nem Analytics, não mostra os espaços de anúncio,
// pede `noindex` e o robots.txt bloqueia tudo.
const AMBIENTE_TESTE = loadEnv('production', process.cwd(), 'VITE_').VITE_AMBIENTE === 'teste'

function ambienteDeTeste() {
  return {
    name: 'ambiente-de-teste',
    transformIndexHtml: {
      order: 'pre', // antes de o Vite trocar os %VITE_...% pelas variáveis
      handler(html) {
        if (!AMBIENTE_TESTE) return html
        return html
          .replace(/<!-- Google block init -->[\s\S]*?<!-- Google block end -->\s*/, '')
          .replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>')
      },
    },
  }
}

// Acrescenta canonical, og:url, og:image, nome do site e ícones em cada página, só no build.
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
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'Café Almanaque' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: `${SITE_URL}/og-image.png` }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
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
      if (!AMBIENTE_TESTE) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })

      const robots = AMBIENTE_TESTE
        ? 'User-agent: *\nDisallow: /\n'
        : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
    },
  }
}

export default defineConfig({
  plugins: [vue(), artigosHtml(__dirname), ambienteDeTeste(), metasDoSite(), sitemapERobots()],

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
