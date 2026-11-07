<script setup>
import { ref, onMounted } from 'vue'
import { DESTAQUES } from '../data/destaques.js'

function sortear() {
  return DESTAQUES[Math.floor(Math.random() * DESTAQUES.length)]
}

// O HTML pré-renderizado usa o primeiro destaque (igual no servidor e no
// cliente, evitando erro de hidratação); o sorteio acontece ao montar.
const atual = ref(DESTAQUES[0])

onMounted(() => {
  atual.value = sortear()
})

function sortearOutro() {
  atual.value = sortear()
}
</script>

<template>
  <div class="spotlight" :data-kind="atual.tipo">
    <h3>{{ atual.titulo }}</h3>
    <p>{{ atual.texto }}</p>
    <a class="spotlight-link" :href="atual.link">Ver página completa →</a>
    <br>
    <button class="ap-button ap-button--outlined spotlight-refresh" type="button" @click="sortearOutro">Sortear outro ↻</button>
  </div>
</template>
