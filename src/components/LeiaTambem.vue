<script setup>
// Lista de artigos relacionados ao fim do texto. `artigos`: itens de ARTIGOS.
defineProps({
  artigos: { type: Array, required: true },
})
</script>

<template>
  <section v-if="artigos.length" class="content-block wrap">
    <h2>Leia também</h2>
    <div class="area-grid">
      <a v-for="a in artigos" :key="a.slug" class="area-card" :href="`./${a.slug}.html`">
        <h3>{{ a.titulo }}</h3>
        <p>{{ a.descricao }}</p>
      </a>
    </div>
  </section>
</template>
