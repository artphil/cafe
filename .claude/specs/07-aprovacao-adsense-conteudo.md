# Spec 07: Conteúdo para aprovação no AdSense

**Status:** em andamento

## Problema
O Google reprovou o site por conteúdo de baixo valor.

## Situação atual
- Páginas de conteúdo: História, Métodos, Saiba mais (blocos em acordeão), Cafeterias, Home, mais as institucionais (spec 09)
- Cafeterias: `src/data/cafes.js` ainda tem placeholders no fallback (`[endereço aqui]`, `site: "#"`)
- Cada página nova exige hoje 5 arquivos (HTML, `main-*.js`, `Page.vue`, `vite.config.js`, `entry-server.js`), o que não escala para 15 a 25 páginas

## Suposições
- Os artigos novos viram páginas próprias (não mais blocos de acordeão), sem modelo de blog, como na spec 02
- Temas saem da lista da spec 02 (métodos, grãos, evergreen)
- Texto escrito pelo autor com apoio de IA e revisão, como declarado na página Sobre
- Reenvio ao AdSense só depois do conteúdo publicado (2 a 4 semanas)

## Decisões
- Meta: 20 páginas novas, em 4 lotes de 5, sem data fixa (cada lote fica pronto quando ficar)
- Lista final (ordem de prioridade):
  - Lote A, métodos: V60, Aeropress, Prensa francesa, Moka, Espresso
  - Lote B, preparo: Coador de pano, Cold brew, Comparativo de métodos, Moagem × método, Proporção água/café
  - Lote C, grãos: Arábica × Robusta, Regiões produtoras, Torras, Processamento, Glossário sensorial
  - Lote D, evergreen: Armazenamento, Água ideal, Equipamentos para iniciantes, Cantinho do café, Receitas com café
- Autoria: sem assinatura por artigo; a autoria fica só na página Sobre
- Imagens: mistura de banco gratuito (Unsplash/Pexels/Pixabay) e fotos próprias; 1 imagem de topo por artigo (20 no total), com legenda, crédito ("foto própria" ou autor/banco) e texto alternativo descritivo
- Navegação: as seções atuais viram índices (cards para os artigos); o menu não ganha itens novos além de Sobre
- Colocação dos artigos: **Preparo** (antes Métodos, renomeada em rótulo e URL para `preparo.html`) recebe lotes A e B mais Água ideal, Equipamentos para iniciantes e Receitas com café (13 páginas); **Saiba mais** recebe lote C mais Armazenamento e Cantinho do café (7 páginas)
- Ficam de fora por ora: sifão, erros comuns, café e saúde, roteiros de cafeterias

## Tarefas
Cada tarefa cabe numa sessão. As de discussão vêm primeiro porque destravam as demais.

- [x] 1. **Discutir** temas e meta (ver Decisões)
- [x] 2. **Discutir** autoria e imagens (ver Decisões)
- [x] 3. **Discutir** navegação (ver Decisões)
- [x] 4. **Desenvolver** infraestrutura de artigo: uma lista única de páginas (título, slug, seção, descrição) alimenta `vite.config.js`, `entry-server.js` e os HTMLs, com um componente de artigo. Pronto quando: acrescentar um item à lista gera a página pré-renderizada no `dist/`, sem criar 5 arquivos à mão
- [ ] 5. **Desenvolver** componentes de artigo: imagem de topo com legenda e crédito, "leia também" (sem assinatura de autor, ver Decisões). Pronto quando: aparecem no artigo piloto (código escrito em `ArtigoImagem.vue`, `LeiaTambem.vue` e `Artigo.vue`; falta validar com a tarefa 8)
- [x] 6. **Desenvolver** renomeação de Métodos para Preparo: `metodos.html` vira `preparo.html` (HTML, `main-*.js`, `Page.vue`, `vite.config.js`, `entry-server.js`), com rótulo atualizado no header, rodapé, home, destaques e nos links de outras páginas. Pronto quando: `grep` por `metodos` em `src/` e nos HTMLs da raiz não acha nada e `dist/preparo.html` existe
- [ ] 7. **Desenvolver** índices de Preparo e Saiba mais: cada um lista seus artigos em cards (título, descrição curta, imagem) lidos da lista única da tarefa 4. Pronto quando: um item novo na lista aparece no índice da seção sem edição manual
- [ ] 8. **Escrever** artigo piloto (~600+ palavras, com foto) para validar template e tom. Pronto quando: publicado no `dist/` e aprovado pelo autor
- [ ] 9. **Escrever** texto editorial da home (~300 palavras além dos links). Pronto quando: sem texto placeholder e com links para as seções
- [ ] 10. **Coletar** dados reais das 4 cafeterias (endereço, bairro, site/Instagram, descrição de 1 a 2 frases). Pronto quando: tabela com os 4 preenchidos (depende do autor)
- [ ] 11. **Desenvolver** limpeza das cafeterias: preencher a planilha e remover os placeholders do fallback em `src/data/cafes.js`. Pronto quando: `grep` por `aqui` e `"#"` em `cafes.js` não acha nada e os 4 aparecem no `dist/cafeterias.html` (depende de 10)
- [ ] 12. **Escrever** lote A, métodos: V60, Aeropress, Prensa francesa, Moka, Espresso (~600+ palavras cada). Pronto quando: 5 páginas publicadas e linkadas (depende de 4, 5, 7 e 8)
- [ ] 13. **Escrever** lote B, preparo: Coador de pano, Cold brew, Comparativo de métodos, Moagem × método, Proporção água/café. Pronto quando: 5 páginas publicadas e linkadas
- [ ] 14. **Escrever** lote C, grãos: Arábica × Robusta, Regiões produtoras, Torras, Processamento, Glossário sensorial. Pronto quando: 5 páginas publicadas e linkadas
- [ ] 15. **Escrever** lote D, evergreen: Armazenamento, Água ideal, Equipamentos para iniciantes, Cantinho do café, Receitas com café (as três últimas de preparo vão para Preparo, as demais para Saiba mais). Pronto quando: 5 páginas publicadas e linkadas no índice certo
- [ ] 16. **Auditar** anúncios e conteúdo: decidir se o anúncio do rodapé fica nas páginas institucionais, e checar que toda página tem texto próprio e nenhum placeholder. Pronto quando: script ou checklist registrado mostra todas as páginas com ~600+ palavras (ou sem anúncio, se institucional)
- [ ] 17. **Reenviar** para análise do AdSense, de 2 a 4 semanas após publicar, e decidir antes se a spec 10 (domínio próprio) vem primeiro. Pronto quando: pedido enviado e data registrada

## Critério de pronto
Nenhuma página com texto placeholder; cada página com conteúdo próprio e útil.
