<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    O método 4:6 foi criado pelo barista japonês Tetsu Kasuya e ficou famoso por permitir que você ajuste o sabor do
    V60 de forma bem previsível. A ideia é dividir a água em duas partes: os primeiros 40% influenciam o equilíbrio
    entre doçura e acidez, e os 60% restantes definem a força e o corpo da xícara. Com poucas regras, dá para
    "desenhar" o café que você quer.
  </p>
  <p>
    Vale a pena quando você quer entender o que cada etapa do preparo faz no sabor, ajustar doçura, acidez e corpo sem
    mexer em moedor ou temperatura, e já domina o <a href="./v60.html">V60 clássico</a>.
  </p>

  <h2>Receita de partida</h2>
  <p>Para duas xícaras, com 5 pours de 60 g a cada 45 segundos.</p>
  <FichaReceita cafe="20 g" agua="300 g" proporcao="1:15" temperatura="90 a 96 °C"
    moagem="Mais grossa que a do clássico" tempo="Cerca de 3:30" indicado="controle avançado de sabor" />

  <h2>O que você vai precisar</h2>
  <p>
    Os mesmos itens do <a href="./v60.html">V60 clássico</a>: coador, filtro de papel, chaleira de bico fino e moedor.
    A balança com cronômetro é indispensável, porque o método depende de medidas e tempos e fica difícil de repetir sem
    isso.
  </p>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Enxágue o filtro</strong> com água quente e descarte essa água.</li>
    <li><strong>Coloque o café</strong>, nivele e zere a balança.</li>
    <li><strong>Pour 1 (0:00):</strong> 60 g, molhando todo o pó.</li>
    <li><strong>Pour 2 (0:45):</strong> mais 60 g, chegando a 120 g. Esses dois pours formam os primeiros 40%.</li>
    <li><strong>Pour 3 (1:30):</strong> mais 60 g, chegando a 180 g.</li>
    <li><strong>Pour 4 (2:15):</strong> mais 60 g, chegando a 240 g.</li>
    <li><strong>Pour 5 (3:00):</strong> os últimos 60 g, chegando a 300 g. Esses três pours formam os 60% finais.</li>
    <li><strong>Deixe escorrer</strong> até por volta de 3:30, misture a jarra e sirva.</li>
  </ol>

  <h2>Como ajustar o gosto</h2>
  <p>
    A graça do 4:6 está em mexer em um lado de cada vez. Primeiro acerte doçura e acidez; depois ajuste o corpo.
  </p>

  <h3>Nos primeiros 40%: doçura e acidez</h3>
  <ul>
    <li><strong>Pours iguais</strong> (60 g e 60 g) dão equilíbrio.</li>
    <li><strong>Mais água no primeiro pour</strong> (por exemplo, 70 g e 50 g) deixa o café mais doce.</li>
    <li><strong>Mais água no segundo pour</strong> (por exemplo, 50 g e 70 g) deixa o café mais ácido.</li>
  </ul>

  <h3>Nos 60% finais: força e corpo</h3>
  <ul>
    <li><strong>Mais pours, menores</strong> (por exemplo, 4 de 45 g) deixam o café mais leve.</li>
    <li><strong>Menos pours, maiores</strong> (por exemplo, 2 de 90 g) deixam o café mais forte e encorpado.</li>
    <li><strong>Três pours iguais</strong> (como na receita de partida) ficam no meio-termo.</li>
  </ul>

  <h3>Se o café secar entre os pours</h3>
  <p>
    Não deixe o café secar completamente entre os pours. Se o nível baixar rápido demais, moa um pouco mais fino.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Usar a mesma moagem do clássico. O 4:6 pede moagem mais grossa; com moagem média, o café costuma sair amargo.
    </li>
    <li>Mudar os dois lados da receita ao mesmo tempo e não saber o que causou a mudança.</li>
    <li>Perder o ritmo dos pours e atrasar ou adiantar o cronômetro.</li>
    <li>Começar por ele sem conhecer o clássico. Dominar o básico primeiro ajuda a entender o que está mudando.</li>
    <li>Não anotar a combinação usada. Como são só duas decisões (40% e 60%), é fácil comparar uma xícara com a
      outra, se você registrar.</li>
  </ul>
</template>
