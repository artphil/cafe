<script setup>
import { ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import AccordionItem from '../components/AccordionItem.vue'
import BaseModal from '../components/BaseModal.vue'

const modalComparativo = ref(null)
</script>

<template>
  <SiteHeader current="metodos" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Métodos de preparo</p>
      <h1>Escolha o método certo pra você.</h1>
      <p class="lede">[conteúdo aqui — parágrafo curto: cada método muda o corpo, acidez e praticidade do café. Toque em
        cada um pra ver o passo a passo, e no botão "Comparar" pra ver as diferenças lado a lado]</p>
    </section>

    <AdSlot />

    <section class="content-block wrap">
      <h2>Guias por método</h2>

      <AccordionItem title="V60">
        <div class="tag-row">
          <span class="tag roast">Proporção 1:15~1:17</span>
          <span class="tag leaf">Moagem média</span>
        </div>
        <p><strong>Bloom:</strong> 2–3x o peso do café (ex: 20g → 40–60ml) por 30–45s</p>
        <p><strong>Proporção:</strong> Quanto menor a proporção (1:15), mais encorpado; maior (1:17), mais leve.</p>

        <AccordionItem title="Clássico (equilibrado)">
          <p><strong>Indicado para:</strong> uso diário, equilíbrio entre acidez e corpo</p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>Bloom normal</li>
            <li><strong>Primeira extração:</strong> despeje até ~60% da água total</li>
            <li><strong>Finalização:</strong> complete o restante em pours suaves</li>
          </ol>
          <p><strong>Dicas:</strong></p>
          <ul>
            <li>Moagem média</li>
            <li>Movimento circular constante</li>
            <li>Tempo total: 2:00–3:00</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Pour contínuo (mais doce)">
          <p><strong>Indicado para:</strong> realçar doçura e corpo</p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>Bloom normal</li>
            <li>Despejo contínuo e lento até atingir o volume final</li>
          </ol>
          <p><strong>Dicas:</strong></p>
          <ul>
            <li>Não pare o fluxo após o bloom</li>
            <li>Evite turbulência excessiva</li>
            <li>Moagem levemente mais grossa que o clássico</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Pulse Pour (mais acidez)">
          <p><strong>Indicado para:</strong> cafés frutados e ácidos</p>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li>Bloom normal</li>
            <li>Divida a água em 3–5 pours (intervalos de ~10–20s)</li>
            <li>Espere baixar um pouco entre cada etapa</li>
          </ol>
          <p><strong>Dicas:</strong></p>
          <ul>
            <li>Aumenta extração seletiva</li>
            <li>Mais controle sobre sabor</li>
            <li>Moagem média</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Método 4:6 (Tetsu Kasuya)">
          <p><strong>Indicado para:</strong> controle avançado de sabor</p>
          <p><strong>Conceito:</strong></p>
          <ul>
            <li>40% da água → controla doçura/acidez</li>
            <li>60% restante → controla força/corpo</li>
          </ul>
          <p><strong>Passo a passo:</strong></p>
          <ol>
            <li><strong>Primeiros 40%</strong></li>
            <ul>
              <li>Dividir em 2 pours</li>
              <li>Pours iguais → mais equilíbrio</li>
              <li>Mais água no primeiro pour → mais doce</li>
              <li>Mais água no segundo → mais ácido</li>
            </ul>
            <li><strong>Últimos 60%</strong></li>
            <ul>
              <li>Dividir em pours iguais</li>
              <li>Mais pours → mais leve</li>
              <li>Menos pours → mais forte (encorpado)</li>
            </ul>
          </ol>
          <p><strong>Dicas:</strong></p>
          <ul>
            <li>Não deixar secar completamente entre pours</li>
            <li>Moagem grossa que o clássico</li>
          </ul>
        </AccordionItem>

      </AccordionItem>

      <AccordionItem title="Aeropress">
        <p>[conteúdo aqui — passo a passo do Aeropress]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:14</span>
          <span class="tag leaf">Moagem fina</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Prensa francesa">
        <p>[conteúdo aqui — passo a passo da prensa francesa]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:12</span>
          <span class="tag leaf">Moagem grossa</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Coador de pano">
        <p>[conteúdo aqui — passo a passo do coador de pano]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:12</span>
          <span class="tag leaf">Moagem média</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Moka (cafeteira italiana)">
        <p>[conteúdo aqui — passo a passo da moka]</p>
        <div class="tag-row">
          <span class="tag roast">Sem proporção fixa — enche o reservatório</span>
          <span class="tag leaf">Moagem média-fina</span>
        </div>
      </AccordionItem>

      <AccordionItem title="Cold brew">
        <p>[conteúdo aqui — passo a passo do cold brew]</p>
        <div class="tag-row">
          <span class="tag roast">Proporção 1:8 (concentrado)</span>
          <span class="tag leaf">Moagem grossa · infusão 12-24h</span>
        </div>
      </AccordionItem>

      <button class="detail-btn" type="button" @click="modalComparativo.open()">Comparar métodos ↗</button>
    </section>
  </main>

  <BaseModal ref="modalComparativo" title="Qual método combina com você">
    <p>[conteúdo aqui — tabela ou lista curta comparando rapidez, equipamento necessário e perfil de sabor de cada
      método, pra ajudar a escolher]</p>
  </BaseModal>

  <SiteFooter />
</template>
