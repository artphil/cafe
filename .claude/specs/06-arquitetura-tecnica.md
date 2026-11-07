# Spec 06: Arquitetura técnica

**Status:** existente

- Multi-página com HTML reais (não SPA), para priorizar AdSense e indexação
- Implementação atual: Vite + Vue 3, uma entrada HTML por página (`vite.config.js`), componentes compartilhados (header, footer, AdSlot, acordeão, modal)
- Alternativa avaliada: Nuxt em modo `generate`
- Observação: a implementação atual monta o conteúdo no cliente (`<div id="app">`), o que contradiz a intenção original; corrigir via spec 08
