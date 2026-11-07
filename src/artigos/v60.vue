<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    O V60 tem fama de ser "coisa de barista", mas é um dos jeitos mais simples de fazer um café coado de verdade.
    Você precisa de poucos itens, de uma receita fácil de repetir e de um pouco de atenção. Em troca, ganha uma xícara
    limpa, aromática e com sabores bem definidos. Este guia leva você do zero até a primeira xícara.
  </p>

  <h2>O que é o V60</h2>
  <p>
    É um coador cônico criado pela marca japonesa Hario. O nome vem do formato em "V" e do ângulo de 60 graus das
    paredes. Ele tem nervuras em espiral por dentro e um furo grande no fundo, então quem controla a velocidade da
    extração é você: a moagem e a forma de despejar a água mudam bastante o resultado. Por isso é tão querido por quem
    gosta de explorar: com o mesmo café, dá para deixar a xícara mais doce, mais ácida ou mais encorpada só mexendo na
    receita.
  </p>

  <h2>Receita de partida</h2>
  <p>
    Base equilibrada para duas xícaras, boa para o dia a dia. Depois de acertar, você ajusta ao seu gosto.
  </p>
  <FichaReceita cafe="20 g" agua="300 g" proporcao="1:15" temperatura="90 a 96 °C" moagem="Média (areia grossa)"
    tempo="2:30 a 3:30" indicado="uso diário, com equilíbrio entre acidez e corpo" />
  <p>
    Use a temperatura mais alta para torras claras e a mais baixa para torras escuras. Para uma xícara mais leve, vá
    para 1:16 ou 1:17; para mais corpo, 1:14.
  </p>

  <h2>O que você vai precisar</h2>
  <ul>
    <li><strong>Coador V60</strong> (plástico, cerâmica, vidro ou metal) e filtros de papel no tamanho certo. O 02
      atende de 1 a 4 xícaras.</li>
    <li><strong>Balança</strong> com cronômetro. Medir em gramas dá muito mais consistência que colher.</li>
    <li><strong>Chaleira</strong>, de preferência com bico fino, para despejar a água com calma.</li>
    <li><strong>Moedor</strong>. Café moído na hora faz diferença, e o ideal é um moedor que dê uma moagem uniforme.</li>
    <li><strong>Jarra ou caneca</strong> para receber o café.</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Esquente a água</strong> e dobre o filtro de papel no coador.</li>
    <li><strong>Enxágue o filtro</strong> com água quente. Isso tira o gosto de papel e aquece o coador e a jarra.
      Descarte essa água.</li>
    <li><strong>Coloque o café moído</strong> e dê uma balançada leve para nivelar. Zere a balança.</li>
    <li><strong>Faça o bloom:</strong> inicie o cronômetro e despeje 60 g de água, molhando todo o pó. Espere de 30 a
      45 segundos. O café vai inchar e soltar gás, é normal.</li>
    <li><strong>Primeira etapa:</strong> despeje em movimentos circulares, do centro para fora e de volta, até chegar a
      180 g (cerca de 60% da água).</li>
    <li><strong>Segunda etapa:</strong> complete até 300 g com o mesmo cuidado, sem despejar direto nas paredes do
      filtro.</li>
    <li><strong>Deixe escorrer</strong> até o fim. Dê uma mexidinha na jarra e sirva.</li>
  </ol>

  <h2>Como ajustar o gosto</h2>
  <p>
    Provou e ficou estranho? Quase sempre a solução é mexer em uma coisa de cada vez.
  </p>
  <h3>Café amargo, seco ou "pesado"</h3>
  <p>
    Isso indica extração demais. Deixe a moagem um pouco mais grossa, use água um pouco mais fria ou reduza o tempo
    total.
  </p>
  <h3>Café ácido demais, azedo ou aguado</h3>
  <p>
    Aqui faltou extração. Moa mais fino, use água mais quente ou despeje com um pouco mais de calma para alongar o
    tempo.
  </p>
  <h3>Escorreu muito rápido ou muito devagar</h3>
  <p>
    Se acabou em menos de 2 minutos, a moagem está grossa. Se passou de 4, está fina demais ou o pó entupiu o filtro.
    Ajuste a moagem aos poucos.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Pular o enxágue do filtro de papel.</li>
    <li>Despejar a água de uma vez só, sem controle.</li>
    <li>Trocar várias variáveis ao mesmo tempo e não saber o que melhorou.</li>
    <li>Usar café moído há muito tempo, que já perdeu aroma.</li>
  </ul>

  <h2>Variações da receita</h2>
  <p>
    O passo a passo acima é o clássico. Quando ele já estiver redondo, vale testar outras formas de despejar a água. Em
    todas, o bloom é o mesmo; muda o que vem depois.
  </p>
  <ul>
    <li><a href="./v60-pour-continuo.html">Pour contínuo</a>: despejo lento e sem parar, para um café mais doce e com
      mais corpo.</li>
    <li><a href="./v60-pulse-pour.html">Pulse pour</a>: água dividida em etapas, para destacar acidez e notas
      frutadas.</li>
    <li><a href="./v60-metodo-4-6.html">Método 4:6</a>: criado por Tetsu Kasuya, para ajustar doçura, acidez e corpo
      com mais precisão.</li>
  </ul>
</template>
