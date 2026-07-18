<script setup>
import { ref, onMounted } from 'vue'
import { CAFES_SHEET_URL, CAFES_FALLBACK } from '../data/cafes.js'

const cafes = ref([])
const origem = ref('carregando') // 'carregando' | 'planilha' | 'fallback'

async function carregar() {
  try {
    const res = await fetch(CAFES_SHEET_URL)
    if (!res.ok) throw new Error('Planilha indisponível')
    const dados = await res.json()
    if (!Array.isArray(dados) || dados.length === 0) throw new Error('Sem dados')
    // Espera colunas: nome, endereco, site, descricao (ajuste os nomes conforme a planilha)
    cafes.value = dados
    origem.value = 'planilha'
  } catch (err) {
    cafes.value = CAFES_FALLBACK
    origem.value = 'fallback'
  }
}

onMounted(carregar)
</script>

<template>
  <p class="cafe-state">
    <template v-if="origem === 'carregando'">Carregando cafeterias…</template>
    <template v-else-if="origem === 'planilha'">{{ cafes.length }} cafeterias para você conhecer.</template>
    <template v-else>Mostrando dados de exemplo (planilha ainda não configurada ou indisponível).</template>
  </p>

  <div class="cafe-grid">
    <article class="cafe-card" v-for="c in cafes" :key="c.nome">
      <h3>{{ c.nome }}</h3>
      <p class="addr">{{ c.endereco }}</p>
      <p class="desc">{{ c.descricao }}</p>
      <a class="site-link" :href="c.site" target="_blank" rel="noopener">Site / Instagram →</a>
    </article>
  </div>
</template>
