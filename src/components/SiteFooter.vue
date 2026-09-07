<script setup lang="ts">
import AdSlot from './AdSlot.vue';

</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-top">
        <div>
          <span class="brand-name" style="font-size:1.1rem;">Café BH</span>
          <p class="footer-note">Um guia prático para conhecer melhor o café.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <ul
            style="list-style:none; padding:0; margin:0; font-family: var(--font-mono); font-size:0.8rem; line-height:2;">
            <li><a href="./historia.html">História</a></li>
            <li><a href="./metodos.html">Métodos</a></li>
            <li><a href="./categorias.html">Categorias</a></li>
            <li><a href="./cafeterias.html">Cafeterias BH</a></li>
          </ul>
        </nav>
      </div>

      <!-- Anúncio fixo do rodapé — presente em todas as páginas -->
      <AdSlot slot="4620256495" format="auto" fullWidthResponsive :slotClass="'ad-footer'" />
      <div class="footer-author">
        by <a href="https://artphil.github.io" target="_blank" rel="noopener">Artphil</a>
      </div>
    </div>
  </footer>
</template>
