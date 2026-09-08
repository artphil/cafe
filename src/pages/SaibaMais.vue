<script setup>
import { ref } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import AccordionItem from '../components/AccordionItem.vue'
import BaseModal from '../components/BaseModal.vue'

const modalMoagem = ref(null)
</script>

<template>
  <SiteHeader current="saiba-mais" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">Saiba mais</p>
      <h1>Grão, torra e moagem.</h1>
      <p class="lede">O tipo de grão, o processamento, a torra e a moagem trabalham juntos na xícara. Entender o papel
        de cada um ajuda a escolher cafés e ajustar o preparo ao sabor que você procura.</p>
    </section>

    <AdSlot slot="9895945544" format="auto" fullWidthResponsive />

    <section class="content-block wrap">
      <h2>Tipo de grão</h2>
      <AccordionItem title="Arábica" :open-by-default="true">
        <p>É a espécie mais comum nos cafés especiais. Costuma ter mais doçura, acidez e aromas variados, como frutas,
          flores, chocolate e caramelo. Geralmente é cultivado em regiões mais altas e de clima ameno, onde o fruto
          amadurece mais devagar.</p>
      </AccordionItem>
      <AccordionItem title="Robusta (Conilon)">
        <p>Robusta e Conilon são variedades da mesma espécie, <em>Coffea canephora</em>. Têm mais cafeína, corpo intenso
          e sabor marcante, muitas vezes com notas de castanhas, cacau e especiarias. Adaptam-se bem a altitudes mais
          baixas e entram tanto em blends quanto em cafés especiais de origem.</p>
      </AccordionItem>

      <h2 style="margin-top:36px;">Processamento</h2>
      <AccordionItem title="Natural">
        <p>Depois da colheita, o fruto seca inteiro, com a polpa ao redor do grão. Esse contato prolongado costuma dar
          mais corpo, doçura e notas de frutas maduras. É um processo muito usado no Brasil e exige cuidado para a
          secagem ocorrer de forma uniforme.</p>
      </AccordionItem>
      <AccordionItem title="Lavado">
        <p>A polpa é removida antes da secagem e o grão passa por lavagem para retirar a mucilagem. O resultado tende a
          ser uma xícara mais limpa, com acidez nítida e maior destaque para as características da origem do café.</p>
      </AccordionItem>
      <AccordionItem title="Cereja descascado / Honey">
        <p>No cereja descascado, a casca é retirada e parte da mucilagem permanece durante a secagem. O honey segue a
          mesma ideia, com diferentes quantidades dessa camada açucarada. Fica entre o natural e o lavado: costuma unir
          boa doçura, corpo médio e uma xícara mais limpa.</p>
      </AccordionItem>
    </section>

    <section class="content-block wrap">
      <h2>Torra</h2>
      <p>A torra transforma o grão verde em café e define como seus açúcares, ácidos e óleos aparecem na bebida. Não há
        uma torra “melhor”: a escolha depende do grão e do perfil de sabor que você quer alcançar.</p>

      <!-- Selo de torra: elemento de assinatura visual do site -->
      <div class="roast-gauge">
        <div class="roast-dial clara">Torra<br>clara</div>
        <div class="roast-dial media">Torra<br>média</div>
        <div class="roast-dial escura">Torra<br>escura</div>
      </div>

      <AccordionItem title="Torra clara">
        <p>Preserva mais as características do grão e da origem. Geralmente apresenta acidez mais viva e notas florais,
          cítricas ou frutadas. É uma boa escolha para métodos filtrados e para quem quer perceber nuances da bebida.
        </p>
      </AccordionItem>
      <AccordionItem title="Torra média">
        <p>Busca equilíbrio entre doçura, acidez e corpo. Pode trazer caramelo, chocolate, frutas e castanhas sem
          esconder totalmente a identidade do grão. É a opção mais versátil para diferentes métodos de preparo.</p>
      </AccordionItem>
      <AccordionItem title="Torra escura">
        <p>Desenvolve mais corpo, amargor e notas de chocolate intenso, caramelo escuro e tostado. A origem aparece
          menos, enquanto o sabor da própria torra ganha destaque. Combina com quem prefere uma bebida mais forte ou
          costuma preparar café com leite.</p>
      </AccordionItem>

      <button class="ap-button ap-button--filled detail-btn" type="button" @click="modalMoagem.open()">Ver tabela de moagem por método ↗</button>
    </section>
  </main>

  <BaseModal ref="modalMoagem" title="Moagem ideal por método">
    <p>A moagem regula a velocidade com que a água extrai o café: quanto mais fina, mais rápida a extração. Use estas
      referências como ponto de partida:</p>
    <ul>
      <li><strong>Fina:</strong> Aeropress e espresso. Parece areia fina.</li>
      <li><strong>Média-fina:</strong> Moka. Um pouco mais grossa que a de espresso.</li>
      <li><strong>Média:</strong> V60 e coador de pano. Lembra açúcar cristal fino.</li>
      <li><strong>Grossa:</strong> prensa francesa e cold brew. Lembra sal grosso.</li>
    </ul>
    <p>Se o café ficar amargo ou demorar demais para passar, moa mais grosso. Se ficar aguado ou ácido demais, moa um
      pouco mais fino.</p>
  </BaseModal>

  <SiteFooter />
</template>
