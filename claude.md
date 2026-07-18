# Grão Café — projeto Vite + Vue (multi-página)

Mesma estrutura de 5 páginas de antes, agora sem duplicação de código: cabeçalho, rodapé, acordeão, modal e outros pedaços repetidos viraram componentes Vue reaproveitados. No build, cada página continua virando um **arquivo `.html` real e separado** — sem SPA, sem router — então a decisão de priorizar AdSense/indexação continua valendo.

## Estrutura

```
index.html          → entrada da Home
historia.html        → entrada da página História
metodos.html          → entrada da página Métodos
categorias.html        → entrada da página Categorias
cafeterias.html          → entrada da página Cafeterias

src/
  style.css                  → visual do site (igual ao da versão HTML puro)
  main-home.js, main-historia.js, ...   → um arquivo de entrada por página
  pages/
    Home.vue, Historia.vue, Metodos.vue, Categorias.vue, Cafeterias.vue
  components/
    SiteHeader.vue     → cabeçalho + navegação (usado nas 5 páginas)
    SiteFooter.vue      → rodapé + anúncio fixo (usado nas 5 páginas)
    AdSlot.vue           → bloco de anúncio in-content
    AccordionItem.vue     → item de acordeão reutilizável
    BaseModal.vue          → modal reutilizável
    Spotlight.vue            → destaque aleatório da home
    CafeGrid.vue               → grid de cafeterias (busca a planilha)
  data/
    destaques.js   → itens sorteáveis no destaque da home
    cafes.js         → URL da planilha + dados de exemplo (fallback)
```

Textos marcados como `[conteúdo aqui — ...]` continuam sendo placeholder.

## Como rodar

Precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou mais recente).

```bash
npm install       # instala Vite, Vue e as dependências
npm run dev       # roda localmente em http://localhost:5173 (com recarregamento automático)
npm run build     # gera a versão final na pasta dist/ (isso é o que vai pro GitHub Pages)
npm run preview   # visualiza a pasta dist/ localmente, pra conferir antes de publicar
```

Sempre que editar um `.vue`, `.js` ou `.css`, rode `npm run build` de novo antes de publicar — é a pasta **`dist/`** (gerada pelo build) que deve subir pro GitHub Pages, não a pasta `src/`.

## Publicar no GitHub Pages

1. Em `vite.config.js`, ajuste a linha `base:`:
   - Se o repositório se chama, por exemplo, `grao-cafe`, o site fica em `usuario.github.io/grao-cafe/` → troque `base: './'` por `base: '/grao-cafe/'`
2. Rode `npm run build` — isso gera a pasta `dist/` com os 5 HTMLs finais, prontos, sem Vue "aparente" (é HTML/CSS/JS puro no resultado)
3. Suba o conteúdo de `dist/` pro repositório (direto, ou via GitHub Actions automatizando o build a cada push — posso montar esse workflow se quiser)
4. Ative o GitHub Pages apontando pra pasta/branch onde `dist/` foi publicada

## Cafeterias, formulário, AdSense e Analytics

Mesma configuração de antes, só que os arquivos mudaram de lugar:

- **Planilha**: edite a constante `CAFES_SHEET_URL` em `src/data/cafes.js` com o ID real da sua planilha
- **Formulário**: troque o `src` do `<iframe>` em `src/pages/Cafeterias.vue` pelo link de incorporação do seu Google Forms
- **AdSense**: depois de aprovado, troque cada `<div class="ad-slot">` (em `AdSlot.vue` e `SiteFooter.vue`) pelo snippet real do bloco de anúncio, e adicione o script principal (`adsbygoogle.js`) no `<head>` de cada um dos 5 arquivos `.html` da raiz
- **Analytics**: já tem um bloco comentado no `<head>` do `index.html` — copie o mesmo bloco pros outros 4 HTMLs de entrada e troque `G-XXXXXXXXXX` pelo seu ID

## Escrever o conteúdo

Edite diretamente os arquivos em `src/pages/*.vue`, substituindo os textos `[conteúdo aqui — ...]`. Ao adicionar itens novos de método/categoria/história, também vale atualizar `src/data/destaques.js` pra entrarem no sorteio da home.
