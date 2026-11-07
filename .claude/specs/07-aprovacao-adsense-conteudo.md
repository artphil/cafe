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
- Meta: 24 páginas novas (20 planejadas mais 3 variações do V60 e 1 espresso extra), em lotes, sem data fixa (cada lote fica pronto quando ficar)
- Lista final (ordem de prioridade):
  - Lote A, métodos: V60 (com 3 variações), Aeropress, Prensa francesa, Moka, Espresso
  - Lote B, preparo: Coador de pano, Cold brew, Comparativo de métodos, Moagem × método, Proporção água/café
  - Lote C, grãos: Arábica × Robusta, Regiões produtoras, Torras, Processamento, Glossário (geral, ver Decisões)
  - Lote D, evergreen: Armazenamento, Água ideal, Equipamentos para iniciantes, Cantinho do café, Receitas com café
- Autoria: sem assinatura por artigo; a autoria fica só na página Sobre
- Imagens: mistura de banco gratuito (Unsplash/Pexels/Pixabay) e fotos próprias; 1 imagem de topo por artigo (20 no total), com legenda, crédito ("foto própria" ou autor/banco) e texto alternativo descritivo
- Navegação: as seções atuais viram índices (cards para os artigos); o menu não ganha itens novos além de Sobre
- Colocação dos artigos: **Preparo** (antes Métodos, renomeada em rótulo e URL para `preparo.html`) recebe lotes A e B mais Água ideal, Equipamentos para iniciantes e Receitas com café (13 páginas); **Saiba mais** recebe lote C mais Armazenamento e Cantinho do café (7 páginas)
- Cards substituem o acordeão aos poucos: cada item de acordeão aponta para o slug do seu artigo (`<AccordionItem artigo="slug">`) e some quando o artigo existe; os dois convivem até haver um artigo para cada item, e então o acordeão sai. O índice de cards fica no topo da seção
- Cada variação do V60 é um artigo próprio (um só ficava com informação demais): `v60` (clássico), `v60-pour-continuo`, `v60-pulse-pour`, `v60-metodo-4-6`. Total passa de 20 para 23 páginas
- Glossário: um artigo só, em Saiba mais (slug `glossario`), que o autor vai atualizando; substitui o "Glossário sensorial" do lote C e inclui os termos sensoriais (corpo, acidez, doçura, notas) junto com os de preparo (bloom, moagem etc.)
  - Termos em `src/data/glossario.js` (`termo`, `definicao`, `veja_tambem` opcional), exibidos em ordem alfabética com índice A a Z no topo e data de última atualização
  - Cada termo tem âncora (`./glossario.html#bloom`) para os outros artigos linkarem
  - Sem páginas por termo (ficariam curtas demais para o AdSense); dividir em 2 ou 3 artigos por tema só se passar de ~80 a 100 termos
