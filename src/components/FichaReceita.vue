<script setup>
// Ficha técnica padrão de um método de preparo. Todos os campos são texto já
// formatado e opcionais (ex.: a moka não tem proporção fixa). Padrão de escrita:
// "20 g", "300 g" (água sempre em gramas), "1:15", "90 a 96 °C", "2:30 a 3:30".
// `rendimento` é a bebida que sai (ex.: espresso, concentrado do cold brew).
defineProps({
  cafe: { type: String, default: '' },
  agua: { type: String, default: '' },
  rendimento: { type: String, default: '' },
  proporcao: { type: String, default: '' },
  temperatura: { type: String, default: '' },
  moagem: { type: String, default: '' },
  tempo: { type: String, default: '' },
  indicado: { type: String, default: '' },
})
</script>

<template>
  <div class="ficha">
    <dl>
      <div v-if="cafe"><dt>Café</dt><dd>{{ cafe }}</dd></div>
      <div v-if="agua"><dt>Água</dt><dd>{{ agua }}</dd></div>
      <div v-if="rendimento"><dt>Rendimento</dt><dd>{{ rendimento }}</dd></div>
      <div v-if="proporcao"><dt>Proporção</dt><dd>{{ proporcao }}</dd></div>
      <div v-if="temperatura"><dt>Temperatura</dt><dd>{{ temperatura }}</dd></div>
      <div v-if="moagem"><dt>Moagem</dt><dd>{{ moagem }}</dd></div>
      <div v-if="tempo"><dt>Tempo total</dt><dd>{{ tempo }}</dd></div>
    </dl>
    <p v-if="indicado" class="indicado"><strong>Indicado para:</strong> {{ indicado }}</p>
  </div>
</template>

<style scoped>
.ficha {
  background: var(--cream);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 16px 18px;
  margin: 16px 0;
}
dl {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px 18px;
  margin: 0;
}
dt {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--roast-deep);
}
dd {
  margin: 2px 0 0;
  font-weight: 600;
}
.indicado {
  margin: 14px 0 0;
  font-size: 0.94rem;
}
</style>
