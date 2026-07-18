<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import AccordionItem from '../components/AccordionItem.vue'
</script>

<template>
  <SiteHeader current="historia" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">História</p>
      <h1>Da Etiópia à xícara em Minas.</h1>
      <p class="lede">[conteúdo aqui — parágrafo curto contextualizando a linha do tempo abaixo]</p>
    </section>

    <AdSlot />

    <section class="content-block wrap">
      <h2>Linha do tempo</h2>

      <!-- Ordem cronológica real, então a numeração faz sentido aqui -->
      <AccordionItem title="1 · Origem na Etiópia" :open-by-default="true">
        <p>[conteúdo aqui — lenda de Kaldi e as cabras, descoberta do café na região de Kaffa]</p>
      </AccordionItem>

      <AccordionItem title="2 · Expansão pelo mundo árabe">
        <p>[conteúdo aqui — Iêmen, Meca, primeiras casas de café]</p>
      </AccordionItem>

      <AccordionItem title="3 · Chegada à Europa">
        <p>[conteúdo aqui — cafés europeus, Veneza, Londres]</p>
      </AccordionItem>

      <AccordionItem title="4 · O café chega ao Brasil">
        <p>[conteúdo aqui — Francisco de Melo Palheta, Pará, expansão pelo Vale do Paraíba]</p>
      </AccordionItem>

      <AccordionItem title="5 · O café em Minas Gerais">
        <p>[conteúdo aqui — Sul de Minas, Cerrado Mineiro, Matas de Minas como regiões produtoras]</p>
      </AccordionItem>

      <AccordionItem title="6 · A onda do café especial">
        <p>[conteúdo aqui — terceira onda, torrefações artesanais, cafeterias de especialidade em BH]</p>
      </AccordionItem>
    </section>
  </main>

  <SiteFooter />
</template>
