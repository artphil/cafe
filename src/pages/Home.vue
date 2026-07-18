<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import Spotlight from '../components/Spotlight.vue'
</script>

<template>
  <SiteHeader current="home" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Bem-vindo</p>
      <h1>Café, sem enrolação.</h1>
      <p class="lede">[conteúdo aqui — parágrafo curto de abertura explicando a proposta do site: guia prático de café pra quem tá começando ou quer aprofundar, com destaque pras cafeterias de BH]</p>

      <Spotlight />
    </section>

    <AdSlot />

    <section class="content-block wrap">
      <h2>Explore por área</h2>
      <div class="area-grid">
        <a class="area-card" href="./historia.html">
          <span class="num">01</span>
          <h3>História</h3>
          <p>De onde vem o café e como ele chegou até a sua xícara.</p>
        </a>
        <a class="area-card" href="./metodos.html">
          <span class="num">02</span>
          <h3>Métodos de preparo</h3>
          <p>V60, prensa francesa, aeropress e outros, com proporção e dicas.</p>
        </a>
        <a class="area-card" href="./categorias.html">
          <span class="num">03</span>
          <h3>Categorias</h3>
          <p>Tipo de grão, torra e moagem — o que muda no sabor.</p>
        </a>
        <a class="area-card" href="./cafeterias.html">
          <span class="num">04</span>
          <h3>Cafeterias em BH</h3>
          <p>Recomendações e um espaço pra você sugerir novas.</p>
        </a>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>
