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
| `tipo` | sim | uma escolha: Especialidade, Tradicional, Colonial, Padaria/Confeitaria, Bistrô/Brunch (selo principal do card) |
| `tags` | sim | termos da legenda da aba, separados por vírgula, em 4 grupos: experiência, comida, comodidade, ambiente. O card mostra até 4, nessa ordem de grupos |
| `preco` | opcional | `$` (até R$ 20 por pessoa, 1 café + 1 acompanhamento), `$$` (R$ 20 a 40) ou `$$$` (acima de R$ 40) |
| `visitado` | interna | `sim` / `não`: o autor conhece pessoalmente (critério de curadoria) |
| `atualizado_em` | interna | data da última checagem dos dados (não aparece no site) |
| `status` | interna | `rascunho` / `visitado` / `publicada` / `fechada` |
| `nota_cafe`, `nota_diferencial`, `nota_atendimento`, `nota_preco_valor` | interna | 1 a 3 (1 abaixo do esperado, 2 bom, 3 destaque); total e `elegivel` (Sim se total ≥ 9 e nenhuma nota 1) ficam em colunas sem cabeçalho ao lado. Nunca saem pelo endpoint |

**Aba mestre: `curadoria`.** A aba `cafeterias` antiga não é mais lida pelo site (pode ser apagada). O endpoint (Apps Script, código em `scripts/apps-script/lista-cafeterias.gs`) devolve só as linhas `publicada` e só as colunas públicas: nome, endereco, bairro, maps_url, site, instagram, descricao, destaque, tipo, tags e preco.

Fora do modelo de propósito: horário de funcionamento (desatualiza rápido; o leitor vai ao site ou Instagram), telefone, foto e cardápio.

## Exibição no site (`CafeGrid.vue`)
- Mostra: `nome`, `endereco · bairro`, `tipo` (selo escuro), `preco`, até 4 `tags`, `descricao`, `destaque` e links (Site, Instagram, Mapa)
- Na página, uma vez: contador e as legendas de preço e de tipo
- Não mostra notas, elegibilidade, `visitado` nem `status`
- Só exibe linhas `publicada` (feito no Apps Script); linha sem `status` também aparece
- Texto de exemplo nas `tags` (começando por `[`) é ignorado
- Legendas (significado de cada `tipo`, faixas de `preco`) e grupos de `tags` ficam **no código** (`TIPOS`, `PRECOS` e `GRUPOS_TAGS` em `CafeGrid.vue`), não na planilha. A legenda da aba `curadoria` é só anotação: ao mudar um termo ou uma definição, atualizar os dois lados

## Formulário de sugestão
- Google Forms ligado a uma aba separada de respostas (`pendente`); a revisão manual copia para a aba publicada (a única lida pelo site)
- O formulário deve pedir as mesmas colunas obrigatórias (nome, bairro, endereço, link do Maps, site ou Instagram, categoria)
- Embutido por iframe na página de cafeterias
