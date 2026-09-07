# Spec — Site Estático sobre Café

## 1. Objetivo

Site estático sobre café, cobrindo métodos de preparo, tipos de grãos e cafeterias de Belo Horizonte (entre outros temas relacionados), com espaço para testar monetização via **Google AdSense**.

## 2. Stack e decisões já tomadas

| Item                                   | Decisão                                                                                                   |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Tipo de site                           | Estático (HTML/CSS/JS), hospedado com domínio público e HTTPS (ex: GitHub Pages, Netlify, Vercel)         |
| Monetização                            | Google AdSense (não AdMob — esse é para apps)                                                             |
| Banco de dados                         | Nenhum. Conteúdo evergreen escrito direto nas páginas                                                     |
| Dados de estabelecimentos (cafeterias) | Planilha Google Sheets, consumida via `fetch()` no front-end (CSV publicado ou API tipo opensheet.elk.sh) |
| Manutenção                             | Mínima — só a planilha de cafeterias precisa de atualização ocasional (fechamentos, novos endereços)      |

## 3. Estrutura de conteúdo (sem exigir manutenção constante)

**Métodos de preparo**

- Guias individuais: V60, Aeropress, prensa francesa, coador de pano, moka, espresso, cold brew, sifão
- Comparativo de métodos (rapidez, equipamento, perfil de sabor)
- Relação moagem × método
- Proporção água/café por método
- Erros comuns por preparo

**Tipos de grãos**

- Arábica vs Robusta
- Regiões produtoras (Minas, Cerrado, Sul de Minas, Mogiana, etc.)
- Torras: clara, média, escura
- Processamento: natural, lavado, cereja descascado, honey
- Glossário sensorial (corpo, acidez, doçura, notas)

**Cafeterias de Belo Horizonte** _(única seção com dado "vivo", via planilha)_

- Lista por bairro/região
- Roteiros temáticos (trabalhar, especialidade, torra própria)
- Perfis de torrefadoras locais

**Conteúdo relacionado (evergreen)**

- Armazenamento correto do café
- Água ideal (dureza, temperatura)
- Café e saúde (cafeína — com fontes)
- Equipamentos essenciais para iniciantes
- Glossário geral de café
- História/curiosidades do café no Brasil e em Minas
- Como montar um "cantinho do café" em casa
- Receitas com café (drinks, sobremesas)

## 4. Arquitetura de dados — cafeterias

- Fonte: Google Sheets com colunas sugeridas: `nome`, `bairro`, `endereço`, `categoria` (ex: especialidade, torra própria, pet friendly), `site/instagram`, `observações`
- Publicação: CSV publicado na web **ou** endpoint via opensheet.elk.sh (JSON)
- Front-end faz fetch da planilha e renderiza a lista/filtros em JS puro (sem framework necessário, mas pode usar um se preferir)
- Atualização de dados = editar a planilha, sem novo deploy

**Formulário de sugestão de novas cafeterias**

- Usar **Google Forms** vinculado a uma segunda aba (ou segunda planilha) do mesmo Google Sheets
- Sugestões caem numa aba "pendente" — você revisa manualmente e move pra aba "publicada" (que é a que o site lê)
- Isso evita publicar sugestões sem curadoria e mantém o site 100% estático (sem backend próprio)
- Alternativa mais simples: embutir o próprio Google Forms como iframe na página, sem precisar de nada customizado

## 5. Requisitos para aprovação no AdSense (referência)

- Conteúdo original, substancial (várias páginas, não só a home)
- Navegação funcional, sem links quebrados
- Política de Privacidade obrigatória (por causa de cookies/anúncios)
- Página "Sobre" e "Contato" recomendadas
- Nada de placeholder/lorem ipsum

## 6. Informações necessárias antes de começar a desenvolver

**Identidade do site**

- [x] Nome do site/marca: **Café BH**
- [x] Domínio: sem domínio próprio por enquanto — usar subdomínio do GitHub Pages (`usuario.github.io/grao-cafe` ou similar)
- [x] Tom de voz: **casual**
- [x] Público-alvo: **iniciantes e entusiastas** de café

**Estrutura e navegação**

