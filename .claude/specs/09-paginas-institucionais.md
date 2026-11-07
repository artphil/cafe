# Spec 09: Páginas institucionais

**Status:** em andamento

## Decisões
- Formato: páginas Vue com header/rodapé do site (inclusive a Privacidade, que sai de `public/`)
- E-mail de contato provisório: `artphil.dev@gmail.com`; trocar pelo e-mail do domínio quando a spec 10 sair
- Sobre menciona de forma direta o apoio de IA, com revisão do autor
- Sem Termos de uso (site sem cadastro)
- Cookies: usar a mensagem de consentimento do próprio AdSense, sem banner próprio

## Tarefas
- [x] 1. Criar a estrutura da página Sobre (`sobre.html`, `src/pages/Sobre.vue`, entrada no `vite.config.js`)
- [x] 2. Escrever o texto da página Sobre (~300 palavras: quem faz, objetivo, como o conteúdo é produzido)
- [x] 3. Link "Sobre" no menu do `SiteHeader.vue`
- [ ] 4. Criar a página Contato (`contato.html`): e-mail em `mailto:` e para que usar o contato
- [ ] 5. Atualizar o texto da Política de Privacidade: domínio atual (cita `artphil.github.io/cafe`), e-mail real na seção de contato, data revisada, mantendo cookies, AdSense, Analytics e LGPD
- [ ] 6. Migrar a Privacidade para o layout do site (`privacidade.html` na raiz, entrada no `vite.config.js`, remover de `public/`)
- [ ] 7. Linkar Sobre, Contato e Privacidade no `SiteFooter.vue`
- [ ] 8. Ativar a mensagem de consentimento no AdSense e citar o aviso de cookies na Privacidade (depende da 5)
- [ ] 9. Verificar no `dist/`: sem links quebrados e sem placeholders nas páginas institucionais

## Observação
A página Sobre já linka `contato.html` e `privacidade.html`; o link de Contato fica quebrado até a tarefa 4.
