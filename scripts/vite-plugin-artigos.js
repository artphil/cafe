// Gera uma página HTML por item de src/data/artigos.js, sem criar arquivos
// na raiz: o HTML é virtual (build) ou servido na hora (dev).
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { ARTIGOS } from '../src/data/artigos.js'

const escapar = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function html(a) {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapar(a.titulo)} — Café Almanaque</title>
    <meta name="description" content="${escapar(a.descricao)}" />

    <!-- Google block init -->
    <meta name="google-adsense-account" content="%VITE_ADSENSE_PUBLISHER_ID%" />
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=%VITE_ADSENSE_PUBLISHER_ID%"
      crossorigin="anonymous"
    ></script>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=%VITE_ANALYTICS_ID%"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "%VITE_ANALYTICS_ID%");
    </script>
    <!-- Google block end -->
  </head>
  <body>
    <div id="app" data-slug="${a.slug}"></div>
    <script type="module" src="/src/main-artigo.js"></script>
  </body>
</html>
`
}

// Entradas do rollup: { slug: caminho absoluto do .html virtual }
export function entradasArtigos(raiz) {
  return Object.fromEntries(ARTIGOS.map((a) => [a.slug, resolve(raiz, `${a.slug}.html`)]))
}

export function artigosHtml(raiz) {
  const porCaminho = new Map(ARTIGOS.map((a) => [resolve(raiz, `${a.slug}.html`), a]))

  return {
    name: 'artigos-html',

    buildStart() {
      const vistos = new Set()
      for (const a of ARTIGOS) {
        if (vistos.has(a.slug)) throw new Error(`[artigos] slug repetido: ${a.slug}`)
        vistos.add(a.slug)
        if (existsSync(resolve(raiz, `${a.slug}.html`))) {
          throw new Error(`[artigos] "${a.slug}" já existe como página (${a.slug}.html na raiz)`)
        }
        if (!existsSync(resolve(raiz, `src/artigos/${a.slug}.vue`))) {
          throw new Error(`[artigos] falta o corpo: src/artigos/${a.slug}.vue`)
        }
      }
    },

    resolveId(id) {
      if (porCaminho.has(id)) return id
    },

    load(id) {
      const a = porCaminho.get(id)
      if (a) return html(a)
    },

    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const caminho = (req.url || '').split('?')[0]
        const a = ARTIGOS.find((x) => caminho === `/${x.slug}.html`)
        if (!a) return next()
        res.setHeader('Content-Type', 'text/html')
        res.end(await server.transformIndexHtml(req.url, html(a)))
      })
    },
  }
}
