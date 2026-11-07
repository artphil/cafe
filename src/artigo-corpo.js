import { markRaw } from 'vue'

// Corpo de cada artigo: `src/artigos/<slug>.vue`. Carregado sob demanda para
// que cada página baixe só o próprio texto.
const corpos = import.meta.glob('./artigos/*.vue')

export async function carregarCorpo(slug) {
  const carregar = corpos[`./artigos/${slug}.vue`]
  if (!carregar) throw new Error(`Falta o corpo do artigo: src/artigos/${slug}.vue`)
  return markRaw((await carregar()).default)
}
