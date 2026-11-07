# Spec 03: Cafeterias, dados e formulário

**Status:** existente (planilha migrada para o modelo novo em 2026-11-06; descrições ainda curtas, ver spec 07)

## Fonte de dados
- Google Sheets, publicado como CSV ou JSON via opensheet.elk.sh
- Front-end faz `fetch` e renderiza lista/filtros
- Atualizar dados = editar a planilha, sem deploy
- Manutenção manual

## Lista inicial
Oop Café, Cheirin Bão, Belô Café, Ô Café. Critério: lugares que o autor conhece/recomenda + sugestões revisadas.

## Campos da planilha
Nomes das colunas em minúsculas, sem acento, exatamente como abaixo (o `CafeGrid.vue` lê por esses nomes).

| Coluna | Obrigatória | Obs. |
| --- | --- | --- |
| `nome` | sim | título do card |
| `bairro` | sim | filtro por região; substitui `regiao` |
| `endereco` | sim | rua e número, sem o bairro |
| `maps_url` | opcional | link do Google Maps; sem ele o site gera uma busca pelo nome e endereço |
| `site` | um dos dois | site oficial |
| `instagram` | um dos dois | perfil; substitui `insta` |
| `descricao` | sim | 1-2 frases factuais (ambiente, o que servem) |
| `destaque` | sugerida | opinião curta do autor ("peça o…", "vá para…"); dá conteúdo original |
| `categoria` | sim | tags separadas por vírgula: `especialidade`, `torra própria`, `boa pra trabalhar`, `pet friendly` |
| `preco` | opcional | `$`, `$$` ou `$$$` |
| `visitado` | interna | `sim` / `não`: o autor conhece pessoalmente (critério de curadoria) |
| `atualizado_em` | interna | data da última checagem dos dados |
| `status` | interna | `publicada` / `pendente` / `oculta` |

Fora do modelo de propósito: horário de funcionamento (desatualiza rápido; o leitor vai ao site ou Instagram), telefone, foto e cardápio.

## Exibição no site (`CafeGrid.vue`)
- Mostra: `nome`, `endereco · bairro`, `preco` e `categoria` como tags, `descricao`, `destaque` e links (Site, Instagram, Mapa)
- Não mostra as colunas internas (`visitado`, `atualizado_em`, `status`)
- Só exibe linhas com `status` `publicada`; linha sem `status` também aparece
- Texto de exemplo na `categoria` (começando por `[`) é ignorado

## Formulário de sugestão
- Google Forms ligado a uma aba separada de respostas (`pendente`); a revisão manual copia para a aba publicada (a única lida pelo site)
- O formulário deve pedir as mesmas colunas obrigatórias (nome, bairro, endereço, link do Maps, site ou Instagram, categoria)
- Embutido por iframe na página de cafeterias
