/* =========================================================
   GRÃO CAFÉ — script.js
   Funções:
   1. Abrir/fechar modais (<dialog>) a partir de botões [data-modal-target]
   2. Sortear o destaque da home entre método / categoria / curiosidade
   3. Buscar a lista de cafeterias na planilha (Google Sheets) e
      renderizar os cards, com fallback caso a busca falhe
   ========================================================= */

// ---------- 1. Modais ----------
document.addEventListener('click', (e) => {
  const openBtn = e.target.closest('[data-modal-target]');
  if (openBtn) {
    const dialog = document.querySelector(openBtn.getAttribute('data-modal-target'));
    if (dialog) dialog.showModal();
  }
  const closeBtn = e.target.closest('[data-modal-close]');
  if (closeBtn) {
    const dialog = closeBtn.closest('dialog');
    if (dialog) dialog.close();
  }
});

// ---------- 2. Destaque aleatório da home ----------
// Cada item tem um "tipo" (rótulo mostrado no selo) e um link para a página cheia.
// Isso é só uma amostra — quando o conteúdo real das páginas existir,
// vale mover esses itens para um arquivo separado (ex: destaques.js)
// para não precisar editar o HTML toda vez.
const DESTAQUES = [
  {
    tipo: 'Método',
    titulo: 'V60',
    texto: '[conteúdo aqui — resumo curto do método V60, 1-2 frases]',
    link: 'metodos.html'
  },
  {
    tipo: 'Método',
    titulo: 'Prensa francesa',
    texto: '[conteúdo aqui — resumo curto da prensa francesa]',
    link: 'metodos.html'
  },
  {
    tipo: 'Categoria',
    titulo: 'Torra média',
    texto: '[conteúdo aqui — o que caracteriza uma torra média]',
    link: 'categorias.html'
  },
  {
    tipo: 'Categoria',
    titulo: 'Processo natural',
    texto: '[conteúdo aqui — o que é o processamento natural do grão]',
    link: 'categorias.html'
  },
  {
    tipo: 'Curiosidade',
    titulo: 'O café chegou ao Brasil...',
    texto: '[conteúdo aqui — curiosidade histórica curta]',
    link: 'historia.html'
  }
];

function sortearDestaque() {
  const el = document.getElementById('spotlight');
  if (!el) return;
  const item = DESTAQUES[Math.floor(Math.random() * DESTAQUES.length)];
  el.setAttribute('data-kind', item.tipo);
  el.querySelector('h3').textContent = item.titulo;
  el.querySelector('p').textContent = item.texto;
  el.querySelector('a.spotlight-link').href = item.link;
}

document.addEventListener('DOMContentLoaded', () => {
  sortearDestaque();
  const btn = document.querySelector('.spotlight-refresh');
  if (btn) btn.addEventListener('click', sortearDestaque);
});

// ---------- 3. Cafeterias via Google Sheets ----------
// Troque SHEET_ID e ABA pelo ID da sua planilha e o nome da aba "publicada".
// Usando o serviço gratuito opensheet.elk.sh, que transforma a planilha em JSON:
// https://opensheet.elk.sh/SHEET_ID/ABA
const CAFES_SHEET_URL = 'https://opensheet.elk.sh/2PACX-1vTyzP4TuiNs-o5c2O5T_GdeBijZzkJCTg2B3VyOX5VxtpDRzIGbLN5IyNtsqXNUCOL_wxci99O1Ty0l/cafeterias';
https://docs.google.com/spreadsheets/d/e/2PACX-1vTyzP4TuiNs-o5c2O5T_GdeBijZzkJCTg2B3VyOX5VxtpDRzIGbLN5IyNtsqXNUCOL_wxci99O1Ty0l/pub?output=csv

// Dados de exemplo — usados enquanto a planilha real não está configurada,
// ou como fallback se a busca falhar. Troque pelos dados reais na planilha.
const CAFES_FALLBACK = [
  {
    nome: 'Oop Café',
    endereco: '[endereço aqui]',
    site: '#',
    descricao: '[conteúdo aqui — breve descrição do Oop Café]'
  },
  {
    nome: 'Cheirin Bão',
    endereco: '[endereço aqui]',
    site: '#',
    descricao: '[conteúdo aqui — breve descrição do Cheirin Bão]'
  },
  {
    nome: 'Belô Café',
    endereco: '[endereço aqui]',
    site: '#',
    descricao: '[conteúdo aqui — breve descrição do Belô Café]'
  },
  {
    nome: 'Ô Café',
    endereco: '[endereço aqui]',
    site: '#',
    descricao: '[conteúdo aqui — breve descrição do Ô Café]'
  }
];

function renderCafes(lista, origem) {
  const grid = document.getElementById('cafe-grid');
  const status = document.getElementById('cafe-status');
  if (!grid) return;

  grid.innerHTML = lista.map(c => `
    <article class="cafe-card">
      <h3>${c.nome}</h3>
      <p class="addr">${c.endereco}</p>
      <p class="desc">${c.descricao}</p>
      <a class="site-link" href="${c.site}" target="_blank" rel="noopener">Site / Instagram →</a>
    </article>
  `).join('');

  if (status) {
    status.textContent = origem === 'planilha'
      ? `${lista.length} cafeterias carregadas da planilha.`
      : `Mostrando dados de exemplo (planilha ainda não configurada ou indisponível).`;
  }
}

async function carregarCafes() {
  try {
    const res = await fetch(CAFES_SHEET_URL);
    if (!res.ok) throw new Error('Planilha indisponível');
    const dados = await res.json();
    if (!Array.isArray(dados) || dados.length === 0) throw new Error('Sem dados');
    // Espera colunas: nome, endereco, site, descricao (ajuste os nomes conforme a planilha)
    renderCafes(dados, 'planilha');
  } catch (err) {
    renderCafes(CAFES_FALLBACK, 'fallback');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cafe-grid')) carregarCafes();
});
