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
    descricao:
      "Variedade de grãos de café e métodos de extração, quitutes em espaço calmo e sóbrio, oficinas e degustações.",
    destaque: "Equipe preparada e sabe tudo de café.",
    categoria: "variedade de cafés",
  },
  {
    nome: "Cheirin Bão",
    endereco: "Av. dos Engenheiros, 433",
    bairro: "Castelo",
    maps_url: "https://maps.app.goo.gl/vrP8jsNNJLeN2rtKA",
    instagram: "https://www.instagram.com/cheirinbao_castelo/",
    descricao: "Sempre uma perto de você",
    destaque: "Bom também pra quem curte um chocolate quente.",
  },
  {
    nome: "Belô Café",
    endereco: "R. Sergipe, 1329",
    bairro: "Funcionários",
    maps_url: "https://maps.app.goo.gl/YxcVKXbffWJfA9pf8",
    instagram: "https://www.instagram.com/belocafebh/",
    descricao: "Tradicional café em BH",
    destaque: "O café acompanha uma saborosa lista de comes.",
  },
  {
    nome: "Ô Café",
    endereco: "Av. Altamiro Avelino Soares, 121",
    bairro: "Castelo",
    maps_url: "https://maps.app.goo.gl/qQ3FfDwG2HgkHm1E9",
    site: "http://www.ocafebh.com.br/",
    descricao: "Ótimo lugar para tomar ou comprar um bom café.",
    destaque: "Grande variedade de cafés e métodos",
    categoria: "variedade de cafés",
  },
];
