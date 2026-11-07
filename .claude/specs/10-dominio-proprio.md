# Spec 10: Domínio próprio e migração para Cloudflare Pages

**Status:** novo

## Problema
`cafebh.vercel.app` é subdomínio gratuito, visto com desconfiança pelo AdSense. Junto com o domínio próprio, o site sai da Vercel e vai para o Cloudflare Pages.

## Contexto técnico da migração
- Build: `npm run build` (`vite build` + `scripts/prerender.mjs`), saída em `dist/`
- O build precisa de Node recente e de acesso à rede, porque o pré-render busca a planilha de cafeterias (Apps Script) em tempo de build; se falhar, a página de cafeterias sai sem a lista
- Variáveis de ambiente usadas no build: `VITE_ADSENSE_PUBLISHER_ID`, `VITE_ANALYTICS_ID`, `VITE_SHEETS_ID`, `VITE_FORM_ID` (o `.env` não vai para o repositório)
- `base: './'` e links relativos (`./pagina.html`) funcionam em qualquer host, sem ajuste por causa da migração
- `public/ads.txt` vai para a raiz do site; precisa responder em `/ads.txt`

## Decisões a tomar
- Onde registrar o domínio. `.com.br` é registrado no Registro.br (confirmar se o Cloudflare Registrar aceita a extensão antes de planejar); com o registro em outro lugar, basta apontar os nameservers ou o DNS para o Cloudflare
- Mantém a Vercel no ar com redirecionamento do endereço antigo, ou desativa depois da migração
- Cloudflare Pages ou o modelo mais novo de assets estáticos em Workers (conferir na documentação o que a Cloudflare recomenda para projetos novos)

## Tarefas

### Migração para o Cloudflare Pages
- [ ] Criar o projeto no Cloudflare e conectar o repositório
- [ ] Configurar build: comando `npm run build`, pasta de saída `dist`, versão do Node fixada (variável `NODE_VERSION` ou arquivo `.nvmrc`)
- [ ] Cadastrar as variáveis `VITE_*` no painel (produção e preview)
- [ ] Primeiro deploy em `*.pages.dev`: conferir que as páginas abrem, o texto está no HTML (`curl`), a página de cafeterias traz a lista, `/ads.txt` responde e o console não mostra erro de hidratação
- [ ] Apontar o domínio próprio para o projeto (domínio personalizado + HTTPS)
- [ ] Redirecionar `cafebh.vercel.app` para o domínio novo (ou registrar que será desativado) e confirmar que o `.pages.dev` não compete com o domínio principal (redirect ou `noindex`)
- [ ] Remover ou deixar de usar o script `deploy` (`gh-pages`) do `package.json`, se não for mais necessário

### Domínio e referências
- [ ] Registrar domínio (ex.: `.com.br`)
- [ ] Atualizar política de privacidade, `ads.txt`, `base` do Vite e metas com o novo domínio
- [ ] Criar e-mail no domínio e trocar o provisório `artphil.dev@gmail.com` nas páginas Contato e Privacidade (spec 09)
- [ ] Adicionar o domínio no AdSense e no Search Console
- [ ] Enviar sitemap

## Critério de pronto
O site abre pelo domínio próprio, com HTTPS, servido pelo Cloudflare Pages, com `/ads.txt` respondendo e as páginas pré-renderizadas; o endereço da Vercel não é mais usado como principal.
