<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <SiteHeader current="sobre" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Sobre</p>
      <h1>Sobre o Café BH</h1>
      <p class="lede">
        Um guia prático para conhecer melhor o café, feito por quem gosta de café.
      </p>
    </section>

    <section class="content-block wrap">
      <h2>Quem faz</h2>
      <p>
        O Café BH é um projeto pessoal do <strong>Artphil</strong>. A ideia foi juntar num lugar só o que a gente vai
        aprendendo sobre café: de onde ele vem, como preparar melhor em casa e onde tomar um bom café em Belo
        Horizonte.
      </p>

      <h2>Para quem é</h2>
      <p>
        Para quem está começando e para quem já é entusiasta. O tom é casual, sem jargão desnecessário e sem fazer
        ninguém se sentir de fora da conversa. Você não precisa de equipamento caro nem de vocabulário de barista. As
        páginas têm seções que abrem e fecham, para você ir direto ao que interessa sem se perder em textão.
      </p>

      <h2>O que você encontra por aqui</h2>
      <ul>
        <li><a href="./historia.html">História</a>: da Etiópia até as montanhas de Minas.</li>
        <li><a href="./metodos.html">Métodos</a>: como preparar café de formas diferentes, com o que você tiver em
          casa.</li>
        <li><a href="./saiba-mais.html">Saiba mais</a>: tipos de grão, torras e moagens.</li>
        <li><a href="./cafeterias.html">Cafeterias BH</a>: uma lista de lugares para tomar café na cidade.</li>
      </ul>

      <h2>Como o conteúdo é produzido</h2>
      <p>
        Os textos são escritos pelo Artphil com apoio de inteligência artificial. A IA ajuda a pesquisar, organizar e
        montar os rascunhos, e tudo passa por revisão antes de ir para o ar. Mesmo assim, algum erro pode escapar. Se
        você notar algo errado, é só avisar.
      </p>
      <p>
        A lista de cafeterias é curada. Entram lugares que o Artphil conhece e recomenda, além de sugestões enviadas
        pelo formulário da página de cafeterias, que são analisadas antes de serem publicadas.
      </p>

      <h2>Anúncios</h2>
      <p>
        O site exibe anúncios do Google AdSense para ajudar a manter o projeto. Os anúncios não influenciam o que é
        escrito nem quais cafeterias entram na lista. Para saber como cookies e dados são tratados, veja a
        <a href="./privacidade.html">Política de Privacidade</a>.
      </p>

      <h2>Fale com a gente</h2>
      <p>
        Dúvidas, correções ou sugestões de cafeteria? Passe na página de <a href="./contato.html">Contato</a>.
      </p>
    </section>
  </main>

  <SiteFooter />
</template>
