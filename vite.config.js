import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { artigosHtml, entradasArtigos } from './scripts/vite-plugin-artigos.js'

export default defineConfig({
  plugins: [vue(), artigosHtml(__dirname)],

  // Importante para GitHub Pages: se o site ficar em
  // https://seu-usuario.github.io/nome-do-repositorio/
  // troque './' por '/nome-do-repositorio/'
  base: './',

  build: {
    rollupOptions: {
      // Cada chave vira um HTML real e separado no build (pasta dist/),
      // sem router e sem carregamento client-side de conteúdo.
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        preparo: resolve(__dirname, 'preparo.html'),
        'saiba-mais': resolve(__dirname, 'saiba-mais.html'),
        cafeterias: resolve(__dirname, 'cafeterias.html'),
        sobre: resolve(__dirname, 'sobre.html'),
        contato: resolve(__dirname, 'contato.html'),
        privacidade: resolve(__dirname, 'privacidade.html'),
        // Artigos: páginas geradas a partir de src/data/artigos.js
        ...entradasArtigos(__dirname),
      }
    }
  }
})
