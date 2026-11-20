/**
 * Lista pública de cafeterias (doGet) — cole no projeto do Apps Script ligado à planilha.
 *
 * Fonte: aba "curadoria" (mestre). Só sai o que está com status "publicada", e só as
 * colunas da lista COLUNAS_PUBLICAS: notas, elegibilidade, visitado e status ficam
 * de fora, porque a URL do Apps Script é pública.
 *
 * Depois de colar: Implantar > Gerenciar implantações > lápis > Versão: Nova versão > Implantar.
 * A URL não muda, então `CAFES_API_URL` continua valendo.
 */
const ABA_CURADORIA = 'curadoria';
const COLUNAS_PUBLICAS = [
  'nome', 'endereco', 'bairro', 'maps_url', 'site', 'instagram',
  'descricao', 'destaque', 'tipo', 'tags', 'preco',
];

function doGet() {
  const aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_CURADORIA);
  // getDisplayValues: texto como aparece na célula (datas em ISO, sem #ERROR! de fórmulas alheias)
  const linhas = aba.getDataRange().getDisplayValues();
  const cabecalho = linhas[0].map(function (c) { return String(c).trim().toLowerCase(); });
  const iStatus = cabecalho.indexOf('status');
  const iNome = cabecalho.indexOf('nome');

  const lista = linhas
    .slice(1)
    .filter(function (l) {
      return String(l[iNome]).trim() && String(l[iStatus]).trim().toLowerCase() === 'publicada';
    })
    .map(function (l) {
      const item = {};
      COLUNAS_PUBLICAS.forEach(function (coluna) {
        const i = cabecalho.indexOf(coluna);
        item[coluna] = i >= 0 ? String(l[i]).trim() : '';
      });
      // Temporário: o site publicado antes da spec 03 nova ainda lê `categoria`.
      // Remover depois que o CafeGrid novo for para a main.
      item.categoria = [item.tipo, item.tags].filter(Boolean).join(', ');
      return item;
    });

  return ContentService.createTextOutput(JSON.stringify(lista)).setMimeType(ContentService.MimeType.JSON);
}
