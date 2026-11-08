<script setup>
import { ref, onMounted } from 'vue'

// Botões de compartilhar. O endereço é lido no clique (window.location), então
// funciona em qualquer domínio. O compartilhamento nativo (celular) só aparece
// depois de montar, para o HTML pré-renderizado e o do navegador serem iguais.
const props = defineProps({
  titulo: { type: String, required: true },
  descricao: { type: String, default: '' },
})

const temNativo = ref(false)
const aviso = ref('')

onMounted(() => {
  temNativo.value = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
})

function mostrarAviso(texto) {
  aviso.value = texto
  setTimeout(() => (aviso.value = ''), 2500)
}

async function compartilhar() {
  try {
    await navigator.share({ title: props.titulo, text: props.descricao, url: window.location.href })
  } catch (e) {
    // o usuário cancelou o compartilhamento: nada a fazer
  }
}

function whatsapp() {
  const texto = encodeURIComponent(`${props.titulo} ${window.location.href}`)
  window.open(`https://wa.me/?text=${texto}`, '_blank', 'noopener')
}

async function copiar() {
  try {
    await navigator.clipboard.writeText(window.location.href)
    mostrarAviso('Link copiado!')
  } catch (e) {
    mostrarAviso('Não foi possível copiar. Copie o endereço da barra do navegador.')
  }
}
</script>

<template>
  <section class="content-block wrap compartilhar">
    <h2>Gostou? Compartilhe</h2>
    <div class="botoes">
      <button v-if="temNativo" class="ap-button ap-button--filled botao" type="button" @click="compartilhar">
        Compartilhar
      </button>
      <button class="ap-button ap-button--outlined botao" type="button" @click="whatsapp">WhatsApp</button>
      <button class="ap-button ap-button--outlined botao" type="button" @click="copiar">Copiar link</button>
    </div>
    <p class="aviso" role="status" aria-live="polite">{{ aviso }}</p>
  </section>
</template>

<style scoped>
.botoes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}
.botao {
  --ap-btn-bg: var(--ink);
  --ap-btn-text: var(--paper);
  --ap-btn-size: var(--ap-spacing-sm) 14px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.aviso {
  min-height: 1.4em;
  margin: 10px 0 0;
  font-size: 0.9rem;
  color: var(--roast-deep);
}
</style>
