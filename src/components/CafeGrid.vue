<script setup>
import { ref, onMounted } from 'vue'
import { CAFES_API_URL, CAFES_FALLBACK } from '../data/cafes.js'

const cafes = ref([])
const origem = ref('carregando') // 'carregando' | 'planilha' | 'fallback'

async function carregar() {
  try {
    const res = await fetch(CAFES_API_URL)
    if (!res.ok) throw new Error(`Planilha indisponível (status ${res.status})`)
    const dados = await res.json()
    if (!Array.isArray(dados) || dados.length === 0) throw new Error('Sem dados na planilha')
    // Espera colunas: nome, endereco, site, descricao 
    cafes.value = dados
    origem.value = 'planilha'
  } catch (err) {
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
    <template v-else-if="origem === 'planilha'">{{ cafes.length }} cafeterias carregadas da planilha.</template>
    <template v-else>Mostrando dados de exemplo (planilha indisponível).</template>
  </p>

  <div class="cafe-grid">
    <article class="cafe-card" v-for="c in cafes" :key="c.nome">
      <h3>{{ c.nome }}</h3>
      <p class="addr">{{ c.endereco }}</p>
      <p class="addr">{{ c.regiao }}</p>
      <p class="desc">{{ c.descricao }}</p>
      <a v-if="c.site" class="site-link" :href="c.site" target="_blank" rel="noopener">Site</a>
      <span v-if="c.site && c.insta">/</span>
      <a v-if="c.insta" class="site-link" :href="c.instagram" target="_blank" rel="noopener">Instagram</a>
    </article>
  </div>
</template>