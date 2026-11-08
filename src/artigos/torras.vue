<template>
  <p>
    A torra transforma o grão verde em café e define como seus açúcares, ácidos e óleos aparecem na bebida. Não há uma
    torra "melhor": a escolha depende do grão e do perfil de sabor que você quer alcançar. Entender as três faixas
    principais, clara, média e escura, ajuda a escolher o café certo para cada método.
  </p>

  <div class="roast-gauge">
    <div class="roast-dial clara">Torra<br>clara</div>
    <div class="roast-dial media">Torra<br>média</div>
    <div class="roast-dial escura">Torra<br>escura</div>
  </div>

  <h2>O que a torra faz com o grão</h2>
  <p>
    O grão verde tem pouco aroma. Com o calor, ele muda de cor, perde umidade, desenvolve aromas e transforma os
    açúcares que tem. Em geral, quanto mais longa e intensa a torra, mais o grão escurece, mais o sabor da própria
    torra aparece e menos aparecem as características da origem.
  </p>

  <h2>Torra clara</h2>
  <p>
    Preserva mais as características do grão e da origem. Geralmente apresenta acidez mais viva e notas florais,
    cítricas ou frutadas. É uma boa escolha para métodos filtrados e para quem quer perceber nuances da bebida.
  </p>

  <h2>Torra média</h2>
  <p>
    Busca equilíbrio entre doçura, acidez e corpo. Pode trazer caramelo, chocolate, frutas e castanhas sem esconder
    totalmente a identidade do grão. É a opção mais versátil para diferentes métodos de preparo.
  </p>

  <h2>Torra escura</h2>
  <p>
    Desenvolve mais corpo, amargor e notas de chocolate intenso, caramelo escuro e tostado. A origem aparece menos,
    enquanto o sabor da própria torra ganha destaque. Combina com quem prefere uma bebida mais forte ou costuma preparar
    café com leite.
  </p>

  <h2>Comparando as três</h2>
  <div class="tabela-wrap">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Clara</th>
          <th>Média</th>
          <th>Escura</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Acidez</td>
          <td>Mais viva</td>
          <td>Equilibrada</td>
          <td>Baixa</td>
        </tr>
        <tr>
          <td>Corpo</td>
          <td>Mais leve</td>
          <td>Médio</td>
          <td>Mais encorpado</td>
        </tr>
        <tr>
          <td>Amargor</td>
          <td>Baixo</td>
          <td>Moderado</td>
          <td>Mais presente</td>
        </tr>
        <tr>
          <td>Notas</td>
          <td>Florais, cítricas e frutadas</td>
          <td>Caramelo, chocolate, frutas e castanhas</td>
          <td>Chocolate intenso, caramelo escuro e tostado</td>
        </tr>
        <tr>
          <td>Destaque da origem</td>
          <td>Alto</td>
          <td>Médio</td>
          <td>Baixo</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Qual torra para qual método</h2>
  <ul>
    <li><strong>Métodos filtrados</strong>, como o <a href="./v60.html">V60</a> e o
      <a href="./cafe-coado.html">café coado</a>: a torra clara ou média deixa a xícara mais limpa e destaca as notas.
    </li>
    <li><strong>Prensa francesa e moka:</strong> a média e a escura combinam com o corpo que esses métodos entregam.
    </li>
    <li><strong>Espresso e café com leite:</strong> a média e a escura costumam aguentar bem a pressão e o leite.</li>
    <li><strong>Cold brew:</strong> a média e a escura rendem uma bebida suave e doce.</li>
  </ul>
  <p>
    Isso é um ponto de partida, não uma regra. O que você gosta de beber vale mais que qualquer recomendação.
  </p>

  <h2>Como escolher no mercado</h2>
  <ul>
    <li>Olhe o nível de torra e a data de torra no rótulo, quando houver. Café torrado há menos tempo tem mais aroma.</li>
    <li>Grãos muito escuros e brilhantes de óleo costumam indicar torra escura.</li>
    <li>Nem todo rótulo informa o nível da torra. Na dúvida, pergunte na cafeteria ou na torrefadora.</li>
  </ul>

  <h2>Erros comuns</h2>
  <ul>
    <li>Achar que torra escura é "mais forte" em cafeína. A torra muda o sabor, não a quantidade de cafeína de forma
      relevante.</li>
    <li>Esconder um café ruim com torra escura, que cobre defeitos mas esconde a origem.</li>
    <li>Escolher só pela torra, sem olhar a <a href="./arabica-x-robusta.html">espécie</a> e o
      <a href="./processamento.html">processamento</a>.</li>
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
