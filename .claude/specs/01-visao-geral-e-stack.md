# Spec 01: Visão geral e stack

**Status:** existente

## Objetivo
Site estático sobre café (métodos de preparo, grãos, cafeterias de Belo Horizonte e temas relacionados), com espaço para monetização via Google AdSense.

## Identidade
- [x] Nome: **Café Almanaque** (antes Café BH; a seção de cafeterias continua sobre Belo Horizonte)
- [x] Tom de voz: casual
- [x] Público: iniciantes e entusiastas
- [x] Quem escreve: o autor, com apoio de IA
- [x] Imagens: stock gratuito ou geração, conforme necessidade

## Decisões de stack
| Item | Decisão |
| --- | --- |
| Tipo | Estático, domínio público com HTTPS |
| Monetização | Google AdSense (não AdMob) |
| Banco de dados | Nenhum, conteúdo evergreen nas páginas |
| Dados de cafeterias | Google Sheets via `fetch()` (ver spec 03) |
| Manutenção | Mínima, só a planilha |
| Hospedagem original | GitHub Pages, depois Vercel (`cafebh.vercel.app`); hoje Cloudflare Workers em `cafealmanaque.com` (ver spec 10) |
