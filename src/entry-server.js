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
import Artigo from './pages/Artigo.vue'
import { ARTIGOS } from './data/artigos.js'
import { carregarCorpo } from './artigo-corpo.js'

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

export const PAGE_NAMES = [...Object.keys(PAGES), ...ARTIGOS.map((a) => a.slug)]

export async function render(page, { cafes } = {}) {
  const artigo = ARTIGOS.find((a) => a.slug === page)
  const app = artigo
    ? createSSRApp(Artigo, { artigo, corpo: await carregarCorpo(page) })
    : createSSRApp(PAGES[page])
  if (cafes) app.provide('cafesIniciais', cafes)
  return renderToString(app)
}
