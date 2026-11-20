# Spec 11: Refinamento visual (mockup da home)

**Status:** planejado (a aplicar na `develop` depois do deploy de 2026-11-20)

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
- [ ] 1. Cabeçalho: logo SVG em telas largas e símbolo mais texto no celular, com a legenda "O seu guia de café" (`SiteHeader.vue` e `style.css`)
- [ ] 2. Rodapé escuro (fundo `--ink`, texto `--paper`), com o mesmo menu, o anúncio com borda tracejada clara e "by Artphil" (`SiteFooter.vue` e `style.css`)
- [ ] 3. Botões com altura mínima de 40 px, contorno de foco visível (`:focus-visible`) e transições só quando o usuário não pede movimento reduzido
- [ ] 4. Tipografia: `text-wrap: balance` nos títulos e tamanho do `h1` com `clamp`
- [ ] 5. Card de destaque da home: "Ler o artigo" à esquerda e "Sortear outro" à direita, com a mesma altura de toque
- [ ] 6. Conferir contraste (WCAG AA) de links e textos nas duas cores de fundo
- [ ] 7. Testar na Vercel (`develop`), no computador e no celular
- [ ] 8. PageSpeed Insights (celular) na Vercel e comparar com a produção atual: nota igual ou melhor, sem aumento de CLS
- [ ] 9. Só então publicar com `npm run deploy`

## Fora do escopo
- Qualquer mudança de texto, URLs, títulos, menu ou posição dos anúncios.
- Versão da logo para fundo escuro (o rodapé usa só texto).
- Tema escuro do site inteiro.

## Critério de pronto
- Aparência igual à do mockup na home, nas duas larguras (celular e computador), e coerente nas demais páginas, que usam o mesmo cabeçalho e rodapé.
- Nenhum link quebrado, nenhum erro novo no console, nome do site presente como texto.
- PageSpeed (celular) igual ou melhor que a produção, e CLS sem piora.

## Momento
Aplicar depois do deploy de 2026-11-20. Com a revisão do AdSense em andamento, um refinamento só visual e testado tem risco baixo; se preferir o caminho conservador, aguardar o resultado da revisão antes de publicar (ver spec 10).
