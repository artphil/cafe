export const CAFES_FORM_URL = `https://docs.google.com/forms/d/e/${import.meta.env.VITE_FORM_ID}/viewform?embedded=true`;
export const CAFES_API_URL = `https://script.google.com/macros/s/AKfycbwQqz9Zp-w4UwPt9Bdta1V5e4DJe9FFw_4l9JjD77-BC4AsewS0iatwBzXGAhcE4Gfy7g/exec`;

// Dados usados só se a planilha estiver indisponível (ou ainda não configurada).
// Mesmas colunas públicas da aba "curadoria" (ver spec 03). Mantenha em sincronia com ela.
export const CAFES_FALLBACK = [
  {
    nome: "Oop Café",
    endereco: "R. Fernandes Tourinho, 143",
    bairro: "Funcionários",
    maps_url: "https://maps.app.goo.gl/oEZcESQLqsrLhkEq7",
    site: "http://www.oop.cafe/",
    descricao: "Ambiente calmo e sóbrio, com variedade de grãos e métodos de extração, quitutes e uma agenda de oficinas e degustações.",
    destaque: "Equipe preparada, que entende de café.",
    tipo: "Especialidade",
    tags: "métodos de extração, oficinas e degustações, calmo",
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
    tipo: "Tradicional",
    tags: "doces, salgados",
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
    tipo: "Colonial",
    tags: "self-service, almoço, área externa, pet friendly",
    preco: "$$",
  },
  {
    nome: "Academia do Café",
    endereco: "R. Grão Pará, 1010",
    bairro: "Funcionários",
    maps_url: "https://maps.app.goo.gl/XsizaDPczTf6zAUE6",
    site: "https://www.academiadocafe.com.br/",
    instagram: "https://www.instagram.com/academiadocafe/",
    descricao: "Cafeteria de especialidade no Funcionários, com variedade de cafés e métodos de preparo, cursos, degustações e opções de doces e salgados. A área externa é aconchegante e recebe pets.",
    destaque: "Grande variedade de cafés e métodos de preparo, com cursos e degustações.",
    tipo: "Especialidade",
    tags: "métodos de extração, oficinas e degustações, doces, salgados, área externa, pet friendly, aconchegante",
    preco: "$$",
  },
];
