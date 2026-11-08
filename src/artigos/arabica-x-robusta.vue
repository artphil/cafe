<template>
  <p>
    Quando alguém fala em "tipo de grão", quase sempre está falando de duas espécies de café: a arábica e a robusta. Elas
    são plantas diferentes, crescem em lugares diferentes e dão cafés bem diferentes na xícara. Entender essa diferença
    ajuda a ler o rótulo, a escolher o que comprar e a entender por que um café é mais doce e outro mais forte.
  </p>

  <h2>As duas espécies</h2>
  <h3>Arábica</h3>
  <p>
    É a espécie mais comum nos cafés especiais. Costuma ter mais doçura, acidez e aromas variados, como frutas, flores,
    chocolate e caramelo. Geralmente é cultivada em regiões mais altas e de clima ameno, onde o fruto amadurece mais
    devagar, o que ajuda a desenvolver sabores mais complexos.
  </p>
  <h3>Robusta (Conilon)</h3>
  <p>
    Robusta e Conilon são variedades da mesma espécie, <em>Coffea canephora</em>. Têm mais cafeína, corpo intenso e sabor
    marcante, muitas vezes com notas de castanhas, cacau e especiarias. Adaptam-se bem a altitudes mais baixas e entram
    tanto em blends quanto em cafés especiais de origem.
  </p>

  <h2>Comparando as duas</h2>
  <div class="tabela-wrap">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Arábica</th>
          <th>Robusta (Conilon)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Espécie</td>
          <td><em>Coffea arabica</em></td>
          <td><em>Coffea canephora</em></td>
        </tr>
        <tr>
          <td>Sabor</td>
          <td>Mais doce e ácida, com aromas variados</td>
          <td>Marcante, com notas de castanhas, cacau e especiarias</td>
        </tr>
        <tr>
          <td>Corpo</td>
          <td>Leve a médio</td>
          <td>Intenso</td>
        </tr>
        <tr>
          <td>Cafeína</td>
          <td>Menos</td>
          <td>Mais</td>
        </tr>
        <tr>
          <td>Onde cresce melhor</td>
          <td>Altitudes maiores e clima ameno</td>
          <td>Altitudes menores e clima mais quente</td>
        </tr>
        <tr>
          <td>Usos comuns</td>
          <td>Cafés especiais e de origem</td>
          <td>Blends e cafés de origem</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>O que muda na xícara</h2>
  <p>
    A arábica tende a render uma bebida mais delicada, com acidez perceptível e doçura, boa para quem quer notar nuances
    de cada café. A robusta entrega uma bebida mais encorpada e de sabor marcante, que aguenta bem o leite e o açúcar.
    Nenhuma é "melhor" em tudo: depende do que você procura e de como o café foi cultivado, processado e torrado.
  </p>
  <p>
    A diferença de cafeína também aparece: a robusta costuma ter mais que a arábica, o que ajuda a explicar a sensação
    de café "mais forte". Mas força de sabor e quantidade de cafeína não são a mesma coisa, porque o método de preparo e
    a dose pesam bastante.
  </p>

  <h2>Quando usar cada uma</h2>
  <ul>
    <li><strong>Arábica:</strong> para cafés filtrados, como o <a href="./v60.html">V60</a>, e para quem gosta de
      sentir acidez, doçura e aromas.</li>
    <li><strong>Robusta ou Conilon:</strong> para quem prefere corpo e sabor marcante, ou para blends de
      <a href="./espresso.html">espresso</a>, em que o corpo ajuda.</li>
    <li><strong>Blend de arábica com robusta:</strong> uma forma de equilibrar doçura, corpo e custo.</li>
  </ul>

  <h2>Como escolher no mercado</h2>
  <ul>
    <li>Olhe a espécie no rótulo. "100% arábica" informa a espécie, mas não garante, sozinho, um café de qualidade.</li>
    <li>Procure a origem, a data de torra e o tipo de processamento, que contam mais sobre o sabor.</li>
    <li>Se o rótulo disser só "café" ou "blend" sem detalhes, pode haver mistura de espécies.</li>
  </ul>

  <h2>Erros comuns</h2>
  <ul>
    <li>Achar que robusta é sempre ruim, ou que arábica é sempre melhor.</li>
    <li>Confundir café "forte" (de sabor) com café com mais cafeína.</li>
    <li>Escolher só pela espécie, sem olhar a torra e a frescura.</li>
  </ul>
</template>

<style scoped>
.tabela-wrap {
  overflow-x: auto;
  margin: 16px 0;
}
table {
  width: 100%;
  min-width: 520px;
  border-collapse: collapse;
  font-size: 0.92rem;
}
th,
td {
  text-align: left;
  vertical-align: top;
  padding: 10px 12px;
  border-bottom: 1px solid var(--line);
}
th {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--roast-deep);
  background: var(--cream);
}
td:first-child {
  font-weight: 600;
}
</style>
