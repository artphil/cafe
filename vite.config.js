import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],

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
        metodos: resolve(__dirname, 'metodos.html'),
        categorias: resolve(__dirname, 'categorias.html'),
        cafeterias: resolve(__dirname, 'cafeterias.html'),
      }
    }
  }
})
