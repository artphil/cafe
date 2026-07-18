<script setup>
// `current` indica qual item do menu recebe aria-current="page".
// Valores possíveis: 'home' | 'historia' | 'metodos' | 'categorias' | 'cafeterias'
defineProps({
  current: { type: String, required: true }
})
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="./index.html">
        <span class="brand-mark">GC</span>
        <span>
          <span class="brand-name">Grão Café</span>
          <span class="brand-tag">guia de café · BH</span>
        </span>
      </a>
      <nav class="main-nav" aria-label="Navegação principal">
        <ul>
          <li><a href="./index.html" :aria-current="current === 'home' ? 'page' : null">Início</a></li>
          <li><a href="./historia.html" :aria-current="current === 'historia' ? 'page' : null">História</a></li>
          <li><a href="./metodos.html" :aria-current="current === 'metodos' ? 'page' : null">Métodos</a></li>
          <li><a href="./categorias.html" :aria-current="current === 'categorias' ? 'page' : null">Categorias</a></li>
          <li><a href="./cafeterias.html" :aria-current="current === 'cafeterias' ? 'page' : null">Cafeterias BH</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
