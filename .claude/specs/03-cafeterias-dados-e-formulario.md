# Spec 03: Cafeterias, dados e formulário

**Status:** existente (placeholders ainda presentes, ver spec 07)

## Fonte de dados
- Google Sheets, publicado como CSV ou JSON via opensheet.elk.sh
- Front-end faz `fetch` e renderiza lista/filtros
- Atualizar dados = editar a planilha, sem deploy
- Manutenção manual

## Lista inicial
Oop Café, Cheirin Bão, Belô Café, Ô Café. Critério: lugares que o autor conhece/recomenda + sugestões revisadas.

## Campos da planilha
| Campo | Obrigatório | Obs. |
| --- | --- | --- |
| Nome | sim | |
| Endereço | sim | |
| Bairro | sugerido | filtro por região |
| Site/Instagram | sim | |
| Descrição breve | sim | 1-2 frases |
| Categoria/tags | sugerido | especialidade, torra própria, pet friendly, trabalhar |
| Faixa de preço | opcional | $ / $$ / $$$ |
| Horário | opcional | desatualiza rápido |
| Foto | opcional | link |
| Status | interno | `publicada` / `pendente` |

## Formulário de sugestão
- Google Forms ligado a aba "pendente"; revisão manual move para "publicada" (a única lida pelo site)
- Embutido por iframe na página de cafeterias
