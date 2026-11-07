<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    Café coado é o jeito mais tradicional de fazer café no Brasil: água quente despejada aos poucos sobre o pó, dentro
    de um filtro, caindo direto na garrafa ou na jarra. Dá para fazer com um coador de pano ou com um filtro de papel
    (aquele de suporte plástico ou de porcelana, que muita gente chama de Melitta). A técnica é a mesma; o que muda é o
    filtro, e com ele o corpo e a limpeza da xícara.
  </p>

  <h2>Pano ou papel: o que muda</h2>
  <ul>
    <li><strong>Pano:</strong> deixa passar mais óleos do café, o que dá uma xícara mais encorpada e sem o sabor
      residual do papel. É reutilizável, mas pede cuidado na limpeza.</li>
    <li><strong>Papel:</strong> retém mais óleos e partículas finas, então a xícara fica mais limpa e leve. É prático,
      descartável e não exige manutenção.</li>
  </ul>
  <p>
    A receita de partida abaixo serve para os dois. Escolha pelo gosto: mais corpo no pano, mais limpeza no papel.
  </p>

  <h2>Receita de partida</h2>
  <p>Para uma garrafa pequena ou duas xícaras generosas.</p>
  <FichaReceita cafe="25 g" agua="300 g" proporcao="1:12" temperatura="90 a 95 °C" moagem="Média"
    tempo="3:00 a 4:00" indicado="uma xícara tradicional, afetiva e encorpada" />

  <h2>O que você vai precisar</h2>
  <ul>
    <li><strong>Coador de pano</strong> com suporte, ou <strong>suporte para filtro de papel</strong> (Melitta) e
      filtros no tamanho do seu suporte.</li>
    <li><strong>Garrafa ou jarra</strong> para receber o café.</li>
    <li><strong>Balança</strong>, para medir café e água em gramas.</li>
    <li><strong>Chaleira</strong>, de preferência com bico que permita despejar devagar.</li>
    <li><strong>Moedor</strong>, para moer o café na hora em moagem média.</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Prepare o filtro.</strong> No pano, escalde o coador e a garrafa com água quente. No papel, encaixe o
      filtro no suporte e enxágue com água quente.</li>
    <li><strong>Coloque 25 g de café</strong> moído médio e zere a balança.</li>
    <li><strong>Faça o bloom:</strong> despeje cerca de 60 g de água, molhando todo o pó, e espere uns 30 segundos.
    </li>
    <li><strong>Despeje os 240 g restantes</strong>, chegando a 300 g, em movimentos lentos e circulares.</li>
    <li><strong>Espere terminar de coar</strong> e sirva.</li>
  </ol>

  <h2>Cuidados com o coador de pano</h2>
  <p>
    O pano exige mais atenção que o papel, e é aí que ele ganha ou perde. Alguns hábitos ajudam:
  </p>
  <ul>
    <li>Lave somente com água, sem sabão, que deixa gosto no café.</li>
    <li>Guarde úmido na geladeira, em recipiente fechado, para o pano não ressecar nem pegar cheiro.</li>
    <li>Não deixe borra no pano depois do preparo.</li>
    <li>Troque o pano quando estiver muito manchado, com cheiro ou coando devagar demais.</li>
  </ul>

  <h2>Como ajustar o gosto</h2>
  <h3>O café coa devagar demais</h3>
  <p>
    Um fluxo muito lento pede moagem mais grossa. Isso vale para o pano e para o papel, e também ajuda quando o filtro
    está entupido.
  </p>
  <h3>O café coa rápido demais</h3>
  <p>
    Se o fluxo está muito rápido, a moagem está grossa. Moa mais fino, aos poucos.
  </p>
  <h3>Ficou amargo ou seco</h3>
  <p>
    Extração demais. Deixe a moagem um pouco mais grossa, use a água um pouco mais fria ou despeje mais rápido.
  </p>
  <h3>Ficou fraco ou aguado</h3>
  <p>
    Faltou extração. Moa um pouco mais fino, ou use uma proporção mais forte, como 1:11, ou despeje com mais calma.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Pular o escaldar do pano ou o enxágue do papel.</li>
    <li>Lavar o pano com sabão ou deixá-lo seco e com borra.</li>
    <li>Despejar a água de uma vez só, sem o bloom e sem controle.</li>
    <li>Usar água fervendo direto da chaleira, que amarga o café.</li>
    <li>Trocar moagem, proporção e temperatura ao mesmo tempo e não saber o que melhorou.</li>
  </ul>
</template>