- [x] Áreas confirmadas para a v1:
  1. **História do café**
  2. **Métodos de preparo**
  3. **Saiba mais**: tipo de grão, tipo de torra, moagens
  4. **Cafeterias em BH** (com formulário para sugestão de novas cafeterias)
- [x] Menu principal: sem modelo de "blog"/posts — conteúdo organizado como páginas fixas por seção (não por data de publicação)
- [x] Página inicial: destaque **aleatório** a cada carregamento, sorteado entre: um método de preparo, um item de categoria (grão/torra/moagem) ou uma curiosidade da seção história. Implementável em JS puro (array de itens + `Math.random()`), sem precisar de dado externo

**Conteúdo**

- [x] Quem escreve: **você, com apoio de IA**
- [x] Quantas páginas na v1: **5** (Home + História, Métodos de preparo, Saiba mais, Cafeterias em BH)
- [x] Não há conteúdo pronto ainda — será criado do zero
- [x] Imagens: buscadas/criadas conforme necessidade (banco a definir na hora — stock gratuito ou geração de imagem)

**Dados de cafeterias**

- [x] Lista inicial de estabelecimentos: **Oop Café, Cheirin Bão, Belô Café, Ô Café**
- [x] Critério de curadoria: cafeterias que você conhece pessoalmente/recomenda + sugestões recebidas via formulário (revisadas antes de publicar)
- [x] Manutenção da planilha: **manual**, por você
- [x] Campos da planilha — proposta (obrigatórios marcados com \*):

| Campo                    | Obrigatório? | Observação                                                                                                    |
| ------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------- |
| Nome                     | \*           |                                                                                                               |
| Endereço                 | \*           |                                                                                                               |
| Bairro                   | Sugerido     | facilita filtro/busca por região                                                                              |
| Site/Instagram           | \*           |                                                                                                               |
| Descrição breve          | \*           | 1-2 frases                                                                                                    |
| Categoria/tags           | Sugerido     | ex: especialidade, torra própria, pet friendly, boa pra trabalhar                                             |
| Faixa de preço           | Opcional     | ex: $ / $$ / $$$                                                                                              |
| Horário de funcionamento | Opcional     | tende a desatualizar mais rápido — avaliar se vale o esforço                                                  |
| Foto                     | Opcional     | link de imagem, se quiser ilustrar o card                                                                     |
| Status                   | Interno      | `publicada` / `pendente` — controla o que aparece no site (separa sugestões recebidas do que já foi revisado) |

**Técnico**

- [x] Onde hospedar: **GitHub Pages**
- [x] Arquitetura: **multi-página (páginas HTML reais)** — decisão trocada de SPA para priorizar AdSense/indexação
- [x] Anúncios AdSense: presentes no **conteúdo estático** (história, métodos, categorias) + **rodapé fixo** em todas as páginas. A página de **cafeterias em BH** só tem o anúncio do rodapé (sem anúncio no meio do conteúdo)
- [x] Gerador: **HTML puro**, 5 páginas (Home + 4 de conteúdo: História, Métodos de preparo, Saiba mais, Cafeterias em BH)
- [x] Padrão de UI: **acordeão e modal** para evitar excesso de informação visível de uma vez
- [x] Busca interna: **não**, por enquanto
- [x] Analytics: **sim**, incluir Google Analytics junto com o AdSense

**AdSense**

- [x] Conta AdSense: **já existe** (usada anteriormente em outro blog), falta só configurar/vincular ao novo site
- [x] Ciente que aprovação pode demorar dias/semanas e exige conteúdo real publicado antes

## 7. Observações técnicas

- **Decisão de arquitetura**: optado por páginas HTML reais (multi-página) em vez de SPA, justamente para priorizar AdSense e indexação — cada página já carrega com conteúdo pronto no HTML, sem depender de JS rodar primeiro.
- **Gerador sugerido**: dado o abandono do SPA, o Nuxt em modo `generate` continua sendo uma boa opção (gera HTML real por página, com Vue por trás pra facilitar reaproveitar componentes como cabeçalho/rodapé/card de cafeteria). HTML puro também resolve, com mais trabalho manual de repetição entre páginas.

---

Quer que eu já comece pela estrutura técnica (esqueleto de páginas + integração da planilha) ou prefere fechar primeiro as respostas da seção 6?
