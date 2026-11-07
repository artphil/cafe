<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import IndiceArtigos from '../components/IndiceArtigos.vue'
</script>

<template>
  <SiteHeader current="preparo" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Preparo</p>
      <h1>Escolha o método certo pra você.</h1>
      <p class="lede">O mesmo grão pode render xícaras bem diferentes. O método muda o corpo, a acidez e a praticidade
        do preparo — abra cada guia para encontrar uma receita de partida e ajustar ao seu gosto. Sem saber por onde
        começar? Veja o <a href="./comparativo-de-metodos.html">comparativo de métodos</a>.</p>
    </section>

    <AdSlot slot="9213419261" format="auto" fullWidthResponsive />

    <IndiceArtigos secao="preparo" titulo="Guias completos" />
  </main>

  <SiteFooter />
</template>
