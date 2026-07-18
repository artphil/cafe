<script setup>
import { ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import AccordionItem from '../components/AccordionItem.vue'
import BaseModal from '../components/BaseModal.vue'

const modalMoagem = ref(null)
</script>

<template>
  <SiteHeader current="categorias" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Categorias</p>
      <h1>Grão, torra e moagem.</h1>
      <p class="lede">[conteúdo aqui — parágrafo curto explicando que essas três variáveis juntas definem o sabor final do café]</p>
    </section>

    <AdSlot />

    <section class="content-block wrap">
      <h2>Tipo de grão</h2>
      <AccordionItem title="Arábica" :open-by-default="true">
        <p>[conteúdo aqui — características do arábica: mais doçura e acidez, cultivo em altitude]</p>
      </AccordionItem>
      <AccordionItem title="Robusta (Conilon)">
        <p>[conteúdo aqui — características do robusta: mais corpo e cafeína, cultivo em baixa altitude]</p>
      </AccordionItem>

      <h2 style="margin-top:36px;">Processamento</h2>
      <AccordionItem title="Natural">
        <p>[conteúdo aqui — processamento natural]</p>
      </AccordionItem>
      <AccordionItem title="Lavado">
        <p>[conteúdo aqui — processamento lavado]</p>
      </AccordionItem>
      <AccordionItem title="Cereja descascado / Honey">
        <p>[conteúdo aqui — processamento honey]</p>
      </AccordionItem>
    </section>

    <section class="content-block wrap">
      <h2>Torra</h2>
      <p>[conteúdo aqui — parágrafo curto sobre o que a torra muda no sabor]</p>

      <!-- Selo de torra: elemento de assinatura visual do site -->
      <div class="roast-gauge">
        <div class="roast-dial clara">Torra<br>clara</div>
        <div class="roast-dial media">Torra<br>média</div>
        <div class="roast-dial escura">Torra<br>escura</div>
      </div>

      <AccordionItem title="Torra clara">
        <p>[conteúdo aqui — mais acidez, notas florais/frutadas, realça a origem do grão]</p>
      </AccordionItem>
      <AccordionItem title="Torra média">
        <p>[conteúdo aqui — equilíbrio entre acidez e corpo, mais versátil]</p>
      </AccordionItem>
      <AccordionItem title="Torra escura">
        <p>[conteúdo aqui — mais amargor e corpo, notas de chocolate/caramelizado]</p>
      </AccordionItem>

      <button class="detail-btn" type="button" @click="modalMoagem.open()">Ver tabela de moagem por método ↗</button>
    </section>
  </main>

  <BaseModal ref="modalMoagem" title="Moagem ideal por método">
    <p>[conteúdo aqui — tabela relacionando granulometria (fina/média/grossa) com cada método de preparo, com link pra página de métodos]</p>
  </BaseModal>

  <SiteFooter />
</template>
