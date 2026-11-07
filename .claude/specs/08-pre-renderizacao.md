# Spec 08: Pré-renderização (SSG)

**Status:** novo

## Problema
Os HTMLs publicados contêm só `<div id="app"></div>`; o crawler pode ver páginas vazias.

## Tarefas
- [ ] Gerar HTML final com o texto no build (ex.: `vite-ssg`, ou migrar para Astro/Nuxt generate)
- [ ] Dados de cafeterias: renderizar a lista no build (ou fallback real em HTML) e hidratar depois
- [ ] Verificar no `dist/` que o texto de cada página está no HTML

## Critério de pronto
`curl` de qualquer página mostra o conteúdo principal sem executar JS.
