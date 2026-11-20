# Spec 11: Refinamento visual (mockup da home)

**Status:** pronto na `develop` (implementado em 2026-11-20, testado na Vercel e PageSpeed conferido); falta publicar na `main` com `npm run deploy`

## Origem

Mockup da home em artefato do claude.ai (https://claude.ai/artifact/A94VcYSMjJFSBBV8kBHFWC). É só visual: o texto, os links, os endereços e a estrutura do menu continuam como estão. Os links do mockup são `#...` (protótipo); no site real seguem `./pagina.html`.

## Por que é seguro para o Google e para o AdSense

- O Google avalia conteúdo, estrutura, velocidade e usabilidade no celular, não a estética.
- Botões maiores, foco visível e bom contraste ajudam na usabilidade.
- Riscos reais (a controlar): perder o nome do site como texto, layout que "pula" (CLS), anúncios mal posicionados e links quebrados.

## Decisões

- **Logo no cabeçalho:** o arquivo SVG `public/img/marca/logo-cafe-almanaque.svg` (30 KB, ~13 KB comprimido), referenciado por caminho absoluto `/img/marca/...` (um `./` em `<img>` dentro de `.vue` vira import e quebra). Não usar o PNG de 1600 px no cabeçalho.
- **Responsivo:**
  - A partir de **721 px**: logo completa com **80 px de altura** (148 × 80), no lugar do símbolo.
  - Até **720 px** (celular): continua o **símbolo (46 px) mais o nome em texto**, como hoje. A logo completa não fica legível com menos de ~64 px de altura.
- **Nome do site em texto:** na versão com logo, manter o nome como texto visualmente oculto (classe de leitor de tela), e não `display: none`, para o nome continuar no HTML. O link da marca mantém `aria-label="Café Almanaque, início"`.
- **CLS:** `<img>` da logo com `width` e `height` definidos; os espaços de anúncio mantêm o `min-height` do `AdSlot`.
- **Anúncios:** posições e quantidade inalteradas (um depois do hero, um no rodapé); nada acima do cabeçalho.

## Tarefas

- [x] 1. Cabeçalho: logo SVG em telas largas (≥ 721 px, 149 × 80) e símbolo mais texto no celular, com a legenda "O seu guia de café" (`SiteHeader.vue` e `style.css`). Conferido no navegador local em 1024 px e 375 px
- [x] 2. Rodapé: já era escuro (`--ink` com `--paper`) e com o mesmo menu; só troquei o estilo inline do nome por uma classe (`.footer-brand`). A borda tracejada do anúncio do mockup **não** foi aplicada: lá é um marcador de protótipo, e no site real apareceria como caixa vazia quando o anúncio não carrega
- [x] 3. Botões do destaque com altura mínima de 40 px (medido: 40 px). O contorno de foco (`:focus-visible`) e o movimento reduzido já existiam
- [x] 4. Tipografia: `text-wrap: balance` em `h1`, `h2` e `h3` (o `h1` já usava `clamp`)
- [x] 5. Card de destaque da home: "Ler o artigo" à esquerda e "Sortear outro" à direita, os dois com 40 px de altura
- [x] 6. Contraste (WCAG AA) conferido: texto em creme 15,5:1, link marrom em creme 6,9:1 e em papel 5,9:1, rodapé 13,3:1 (nota a 75% de opacidade 7,9:1), foco 6,7:1. Todos acima de 4,5:1
- [x] 7. Testar na Vercel (`develop`), no computador e no celular
- [x] 8. PageSpeed Insights (celular) na Vercel e comparar com a produção atual: nota igual ou melhor, sem aumento de CLS
- [ ] 9. Só então publicar com `npm run deploy`

## Fora do escopo

- Qualquer mudança de texto, URLs, títulos, menu ou posição dos anúncios.
- Versão da logo para fundo escuro (o rodapé usa só texto).
- Tema escuro do site inteiro.

## Critério de pronto

- Aparência igual à do mockup na home, nas duas larguras (celular e computador), e coerente nas demais páginas, que usam o mesmo cabeçalho e rodapé.
- Nota: com 80 px de logo mais a legenda, o menu quebra para uma segunda linha em telas largas (a soma passa de 840 px, como no mockup). Se incomodar: tirar a legenda no computador ou reduzir o tamanho da logo
- Nenhum link quebrado, nenhum erro novo no console, nome do site presente como texto.
- PageSpeed (celular) igual ou melhor que a produção, e CLS sem piora.

## Momento

Aplicar depois do deploy de 2026-11-20. Com a revisão do AdSense em andamento, um refinamento só visual e testado tem risco baixo; se preferir o caminho conservador, aguardar o resultado da revisão antes de publicar (ver spec 10).
