# Spec 10: Domínio próprio e hospedagem

**Status:** novo

## Problema
`cafebh.vercel.app` é subdomínio gratuito, visto com desconfiança pelo AdSense. Além disso, o plano Hobby da Vercel não permite uso comercial.

## Decisão
- Hospedagem: **Cloudflare Pages** (grátis, uso comercial permitido, deploy automático pelo GitHub, variáveis de ambiente no painel)
- Hospedagem própria (ex.: Hostinger): adiada para quando o site escalar
- Domínio: registrado no nome do autor (nunca em conta de terceiros)

## Tarefas
- [ ] Registrar domínio (ex.: `.com.br`) no nome do autor
- [ ] Criar projeto no Cloudflare Pages ligado ao repositório (build `npm run build`, saída `dist`)
- [ ] Cadastrar `VITE_ADSENSE_PUBLISHER_ID`, `VITE_ANALYTICS_ID`, `VITE_SHEETS_ID`, `VITE_FORM_ID` nas variáveis do projeto
- [ ] Apontar o domínio para o Cloudflare Pages e confirmar HTTPS
- [ ] Atualizar política de privacidade, `ads.txt` e metas com o novo domínio
- [ ] Adicionar o domínio no AdSense e no Search Console
- [ ] Enviar sitemap
- [ ] Desativar o projeto na Vercel depois da migração
