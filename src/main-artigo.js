import './style.css'
import { mountPage } from './mount.js'
import Artigo from './pages/Artigo.vue'
import { ARTIGOS } from './data/artigos.js'
import { carregarCorpo } from './artigo-corpo.js'

// Todas as páginas de artigo usam esta entrada; o slug vem do HTML gerado.
async function iniciar() {
  const slug = document.getElementById('app').dataset.slug
  const artigo = ARTIGOS.find((a) => a.slug === slug)
  mountPage(Artigo, { artigo, corpo: await carregarCorpo(slug) })
}

iniciar()
