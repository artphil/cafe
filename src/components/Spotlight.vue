<script setup>
import { ref, onMounted } from 'vue'
import { ARTIGOS, SECOES } from '../data/artigos.js'

// Sorteia um artigo qualquer (evitando repetir o atual, quando há mais de um).
function sortear(atual) {
  const opcoes = ARTIGOS.length > 1 ? ARTIGOS.filter((a) => a !== atual) : ARTIGOS
  return opcoes[Math.floor(Math.random() * opcoes.length)]
}

// O HTML pré-renderizado usa o primeiro artigo (igual no servidor e no
// cliente, evitando erro de hidratação); o sorteio acontece ao montar.
const atual = ref(ARTIGOS[0])

onMounted(() => {
  atual.value = sortear(atual.value)
})

function sortearOutro() {
  atual.value = sortear(atual.value)
}
</script>

<template>
  <div v-if="atual" class="spotlight" :data-kind="SECOES[atual.secao].rotulo">
    <h3>{{ atual.titulo }}</h3>
    <p>{{ atual.descricao }}</p>
    <div class="spotlight-acoes">
      <a class="ap-button ap-button--filled spotlight-ler" :href="`./${atual.slug}.html`">Ler o artigo →</a>
      <button class="ap-button ap-button--outlined spotlight-refresh" type="button" @click="sortearOutro">Sortear outro ↻</button>
    </div>
  </div>
</template>
