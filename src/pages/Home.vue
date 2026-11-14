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
      <p class="lede">Um guia prático para entender café, preparar melhor em casa e descobrir boas cafeterias em Belo
        Horizonte — do primeiro gole às novas obsessões.</p>

      <Spotlight />
    </section>

    <AdSlot slot="3522108887" format="auto" fullWidthResponsive />

    <section class="content-block wrap">
      <h2>Café bom não precisa ser complicado</h2>
      <p>
        O Café Almanaque nasceu para juntar num lugar só o que ajuda a tomar um café melhor: entender o que está na xícara,
        preparar bem em casa e saber onde tomar um bom café em Belo Horizonte. Sem jargão e sem frescura, para quem
        está começando e para quem já tem suas manias.
      </p>

      <h2>Por onde começar</h2>
      <ul>
        <li><strong>Quer saber de onde o café vem?</strong> Vá para a <a href="./historia.html">História</a>, que sai da
          Etiópia e chega às montanhas de Minas.</li>
        <li><strong>Quer melhorar o café de casa?</strong> Os guias de <a href="./preparo.html">Preparo</a> trazem
          proporção e passo a passo. Um bom primeiro passo é o <a href="./v60.html">V60</a>.</li>
        <li><strong>Quer entender por que um café é mais ácido e outro mais encorpado?</strong> Em
          <a href="./saiba-mais.html">Saiba mais</a> estão os tipos de grão, as torras e as moagens.</li>
        <li><strong>Vai sair para tomar um café?</strong> Veja as <a href="./cafeterias.html">Cafeterias BH</a> e
          sugira as suas.</li>
      </ul>

      <h2>O que muda o sabor da xícara</h2>
      <p>
        O café que você faz depende de poucas coisas: o grão e a torra, a moagem, a proporção entre café e água e a
        temperatura da água. Mexer em uma de cada vez é o jeito mais rápido de aprender o que cada uma faz. Por isso os
        guias daqui sempre trazem uma receita de partida, para você ajustar ao seu gosto em vez de seguir regra
        decorada.
      </p>

      <h2>Quem está por trás</h2>
      <p>
        Os textos são escritos pelo Artphil com apoio de inteligência artificial e passam por revisão antes de ir para o
        ar. A lista de cafeterias é curada: entram lugares que ele conhece e recomenda, além de sugestões enviadas por
        você, analisadas antes de publicar. Para saber mais, passe pela página <a href="./sobre.html">Sobre</a>.
      </p>
    </section>

    <section class="content-block wrap">
      <h2>Explore por área</h2>
      <div class="area-grid">
        <a class="area-card" href="./historia.html">
          <span class="num">01</span>
          <h3>História</h3>
          <p>De onde vem o café e como ele chegou até a sua xícara.</p>
        </a>
        <a class="area-card" href="./preparo.html">
          <span class="num">02</span>
          <h3>Preparo</h3>
          <p>V60, prensa francesa, aeropress e outros, com proporção e dicas.</p>
        </a>
        <a class="area-card" href="./saiba-mais.html">
          <span class="num">03</span>
          <h3>Saiba mais</h3>
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
