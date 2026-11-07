<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import ArtigoImagem from '../components/ArtigoImagem.vue'
import LeiaTambem from '../components/LeiaTambem.vue'
import { SECOES, relacionadosDe } from '../data/artigos.js'

const props = defineProps({
  artigo: { type: Object, required: true },
  // Componente com o corpo do texto (src/artigos/<slug>.vue)
  corpo: { type: Object, required: true },
})

const secao = SECOES[props.artigo.secao]
const relacionados = relacionadosDe(props.artigo)
</script>

<template>
  <SiteHeader :current="artigo.secao" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">{{ secao.rotulo }}</p>
      <h1>{{ artigo.titulo }}</h1>
      <p class="lede">{{ artigo.descricao }}</p>
    </section>

    <ArtigoImagem v-if="artigo.imagem" :imagem="artigo.imagem" />

    <AdSlot slot="4895588662" format="auto" fullWidthResponsive />

    <section class="content-block wrap">
      <component :is="corpo" />
    </section>

    <LeiaTambem :artigos="relacionados" />
  </main>

  <SiteFooter />
</template>
