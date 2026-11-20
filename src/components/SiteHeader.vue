<script setup>
// `current` indica qual item do menu recebe aria-current="page".
// Valores possíveis: 'home' | 'historia' | 'preparo' | 'saiba-mais' | 'cafeterias' | 'sobre' | 'contato' | 'privacidade'
defineProps({
  current: { type: String, required: true }
})
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <!-- Telas largas mostram a logo completa; no celular, símbolo mais o nome em texto.
           O nome continua no HTML (oculto só visualmente na versão com logo). -->
      <a class="brand" href="./index.html" aria-label="Café Almanaque, início">
        <img class="brand-logo" src="/img/marca/logo-cafe-almanaque.svg" alt="" width="149" height="80" />
        <img class="brand-simbolo" src="/favicon.svg" alt="" width="46" height="46" />
        <span>
          <span class="brand-name">Café Almanaque</span>
          <span class="brand-tag">O seu guia de café</span>
        </span>
      </a>
      <nav class="main-nav" aria-label="Navegação principal">
        <ul>
          <li><a href="./index.html" :aria-current="current === 'home' ? 'page' : null">Início</a></li>
          <li><a href="./historia.html" :aria-current="current === 'historia' ? 'page' : null">História</a></li>
          <li><a href="./preparo.html" :aria-current="current === 'preparo' ? 'page' : null">Preparo</a></li>
          <li><a href="./saiba-mais.html" :aria-current="current === 'saiba-mais' ? 'page' : null">Saiba mais</a></li>
          <li><a href="./cafeterias.html" :aria-current="current === 'cafeterias' ? 'page' : null">Cafeterias BH</a>
          </li>
          <li><a href="./sobre.html" :aria-current="current === 'sobre' ? 'page' : null">Sobre</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
