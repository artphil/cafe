<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import CafeGrid from '../components/CafeGrid.vue'
import { CAFES_FORM_URL } from '../data/cafes.js'

</script>

<template>
  <SiteHeader current="cafeterias" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Cafeterias</p>
      <h1>Café bom em Belo Horizonte.</h1>
      <p class="lede">Uma seleção de lugares conhecidos e recomendações da comunidade, escolhidos pela qualidade do
        café,
        cuidado no preparo e vontade de voltar.</p>
    </section>

    <section class="content-block wrap">
      <h2>Recomendadas</h2>
      <CafeGrid />

      <div class="form-embed">
        <h2>Conhece um lugar bom?</h2>
        <p>[conteúdo aqui — nota curta explicando que a sugestão passa por revisão antes de entrar na lista]</p>
        <iframe :src="CAFES_FORM_URL" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0"
          title="Formulário de sugestão de cafeteria" loading="lazy">Carregando formulário…</iframe>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>
