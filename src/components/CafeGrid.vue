<script setup>
import { ref, computed, inject, onMounted } from 'vue'
import { CAFES_API_URL, CAFES_FALLBACK } from '../data/cafes.js'

// Lista buscada na planilha durante o build (pré-renderização), se houver.
const iniciais = inject('cafesIniciais', null)

const cafes = ref(iniciais ?? [])

// Só aparecem linhas publicadas (ou sem status).
function normalizar(c) {
  // Sem `maps_url`, o link do mapa vira uma busca pelo nome e endereço
  const mapsUrl =
    c.maps_url ||
    (c.endereco
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.nome} ${c.endereco} Belo Horizonte`)}`
      : '')

  return {
    nome: c.nome,
    endereco: c.endereco ?? '',
    bairro: c.bairro ?? '',
    mapsUrl,
    site: c.site ?? '',
    instagram: c.instagram ?? '',
    descricao: c.descricao ?? '',
    destaque: c.destaque ?? '',
    preco: c.preco ?? '',
    // `categoria`: tags separadas por vírgula; ignora texto de exemplo "[ex: ...]"
    tags: String(c.categoria ?? '')
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t && !t.startsWith('[')),
    links: [
      ['Site', c.site],
      ['Instagram', c.instagram],
      ['Mapa', mapsUrl],
    ].filter(([, url]) => url),
  }
}

const lista = computed(() =>
  cafes.value
    .filter((c) => !c.status || String(c.status).trim().toLowerCase() === 'publicada')
    .map(normalizar),
)
const origem = ref(iniciais ? 'planilha' : 'carregando') // 'carregando' | 'planilha' | 'fallback'

async function carregar() {
  try {
    const res = await fetch(CAFES_API_URL)
    if (!res.ok) throw new Error(`Planilha indisponível (status ${res.status})`)
    const dados = await res.json()
    if (!Array.isArray(dados) || dados.length === 0) throw new Error('Sem dados na planilha')
    // Colunas esperadas: ver spec 03
    cafes.value = dados
    origem.value = 'planilha'
  } catch (err) {
    if (iniciais) {
      console.warn('[CafeGrid] mantendo a lista do build — motivo:', err)
      return
    }
    console.warn('[CafeGrid] usando dados de exemplo — motivo:', err)
    cafes.value = CAFES_FALLBACK
    origem.value = 'fallback'
  }
}

onMounted(() => {
  carregar().catch((err) => console.error('[CafeGrid] erro inesperado:', err))
})
</script>

<template>
  <p class="cafe-state">
    <template v-if="origem === 'carregando'">Carregando cafeterias…</template>
    <template v-else-if="origem === 'planilha'">{{ lista.length }} cafeterias carregadas da planilha.</template>
    <template v-else>Mostrando dados de exemplo (planilha indisponível).</template>
  </p>

  <div class="cafe-grid">
    <article class="cafe-card" v-for="c in lista" :key="c.nome">
      <h3>{{ c.nome }}</h3>
      <p class="addr">{{ c.endereco }}<template v-if="c.bairro"> · {{ c.bairro }}</template></p>
      <div class="tag-row" v-if="c.tags.length || c.preco">
        <span v-if="c.preco" class="tag roast">{{ c.preco }}</span>
        <span v-for="t in c.tags" :key="t" class="tag leaf">{{ t }}</span>
      </div>
      <p class="desc" v-if="c.descricao">{{ c.descricao }}</p>
      <p class="desc" v-if="c.destaque"><strong>Destaque:</strong> {{ c.destaque }}</p>
      <template v-for="([rotulo, url], i) in c.links" :key="rotulo">
        <span v-if="i > 0"> / </span>
        <a class="site-link" :href="url" target="_blank" rel="noopener">{{ rotulo }}</a>
      </template>
    </article>
  </div>
</template>
