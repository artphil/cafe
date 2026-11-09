/**
 * Recebe as sugestões de cafeteria do formulário do site (src/components/CafeForm.vue)
 * e grava uma linha na aba "pendente" da planilha, com status "pendente".
 *
 * COMO USAR
 * 1. No projeto do Apps Script que já serve a lista de cafeterias (o doGet),
 *    cole este arquivo como um novo arquivo, sem apagar o doGet.
 * 2. Crie na planilha uma aba chamada "pendente" com a MESMA linha de cabeçalho da aba publicada
 *    (nome, endereco, bairro, maps_url, site, instagram, descricao, destaque, categoria,
 *    preco, visitado, atualizado_em, status). A ordem das colunas não importa, os nomes sim.
 * 3. Se o script NÃO estiver vinculado à planilha, preencha PLANILHA_ID abaixo.
 * 4. Implantar > Gerenciar implantações > editar a implantação do app da web
 *    > Nova versão. Quem pode acessar: "Qualquer pessoa". Executar como: você.
 *
 * O site NÃO publica nada sozinho: você revisa a aba "pendente" e copia para a aba publicada
 * (status "publicada") o que aprovar.
 */

const PLANILHA_ID = ''; // vazio = planilha à qual o script está vinculado
const ABA_PENDENTE = 'pendente';
const TEMPO_MINIMO_MS = 3000; // envio mais rápido que isso é robô
const LIMITE_POR_HORA = 20; // limite geral de sugestões por hora

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    const d = JSON.parse(e.postData.contents);

    // isca preenchida: finge sucesso para o robô não insistir
    if (d.empresa) return resposta({ ok: true });

    if (Number(d.tempo) < TEMPO_MINIMO_MS) {
      return resposta({ ok: false, erro: 'Envio rápido demais. Confira os campos e tente de novo.' });
    }

    const cache = CacheService.getScriptCache();
    const enviados = Number(cache.get('envios') || 0);
    if (enviados >= LIMITE_POR_HORA) {
      return resposta({ ok: false, erro: 'Recebemos muitas sugestões agora. Tente de novo mais tarde.' });
    }

    const nome = texto(d.nome, 80);
    const bairro = texto(d.bairro, 60);
    const endereco = texto(d.endereco, 140);
    const descricao = texto(d.descricao, 300);
    const categoria = texto(d.categoria, 120);
    const site = link(d.site);
    const instagram = instagramLink(d.instagram);
    const mapsUrl = link(d.maps_url);

    if (nome.length < 2 || bairro.length < 2 || endereco.length < 5) {
      return resposta({ ok: false, erro: 'Preencha nome, bairro e endereço.' });
    }
    if (descricao.length < 10) {
      return resposta({ ok: false, erro: 'Escreva uma descrição de pelo menos 10 caracteres.' });
    }
    if (!site && !instagram) {
      return resposta({ ok: false, erro: 'Informe um site ou Instagram válidos.' });
    }

    const ss = PLANILHA_ID ? SpreadsheetApp.openById(PLANILHA_ID) : SpreadsheetApp.getActiveSpreadsheet();
    const aba = ss.getSheetByName(ABA_PENDENTE);
    if (!aba) return resposta({ ok: false, erro: 'Não foi possível salvar agora. Tente mais tarde.' });

    const valores = {
      nome: nome,
      endereco: endereco,
      bairro: bairro,
      maps_url: mapsUrl,
      site: site,
      instagram: instagram,
      descricao: descricao,
      destaque: '',
      categoria: categoria,
      preco: '',
      visitado: 'não',
      atualizado_em: new Date(),
      status: 'pendente',
    };

    const cabecalho = aba.getRange(1, 1, 1, aba.getLastColumn()).getValues()[0];
    const linha = cabecalho.map(function (coluna) {
      const v = valores[String(coluna).trim()];
      return v === undefined ? '' : v;
    });
    aba.appendRow(linha);

    cache.put('envios', String(enviados + 1), 3600);
    return resposta({ ok: true });
  } catch (err) {
    return resposta({ ok: false, erro: 'Não foi possível salvar agora. Tente mais tarde.' });
  } finally {
    lock.releaseLock();
  }
}

function resposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Limpa espaços e evita que a célula seja lida como fórmula (= + - @).
function texto(valor, max) {
  let t = String(valor == null ? '' : valor).replace(/\s+/g, ' ').trim().slice(0, max);
  if (/^[=+\-@]/.test(t)) t = "'" + t;
  return t;
}

function link(valor) {
  const t = String(valor == null ? '' : valor).trim().slice(0, 300);
  return /^https?:\/\/[^\s]+$/i.test(t) ? t : '';
}

// Aceita "@usuario", "usuario" ou o link completo do perfil.
function instagramLink(valor) {
  const t = String(valor == null ? '' : valor).trim().slice(0, 300);
  if (!t) return '';
  if (/^https?:\/\//i.test(t)) return link(t);
  const usuario = t.replace(/^@/, '');
  return /^[A-Za-z0-9._]{1,30}$/.test(usuario) ? 'https://www.instagram.com/' + usuario + '/' : '';
}
