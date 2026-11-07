<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    O cold brew é o café feito com água fria e muito tempo. Em vez de usar água quente por poucos minutos, você deixa
    o café em infusão na geladeira por muitas horas. Sem calor, a extração é lenta e suave: a bebida costuma ter pouca
    acidez percebida, sabor arredondado e um toque doce, o que cai muito bem em dias quentes.
  </p>
  <p>
    Não confunda com café gelado comum, que é um café quente servido sobre gelo. No cold brew, a água nunca esquenta.
    A receita é simples e dá pouco trabalho: o que ela pede é paciência.
  </p>

  <h2>Receita de partida</h2>
  <p>
    Esta receita faz um <strong>concentrado</strong>, que você dilui na hora de servir. Rende cerca de 600 ml.
  </p>
  <FichaReceita cafe="100 g" agua="800 g" proporcao="1:8 (concentrado)"
    temperatura="Água filtrada, fria ou em temperatura ambiente; infusão na geladeira" moagem="Grossa"
    tempo="12 a 18 horas" indicado="dias quentes e quem prefere pouca acidez percebida" />

  <h2>O que você vai precisar</h2>
  <ul>
    <li><strong>Jarra ou pote com tampa</strong>, de vidro de preferência.</li>
    <li><strong>Balança</strong>, para medir café e água em gramas.</li>
    <li><strong>Moedor</strong>, para uma moagem grossa e uniforme.</li>
    <li><strong>Água filtrada</strong>, porque o sabor da água aparece muito em uma infusão tão longa.</li>
    <li><strong>Filtro para coar</strong>: papel, pano ou uma peneira bem fina.</li>
    <li><strong>Espaço na geladeira</strong> para a infusão.</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Moa 100 g de café</strong> em moagem grossa e coloque na jarra.</li>
    <li><strong>Adicione 800 g de água filtrada</strong> e mexa para molhar todo o pó.</li>
    <li><strong>Tampe e leve à geladeira</strong> por 12 a 18 horas.</li>
    <li><strong>Coe lentamente</strong> em filtro de papel, pano ou peneira bem fina. Evite apertar o pó.</li>
    <li><strong>Sirva com gelo.</strong> Para um copo mais leve, misture uma parte de concentrado com uma parte de água
      ou leite.</li>
  </ol>
  <p>Algumas dicas para esse preparo:</p>
  <ul>
    <li>Guarde o concentrado tampado na geladeira por até 5 dias.</li>
    <li>Para beber sem diluir, comece com a proporção 1:12, por exemplo 80 g de café para 960 g de água.</li>
    <li>Quanto mais fino o filtro, mais limpa a bebida; o papel deixa uma xícara mais clara e sem borra.</li>
  </ul>

  <h2>Como ajustar o gosto</h2>
  <h3>Ficou fraco ou aguado</h3>
  <p>
    Faltou extração ou concentração. Deixe em infusão por mais algumas horas (sem passar de 24), use uma moagem um
    pouco mais fina ou diminua a diluição na hora de servir.
  </p>
  <h3>Ficou amargo ou amadeirado</h3>
  <p>
    Infusões longas demais tendem a deixar o resultado amadeirado. Reduza o tempo, deixe a moagem mais grossa e confira
    se o café estava fresco.
  </p>
  <h3>Ficou turvo ou com borra</h3>
  <p>
    A moagem estava fina demais ou o filtro foi muito aberto. Moa mais grosso e passe o café por um filtro de papel
    para uma bebida mais limpa.
  </p>
  <h3>Ficou forte demais</h3>
  <p>
    O concentrado é forte de propósito. Dilua com mais água, leite ou gelo até chegar ao ponto que você gosta, sem
    precisar mudar a receita.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Usar moagem fina, que deixa o cold brew turvo e amargo.</li>
    <li>Passar de 24 horas de infusão sem perceber.</li>
    <li>Deixar a jarra fora da geladeira por muito tempo.</li>
    <li>Coar com pressa e apertando o pó, o que passa partículas finas para a bebida.</li>
    <li>Guardar o concentrado por muitos dias além do prazo, perdendo sabor e segurança.</li>
  </ul>
</template>
