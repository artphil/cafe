<script setup>
import FichaReceita from '../components/FichaReceita.vue'
</script>

<template>
  <p>
    A moka, também chamada de cafeteira italiana, é aquela jarrinha de metal que muita gente tem em casa. Ela funciona
    no fogão: a água esquenta na base, sobe pela pressão do vapor, passa pelo café e cai na parte de cima. O resultado
    é uma bebida intensa e de bastante corpo, que lembra o espresso, mas sem a pressão de uma máquina de verdade.
  </p>
  <p>
    Inventada na Itália nos anos 1930, ela continua sendo uma ótima opção para quem gosta de café forte, para tomar puro
    ou com leite.
  </p>

  <h2>Receita de partida</h2>
  <p>
    Na moka, a medida não é em gramas: o reservatório e o funil já definem a quantidade. Por isso a ficha não traz uma
    proporção fixa.
  </p>
  <FichaReceita cafe="Encher o funil, sem compactar" agua="Até abaixo da válvula de segurança"
    proporcao="Sem proporção fixa" temperatura="Água já quente" moagem="Média-fina" tempo="Cerca de 4:00 a 6:00"
    indicado="quem prefere uma bebida intensa, de bastante corpo, para tomar pura ou com leite" />

  <h2>O que você vai precisar</h2>
  <ul>
    <li><strong>Moka</strong>, no tamanho que atende a sua xícara. Como o funil define a dose, o tamanho da moka define
      quanto café sai.</li>
    <li><strong>Moedor</strong>, para moer o café na hora em uma moagem média-fina.</li>
    <li><strong>Chaleira</strong>, para esquentar a água antes de colocar na base.</li>
    <li><strong>Fogão</strong>. Em fogão de indução, use uma moka feita para indução.</li>
    <li><strong>Pano ou luva</strong> para segurar, porque as partes de metal esquentam bastante.</li>
  </ul>

  <h2>Passo a passo</h2>
  <ol>
    <li><strong>Encha a base com água já quente</strong>, até abaixo da válvula de segurança. Nunca passe dessa
      marca.</li>
    <li><strong>Preencha o funil com café</strong> moído médio-fino, sem compactar, e nivele a superfície com o dedo ou
      uma colher.</li>
    <li><strong>Monte a cafeteira</strong>, rosqueando a parte de cima com cuidado.</li>
    <li><strong>Leve ao fogo baixo</strong>, com a tampa aberta, para acompanhar o fluxo.</li>
    <li><strong>Observe o fluxo:</strong> quando ele clarear e começar a borbulhar, retire do fogo e sirva.</li>
  </ol>
  <p>Algumas dicas para esse preparo:</p>
  <ul>
    <li>Não compacte o pó: isso dificulta a passagem da água e pode amargar.</li>
    <li>Fogo alto queima o café e deixa a extração agressiva.</li>
    <li>Resfrie a base sob água corrente ao final para interromper a extração.</li>
  </ul>

  <h2>Como ajustar o gosto</h2>
  <h3>Ficou amargo, queimado ou com gosto metálico</h3>
  <p>
    O fogo estava forte ou o café ficou tempo demais no fogo. Use fogo mais baixo, retire a moka assim que o fluxo
    clarear e resfrie a base na água corrente. Se ainda estiver amargo, deixe a moagem um pouco menos fina.
  </p>
  <h3>Ficou fraco ou aguado</h3>
  <p>
    Confira se o funil está bem cheio e nivelado. Se estiver, moa um pouco mais fino, mas sem compactar.
  </p>
  <h3>O café demora a subir ou não sobe</h3>
  <p>
    A moagem está fina demais ou o pó foi compactado. Deixe a moagem um pouco mais grossa e preencha o funil sem
    apertar.
  </p>
  <h3>O café sobe rápido demais ou espirra</h3>
  <p>
    O fogo está alto ou a moagem está grossa demais. Baixe o fogo e, se continuar, moa um pouco mais fino.
  </p>

  <h2>Erros comuns</h2>
  <ul>
    <li>Compactar o café no funil, como se fosse espresso.</li>
    <li>Usar fogo alto para ganhar tempo.</li>
    <li>Deixar a moka no fogo depois que o fluxo clareou.</li>
    <li>Encher a água acima da válvula de segurança.</li>
    <li>Começar com água fria na base, o que deixa o café mais tempo aquecendo junto do metal e pode amargar.</li>
  </ul>
</template>
