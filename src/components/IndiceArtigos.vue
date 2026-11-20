<script setup>
import { computed } from 'vue'
import { ARTIGOS } from '../data/artigos.js'

// Cards com os artigos de uma seção ('preparo' | 'saiba-mais'), lidos de
// src/data/artigos.js. Com `grupo` ('metodo' | 'guia'), mostra só esse grupo da seção.
// Some sozinho enquanto não houver artigos.
const props = defineProps({
  secao: { type: String, required: true },
  titulo: { type: String, required: true },
  grupo: { type: String, default: '' },
})

const artigos = computed(() => ARTIGOS.filter((a) => a.secao === props.secao && (!props.grupo || a.grupo === props.grupo)))
</script>

<template>
  <section v-if="artigos.length" class="content-block wrap">
    <h2>{{ titulo }}</h2>
    <div class="area-grid">
      <a v-for="a in artigos" :key="a.slug" class="area-card" :href="`./${a.slug}.html`">
        <img v-if="a.imagem" class="capa" :src="a.imagem.src" :alt="a.imagem.alt" loading="lazy" width="400"
          height="225" />
        <h3>{{ a.titulo }}</h3>
        <p>{{ a.descricao }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.capa {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius);
  margin-bottom: 10px;
}
</style>
