# Grão Café — esqueleto do projeto

Estrutura inicial do site, em HTML puro, pronta pra receber conteúdo real e ser publicada no GitHub Pages.

## Arquivos

- `index.html`, `historia.html`, `metodos.html`, `categorias.html`, `cafeterias.html` — as 5 páginas
- `style.css` — visual do site (identidade "etiqueta de saca de café")
- `script.js` — acordeão/modal, destaque aleatório da home, busca de cafeterias na planilha
- `planilha-modelo-cafeterias.csv` — modelo de planilha pra importar no Google Sheets

Todo texto marcado como `[conteúdo aqui — ...]` é placeholder e deve ser substituído pelo conteúdo real.

## Passo a passo pra colocar no ar

**1. Publicar no GitHub Pages**
- Crie um repositório novo, suba estes arquivos na raiz (ou numa pasta `docs/`)
- Em Settings → Pages, ative o GitHub Pages apontando pra branch/pasta certa
- O site fica em `https://seu-usuario.github.io/nome-do-repositorio/`

**2. Configurar a planilha de cafeterias**
- Crie uma planilha no Google Sheets e importe o `planilha-modelo-cafeterias.csv`
- Crie duas abas: `publicada` (o que aparece no site) e `pendente` (sugestões recebidas pelo formulário, antes de você revisar)
- Preencha os dados reais nas colunas: `nome`, `endereco`, `bairro`, `site`, `descricao`, `categoria`, `status`
- Pegue o ID da planilha (fica na URL, entre `/d/` e `/edit`)
- Em `script.js`, troque `SEU_SHEET_ID` na constante `CAFES_SHEET_URL` pelo ID real:
  ```
  const CAFES_SHEET_URL = 'https://opensheet.elk.sh/SEU_SHEET_ID/publicada';
  ```
- A planilha precisa estar com compartilhamento "qualquer pessoa com o link pode visualizar"

**3. Configurar o formulário de sugestão**
- Crie um Google Forms com os campos que quiser coletar (nome do lugar, endereço, site, descrição, quem indicou)
- Vincule as respostas à aba `pendente` da mesma planilha (Respostas → ícone do Sheets)
- Em Forms → Enviar → aba `< >` (Incorporar), copie o link do `iframe`
- Cole esse link no `src` do iframe em `cafeterias.html`, no lugar de `SEU_FORM_ID`

**4. Configurar o AdSense**
- Depois que o site estiver publicado com conteúdo real (não só placeholders), submeta a URL do GitHub Pages pra revisão no AdSense
- Quando aprovado, troque cada `<div class="ad-slot">...</div>` pelo snippet real do bloco de anúncio correspondente
- O snippet principal (`adsbygoogle.js`) entra uma vez no `<head>` de cada página

**5. Configurar o Google Analytics**
- Crie uma propriedade no Google Analytics (GA4)
- Troque `G-XXXXXXXXXX` pelo seu ID de medição no bloco comentado do `<head>` de cada página, e remova os comentários `<!-- -->` pra ativar

**6. Escrever o conteúdo**
- Substitua os textos `[conteúdo aqui — ...]` com apoio de IA, mantendo o tom casual definido no spec
- Ao adicionar métodos/categorias/itens de história novos, também vale atualizar o array `DESTAQUES` em `script.js` pra entrarem no sorteio da home
