import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import Home from './pages/Home.vue'
import Historia from './pages/Historia.vue'
import Preparo from './pages/Preparo.vue'
import SaibaMais from './pages/SaibaMais.vue'
import Cafeterias from './pages/Cafeterias.vue'
import Sobre from './pages/Sobre.vue'
import Contato from './pages/Contato.vue'
import Privacidade from './pages/Privacidade.vue'

export { CAFES_API_URL } from './data/cafes.js'

// Chave = nome do arquivo HTML gerado em dist/ (sem a extensão).
const PAGES = {
  index: Home,
  historia: Historia,
  preparo: Preparo,
  'saiba-mais': SaibaMais,
  cafeterias: Cafeterias,
  sobre: Sobre,
  contato: Contato,
  privacidade: Privacidade,
}

export const PAGE_NAMES = Object.keys(PAGES)

export function render(page, { cafes } = {}) {
  const app = createSSRApp(PAGES[page])
  if (cafes) app.provide('cafesIniciais', cafes)
  return renderToString(app)
}
