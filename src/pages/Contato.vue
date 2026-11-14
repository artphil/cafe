<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <SiteHeader current="contato" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Contato</p>
      <h1>Fale com o Café Almanaque</h1>
      <p class="lede">
        Achou um erro, tem uma dúvida ou quer indicar uma cafeteria? Manda um e-mail.
      </p>
    </section>

    <section class="content-block wrap">
      <h2>E-mail</h2>
      <p>
        <a href="mailto:artphil.dev@gmail.com">artphil.dev@gmail.com</a>
      </p>

      <h2>Para que usar</h2>
      <ul>
        <li><strong>Correções:</strong> viu alguma informação errada ou desatualizada? Avise e eu corrijo.</li>
        <li><strong>Dúvidas:</strong> sobre café, sobre o conteúdo do site ou sobre a política de privacidade.</li>
        <li><strong>Cafeterias:</strong> para sugerir um lugar, use o formulário da página de
          <a href="./cafeterias.html">Cafeterias BH</a>. Se for um fechamento ou mudança de endereço, o e-mail é o
          caminho.</li>
        <li><strong>Privacidade:</strong> pedidos sobre seus dados, conforme a
          <a href="./privacidade.html">Política de Privacidade</a>.</li>
      </ul>
    </section>
  </main>

  <SiteFooter />
</template>
