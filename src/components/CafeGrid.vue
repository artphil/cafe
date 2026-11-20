<script setup>
import { ref, computed, inject, onMounted } from 'vue'
import { CAFES_API_URL, CAFES_FALLBACK } from '../data/cafes.js'

// Lista buscada na planilha durante o build (pré-renderização), se houver.
const iniciais = inject('cafesIniciais', null)

const cafes = ref(iniciais ?? [])

// Vocabulário de tags da planilha, por grupo. No card, as tags saem nessa ordem
// (experiência, comida, comodidade, ambiente) e só as primeiras MAX_TAGS aparecem.
const GRUPOS_TAGS = [
  ['métodos de extração', 'oficinas e degustações', 'chocolate quente'],
  ['doces', 'salgados', 'lanches', 'almoço', 'sem lactose', 'vegano'],
  ['pet friendly', 'área externa', 'wifi', 'bom para trabalhar', 'bom para grupos'],
  ['calmo', 'aconchegante', 'animado', 'familiar'],
]
const MAX_TAGS = 4

// Significado de cada tipo e de cada faixa de preço (legenda da página e `title` dos selos)
const TIPOS = {
  Especialidade: 'cafés selecionados e vários métodos de preparo',
  Tradicional: 'café coado de sempre, com boa oferta de comida',
  Colonial: 'mesa farta, em geral com self-service',
  'Padaria/Confeitaria': 'padaria ou confeitaria que serve bom café',
  'Bistrô/Brunch': 'refeições e brunch com café',
}
const PRECOS = {
  $: 'até R$ 20 por pessoa (1 café e 1 acompanhamento)',
  $$: 'de R$ 20 a 40 por pessoa',
  $$$: 'acima de R$ 40 por pessoa',
}

function posicaoDaTag(t) {
  const i = GRUPOS_TAGS.findIndex((g) => g.includes(t.toLowerCase()))
  return i === -1 ? GRUPOS_TAGS.length : i
}

function normalizar(c) {
  // Sem `maps_url`, o link do mapa vira uma busca pelo nome e endereço
  const mapsUrl =
    c.maps_url ||
    (c.endereco
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.nome} ${c.endereco} Belo Horizonte`)}`
      : '')

  return {
    nome: c.nome,
    endereco: c.endereco ?? '',
    bairro: c.bairro ?? '',
    mapsUrl,
    site: c.site ?? '',
    instagram: c.instagram ?? '',
    descricao: c.descricao ?? '',
    destaque: c.destaque ?? '',
    preco: c.preco ?? '',
    tipo: c.tipo ?? '',
    // `tags`: separadas por vírgula; ordena por grupo e limita a MAX_TAGS
    tags: String(c.tags ?? '')
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t && !t.startsWith('['))
      .map((t, i) => ({ t, i }))
      .sort((a, b) => posicaoDaTag(a.t) - posicaoDaTag(b.t) || a.i - b.i)
      .slice(0, MAX_TAGS)
      .map(({ t }) => t),
    links: [
      ['Site', c.site],
      ['Instagram', c.instagram],
      ['Mapa', mapsUrl],
    ].filter(([, url]) => url),
  }
}

// A API já devolve só linhas publicadas e só as colunas públicas; o filtro de status
// vale para o fallback e para dados sem a coluna.
const lista = computed(() =>
  cafes.value
    .filter((c) => !c.status || String(c.status).trim().toLowerCase() === 'publicada')
    .map(normalizar),
)


// Só os tipos que aparecem nos cards, na ordem da lista
const tiposNaLista = computed(() => [...new Set(lista.value.map((c) => c.tipo).filter((t) => TIPOS[t]))])
const origem = ref(iniciais ? 'planilha' : 'carregando') // 'carregando' | 'planilha' | 'fallback'

async function carregar() {
  try {
    const res = await fetch(CAFES_API_URL)
    if (!res.ok) throw new Error(`Planilha indisponível (status ${res.status})`)
    const dados = await res.json()
    if (!Array.isArray(dados) || dados.length === 0) throw new Error('Sem dados na planilha')
    // Colunas esperadas: ver spec 03
    cafes.value = dados
    origem.value = 'planilha'
  } catch (err) {
    if (iniciais) {
      console.warn('[CafeGrid] mantendo a lista do build — motivo:', err)
      return
    }
    console.warn('[CafeGrid] usando dados de exemplo — motivo:', err)
    cafes.value = CAFES_FALLBACK
    origem.value = 'fallback'
  }
}

onMounted(() => {
  carregar().catch((err) => console.error('[CafeGrid] erro inesperado:', err))
})
</script>

<template>
  <p class="cafe-state">
    <template v-if="origem === 'carregando'">Carregando cafeterias…</template>
    <template v-else-if="origem === 'planilha'">
      {{ lista.length }} cafeterias recomendadas.
    </template>
    <template v-else>Mostrando dados de exemplo (fonte indisponível).</template>
  </p>

  <div class="cafe-legenda" v-if="origem !== 'carregando'">
    <p>
      <strong>Preço por pessoa</strong> (1 café e 1 acompanhamento): <strong>$</strong> até R$ 20,
      <strong>$$</strong> de R$ 20 a 40, <strong>$$$</strong> acima de R$ 40.
    </p>
    <p v-if="tiposNaLista.length">
      <strong>Tipo: </strong>
      <template v-for="(t, i) in tiposNaLista" :key="t">
        <template v-if="i > 0">; </template><strong>{{ t }}</strong>, {{ TIPOS[t] }}</template>.
    </p>
  </div>

  <div class="cafe-grid">
    <article class="cafe-card" v-for="c in lista" :key="c.nome">
      <h3>{{ c.nome }}</h3>
      <p class="addr">{{ c.endereco }}<template v-if="c.bairro"> · {{ c.bairro }}</template></p>
      <div class="tag-row" v-if="c.tipo || c.tags.length || c.preco">
        <span v-if="c.tipo" class="tag tipo" :title="TIPOS[c.tipo]">{{ c.tipo }}</span>
        <span v-if="c.preco" class="tag roast" :title="PRECOS[c.preco]">{{ c.preco }}</span>
        <span v-for="t in c.tags" :key="t" class="tag leaf">{{ t }}</span>
      </div>
      <p class="desc" v-if="c.descricao">{{ c.descricao }}</p>
      <p class="desc" v-if="c.destaque"><strong>Destaque:</strong> {{ c.destaque }}</p>
      <template v-for="([rotulo, url], i) in c.links" :key="rotulo">
        <span v-if="i > 0"> / </span>
        <a class="site-link" :href="url" target="_blank" rel="noopener">{{ rotulo }}</a>
      </template>
    </article>
  </div>
</template>
