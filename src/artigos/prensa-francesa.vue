<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    A prensa francesa é um dos jeitos mais simples de fazer café: você coloca o pó e a água juntos, espera e pressiona
    o êmbolo. Como o café fica em contato direto com a água e o filtro é de metal, passam para a xícara mais óleos e
    partículas finas que no coador de papel. O resultado é uma bebida mais encorpada e de textura mais cheia.
  </p>
  <p>
    Ela é ótima para quem gosta de café com corpo, não quer comprar muita coisa e prefere um preparo em que a técnica
    de despejo importa menos que o tempo.
  </p>

  <h2>Receita de partida</h2>
  <p>Para uma jarra de cerca de 350 ml, que rende uma ou duas xícaras.</p>
  <FichaReceita cafe="30 g" agua="360 g" proporcao="1:12" temperatura="90 a 95 °C"
    moagem="Grossa (parecida com sal grosso)" tempo="Cerca de 5:00"
    indicado="quem gosta de café mais encorpado, com textura e poucos equipamentos" />

  <h2>O que você vai precisar</h2>
  <ul>
    <li><strong>Prensa francesa</strong>, de vidro, inox ou cerâmica.</li>
    <li><strong>Balança</strong> com cronômetro, para medir café, água e o tempo de infusão.</li>
    <li><strong>Chaleira</strong> para esquentar a água.</li>
    <li><strong>Moedor</strong> que faça moagem grossa e uniforme. Moedor de lâminas costuma gerar muito pó fino, que
      escapa pelo filtro e deixa borra.</li>
    <li><strong>Colher</strong> de madeira ou plástico, para não bater no vidro.</li>
    <li><strong>Jarra ou garrafa térmica</strong> para passar o café depois de pronto.</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Aqueça a prensa</strong> com um pouco de água quente e descarte essa água. Assim a temperatura não cai
      logo no começo.</li>
    <li><strong>Adicione 30 g de café</strong> moído grosso e zere a balança.</li>
    <li><strong>Despeje 360 g de água</strong> entre 90 e 95 °C, cobrindo todo o café, e inicie o cronômetro.</li>
    <li><strong>Mexa uma vez</strong>, coloque a tampa sem abaixar o êmbolo e aguarde 4 minutos.</li>
    <li><strong>Pressione o êmbolo lentamente</strong> até o fundo e sirva em seguida.</li>
  </ol>
  <p>Duas dicas importantes:</p>
  <ul>
    <li>Transfira o café que sobrar para outra jarra. Enquanto estiver na prensa, ele continua extraindo e fica
      amargo.</li>
    <li>Funciona muito bem com cafés de notas achocolatadas e caramelizadas.</li>
  </ul>

  <h2>Como ajustar o gosto</h2>
  <h3>Ficou amargo ou pesado</h3>
  <p>
    Extração demais. Deixe a moagem mais grossa, reduza a infusão para uns 3 minutos e sirva logo em vez de deixar o
    café na prensa.
  </p>
  <h3>Ficou fraco ou aguado</h3>
  <p>
    Faltou extração. Moa um pouco mais fino, ou aumente a infusão em 30 segundos, ou use uma proporção mais forte, como
    1:11.
  </p>
  <h3>Há muita borra na xícara</h3>
  <p>
    Moa mais grosso e pressione com menos força. Uma parte da borra fina é normal nesse método, mas o excesso costuma
    vir de moagem desigual ou de pressão forte demais.
  </p>
  <h3>Ficou sem corpo</h3>
  <p>
    A prensa já rende uma xícara encorpada. Se ainda assim faltar, confira se a moagem não está grossa demais e se a
    água estava quente o bastante.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Moer fino, o que amarga o café e dificulta a pressão do êmbolo.</li>
    <li>Deixar o café parado na prensa depois de pressionar.</li>
    <li>Pressionar com força e rápido.</li>
    <li>Usar água fervendo ou com a prensa fria, o que desequilibra a extração.</li>
    <li>Não medir o tempo e deixar a infusão passar dos 4 minutos sem perceber.</li>
  </ul>
</template>
