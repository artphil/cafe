<script setup>
import { reactive, ref, onMounted } from 'vue'
import { CAFES_API_URL } from '../data/cafes.js'

const CATEGORIAS = ['especialidade', 'torra própria', 'boa pra trabalhar', 'pet friendly', 'variedade de cafés']

const vazio = () => ({
  nome: '',
  bairro: '',
  endereco: '',
  maps_url: '',
  site: '',
  instagram: '',
  descricao: '',
  categoria: [],
  empresa: '', // isca para robôs: fica escondida e deve continuar vazia
})

const form = reactive(vazio())
const estado = ref('parado') // parado | enviando | ok | erro
const mensagem = ref('')
let inicio = 0

onMounted(() => {
  inicio = Date.now()
})

async function enviar() {
  if (!form.site.trim() && !form.instagram.trim()) {
    estado.value = 'erro'
    mensagem.value = 'Informe o site ou o Instagram do lugar.'
    return
  }
  estado.value = 'enviando'
  mensagem.value = ''
  try {
    // text/plain evita o pré-voo de CORS, que o Apps Script não responde
    const res = await fetch(CAFES_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ ...form, categoria: form.categoria.join(', '), tempo: Date.now() - inicio }),
    })
    const dados = await res.json()
    if (!dados.ok) {
      estado.value = 'erro'
      mensagem.value = dados.erro || 'Não foi possível enviar agora. Tente de novo em instantes.'
      return
    }
    Object.assign(form, vazio())
    estado.value = 'ok'
  } catch (e) {
    estado.value = 'erro'
    mensagem.value = 'Não foi possível enviar agora. Tente de novo em instantes.'
  }
}

function enviarOutra() {
  estado.value = 'parado'
  mensagem.value = ''
  inicio = Date.now()
}
</script>

<template>
  <div class="cafe-form">
    <h2>Conhece um lugar bom?</h2>
    <p>Sugira uma cafeteria para a nossa lista. Toda sugestão passa por revisão antes de ser publicada.</p>

    <div v-if="estado === 'ok'" class="sucesso" role="status">
      <p><strong>Sugestão enviada!</strong> Obrigado. Vamos analisar antes de publicar.</p>
      <button class="ap-button ap-button--outlined botao-sec" type="button" @click="enviarOutra">
        Sugerir outra
      </button>
    </div>

    <form v-else @submit.prevent="enviar">
      <div class="isca" aria-hidden="true">
        <label>Não preencha este campo
          <input v-model="form.empresa" type="text" tabindex="-1" autocomplete="off" />
        </label>
      </div>

      <div class="campo">
        <label for="cf-nome">Nome do lugar *</label>
        <input id="cf-nome" v-model="form.nome" type="text" required maxlength="80" autocomplete="off" />
      </div>

      <div class="linha">
        <div class="campo">
          <label for="cf-bairro">Bairro *</label>
          <input id="cf-bairro" v-model="form.bairro" type="text" required maxlength="60" autocomplete="off" />
        </div>
        <div class="campo">
          <label for="cf-endereco">Endereço *</label>
          <input id="cf-endereco" v-model="form.endereco" type="text" required maxlength="140"
            placeholder="Rua e número" autocomplete="off" />
        </div>
      </div>

      <div class="linha">
        <div class="campo">
          <label for="cf-site">Site</label>
          <input id="cf-site" v-model="form.site" type="url" maxlength="300" placeholder="https://" />
        </div>
        <div class="campo">
          <label for="cf-instagram">Instagram</label>
          <input id="cf-instagram" v-model="form.instagram" type="text" maxlength="300"
            placeholder="@nomedolugar ou link" />
        </div>
      </div>
      <p class="dica">Informe pelo menos um dos dois: site ou Instagram.</p>

      <div class="campo">
        <label for="cf-maps">Link do Google Maps (opcional)</label>
        <input id="cf-maps" v-model="form.maps_url" type="url" maxlength="300" placeholder="https://" />
      </div>

      <div class="campo">
        <label for="cf-descricao">Por que vale a visita? *</label>
        <textarea id="cf-descricao" v-model="form.descricao" required minlength="10" maxlength="300" rows="3"
          placeholder="Em 1 ou 2 frases: ambiente, o que servem, o que você gosta lá."></textarea>
      </div>

      <fieldset class="campo">
        <legend>Categorias (opcional)</legend>
        <div class="opcoes">
          <label v-for="c in CATEGORIAS" :key="c" class="opcao">
            <input v-model="form.categoria" type="checkbox" :value="c" />
            <span>{{ c }}</span>
          </label>
        </div>
      </fieldset>

      <button class="ap-button ap-button--filled botao" type="submit" :disabled="estado === 'enviando'">
        {{ estado === 'enviando' ? 'Enviando…' : 'Enviar sugestão' }}
      </button>

      <p v-if="estado === 'erro'" class="erro" role="alert">{{ mensagem }}</p>
    </form>
  </div>
</template>

<style scoped>
.cafe-form {
  margin-top: 30px;
  border: 1.5px dashed var(--ink);
  border-radius: var(--radius);
  padding: 20px;
  background: var(--cream);
}
.cafe-form h2 {
  margin-top: 0;
}
.campo {
  display: block;
  margin: 14px 0 0;
  padding: 0;
  border: 0;
  min-width: 0;
}
.campo label,
.campo legend {
  display: block;
  margin-bottom: 4px;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--roast-deep);
}
.campo input[type='text'],
.campo input[type='url'],
.campo textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  font: inherit;
  color: var(--ink);
  background: var(--paper);
  border: 1px solid var(--ink);
  border-radius: var(--radius);
}
.campo input:focus,
.campo textarea:focus {
  outline: 2px solid var(--roast);
  outline-offset: 1px;
}
.linha {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0 16px;
}
.dica {
  margin: 6px 0 0;
  font-size: 0.85rem;
  color: rgba(38, 21, 11, 0.75);
}
.opcoes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}
.opcao {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  text-transform: none;
  letter-spacing: 0;
  color: var(--ink);
}
.botao,
.botao-sec {
  --ap-btn-bg: var(--ink);
  --ap-btn-text: var(--paper);
  --ap-btn-size: var(--ap-spacing-sm) 16px;
  margin-top: 18px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.botao-sec {
  --ap-btn-text: var(--ink);
}
.erro {
  margin: 12px 0 0;
  color: #8a1c1c;
}
.sucesso p {
  margin: 12px 0 0;
}
/* isca: sai da tela, mas continua no DOM para o robô preencher */
.isca {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
