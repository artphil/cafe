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
    slug: 'comparativo-de-metodos',
    titulo: 'Comparativo de métodos de preparo: qual escolher',
    secao: 'preparo',
    descricao:
      'Compare V60, café coado, Aeropress, prensa francesa, moka e cold brew em proporção, moagem, tempo, sabor e dificuldade.',
    relacionados: ['v60', 'cafe-coado', 'aeropress'],
  },
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
  {
    slug: 'aeropress',
    titulo: 'Como fazer café na Aeropress',
    secao: 'preparo',
    descricao:
      'Passo a passo da Aeropress para iniciantes: receita, equipamento, ajustes de gosto e erros comuns.',
    imagem: {
      src: './img/artigos/aeropress.jpg',
      alt: 'Pessoa despejando água de uma chaleira de bico de ganso em um aparelho cilíndrico preto de preparo manual, apoiado em um suporte, ao lado de um moedor e de embalagens de café',
      credito: 'Suwinai Sukanant / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/nai-rmtango249756',
    },
    relacionados: ['v60', 'prensa-francesa', 'moka'],
  },
  {
    slug: 'prensa-francesa',
    titulo: 'Como fazer café na prensa francesa',
    secao: 'preparo',
    descricao:
      'Passo a passo da prensa francesa para iniciantes: receita, moagem, tempo de infusão e como evitar borra e amargor.',
    imagem: {
      src: './img/artigos/prensa-francesa.jpg',
      alt: 'Prensa francesa de vidro com café pronto ao lado de uma xícara branca, sobre uma mesa de madeira',
      credito: 'Siraphol Siricharattakul / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/siraphol-siricharattakul',
    },
    relacionados: ['aeropress', 'coador-de-pano', 'moka'],
  },
  {
    slug: 'moka',
    titulo: 'Como fazer café na moka (cafeteira italiana)',
    secao: 'preparo',
    descricao:
      'Passo a passo da moka para iniciantes: como encher, o ponto do fogo, quando retirar e como evitar café amargo.',
    imagem: {
      src: './img/artigos/moka.jpg',
      alt: 'Funil de uma moka vermelha cheio de café moído, ao lado da parte superior da cafeteira aberta, sobre uma mesa de madeira',
      credito: 'kasarp Techawongtham / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/kasarp1968533984',
    },
    relacionados: ['prensa-francesa', 'aeropress', 'cold-brew'],
  },
  {
    slug: 'cold-brew',
    titulo: 'Como fazer cold brew',
    secao: 'preparo',
    descricao:
      'Passo a passo do cold brew para iniciantes: concentrado, tempo de infusão, moagem e como servir.',
    imagem: {
      src: './img/artigos/cold-brew.jpg',
      alt: 'Copo de vidro com cold brew e gelo sobre uma mesa de madeira ao ar livre, com grama ao fundo',
      credito: 'whoopie whoops / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/whoopiewhoops',
    },
    relacionados: ['prensa-francesa', 'aeropress', 'moka'],
  },
  {
    slug: 'cafe-coado',
    titulo: 'Café coado: pano e papel (Melitta)',
    secao: 'preparo',
    descricao:
      'Como fazer café coado no pano ou no filtro de papel: receita, cuidados com o coador e ajustes para o seu gosto.',
    relacionados: ['v60', 'prensa-francesa', 'cold-brew'],
  },
  {
    slug: 'espresso',
    titulo: 'Espresso: o que é e como ajustar a extração',
    secao: 'preparo',
    descricao:
      'Guia geral do espresso: dose, rendimento, tempo e moagem, como saber se a extração está certa e variações como ristretto e lungo.',
    imagem: {
      src: './img/artigos/espresso.jpg',
      alt: 'Espresso saindo do porta-filtro de uma máquina e caindo em um copo de vidro, com a bebida escura e cremosa em camadas',
      credito: 'René Pollock / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/109660095489604631044',
    },
    relacionados: ['moka', 'aeropress', 'v60'],
  },
  {
    slug: 'arabica-x-robusta',
    titulo: 'Arábica x Robusta: diferenças, sabor e quando usar',
    secao: 'saiba-mais',
    descricao:
      'Entenda as diferenças entre café arábica e robusta (conilon): sabor, corpo, cafeína, onde crescem e como escolher.',
    imagem: {
      src: './img/artigos/arabica-x-robusta.jpg',
      alt: 'Cacho de frutos verdes de café, ainda não maduros, em um ramo do cafeeiro cercado por folhas',
      credito: 'Gumfa Khransumran / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/sainan2522',
    },
    relacionados: ['processamento', 'torras', 'espresso'],
  },
  {
    slug: 'processamento',
    titulo: 'Processamento do café: natural, lavado e honey',
    secao: 'saiba-mais',
    descricao:
      'Entenda os processos natural, lavado e cereja descascado (honey) e como cada um muda o sabor do café.',
    relacionados: ['arabica-x-robusta', 'torras', 'moagem-por-metodo'],
  },
  {
    slug: 'torras',
    titulo: 'Torra do café: clara, média e escura',
    secao: 'saiba-mais',
    descricao:
      'Veja o que muda no sabor entre torra clara, média e escura, e qual escolher para cada método de preparo.',
    imagem: {
      src: './img/artigos/torras.jpg',
      alt: 'Grãos de café torrados dentro do tambor de um torrador, com a pá de resfriamento aberta',
      credito: 'René Pollock / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/109660095489604631044',
    },
    relacionados: ['arabica-x-robusta', 'processamento', 'moagem-por-metodo'],
  },
  {
    slug: 'moagem-por-metodo',
    titulo: 'Moagem ideal para cada método de preparo',
    secao: 'saiba-mais',
    descricao:
      'Tabela de moagem por método (espresso, Aeropress, moka, V60, café coado, prensa e cold brew) e como ajustar o moedor.',
    imagem: {
      src: './img/artigos/moagem-por-metodo.jpg',
      alt: 'Close do café moído com um grão torrado inteiro apoiado sobre o pó',
      credito: 'Prot Tachapanit / Vecteezy',
      creditoUrl: 'https://www.vecteezy.com/members/ptachapanit768025',
    },
    relacionados: ['arabica-x-robusta', 'processamento', 'torras'],
  },
  {
    slug: 'origem-do-cafe-na-etiopia',
    titulo: 'A origem do café na Etiópia: a lenda de Kaldi',
    secao: 'historia',
    descricao:
      'A lenda do pastor Kaldi e das cabras agitadas, e como o café saiu da Etiópia para o mundo.',
    relacionados: ['cafe-no-mundo-arabe', 'cafe-na-europa', 'cafe-no-brasil'],
  },
  {
    slug: 'cafe-no-mundo-arabe',
    titulo: 'O café no mundo árabe: do Iêmen às primeiras cafeterias',
    secao: 'historia',
    descricao:
      'Como o café chegou ao Iêmen, virou plantação, deu origem às primeiras cafeterias e quase foi proibido em Meca.',
    relacionados: ['origem-do-cafe-na-etiopia', 'cafe-na-europa', 'cafe-no-brasil'],
  },
  {
    slug: 'cafe-na-europa',
    titulo: 'O café chega à Europa: do Papa às cafeterias',
    secao: 'historia',
    descricao:
      'A desconfiança inicial, a história do Papa Clemente VIII e as cafeterias que viraram universidades de um centavo.',
    relacionados: ['cafe-no-mundo-arabe', 'cafe-no-brasil', 'origem-do-cafe-na-etiopia'],
  },
  {
    slug: 'cafe-no-brasil',
    titulo: 'Como o café chegou ao Brasil: a missão de Palheta',
    secao: 'historia',
    descricao:
      'A viagem de Francisco de Melo Palheta à Guiana Francesa em 1727 e como o café virou a maior riqueza do país.',
    relacionados: ['cafe-na-europa', 'cafe-em-minas-gerais', 'onda-do-cafe-especial'],
  },
  {
    slug: 'cafe-em-minas-gerais',
    titulo: 'O café em Minas Gerais: história e regiões produtoras',
    secao: 'historia',
    descricao:
      'A chegada do café a Minas, a República do Café com Leite e as regiões do Sul de Minas, Cerrado, Matas de Minas e Chapada.',
    relacionados: ['cafe-no-brasil', 'onda-do-cafe-especial', 'processamento'],
  },
  {
    slug: 'onda-do-cafe-especial',
    titulo: 'A terceira onda do café: o café especial em Minas',
    secao: 'historia',
    descricao:
      'O que é a terceira onda, o que muda no processo do café especial e os perfis de sabor de cada região de Minas.',
    relacionados: ['cafe-em-minas-gerais', 'torras', 'processamento'],
  },
]

export function relacionadosDe(artigo, todos = ARTIGOS) {
  const escolhidos = artigo.relacionados
    ? artigo.relacionados.map((slug) => todos.find((a) => a.slug === slug)).filter(Boolean)
    : todos.filter((a) => a.secao === artigo.secao && a.slug !== artigo.slug)
  return escolhidos.slice(0, 3)
}
