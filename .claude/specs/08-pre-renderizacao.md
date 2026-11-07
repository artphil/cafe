# Spec 08: Pré-renderização (SSG)

**Status:** concluído

## Problema
Os HTMLs publicados contêm só `<div id="app"></div>`; o crawler pode ver páginas vazias.

## Decisão
Pré-renderização própria com `vue/server-renderer`, sem dependência nova e sem trocar de framework:
- `npm run build` = `vite build` + `scripts/prerender.mjs`
- O script faz um build SSR de `src/entry-server.js`, renderiza cada página e injeta o HTML em `dist/<página>.html`
- No navegador, `src/mount.js` hidrata o HTML pronto (`createSSRApp`); no `npm run dev` monta do zero
- Cafeterias: a planilha é buscada no build e embutida no HTML (`<script id="cafes-data">`); o navegador ainda atualiza ao carregar
- Spotlight da home: HTML sai com o primeiro destaque e o sorteio acontece no cliente (evita erro de hidratação)

## Tarefas
- [x] Gerar HTML final com o texto no build
- [x] Dados de cafeterias: renderizar a lista no build e hidratar depois
- [x] Verificar no `dist/` que o texto de cada página está no HTML
- [x] Verificar no navegador que a hidratação ocorre sem avisos no console (`npm run preview`)

## Critério de pronto
`curl` de qualquer página mostra o conteúdo principal sem executar JS.
