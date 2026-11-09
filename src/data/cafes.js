// Troque SEU_SHEET_ID pelo ID da sua planilha (fica na URL, entre /d/ e /edit).
// A aba referenciada deve ser a "publicada" (só o que já foi revisado).
export const CAFES_SHEET_URL = `https://opensheet.elk.sh/${import.meta.env.VITE_SHEETS_ID}/cafeterias`;
export const CAFES_FORM_URL = `https://docs.google.com/forms/d/e/${import.meta.env.VITE_FORM_ID}/viewform?embedded=true`;
export const CAFES_API_URL = `https://script.google.com/macros/s/AKfycbwQqz9Zp-w4UwPt9Bdta1V5e4DJe9FFw_4l9JjD77-BC4AsewS0iatwBzXGAhcE4Gfy7g/exec`;

// Dados usados só se a planilha estiver indisponível (ou ainda não configurada).
// Mesmas colunas da planilha (ver spec 03). Mantenha em sincronia com ela.
export const CAFES_FALLBACK = [
  {
    nome: "Oop Café",
    endereco: "R. Fernandes Tourinho, 143",
    bairro: "Funcionários",
    maps_url: "https://maps.app.goo.gl/oEZcESQLqsrLhkEq7",
    site: "http://www.oop.cafe/",
    descricao: "Ambiente calmo e sóbrio, com variedade de grãos e métodos de extração, quitutes e uma agenda de oficinas e degustações.",
    destaque: "Equipe preparada, que entende de café.",
    categoria: "variedade de cafés, oficinas",
    preco: "$$",
  },
  {
    nome: "Cheirin Bão",
    endereco: "Av. dos Engenheiros, 433",
    bairro: "Castelo",
    maps_url: "https://maps.app.goo.gl/vrP8jsNNJLeN2rtKA",
    instagram: "https://www.instagram.com/cheirinbao_castelo/",
    descricao: "Cafés em diferentes métodos de preparo e várias opções de lanches, no Castelo.",
    destaque: "Boa pedida também para quem prefere um chocolate quente.",
    categoria: "variedade de cafés, lanches",
    preco: "$$",
  },
  {
    nome: "Belô Café",
    endereco: "R. Sergipe, 1329",
    bairro: "Funcionários",
    maps_url: "https://maps.app.goo.gl/YxcVKXbffWJfA9pf8",
    instagram: "https://www.instagram.com/belocafebh/",
    descricao: "Café tradicional de BH, com uma grande variedade de preparações doces e salgadas para acompanhar.",
    destaque: "Vale ir pela lista de comes: o café acompanha uma seleção saborosa.",
    categoria: "doces e salgados",
    preco: "$$$",
  },
  {
    nome: "Ô Café",
    endereco: "Av. Altamiro Avelino Soares, 121",
    bairro: "Castelo",
    maps_url: "https://maps.app.goo.gl/qQ3FfDwG2HgkHm1E9",
    site: "http://www.ocafebh.com.br/",
    descricao: "Cafeteria no Castelo que serve café colonial, com vários itens em self-service, além de almoço de segunda a sexta e área externa onde os pets são bem-vindos.",
    destaque: "Café colonial em self-service, com vários itens à disposição e produtos frescos.",
    categoria: "café colonial, self-service, pet friendly",
    preco: "$",
  },
];
