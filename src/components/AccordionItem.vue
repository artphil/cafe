<script setup>
import { computed } from 'vue'
import { ARTIGOS } from '../data/artigos.js'

const props = defineProps({
  title: { type: String, required: true },
  openByDefault: { type: Boolean, default: false },
  // Slug do artigo que substitui este item. Enquanto o artigo existir em
  // src/data/artigos.js, o item some (o card dele aparece no índice da seção).
  artigo: { type: String, default: '' }
})

const visivel = computed(() => !props.artigo || !ARTIGOS.some((a) => a.slug === props.artigo))
</script>

<template>
  <details v-if="visivel" class="accordion-item" :open="openByDefault">
    <summary>{{ title }}</summary>
    <div class="accordion-body">
      <!-- Conteúdo de cada item entra aqui via slot -->
      <slot />
    </div>
  </details>
</template>
