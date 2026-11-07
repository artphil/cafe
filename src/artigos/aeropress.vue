<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    A Aeropress é um dos jeitos mais práticos de fazer um café de verdade: rápida, leve, difícil de quebrar e fácil de
    levar na mochila. Ela mistura infusão e pressão, o que dá uma xícara limpa e doce em poucos minutos, e aceita
    muita experimentação. Lançada em 2005 pela empresa americana Aerobie, virou queridinha de quem viaja e de quem
    gosta de testar receitas.
  </p>
  <p>
    Se você quer uma bebida limpa e rápida, sem a técnica de despejo do V60, ela é um ótimo começo.
  </p>

  <h2>Receita de partida</h2>
  <p>Uma xícara, na receita tradicional, com a Aeropress em pé sobre a caneca.</p>
  <FichaReceita cafe="15 g" agua="210 g" proporcao="1:14" temperatura="85 a 90 °C" moagem="Fina"
    tempo="Cerca de 2:00"
    indicado="uma xícara limpa, doce e rápida, com bastante margem para testar" />

  <h2>O que você vai precisar</h2>
  <ul>
    <li><strong>Aeropress</strong>, com a tampa e o êmbolo que vêm no kit.</li>
    <li><strong>Filtros de papel</strong> para a tampa. Existe também filtro metálico, que deixa mais corpo.</li>
    <li><strong>Balança</strong> com cronômetro, para medir café e água em gramas.</li>
    <li><strong>Chaleira</strong> e um termômetro, ou o hábito de esperar a água baixar um pouco depois de ferver.</li>
    <li><strong>Moedor</strong>, para moer o café na hora.</li>
    <li><strong>Caneca resistente</strong>, porque você vai apoiar a Aeropress na boca dela.</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Prepare o filtro:</strong> coloque o papel na tampa, enxágue com água quente e encaixe na Aeropress.
    </li>
    <li><strong>Monte sobre a caneca</strong> e zere a balança.</li>
    <li><strong>Adicione 15 g de café</strong> moído fino e despeje 210 g de água, a cerca de 85 a 90 °C.</li>
    <li><strong>Mexa por 10 segundos</strong> e deixe em infusão por 1 minuto e 30 segundos.</li>
    <li><strong>Pressione devagar</strong> o êmbolo, por 20 a 30 segundos, até sentir resistência.</li>
    <li><strong>Sirva.</strong> Se ficar intenso demais, dilua com um pouco de água quente depois da prensa.</li>
  </ol>
  <p>Algumas dicas para esse preparo:</p>
  <ul>
    <li>Pare de pressionar quando ouvir o chiado, para evitar amargor.</li>
    <li>Use papel para uma xícara mais limpa; o filtro metálico deixa mais corpo.</li>
    <li>Se o café pinga pela base durante a infusão, vale experimentar o método invertido: a Aeropress fica de
      cabeça para baixo e só é virada sobre a caneca na hora de prensar.</li>
  </ul>

  <h2>Como ajustar o gosto</h2>
  <h3>Ficou amargo ou seco</h3>
  <p>
    Extração demais. Use a moagem um pouco mais grossa, deixe a água na faixa de 85 °C e reduza o tempo de infusão. E
    pressione devagar, parando ao ouvir o chiado.
  </p>
  <h3>Ficou ácido demais ou aguado</h3>
  <p>
    Faltou extração. Moa um pouco mais fino, suba a água para perto de 90 °C ou aumente a infusão em 15 a 30
    segundos.
  </p>
  <h3>Ficou forte demais</h3>
  <p>
    A Aeropress costuma render uma xícara concentrada. Você pode diluir depois da prensa com água quente, no estilo
    de um café americano, ajustando ao seu gosto sem mexer na receita.
  </p>
  <h3>Está difícil de pressionar</h3>
  <p>
    Isso indica moagem fina demais ou café muito compactado. Deixe a moagem um pouco mais grossa e mexa bem antes de
    prensar.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Usar água fervendo, que queima o café e deixa a xícara amarga.</li>
    <li>Pressionar com força e rápido, em vez de um movimento lento e constante.</li>
    <li>Pular o enxágue do filtro de papel, que deixa gosto de papel na bebida.</li>
    <li>Usar uma moagem de espresso, fina demais, que dificulta a prensa e amarga.</li>
    <li>Mudar moagem, tempo e temperatura ao mesmo tempo e não saber o que melhorou.</li>
  </ul>
</template>
