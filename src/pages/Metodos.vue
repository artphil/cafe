<script setup>
import { ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import AccordionItem from '../components/AccordionItem.vue'
import BaseModal from '../components/BaseModal.vue'

const modalComparativo = ref(null)
</script>

<template>
  <SiteHeader current="metodos" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Métodos de preparo</p>
      <h1>Escolha o método certo pra você.</h1>
      <p class="lede">[conteúdo aqui — parágrafo curto: cada método muda o corpo, acidez e praticidade do café. Toque em cada um pra ver o passo a passo, e no botão "Comparar" pra ver as diferenças lado a lado]</p>
    </section>

    <AdSlot />

    <section class="content-block wrap">
      <h2>Guias por método</h2>

      <AccordionItem title="V60">
        <p>[conteúdo aqui — passo a passo do V60]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:15</span>
          <span class="tag leaf">Moagem média-fina</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Aeropress">
        <p>[conteúdo aqui — passo a passo do Aeropress]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:14</span>
          <span class="tag leaf">Moagem fina</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Prensa francesa">
        <p>[conteúdo aqui — passo a passo da prensa francesa]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:12</span>
          <span class="tag leaf">Moagem grossa</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Coador de pano">
        <p>[conteúdo aqui — passo a passo do coador de pano]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:12</span>
          <span class="tag leaf">Moagem média</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Moka (cafeteira italiana)">
        <p>[conteúdo aqui — passo a passo da moka]</p>
        <div class="tag-row">
          <span class="tag roast">Sem proporção fixa — enche o reservatório</span>
          <span class="tag leaf">Moagem média-fina</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Cold brew">
        <p>[conteúdo aqui — passo a passo do cold brew]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:8 (concentrado)</span>
          <span class="tag leaf">Moagem grossa · infusão 12-24h</span>
        </div>
      </AccordionItem>

      <button class="detail-btn" type="button" @click="modalComparativo.open()">Comparar métodos ↗</button>
    </section>
  </main>

  <BaseModal ref="modalComparativo" title="Qual método combina com você">
    <p>[conteúdo aqui — tabela ou lista curta comparando rapidez, equipamento necessário e perfil de sabor de cada método, pra ajudar a escolher]</p>
  </BaseModal>

  <SiteFooter />
</template>
