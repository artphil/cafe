# Café Almanaque — projeto Vite + Vue (multi-página)

Mesma estrutura de 5 páginas de antes, agora sem duplicação de código: cabeçalho, rodapé, acordeão, modal e outros pedaços repetidos viraram componentes Vue reaproveitados. No build, cada página continua virando um **arquivo `.html` real e separado** — sem SPA, sem router — então a decisão de priorizar AdSense/indexação continua valendo.

## Estrutura

```
index.html          → entrada da Home
historia.html        → entrada da página História
preparo.html          → entrada da página Preparo
saiba-mais.html        → entrada da página Saiba mais
cafeterias.html          → entrada da página Cafeterias

src/
  style.css                  → visual do site (igual ao da versão HTML puro)
  main-home.js, main-historia.js, ...   → um arquivo de entrada por página
  pages/
    Home.vue, Historia.vue, Preparo.vue, SaibaMais.vue, Cafeterias.vue (SaibaMais.vue mostra como "Saiba mais")
  components/
    SiteHeader.vue     → cabeçalho + navegação (usado nas 5 páginas)
    SiteFooter.vue      → rodapé + anúncio fixo (usado nas 5 páginas)
    AdSlot.vue           → bloco de anúncio in-content
    IndiceArtigos.vue     → cards dos artigos de uma seção
    ArtigoImagem.vue, LeiaTambem.vue, FichaReceita.vue, CompartilharArtigo.vue → peças dos artigos
    Spotlight.vue            → destaque aleatório da home
    CafeGrid.vue               → grid de cafeterias (busca a planilha)
  artigos/            → corpo de cada artigo (<slug>.vue, só o <template>)
  artigo-corpo.js, main-artigo.js, pages/Artigo.vue  → página de artigo (layout e entrada únicos)
  data/
    artigos.js   → lista única dos artigos (cada item vira /<slug>.html)
    cafes.js         → URL da planilha + dados de exemplo (fallback)
```

Textos marcados como `[conteúdo aqui — ...]` continuam sendo placeholder.

## Como rodar

Precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou mais recente).

```bash
npm install       # instala Vite, Vue e as dependências
npm run dev       # roda localmente em http://localhost:5173 (com recarregamento automático)
npm run build     # gera a versão final na pasta dist/ (isso é o que vai pro GitHub Pages)
npm run preview   # visualiza a pasta dist/ localmente, pra conferir antes de publicar
```

Sempre que editar um `.vue`, `.js` ou `.css`, rode `npm run build` de novo antes de publicar — é a pasta **`dist/`** (gerada pelo build) que deve subir pro GitHub Pages, não a pasta `src/`.

## Publicar no GitHub Pages

1. Em `vite.config.js`, ajuste a linha `base:`:
   - Se o repositório se chama, por exemplo, `grao-cafe`, o site fica em `usuario.github.io/grao-cafe/` → troque `base: './'` por `base: '/grao-cafe/'`
2. Rode `npm run build` — isso gera a pasta `dist/` com os 5 HTMLs finais, prontos, sem Vue "aparente" (é HTML/CSS/JS puro no resultado)
3. Suba o conteúdo de `dist/` pro repositório (direto, ou via GitHub Actions automatizando o build a cada push — posso montar esse workflow se quiser)
4. Ative o GitHub Pages apontando pra pasta/branch onde `dist/` foi publicada

## Cafeterias, formulário, AdSense e Analytics

Mesma configuração de antes, só que os arquivos mudaram de lugar:

- **Planilha**: edite a constante `CAFES_SHEET_URL` em `src/data/cafes.js` com o ID real da sua planilha
- **Formulário**: troque o `src` do `<iframe>` em `src/pages/Cafeterias.vue` pelo link de incorporação do seu Google Forms
- **AdSense**: depois de aprovado, troque cada `<div class="ad-slot">` (em `AdSlot.vue` e `SiteFooter.vue`) pelo snippet real do bloco de anúncio, e adicione o script principal (`adsbygoogle.js`) no `<head>` de cada um dos 5 arquivos `.html` da raiz
- **Analytics**: já tem um bloco comentado no `<head>` do `index.html` — copie o mesmo bloco pros outros 4 HTMLs de entrada e troque `G-XXXXXXXXXX` pelo seu ID

## Escrever o conteúdo

Edite diretamente os arquivos em `src/pages/*.vue`, substituindo os textos `[conteúdo aqui — ...]`. O destaque sorteado na home lê os próprios artigos de `src/data/artigos.js`, então um artigo novo entra no sorteio sozinho.

## Criar um artigo

1. Acrescente um item em `src/data/artigos.js` (slug, titulo, secao, descricao e, se houver, `imagem` com arquivo em `public/img/artigos/`).
2. Crie `src/artigos/<slug>.vue` com o texto dentro de `<template>`.
3. Reinicie `npm run dev` (a lista é lida na inicialização) e rode `npm run build` para gerar e pré-renderizar a página.

O card do artigo aparece sozinho no índice da seção (`IndiceArtigos.vue`, nas páginas Preparo e Saiba mais) e em "Leia também" dos outros artigos.

O HTML da página não existe como arquivo: `scripts/vite-plugin-artigos.js` o gera no build e o serve no dev.

## Molde dos artigos de método de preparo

Todo artigo de método (V60, Aeropress, prensa francesa etc.) segue a mesma ordem de seções `h2`:

1. Introdução (1 a 2 parágrafos: o que é, para quem serve, link para o clássico quando for variação)
2. **Receita de partida**, com o componente `FichaReceita` (café, água, proporção, temperatura, moagem, tempo total, "indicado para")
3. **O que você vai precisar**
4. **Passo a passo** (lista numerada, sem listas aninhadas)
5. **Como ajustar o gosto** (subtítulos `h3`: amargo, ácido, tempo/fluxo, corpo)
6. **Erros comuns**

Só o artigo-base de um método tem as seções extras "O que é ..." (antes da receita) e "Variações da receita" (no fim). O "Leia também" já vem do componente, então não repetir links no fim.

Padrão de escrita: gramas com espaço ("20 g"), água sempre em gramas (a receita pede balança), proporção "1:15", temperatura "90 a 96 °C", tempo "2:30 a 3:30". Dose de referência das variações do V60: 20 g de café e 300 g de água (1:15), para duas xícaras; os demais métodos usam a dose que fizer sentido para eles, sempre na ficha.

## Ambientes

- **Produção** (branch `main`): Cloudflare, em `cafealmanaque.com`. Carrega AdSense e Analytics.
- **Teste** (branch `develop`): Vercel. Cadastre lá a variável de build `VITE_AMBIENTE=teste` (em Production e Preview). Com ela, o build omite o AdSense e o Analytics, esconde os espaços de anúncio, acrescenta `noindex` e gera um `robots.txt` que bloqueia tudo (sem sitemap).
- O interruptor fica em `vite.config.js` (plugin `ambienteDeTeste`) e em `src/components/AdSlot.vue`.
- Para testar localmente: `VITE_AMBIENTE=teste npm run build` e conferir que `dist/` não tem `adsbygoogle` nem `googletagmanager`.
