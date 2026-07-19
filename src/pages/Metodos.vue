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
      <p class="lede">O mesmo grão pode render xícaras bem diferentes. O método muda o corpo, a acidez e a praticidade
        do preparo — abra cada guia para encontrar uma receita de partida e ajustar ao seu gosto.</p>
    </section>

    <AdSlot slot="9213419261" format="auto" fullWidthResponsive />

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
        <div class="tag-row">
          <span class="tag roast">Proporção 1:14</span>
          <span class="tag leaf">Moagem fina</span>
        </div>
        <p><strong>Indicado para:</strong> quem busca uma xícara limpa, doce e rápida, com bastante margem para testar.
        </p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Coloque o filtro na tampa, enxágue com água quente e encaixe na Aeropress.</li>
          <li>Adicione 15g de café e 210ml de água a cerca de 85–90°C.</li>
          <li>Mexa por 10 segundos, deixe em infusão por 1 minuto e 30 segundos.</li>
          <li>Rosqueie a tampa, vire sobre a xícara e pressione devagar por 20–30 segundos.</li>
        </ol>
        <p><strong>Dicas:</strong></p>
        <ul>
          <li>Pare quando ouvir o chiado para evitar amargor.</li>
          <li>Use papel para mais limpeza; filtro metálico deixa mais corpo.</li>
          <li>Se ficar intenso, dilua com um pouco de água quente após a prensa.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Prensa francesa">
        <div class="tag-row">
          <span class="tag roast">Proporção 1:12</span>
          <span class="tag leaf">Moagem grossa</span>
        </div>
        <p><strong>Indicado para:</strong> quem gosta de café mais encorpado, com textura e poucos equipamentos.</p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Adicione 30g de café moído grosseiramente à prensa.</li>
          <li>Despeje 360ml de água entre 90–95°C, cobrindo todo o café.</li>
          <li>Mexa uma vez, coloque a tampa sem abaixar o êmbolo e aguarde 4 minutos.</li>
          <li>Pressione o êmbolo lentamente e sirva em seguida.</li>
        </ol>
        <p><strong>Dicas:</strong></p>
        <ul>
          <li>Transfira o restante para outra jarra: o café continua extraindo dentro da prensa.</li>
          <li>Se houver muita borra na xícara, moa mais grosso ou pressione com menos força.</li>
          <li>Funciona muito bem com cafés de notas achocolatadas e caramelizadas.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Coador de pano">
        <div class="tag-row">
          <span class="tag roast">Proporção 1:12</span>
          <span class="tag leaf">Moagem média</span>
        </div>
        <p><strong>Indicado para:</strong> uma xícara afetiva, encorpada e sem o sabor residual do filtro de papel.</p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Escalde o coador de pano e a garrafa com água quente.</li>
          <li>Coloque 25g de café e faça um bloom com cerca de 60ml de água por 30 segundos.</li>
          <li>Despeje os 240ml restantes em movimentos lentos e circulares.</li>
          <li>Espere terminar de coar e sirva.</li>
        </ol>
        <p><strong>Dicas:</strong></p>
        <ul>
          <li>Lave somente com água, sem sabão, e guarde úmido na geladeira em recipiente fechado.</li>
          <li>Não deixe borra no pano depois do preparo.</li>
          <li>Um fluxo muito lento pede moagem mais grossa; muito rápido, moagem mais fina.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Moka (cafeteira italiana)">
        <div class="tag-row">
          <span class="tag roast">Sem proporção fixa — enche o reservatório</span>
          <span class="tag leaf">Moagem média-fina</span>
        </div>
        <p><strong>Indicado para:</strong> quem prefere uma bebida intensa, de bastante corpo, para tomar pura ou com
          leite.</p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Encha a base com água já quente até abaixo da válvula de segurança.</li>
          <li>Preencha o funil com café sem compactar e nivele a superfície.</li>
          <li>Monte a cafeteira e leve ao fogo baixo, com a tampa aberta.</li>
          <li>Quando o fluxo clarear e começar a borbulhar, retire do fogo e sirva.</li>
        </ol>
        <p><strong>Dicas:</strong></p>
        <ul>
          <li>Não compacte o pó: isso dificulta a passagem da água e pode amargar.</li>
          <li>Fogo alto queima o café e deixa a extração agressiva.</li>
          <li>Resfrie a base sob água corrente ao final para interromper a extração.</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Cold brew">
        <div class="tag-row">
          <span class="tag roast">Proporção 1:8 (concentrado)</span>
          <span class="tag leaf">Moagem grossa · infusão 12-24h</span>
        </div>
        <p><strong>Indicado para:</strong> dias quentes e para quem procura baixa percepção de acidez e muito refresco.
        </p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
          <li>Misture 100g de café moído grosso com 800ml de água filtrada em uma jarra.</li>
          <li>Tampe e deixe em infusão na geladeira por 12–18 horas.</li>
          <li>Coe lentamente em filtro de papel, pano ou peneira bem fina.</li>
          <li>Sirva com gelo. Para um copo mais leve, dilua uma parte do concentrado em uma parte de água ou leite.</li>
        </ol>
        <p><strong>Dicas:</strong></p>
        <ul>
          <li>Infusões longas demais tendem a deixar o resultado amadeirado.</li>
          <li>Guarde o concentrado tampado na geladeira por até 5 dias.</li>
          <li>Para beber sem diluir, comece com a proporção 1:12.</li>
        </ul>
      </AccordionItem>

      <button class="detail-btn" type="button" @click="modalComparativo.open()">Comparar métodos ↗</button>
    </section>
  </main>

  <BaseModal ref="modalComparativo" title="Qual método combina com você">
    <p>Use este atalho para escolher o ponto de partida — o grão, a água e a moagem ainda fazem toda a diferença.</p>
    <ul>
      <li><strong>V60:</strong> xícara limpa e aromática; ideal para explorar acidez e notas do grão.</li>
      <li><strong>Aeropress:</strong> rápida, portátil e versátil; entrega doçura e boa limpeza.</li>
      <li><strong>Prensa francesa:</strong> simples e encorpada; preserva mais óleos do café.</li>
      <li><strong>Coador de pano:</strong> corpo médio e perfil tradicional; pede cuidado na limpeza.</li>
      <li><strong>Moka:</strong> intensa e concentrada; ótima para leite ou para quem gosta de café forte.</li>
      <li><strong>Cold brew:</strong> preparo antecipado e servido gelado; suave e pouco ácido na percepção.</li>
    </ul>
  </BaseModal>

  <SiteFooter />
</template>
