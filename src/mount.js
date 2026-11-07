import { createApp, createSSRApp } from 'vue'

// Se a página veio pré-renderizada (scripts/prerender.mjs), hidrata o HTML
// existente; caso contrário (ex.: `npm run dev`), monta do zero.
export function mountPage(Page) {
  const el = document.getElementById('app')
  const app = (el.hasChildNodes() ? createSSRApp : createApp)(Page)

  const raw = document.getElementById('cafes-data')?.textContent
  if (raw) app.provide('cafesIniciais', JSON.parse(raw))

  app.mount(el)
}
