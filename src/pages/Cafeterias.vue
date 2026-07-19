<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import CafeGrid from '../components/CafeGrid.vue'
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
        <!-- Troque o src abaixo pelo link de incorporação (embed) do seu Google Forms -->
        <iframe src="https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform?embedded=true"
          title="Formulário de sugestão de cafeteria" loading="lazy">Carregando formulário…</iframe>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>
