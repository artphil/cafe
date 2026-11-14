# Spec 10: Domínio próprio e migração para a Cloudflare

**Status:** em andamento

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

### Migração para a Cloudflare (feita em 2026-11-13, via Workers com assets estáticos, não Pages)
- [x] Projeto `cafealmanaque` criado na Cloudflare e ligado ao repositório `artphil/cafe` (deploy a cada push na `main`)
- [x] Build `npm run build`, deploy `npx wrangler deploy`, `wrangler.jsonc` com `assets.directory = ./dist` e `.node-version` (22)
- [x] Variáveis de build `VITE_*` cadastradas no painel (sobrou a `VITE_FORM_ID`, sem uso, que pode ser removida)
- [x] Primeiro deploy conferido: páginas, texto no HTML, cafeterias com lista, `/ads.txt` e IDs do AdSense e Analytics preenchidos
- [x] Domínio `cafealmanaque.com` ligado, com HTTPS e "Always Use HTTPS"; `www` redireciona (301) para o domínio sem `www`
- [x] `workers.dev` e prévias desligados no `wrangler.jsonc` (`workers_dev` e `preview_urls` falsos)
- [x] Interruptor `VITE_AMBIENTE=teste` implementado (sem AdSense, Analytics e anúncios, com `noindex`)
- [ ] Vercel como ambiente de teste da branch `develop`: Production Branch = `develop` e variável `VITE_AMBIENTE=teste`
- [x] Script `deploy` do `gh-pages` substituído por `npm run deploy` (e `npm run publicar`), que publicam a `develop` na `main` (`scripts/publicar.sh`)
- [x] Dependência `ghpages` removida (`package.json` e `package-lock.json`)

### Domínio e referências
- [x] Registrar domínio (`cafealmanaque.com`, na Cloudflare)
- [x] Atualizar política de privacidade e metas com o novo domínio (canonical e `og:url` gerados no build). O `ads.txt` não cita domínio, não precisou mudar
- [x] Gerar `sitemap.xml` e `robots.txt` no build (endereços sem `.html`)
- [ ] Criar e-mail no domínio e trocar o provisório `artphil.dev@gmail.com` nas páginas Contato e Privacidade (spec 09)
- [ ] Adicionar o domínio no AdSense e no Search Console e enviar o sitemap
- [x] Mudança de nome do site (Café BH para Café Almanaque) nos títulos, textos, cabeçalho, rodapé e metas

## Critério de pronto
O site abre pelo domínio próprio, com HTTPS, servido pela Cloudflare, com `/ads.txt` respondendo e as páginas pré-renderizadas; o endereço da Vercel não é mais usado como principal.
