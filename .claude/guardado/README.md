# Formulário próprio de sugestão de cafeterias (guardado)

Feito e não usado por ora: o site continua com o iframe do Google Forms (`CAFES_FORM_URL` em `src/data/cafes.js`).
Quando houver tráfego e sugestões com regularidade, vale ativar.

## Arquivos
- `CafeForm.vue`: formulário no estilo do site. Copiar para `src/components/`.
- `sugestoes.gs`: função `doPost` para colar no projeto do Apps Script que já serve a lista (instruções no topo do arquivo).

## Para ativar
1. Copiar `CafeForm.vue` para `src/components/`.
2. Em `src/pages/Cafeterias.vue`, trocar o bloco `.form-embed` com o iframe por `<CafeForm />` e importar o componente.
3. Remover `CAFES_FORM_URL`, `VITE_FORM_ID` e os estilos `.form-embed` (`src/style.css`) se não forem mais usados.
4. Colar o `sugestoes.gs` no Apps Script, criar a aba `pendente` (mesmo cabeçalho da aba publicada) e fazer uma nova versão da implantação.
5. Em `src/pages/Privacidade.vue`, acrescentar um parágrafo dizendo que o formulário não coleta dados pessoais.
6. Atualizar a seção "Formulário de sugestão" da spec 03.

## O que ele faz
Campos: nome, bairro, endereço, site, Instagram (um dos dois), link do Maps (opcional), descrição e categorias. Sem e-mail de contato.
Envia por POST ao Apps Script, que grava na aba `pendente` com `status = pendente`. Proteções: campo-isca, tempo mínimo de 3 s e limite de 20 sugestões por hora.
