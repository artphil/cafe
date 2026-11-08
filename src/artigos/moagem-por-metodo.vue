<template>
  <p>
    A moagem é um dos ajustes mais importantes no preparo de café. Ela regula a velocidade com que a água extrai o sabor
    do pó: quanto mais fina, mais rápida a extração. Por isso cada método pede uma moagem diferente, e acertar isso
    muda bastante o resultado na xícara.
  </p>

  <h2>Por que a moagem importa</h2>
  <p>
    Quanto menor o grão moído, maior a área de contato com a água e mais depressa o sabor sai do pó. Uma moagem fina
    demais para o método deixa o café amargo e seco, porque a extração passa do ponto. Uma moagem grossa demais deixa o
    café aguado e ácido, porque a extração fica incompleta.
  </p>

  <h2>Moagem ideal por método</h2>
  <p>
    Use estas referências como ponto de partida:
  </p>
  <div class="tabela-wrap">
    <table>
      <thead>
        <tr>
          <th>Moagem</th>
          <th>Métodos</th>
          <th>Como parece</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fina</td>
          <td><a href="./aeropress.html">Aeropress</a> e <a href="./espresso.html">espresso</a></td>
          <td>Areia fina</td>
        </tr>
        <tr>
          <td>Média-fina</td>
          <td><a href="./moka.html">Moka</a></td>
          <td>Um pouco mais grossa que a de espresso</td>
        </tr>
        <tr>
          <td>Média</td>
          <td><a href="./v60.html">V60</a> e <a href="./cafe-coado.html">café coado</a></td>
          <td>Lembra açúcar cristal fino</td>
        </tr>
        <tr>
          <td>Grossa</td>
          <td><a href="./prensa-francesa.html">Prensa francesa</a> e <a href="./cold-brew.html">cold brew</a></td>
          <td>Lembra sal grosso</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Por que cada método pede uma moagem</h2>
  <p>
    A regra geral é o tempo de contato entre a água e o café. Métodos rápidos, como o espresso e a Aeropress, deixam a
    água pouco tempo no pó, e por isso pedem moagem fina para extrair o suficiente. Métodos lentos, como a prensa
    francesa e o cold brew, deixam o café de molho por minutos ou horas, e por isso pedem moagem grossa para não
    extrair demais. Os métodos filtrados ficam no meio.
  </p>
  <ul>
    <li><strong>Espresso:</strong> extração de cerca de meio minuto.</li>
    <li><strong>Aeropress:</strong> cerca de 2 minutos.</li>
    <li><strong>V60 e café coado:</strong> de 2:30 a 4 minutos.</li>
    <li><strong>Prensa francesa:</strong> cerca de 4 minutos de infusão.</li>
    <li><strong>Cold brew:</strong> de 12 a 18 horas.</li>
  </ul>

  <h2>E se eu compro o café moído?</h2>
  <p>
    Se você não tem moedor, peça na loja a moagem do método que vai usar, falando o nome dele. O café moído perde aroma
    mais rápido, então compre em quantidade menor e use logo. Se o resultado ficar fora do ponto, o ajuste é trocar a
    moagem pedida na próxima compra.
  </p>

  <h2>Como ajustar</h2>
  <ul>
    <li><strong>O café ficou amargo ou demorou demais para passar:</strong> moa mais grosso.</li>
    <li><strong>O café ficou aguado ou ácido demais:</strong> moa um pouco mais fino.</li>
  </ul>
  <p>
    Mude uma coisa de cada vez e dê pequenos passos no moedor. Anote qual ajuste usou, para repetir quando acertar.
  </p>

  <h2>O moedor faz diferença</h2>
  <ul>
    <li><strong>Moedor de discos ou de cônicos:</strong> produz grãos de tamanho mais uniforme, o que dá uma extração mais
      equilibrada.</li>
    <li><strong>Moedor de lâminas:</strong> corta de forma irregular, gerando pó fino e pedaços grandes ao mesmo tempo.
      Funciona, mas é mais difícil de acertar.</li>
    <li><strong>Moer na hora:</strong> o café moído perde aroma rápido, então moer logo antes do preparo ajuda.</li>
  </ul>

  <h2>Erros comuns</h2>
  <ul>
    <li>Usar a mesma moagem para todos os métodos.</li>
    <li>Moer fino demais na prensa francesa, o que deixa o café amargo e cheio de borra.</li>
    <li>Moer grosso demais no espresso ou na Aeropress, o que deixa a xícara fraca.</li>
    <li>Mudar moagem, temperatura e tempo ao mesmo tempo, sem saber o que melhorou.</li>
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
