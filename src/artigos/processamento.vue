<template>
  <p>
    O café nasce como o fruto vermelho de um arbusto, a "cereja". Dentro dela está o grão. O processamento é o que se faz
    com esse fruto depois da colheita até chegar ao grão pronto para torrar, e esse caminho influencia muito o sabor
    final. Dois cafés do mesmo lugar, colhidos no mesmo dia, podem ser bem diferentes só por terem sido processados de
    jeitos distintos.
  </p>

  <h2>Por que o processamento importa</h2>
  <p>
    Em volta do grão existem camadas: a casca, a polpa e uma camada açucarada e pegajosa, a mucilagem. O processamento
    decide o que é removido antes da secagem e o que permanece em contato com o grão. Quanto mais da fruta fica junto,
    mais doçura e corpo costumam passar para a bebida; quanto mais é removido, mais as características da origem
    ficam em evidência.
  </p>

  <h2>Natural</h2>
  <p>
    Depois da colheita, o fruto seca inteiro, com a polpa ao redor do grão. Esse contato prolongado costuma dar mais
    corpo, doçura e notas de frutas maduras. É um processo muito usado no Brasil e exige cuidado para a secagem ocorrer
    de forma uniforme.
  </p>

  <h2>Lavado</h2>
  <p>
    A polpa é removida antes da secagem e o grão passa por lavagem para retirar a mucilagem. O resultado tende a ser
    uma xícara mais limpa, com acidez nítida e maior destaque para as características da origem do café.
  </p>

  <h2>Cereja descascado e honey</h2>
  <p>
    No cereja descascado, a casca é retirada e parte da mucilagem permanece durante a secagem. O honey segue a mesma
    ideia, com diferentes quantidades dessa camada açucarada. Fica entre o natural e o lavado: costuma unir boa doçura,
    corpo médio e uma xícara mais limpa.
  </p>

  <h2>Comparando os três</h2>
  <div class="tabela-wrap">
    <table>
      <thead>
        <tr>
          <th>Processo</th>
          <th>O que acontece</th>
          <th>Tende a dar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Natural</td>
          <td>O fruto seca inteiro, com a polpa</td>
          <td>Mais corpo, doçura e notas de frutas maduras</td>
        </tr>
        <tr>
          <td>Lavado</td>
          <td>A polpa sai antes da secagem e a mucilagem é lavada</td>
          <td>Xícara limpa, acidez nítida e destaque da origem</td>
        </tr>
        <tr>
          <td>Cereja descascado / honey</td>
          <td>A casca sai e parte da mucilagem fica na secagem</td>
          <td>Doçura, corpo médio e xícara limpa</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Como usar isso na hora de escolher</h2>
  <ul>
    <li>Procure o processo no rótulo ou na descrição do café. Cafeterias e torrefadoras especiais costumam informar.</li>
    <li>Se você gosta de doçura e corpo, experimente um café natural.</li>
    <li>Se prefere uma xícara limpa e com acidez viva, vá de lavado.</li>
    <li>Se quer algo no meio do caminho, o cereja descascado ou o honey costuma agradar.</li>
  </ul>
  <p>
    O processo é só um dos fatores. A espécie (<a href="./arabica-x-robusta.html">arábica ou robusta</a>), a
    <a href="./torras.html">torra</a> e o preparo também pesam muito no sabor.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Achar que um processo é "melhor" que o outro. Cada um entrega um perfil diferente.</li>
    <li>Esperar o mesmo sabor de dois cafés naturais de origens diferentes.</li>
    <li>Escolher só pelo processo, sem olhar a torra e a frescura do café.</li>
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
