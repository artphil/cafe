// Lista única dos artigos do site. Cada item vira uma página própria
// (`/<slug>.html`), pré-renderizada no build.
//
// Para criar um artigo:
//   1. acrescente um item aqui;
//   2. crie `src/artigos/<slug>.vue` com o corpo do texto (só o <template>);
//   3. reinicie `npm run dev` (a lista é lida na inicialização).
//
// Este arquivo é lido também pelo Node (vite.config.js), então não pode usar
// recursos exclusivos do Vite (import.meta.env, import.meta.glob).
//
// Formato de cada item:
//   slug      → nome do arquivo gerado, em minúsculas e com hífens (não pode
//               repetir o de uma página existente, ex.: `preparo`)
//   titulo    → h1 e <title>
//   secao     → 'historia' | 'preparo' | 'saiba-mais' (define o menu destacado e o índice)
//   descricao → 1 a 2 frases; vira o lede, a meta description e o card do índice
//   imagem    → { src, alt, credito, creditoUrl?, legenda? } (opcional). Arquivo em
//               `public/img/artigos/`, com src `./img/artigos/<slug>.jpg`;
//               credito = "própria" ou "Autor / Banco"; creditoUrl = link do autor
//               (quando a licença exigir); alt descreve a foto
//   relacionados → slugs de "Leia também" (opcional; sem isso, até 3 da mesma seção)

export const SECOES = {
  historia: { rotulo: 'História', pagina: './historia.html' },
  preparo: { rotulo: 'Preparo', pagina: './preparo.html' },
  'saiba-mais': { rotulo: 'Saiba mais', pagina: './saiba-mais.html' },
}

export const ARTIGOS = [
  {
    slug: 'v60',
    titulo: 'Como fazer café no V60',
    secao: 'preparo',
    descricao:
      'Passo a passo do V60 para iniciantes: equipamento, proporção, moagem, tempo e como corrigir café amargo ou aguado.',
    imagem: {
      src: './img/artigos/v60.jpg',
      alt: 'Café moído com granulometria média dentro de um filtro de papel, apoiado em um coador, pronto para receber a água',
      credito: 'Caio Resende / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/caioresende',
    },
    relacionados: ['v60-pour-continuo', 'v60-pulse-pour', 'v60-metodo-4-6'],
  },
  {
    slug: 'v60-pour-continuo',
    titulo: 'V60 com pour contínuo: café mais doce',
    secao: 'preparo',
    descricao:
      'Como fazer o pour contínuo no V60: receita, controle do fluxo e ajustes para um café mais doce e encorpado.',
    imagem: {
      src: './img/artigos/v60-pour-continuo.jpg',
      alt: 'Água caindo em um fio fino de uma chaleira de bico de ganso sobre o café em um coador V60 de cobre, com filtro de papel',
      credito: 'Rachen Buosa / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/100350730739018375603',
    },
    relacionados: ['v60', 'v60-pulse-pour', 'v60-metodo-4-6'],
  },
  {
    slug: 'v60-pulse-pour',
    titulo: 'V60 com pulse pour: mais acidez e notas frutadas',
    secao: 'preparo',
    descricao:
      'Como fazer o pulse pour no V60: receita em etapas, intervalos e ajustes para destacar acidez e notas frutadas.',
    imagem: {
      src: './img/artigos/v60-pulse-pour.jpg',
      alt: 'Água sendo despejada de uma chaleira de bico fino sobre café moído em um coador de vidro com filtro de papel, apoiado sobre uma jarra',
      credito: 'Srinrat Wuttichaikitcharoen / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/pairhandmade',
    },
    relacionados: ['v60', 'v60-pour-continuo', 'v60-metodo-4-6'],
  },
  {
    slug: 'v60-metodo-4-6',
    titulo: 'Método 4:6 no V60 (Tetsu Kasuya)',
    secao: 'preparo',
    descricao:
      'Como usar o método 4:6 no V60: receita de partida e como ajustar doçura, acidez e corpo com duas decisões.',
    imagem: {
      src: './img/artigos/v60-metodo-4-6.jpg',
      alt: 'Pessoa despejando água de uma chaleira de bico de ganso em um coador V60 de vidro com filtro de papel, sobre uma jarra com gelo, ao lado de balança e moedor',
      credito: 'Suwinai Sukanant / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/nai-rmtango249756',
    },
    relacionados: ['v60', 'v60-pour-continuo', 'v60-pulse-pour'],
  },
]

export function relacionadosDe(artigo, todos = ARTIGOS) {
  const escolhidos = artigo.relacionados
    ? artigo.relacionados.map((slug) => todos.find((a) => a.slug === slug)).filter(Boolean)
    : todos.filter((a) => a.secao === artigo.secao && a.slug !== artigo.slug)
  return escolhidos.slice(0, 3)
}