- Espresso vira 2 artigos: `espresso` (geral: o que é, parâmetros, como julgar a extração) e `espresso-domestico` (máquina doméstica: moedor, prensagem, ajustes). Total passa de 23 para 24 páginas
- Fotos guardadas em `assets/photos/` para artigos ainda não escritos: `espresso-pollock.jpeg` (espresso saindo do porta-filtro) e `roster-pollock.jpeg` (tambor de torrador, para Torras), ambas de René Pollock / Vecteezy (https://www.vecteezy.com/members/109660095489604631044)
- Remoção do acordeão de Preparo (e do modal "Comparar métodos"): só depois de cobrir todos os itens. Já cobertos: V60 (com 3 variações), Aeropress, Prensa francesa, Moka, Cold brew e Café coado (`cafe-coado`, pano e Melitta num artigo só; o acordeão do coador de pano aponta para esse slug). Comparativo de métodos (`comparativo-de-metodos`) já escrito, só dos métodos tradicionais (sem espresso; as variações do espresso ficam para depois). Com isso o acordeão e o modal de Preparo podem ser removidos (tarefa 15b), depois da revisão do autor. Espresso não tem acordeão
- Comparativo de métodos é um artigo introdutório de Preparo (`comparativo-de-metodos`): o que são os grupos de método (imersão, filtro, pressão), tabela comparando tempo, equipamento, custo, dificuldade e perfil de sabor, e "qual escolher" por perfil de quem bebe, com link para cada artigo de método. Deve ser o primeiro card do índice (ficar no início da lista em `artigos.js`) e ser linkado no texto de abertura de Preparo
- Pendência do autor: baixar em 2026-11-08 a foto do cold brew (https://www.vecteezy.com/photo/60568139-glass-of-iced-americano-coffee-or-cold-brew-on-a-table), crédito "whoopie whoops / Vecteezy" (https://www.vecteezy.com/members/whoopiewhoops); depois registrar em `artigos.js` e `public/img/artigos/cold-brew.jpg`
- Foto de Chemex guardada em `assets/photos/v60-serejkakovalev.jpg` (serejkakovalev / Vecteezy, https://www.vecteezy.com/members/serejkakovalev) para um possível artigo de Chemex, que não está na lista dos 23
- Molde dos artigos de método: ficha técnica (`FichaReceita.vue`) e seções na mesma ordem em todos, com unidades padronizadas; descrito em `.claude/claude.md`. Os 4 artigos do V60 já seguem o molde; os próximos devem seguir
- Regra: o artigo deve cobrir todos os subitens do acordeão que substitui (ex.: o V60 tinha Clássico, Pour contínuo, Pulse Pour e Método 4:6); senão o conteúdo some do site ao esconder o acordeão. Conferir os subitens antes de escrever cada artigo
- Slugs já ligados nos acordeões: `v60`, `aeropress`, `prensa-francesa`, `coador-de-pano`, `moka`, `cold-brew` (Preparo); `arabica-x-robusta`, `processamento`, `torras` (Saiba mais). Ao escrever um desses artigos, use exatamente esse slug
- História segue o mesmo padrão (seção `historia` nos artigos, bloco "Aprofunde-se"); ainda não há artigos de História na lista de 20
- Ficam de fora por ora: sifão, erros comuns, café e saúde, roteiros de cafeterias

## Tarefas
Cada tarefa cabe numa sessão. As de discussão vêm primeiro porque destravam as demais.

- [x] 1. **Discutir** temas e meta (ver Decisões)
- [x] 2. **Discutir** autoria e imagens (ver Decisões)
- [x] 3. **Discutir** navegação (ver Decisões)
- [x] 4. **Desenvolver** infraestrutura de artigo: uma lista única de páginas (título, slug, seção, descrição) alimenta `vite.config.js`, `entry-server.js` e os HTMLs, com um componente de artigo. Pronto quando: acrescentar um item à lista gera a página pré-renderizada no `dist/`, sem criar 5 arquivos à mão
- [x] 5. **Desenvolver** componentes de artigo: imagem de topo com legenda e crédito, "leia também" (sem assinatura de autor, ver Decisões). Pronto quando: aparecem no artigo piloto
- [x] 6. **Desenvolver** renomeação de Métodos para Preparo: `metodos.html` vira `preparo.html` (HTML, `main-*.js`, `Page.vue`, `vite.config.js`, `entry-server.js`), com rótulo atualizado no header, rodapé, home, destaques e nos links de outras páginas. Pronto quando: `grep` por `metodos` em `src/` e nos HTMLs da raiz não acha nada e `dist/preparo.html` existe
- [x] 7. **Desenvolver** índices de Preparo e Saiba mais: cada um lista seus artigos em cards (título, descrição curta, imagem) lidos da lista única da tarefa 4. Pronto quando: um item novo na lista aparece no índice da seção sem edição manual
- [x] 8. **Escrever** artigo piloto (~600+ palavras, com foto) para validar template e tom. Pronto quando: publicado no `dist/` e aprovado pelo autor
- [x] 9. **Escrever** texto editorial da home (~300 palavras além dos links). Pronto quando: sem texto placeholder e com links para as seções
- [ ] 10. **Coletar** dados reais das 4 cafeterias (endereço, bairro, site/Instagram, descrição de 1 a 2 frases). Pronto quando: tabela com os 4 preenchidos (depende do autor)
- [x] 11. **Desenvolver** limpeza das cafeterias: preencher a planilha e remover os placeholders do fallback em `src/data/cafes.js`. Pronto quando: `grep` por `aqui` e `"#"` em `cafes.js` não acha nada e os 4 aparecem no `dist/cafeterias.html` (depende de 10)
- [ ] 12. **Escrever** lote A, métodos: V60, Aeropress, Prensa francesa, Moka, Espresso (~600+ palavras cada). Pronto quando: 5 páginas publicadas e linkadas (depende de 4, 5, 7 e 8)
- [ ] 13. **Escrever** lote B, preparo: Coador de pano, Cold brew, Comparativo de métodos, Moagem × método, Proporção água/café. Pronto quando: 5 páginas publicadas e linkadas
- [ ] 14. **Escrever** lote C, grãos: Arábica × Robusta, Regiões produtoras, Torras, Processamento, Glossário (geral, ver Decisões; estrutura em `src/data/glossario.js`). Pronto quando: 5 páginas publicadas e linkadas, e o glossário com A a Z e ao menos os termos usados nos artigos já escritos
- [ ] 15. **Escrever** lote D, evergreen: Armazenamento, Água ideal, Equipamentos para iniciantes, Cantinho do café, Receitas com café (as três últimas de preparo vão para Preparo, as demais para Saiba mais). Pronto quando: 5 páginas publicadas e linkadas no índice certo
- [x] 15b. **Desenvolver** remoção do acordeão de Preparo e do modal "Comparar métodos": apagar os blocos e o `BaseModal` da página quando `cold-brew`, o artigo de coador e `comparativo-de-metodos` existirem. Pronto quando: `Preparo.vue` só tem hero, anúncio e o índice de cards, e nenhum texto que estava no acordeão sumiu
- [ ] 16. **Auditar** anúncios e conteúdo: decidir se o anúncio do rodapé fica nas páginas institucionais, e checar que toda página tem texto próprio e nenhum placeholder. Pronto quando: script ou checklist registrado mostra todas as páginas com ~600+ palavras (ou sem anúncio, se institucional)
- [ ] 17. **Reenviar** para análise do AdSense, de 2 a 4 semanas após publicar, e decidir antes se a spec 10 (domínio próprio) vem primeiro. Pronto quando: pedido enviado e data registrada

## Critério de pronto
Nenhuma página com texto placeholder; cada página com conteúdo próprio e útil.
