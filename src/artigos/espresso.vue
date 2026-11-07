<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    Espresso é um café concentrado, feito em poucos segundos com água quente forçada a passar por uma camada compacta de
    café moído fino. A pressão (na casa de 9 bar, bem mais que a de uma moka) extrai muito sabor em pouco volume, e
    deixa por cima uma espuma dourada, a crema. É a base de quase todas as bebidas de cafeteria, como o cappuccino e o
    latte, e também uma bebida para tomar pura.
  </p>
  <p>
    Fazer um bom espresso é mais exigente que outros métodos: pequenas mudanças de moagem ou de dose alteram bastante o
    resultado. Este guia explica o que medir, como saber se a extração está certa e o que ajustar.
  </p>

  <h2>O que define um espresso</h2>
  <ul>
    <li><strong>Pressão:</strong> a água passa pelo café a cerca de 9 bar, o que só uma máquina de espresso entrega.</li>
    <li><strong>Moagem fina:</strong> o pó oferece resistência à água, e a moagem é o principal ajuste.</li>
    <li><strong>Pouco volume e pouco tempo:</strong> a bebida tem de 25 a 40 g e a extração dura cerca de meio minuto.
    </li>
    <li><strong>Concentração:</strong> o resultado é bem mais forte e denso que um café coado.</li>
  </ul>
  <p>
    Por isso a <a href="./moka.html">moka</a>, que usa menos pressão, faz um café intenso, mas não é espresso de
    verdade.
  </p>

  <h2>Receita de partida</h2>
  <p>
    Uma base muito usada hoje, com o cesto duplo do porta-filtro. Os números são ponto de partida, não regra: o ajuste
    fino vem pela moagem.
  </p>
  <FichaReceita cafe="18 g" rendimento="Cerca de 36 g de espresso na xícara" proporcao="1:2" temperatura="90 a 96 °C"
    moagem="Fina, ajustada a cada café" tempo="25 a 30 segundos"
    indicado="uma bebida concentrada, para tomar pura ou como base de bebidas com leite" />
  <p>
    Note que, no espresso, a medida que importa é a de <strong>saída</strong>: quantos gramas de bebida saem para cada
    grama de café. É o que a proporção 1:2 indica.
  </p>

  <h2>O que você vai precisar</h2>
  <ul>
    <li><strong>Máquina de espresso</strong>, com porta-filtro e cesto (de dose simples ou dupla).</li>
    <li><strong>Moedor</strong> próprio para espresso, com ajuste fino de moagem. É ele, mais do que a máquina, que
      define a qualidade do resultado.</li>
    <li><strong>Balança com precisão de 0,1 g</strong> e cronômetro, para controlar dose, rendimento e tempo.</li>
    <li><strong>Tamper</strong>, para compactar o café de forma uniforme.</li>
    <li><strong>Xícara de espresso</strong>, pré-aquecida.</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Esquente a máquina e o porta-filtro.</strong> Deixe a água passar um instante pelo grupo antes de
      começar.</li>
    <li><strong>Pese 18 g de café</strong> moído na hora e coloque no cesto seco.</li>
    <li><strong>Nivele o pó</strong>, distribuindo de forma uniforme, sem montinhos.</li>
    <li><strong>Compacte com o tamper</strong>, reto e com pressão firme e constante.</li>
    <li><strong>Encaixe o porta-filtro</strong>, coloque a xícara sobre a balança e inicie a extração junto com o
      cronômetro.</li>
    <li><strong>Pare em cerca de 36 g</strong> de bebida, o que costuma levar de 25 a 30 segundos.</li>
    <li><strong>Prove na hora</strong>, porque o espresso perde qualidade rápido.</li>
  </ol>

  <h2>Como ajustar o gosto</h2>
  <p>
    A regra do espresso é mexer na <strong>moagem</strong>, uma coisa de cada vez, mantendo a dose e o rendimento. O
    tempo da extração é o guia.
  </p>
  <h3>Saiu rápido e azedo, salgado ou aguado</h3>
  <p>
    Se a extração durou menos de uns 20 segundos, faltou extração. Moa mais fino para a água encontrar mais
    resistência.
  </p>
  <h3>Saiu devagar e amargo ou seco</h3>
  <p>
    Se a extração passou de uns 35 segundos, houve extração demais. Moa mais grosso para a água passar mais fácil.
  </p>
  <h3>Gotejou desigual ou saiu em jatos</h3>
  <p>
    A água abriu caminhos no pó, o que chamamos de canalização. Distribua o café com mais cuidado e compacte reto,
    sem inclinar o tamper.
  </p>
  <h3>A crema é sinal de um bom espresso?</h3>
  <p>
    A crema mostra que a extração foi feita com pressão e que o café é fresco, mas não prova que o sabor está bom. O
    que decide é o gosto: equilibrado entre doçura, acidez e amargor.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Mudar dose, moagem e tempo ao mesmo tempo, sem saber o que melhorou.</li>
    <li>Usar café moído há muito tempo. No espresso, o frescor pesa bastante.</li>
    <li>Compactar torto ou com pouca firmeza, o que causa canalização.</li>
    <li>Não medir o rendimento e guiar-se só pelo tempo.</li>
    <li>Usar moedor sem ajuste fino de moagem.</li>
  </ul>

  <h2>Variações da dose</h2>
  <p>
    Com o mesmo café e a mesma máquina, dá para mudar quanto de bebida sai.
  </p>
  <ul>
    <li><strong>Ristretto:</strong> mais curto e concentrado, com menos água para a mesma dose de café, em torno de 1:1
      a 1:1,5. Costuma ficar mais doce e com menos amargor.</li>
    <li><strong>Lungo:</strong> mais longo, com mais água para a mesma dose, em torno de 1:3 a 1:4. Fica mais fraco e
      pode ficar mais amargo.</li>
    <li><strong>Doppio:</strong> dose dupla. Na prática, a receita de partida acima, com cesto duplo, já é um
      doppio.</li>
  </ul>
</template>
