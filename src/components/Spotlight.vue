<script setup>
import { ref } from 'vue'
import { DESTAQUES } from '../data/destaques.js'

function sortear() {
  return DESTAQUES[Math.floor(Math.random() * DESTAQUES.length)]
}

const atual = ref(sortear())

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
