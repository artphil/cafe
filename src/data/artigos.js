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
//   secao     → 'preparo' | 'saiba-mais' (define o menu destacado e o índice)
//   descricao → 1 a 2 frases; vira o lede, a meta description e o card do índice
//   imagem    → { src, alt, credito, creditoUrl?, legenda? } (opcional). Arquivo em
//               `public/img/artigos/`, com src `./img/artigos/<slug>.jpg`;
//               credito = "própria" ou "Autor / Banco"; creditoUrl = link do autor
//               (quando a licença exigir); alt descreve a foto
//   relacionados → slugs de "Leia também" (opcional; sem isso, até 3 da mesma seção)

export const SECOES = {
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
      alt: 'Água sendo despejada de uma chaleira de bico fino sobre café moído em um coador de vidro com filtro de papel, apoiado sobre uma jarra',
      credito: 'pairhandmade / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/pairhandmade',
    },
  },
]

export function relacionadosDe(artigo, todos = ARTIGOS) {
  const escolhidos = artigo.relacionados
    ? artigo.relacionados.map((slug) => todos.find((a) => a.slug === slug)).filter(Boolean)
    : todos.filter((a) => a.secao === artigo.secao && a.slug !== artigo.slug)
  return escolhidos.slice(0, 3)
}
