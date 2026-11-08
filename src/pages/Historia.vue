<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import IndiceArtigos from '../components/IndiceArtigos.vue'
</script>

<template>
  <SiteHeader current="historia" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">História</p>
      <h1>Da Etiópia à xícara em Minas.</h1>
      <p class="lede">
        Que viagem, né? O café saiu de uma rave de cabras na <strong>Etiópia</strong>, virou segredo de estado no
        <strong>Mundo Árabe</strong>, mudou a rotina da galera na <strong>Europa</strong> e entrou no
        <strong>Brasil</strong> num esquema de contrabando romântico. Mas foi nas montanhas e planaltos de <strong>Minas
          Gerais</strong> que ele encontrou o paraíso, evoluindo daquela lavoura tradicional para a bebida gourmet que a
        gente toma hoje, sem pressa e cheia de sabor. Uma verdadeira epopeia em uma xícara!
      </p>
    </section>

    <AdSlot slot="4895588662" format="auto" fullWidthResponsive />

    <IndiceArtigos secao="historia" titulo="Linha do tempo" />
  </main>

  <SiteFooter />
</template>
