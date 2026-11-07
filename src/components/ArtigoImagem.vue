<script setup>
// Imagem de topo do artigo, com legenda e crédito.
// `imagem`: { src, alt, credito, creditoUrl?, legenda? }. O alt é obrigatório e descreve a foto.
// Com `creditoUrl`, o crédito vira link (necessário em licenças que exigem atribuição com link).
defineProps({
  imagem: { type: Object, required: true },
})
</script>

<template>
  <figure class="artigo-imagem wrap">
    <img :src="imagem.src" :alt="imagem.alt" width="1200" height="675" />
    <figcaption>
      <span v-if="imagem.legenda">{{ imagem.legenda }} </span>
      <span class="credito">
        Foto:
        <a v-if="imagem.creditoUrl" :href="imagem.creditoUrl" target="_blank" rel="noopener">{{ imagem.credito }}</a>
        <template v-else>{{ imagem.credito }}</template>
      </span>
    </figcaption>
  </figure>
</template>

<style scoped>
.artigo-imagem {
  margin-top: 24px;
  margin-bottom: 0;
}
.artigo-imagem img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border: 1px solid var(--line);
  border-radius: var(--radius);
}
.artigo-imagem figcaption {
  margin-top: 8px;
  font-size: 0.85rem;
  color: rgba(38, 21, 11, 0.75);
}
.credito {
  font-family: var(--font-mono);
  font-size: 0.78rem;
}
</style>
