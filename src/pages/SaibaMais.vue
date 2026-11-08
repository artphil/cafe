<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import IndiceArtigos from '../components/IndiceArtigos.vue'
</script>

<template>
  <SiteHeader current="saiba-mais" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Saiba mais</p>
      <h1>Grão, torra e moagem.</h1>
      <p class="lede">O tipo de grão, o processamento, a torra e a moagem trabalham juntos na xícara. Entender o papel
        de cada um ajuda a escolher cafés e ajustar o preparo ao sabor que você procura.</p>
    </section>

    <AdSlot slot="9895945544" format="auto" fullWidthResponsive />

    <IndiceArtigos secao="saiba-mais" titulo="Artigos" />
  </main>

  <SiteFooter />
</template>
