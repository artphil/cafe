<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import AdSlot from '../components/AdSlot.vue'
import AccordionItem from '../components/AccordionItem.vue'
</script>

<template>
  <SiteHeader current="historia" />

  <main>
    <section class="hero wrap">
      <p class="eyebrow">História</p>
      <h1>Da Etiópia à xícara em Minas.</h1>
      <p class="lede">[conteúdo aqui — parágrafo curto contextualizando a linha do tempo abaixo]</p>
    </section>

    <AdSlot />

    <section class="content-block wrap">
      <h2>Linha do tempo</h2>

      <!-- Ordem cronológica real, então a numeração faz sentido aqui -->
      <AccordionItem title="1 · Origem na Etiópia" :open-by-default="true">
        <p>Diz a lenda que tudo começou na <strong>Etiópia</strong>, mais especificamente na região de
          <strong>Kaffa</strong>, por volta do ano 850 d.C.
        </p>

        <p>O protagonista dessa história é <strong>Kaldi</strong>, um pastor de cabras super de boa que, num dia
          qualquer, reparou que o seu rebanho estava agindo de um jeito muito esquisito. Em vez de pastarem tranquilas,
          as cabras estavam pulando, saltitando e dando piruetas, cheias de energia — uma verdadeira rave caprina.</p>

        <p>Curioso, Kaldi resolveu investigar o que elas estavam comendo. Ele percebeu que as danadas mastigavam as
          folhas e os <strong>frutos vermelhos</strong> de um arbusto silvestre que ele nunca tinha dado muita bola.</p>

        <p>Pensando <em>"se não matou as cabras, mal não vai me fazer"</em>, Kaldi pegou um punhado desses frutos e
          comeu. Batata! Em pouco tempo, o pastor sentiu uma onda de energia absurda, cansaço zero e virou o "parceiro
          de dança" das próprias cabras.</p>

        <h3 style="color: #6f4e37;">O "Milagre" chega aos Monges</h3>

        <p>Impressionado, Kaldi levou a descoberta até um monastério local. Ele explicou o milagre para o monge chefe,
          mas a reação não foi a esperada: o monge achou que aquilo era coisa do demônio e, horrorizado, <strong>jogou
            as frutas direto no fogo</strong>.</p>

        <p>E aí, meu amigo, aconteceu a mágica.</p>

        <p>À medida que os grãos iam torrando nas brasas, um <strong>aroma maravilhoso e irresistível</strong> tomou
          conta do ambiente. Os monges, hipnotizados pelo cheirinho, correram para salvar os grãos torrados. Eles
          pegaram o que sobrou, jogaram em água quente para abafar, e resolveram provar.</p>
        <hr style="border: 0; height: 1px; background: #d4a373; margin: 20px 0;">

        <blockquote
          style="background: #f7ede2; border-left: 5px solid #6f4e37; margin: 0; padding: 10px 20px; font-style: italic;">
          <strong>O resultado?</strong> Eles perceberam que aquela bebida mantinha todo mundo bem acordado e focado
          durante as longas noites de oração. A partir dali, o hábito cruzou fronteiras e o mundo ganhou o nosso querido
          café!
        </blockquote>
      </AccordionItem>

      <AccordionItem title="2 · Expansão pelo mundo árabe">
        <p>Depois de fazer sucesso nos monastérios da Etiópia, o café atravessou o Mar Vermelho e desembarcou no
          <strong>Iêmen</strong> por volta do século XV. Foi ali que a coisa ficou séria e o café virou uma plantação de
          verdade, cultivado principalmente perto do famoso porto de <strong>Moka</strong> (sim, daí vem o nome do café
          Moca!).
        </p>

        <p>Os responsáveis por espalhar a novidade foram os sufis (místicos islâmicos). Eles usavam a bebida exatamente
          como os monges etíopes: para aguentar as noites inteiras de rezas e rituais sem pescar de sono.</p>

        <h3 style="color: #2e6f40;">A Invenção das Cafeterias (As primeiras redes sociais!)</h3>

        <p>O café não demorou para sair dos templos e ganhar as ruas. Nas grandes cidades do Império Otomano, como
          Cairo, Damasco e Istambul, surgiram as chamadas <strong>Kaveh Kanes</strong> — as primeiríssimas cafeterias do
          mundo.</p>

        <p>Esses lugares viraram o ponto de encontro favorito da galera. O pessoal ia lá para:</p>
        <ul style="padding-left: 20px;">
          <li>Tomar um café forte e jogar xadrez.</li>
          <li>Ouvir música e assistir a peças de teatro.</li>
          <li>Fofocar e discutir sobre política.</li>
        </ul>

        <h3 style="color: #2e6f40;">O Café Quase Foi Proibido!</h3>

        <p>Como o povo ficava muito acordado e tagarela nessas cafeterias, alguns governantes e religiosos começaram a
          ficar com a pulga atrás da orelha. Em 1511, em Meca, líderes políticos tentaram <strong>proibir o
            café</strong>, alegando que ele estimulava o pensamento rebelde e as críticas ao governo.</p>

        <p>Mas não teve jeito. A população já estava tão apaixonada pelo "vinho da Arábia" (como era chamado) que a
          proibição não durou quase nada. O café venceu a censura e seguiu firme em direção à Europa!</p>

        <hr style="border: 0; height: 1px; background: #8fad88; margin: 20px 0;">

        <blockquote
          style="background: #eef5f0; border-left: 5px solid #1a4329; margin: 0; padding: 10px 20px; font-style: italic;">
          <strong>Curiosidade:</strong> Os árabes tinham tanto ciúme do seu ouro negro que proibiam a exportação de
          grãos de café férteis. Para sair de lá, o grão precisava ser fervido ou tostado para ninguém conseguir plantar
          em outro lugar. Mas, como a gente bem sabe, alguns contrabandistas conseguiram burlar a segurança mais tarde!
        </blockquote>
      </AccordionItem>

      <AccordionItem title="3 · Chegada à Europa">
        <p>No início do século XVII, mercadores venezianos (que eram os grandes comerciantes da época) trouxeram os
          primeiros sacos de café para a Europa. No começo, a novidade foi recebida com muita desconfiança. Os médicos
          achavam que era uma poção estranha e os padres olhavam torto por ser uma bebida vinda do mundo islâmico.</p>

        <p>A coisa ficou tão séria que chamaram o café de <strong>"a bebida amarga de Satanás"</strong> e pediram para o
          Papa Clemente VIII proibir o consumo dos cristãos.</p>

        <h3 style="color: #6f2e2e;">O Papa "Batiza" o Café</h3>

        <p>Antes de tomar uma decisão, o Papa resolveu dar um gole para ver qual era a do café. Ele gostou tanto que
          soltou a famosa frase: <em>"Esta bebida do demônio é tão deliciosa que seria um pecado deixar apenas os
            infiéis beberem!"</em>. Ele abençoou o café, e a partir dali a bebida teve o sinal verde para explodir no
          continente.</p>

        <h3 style="color: #6f2e2e;">A Revolução da Sobriedade</h3>

        <p>A chegada do café mudou totalmente os hábitos dos europeus. Pense bem: na Idade Média, a água era super
          contaminada, então todo mundo bebia cerveja ou vinho da hora que acordava até a hora de dormir. A Europa vivia
          meio "altinha".</p>

        <p>De repente, chega uma bebida que, em vez de dar ressaca e sono, deixa as pessoas <strong>focadas, elétricas e
            prontas para trabalhar</strong>. O café virou o combustível perfeito para a Revolução Industrial e o
          Iluminismo.</p>

        <h3 style="color: #6f2e2e;">As "Universidades de um Centavo"</h3>

        <p>As cafeterias se espalharam como rastilho de pólvora por Londres, Paris e Amsterdã. Na Inglaterra, elas
          ficaram conhecidas como "Penny Universities" (Universidades de um Centavo), porque pelo preço de uma xícara de
          café (um centavo de libra), qualquer um podia entrar e passar horas discutindo ciência, política e literatura
          com os mentes mais brilhantes da época.</p>

        <hr style="border: 0; height: 1px; background: #ad8888; margin: 20px 0;">

        <blockquote
          style="background: #f5eeee; border-left: 5px solid #431a1a; margin: 0; padding: 10px 20px; font-style: italic;">
          <strong>Grandes ideias nasceram aqui:</strong> Você sabia que grandes instituições mundiais começaram dentro
          dessas cafeterias europeias? A famosa seguradora <em>Lloyd's de Londres</em> e a própria <em>Bolsa de Valores
            de Nova York</em> nasceram de conversas de negócios em mesas regadas a muito café!
        </blockquote>
      </AccordionItem>

      <AccordionItem title="4 · O café chega ao Brasil">
        <p>A história do café no Brasil começou em <strong>1727</strong>. Naquela época, os países que tinham plantações
          de café guardavam suas mudas a sete chaves, porque o grão já valia uma fortuna no mercado internacional. A
          Guiana Francesa, nossa vizinha, era um desses lugares superprotetores.</p>

        <p>Foi aí que entrou em cena o sargento-mor luso-brasileiro <strong>Francisco de Melo Palheta</strong>. Ele foi
          enviado pelo governador do Maranhão e Grão-Pará até Caiena, capital da Guiana Francesa, com a desculpa oficial
          de resolver uma disputa de fronteiras, mas com uma missão secreta na bagagem: dar um jeito de trazer o valioso
          "ouro negro" para o Brasil.</p>

        <h3 style="color: #785433;">A Diplomacia da Sedução</h3>

        <p>O governador de Caiena não queria liberar nenhuma semente por nada desse mundo. Mas a lenda conta que Palheta
          era um cara muito charmoso. Ele acabou conquistando a amizade e a confiança de <strong>Marie-Antoinette
            d'Orvilliers</strong>, ninguém menos que a esposa do governador francês.</p>

        <p>No jantar de despedida, como um gesto de "gentileza" (e puro flerte), a primeira-dama ofereceu a Palheta um
          banquete e, discretamente, entregou a ele um buquê de flores. Escondidas entre as folhas, estavam
          <strong>cinco mudas e mais de mil sementes de café</strong>. Palheta escondeu tudo na bagagem e trouxe o
          contrabando de volta para o Brasil.
        </p>

        <h3 style="color: #785433;">De Planta de Quintal a Dono do País</h3>

        <p>As primeiras sementes foram plantadas lá no Pará. No começo, o café era só uma plantação de quintal, uma
          planta ornamental para consumo doméstico. Mas o grão foi descendo pelo mapa, passando pelo Maranhão e pela
          Bahia, até encontrar o seu verdadeiro paraíso: o <strong>Vale do Paraíba</strong>, entre o Rio de Janeiro e
          São Paulo.</p>

        <p>Com a terra roxa ideal e o clima perfeito, a produção explodiu no século XIX. O café virou a maior riqueza do
          país, financiou a nossa industrialização, construiu ferrovias e transformou o Brasil no maior produtor de café
          do planeta — título que a gente carrega com orgulho até hoje!</p>

        <hr style="border: 0; height: 1px; background: #c2a687; margin: 20px 0;">

        <blockquote
          style="background: #fdfaf6; border-left: 5px solid #4a3319; margin: 0; padding: 10px 20px; font-style: italic;">
          <strong>O impacto de um buquê:</strong> Quem diria que o cafezinho que você toma toda manhã para dar aquela
          acordada começou com uma missão secreta e um buquê de flores escondido na bagagem de um sargento no século
          XVIII?
        </blockquote>
      </AccordionItem>

      <AccordionItem title="5 · O café em Minas Gerais">
        <p>O café entrou em Minas Gerais ali pelos idos de 1770, vindo de mansinho pelo Rio de Janeiro. No começo, a
          Zona da Mata mineira foi o grande palco dessa chegada. Quando o ciclo do ouro começou a murchar, os
          fazendeiros perceberam que a verdadeira riqueza estava plantada na terra, brotando em grãos verdes e
          vermelhos.</p>

        <p>Não demorou muito para o café "tomar conta do morro". O relevo montanhoso e as altitudes elevadas do estado,
          que antes eram um desafio, viraram o grande segredo do sucesso da produção mineira.</p>

        <h3 style="color: #724e1b;">A República do Café com Leite</h3>

        <p>O café ficou tão absurdamente forte em Minas Gerais que, junto com São Paulo, o estado passou a dar as cartas
          na política do país inteiro na virada do século XX. Era a famosa política da <strong>"República do Café com
            Leite"</strong>: uma hora o presidente era indicado pelos barões do café paulistas, na outra pelos líderes
          mineiros.</p>

        <p>O café construiu cidades, financiou casarões históricos e moldou o jeito de ser do mineiro — sempre pronto
          para passar um cafezinho fresco para a visita.</p>
        <h3 style="color: #724e1b;">O Solo e as Montanhas: A Geografia do Café Mineiro</h3>

        <p>O grande segredo de Minas Gerais não é apenas o tamanho do estado, mas a sua impressionante diversidade de
          terrenos. O relevo acidentado e as diferentes altitudes criam microclimas únicos, dividindo o estado em
          regiões com características de cultivo completamente distintas.</p>

        <h4 style="color: #724e1b;">1. Sul de Minas: O Mar de Morros e Altitudes</h4>
        <p>É a região produtora mais tradicional. O terreno aqui é marcado por montanhas e colinas (o famoso "mar de
          morros"), com altitudes que variam de <strong>850 a 1.250 metros</strong>. </p>
        <ul style="padding-left: 20px;">
          <li><strong>O Solo:</strong> Predominam solos profundos e ricos em nutrientes, mas com uma inclinação que
            exige muito trabalho manual, já que tratores grandes não conseguem subir as ladeiras.</li>
          <li><strong>Clima:</strong> Temperaturas amenas e chuvas bem distribuídas no verão, ideal para o
            amadurecimento lento do grão.</li>
        </ul>

        <h4 style="color: #724e1b;">2. Cerrado Mineiro: O Planalto Tecnológico</h4>
        <p>Esqueça os morros. O Cerrado (no Triângulo Mineiro e Alto Paranaíba) apresenta terrenos planos, em formato de
          planaltos, com altitudes de <strong>800 a 1.300 metros</strong>.</p>
        <ul style="padding-left: 20px;">
          <li><strong>O Solo:</strong> Historicamente mais ácido e menos fértil, mas que passou por intensa correção
            tecnológica. Por ser plano, permite a mecanização total da colheita.</li>
          <li><strong>Clima:</strong> Estações climaticamente muito bem definidas: verões quentes e chuvosos, seguidos
            por invernos secos. Essa seca no inverno é perfeita na hora de colher e secar o café no terreiro, sem risco
            de chuva estragar os grãos.</li>
        </ul>

        <h4 style="color: #724e1b;">3. Matas de Minas: A Cafeicultura de Vertente</h4>
        <p>Localizada na região leste do estado (Zona da Mata), os terrenos aqui são de <strong>altíssima
            declividade</strong>, com cafezais plantados em encostas íngremes que chegam a <strong>1.200 metros</strong>
          de altitude.</p>
        <ul style="padding-left: 20px;">
          <li><strong>O Solo:</strong> Solos de floresta tropical, ricos em matéria orgânica. A inclinação severa impede
            qualquer tipo de máquina, tornando o cultivo 100% artesanal e familiar.</li>
          <li><strong>Clima:</strong> Quente e úmido, influenciado pelas correntes de ar que sobem o relevo.</li>
        </ul>

        <h4 style="color: #724e1b;">4. Chapada de Minas: Transição e Chapadões</h4>
        <p>No norte/nordeste do estado, o terreno intercala áreas planas (os chapadões) com regiões de vales profundos.
        </p>
        <ul style="padding-left: 20px;">
          <li><strong>O Solo e Clima:</strong> É uma região de transição para a caatinga. O solo exige manejo cuidadoso
            da água, e o clima é mais quente, o que faz com que o café precise ser cultivado em altitudes específicas
            para não queimar com o sol forte.</li>
        </ul>

        <hr style="border: 0; height: 1px; background: #a3c995; margin: 20px 0;">

        <blockquote
          style="background: #f4f9f2; border-left: 5px solid #2b4c1f; margin: 0; padding: 10px 20px; font-style: italic;">
          <strong>Geografia a favor do sabor:</strong> Enquanto o terreno plano do Cerrado entrega uniformidade através
          da tecnologia e colheita mecânica, as encostas do Sul e das Matas de Minas forçam uma colheita manual seletiva
          (onde o produtor colhe apenas os grãos perfeitamente maduros, um a um). É o relevo moldando o trabalho do
          homem!
        </blockquote>
      </AccordionItem>

      <AccordionItem title="6 · A onda do café especial">
        <p>Por muito tempo, o café foi tratado só como uma "commodity" — aquela bebida preta, super amarga, que a gente
          encharcava de açúcar só para dar um gás no trabalho. Mas aí veio a chamada <strong>Terceira Onda do
            Café</strong> e mudou tudo. O café deixou de ser apenas um estimulante e virou uma experiência sensorial,
          igualzinho ao vinho ou à cerveja artesanal.</p>

        <p>Nessa nova era, o foco total é na **qualidade**, na **rastreabilidade** (saber exatamente de qual fazenda e
          lote o grão veio) e na valorização das notas naturais da fruta, sem aquela torra excessiva que queima o café.
        </p>

        <h3 style="color: #8c5a3c;">Minas Gerais no Topo do Mundo</h3>

        <p>E adivinha quem virou a grande estrela dessa onda? Minas Gerais! Os produtores mineiros pararam de focar
          apenas em encher sacos de café e começaram a mimar os seus cafezais. O resultado foi uma explosão de prêmios
          internacionais e grãos que atingem pontuações altíssimas na escala da BSCA (Associação Brasileira de Cafés
          Especiais).</p>

        <p>Para o café ser considerado "especial", ele precisa passar por uma avaliação super rígida e alcançar mais de
          80 pontos em uma escala que vai até 100. Minas hoje produz cafés que passam dos 90 pontos brincando!</p>

        <h3 style="color: #8c5a3c;">O que muda no processo?</h3>
        <p>Para conseguir um café especial nas montanhas ou nos planaltos mineiros, o trabalho é cirúrgico:</p>
        <ul style="padding-left: 20px;">
          <li><strong>Colheita Seletiva:</strong> Só os grãos perfeitamente maduros (os chamados "cereja") são colhidos.
            Grão verde ou passado não entra no lote especial.</li>
          <li><strong>Processos de Fermentação:</strong> Os produtores começaram a testar fermentações induzidas e
            controladas (com ou sem oxigênio), o que traz notas malucas para a bebida, como frutas vermelhas, jasmim,
            capim-limão e até notas alcoólicas que lembram espumante.</li>
          <li><strong>Torra Clara a Média:</strong> A torra escura demais esconde os defeitos do café ruim. No café
            especial, a torra é suave para preservar a acidez brilhante e a doçura natural do grão.</li>
        </ul>

        <h3 style="color: #8c5a3c;">Os Perfis Sensoriais de Minas</h3>
        <p>Graças àqueles terrenos que vimos antes, cada canto de Minas entrega uma xícara completamente diferente na
          Terceira Onda:</p>
        <ul style="padding-left: 20px;">
          <li><strong>Sul de Minas:</strong> Conhecido por cafés super doces, com corpo aveludado e notas marcantes de
            chocolate e amêndoas.</li>
          <li><strong>Cerrado Mineiro:</strong> Cafés com acidez cítrica deliciosa, corpo médio e aroma intenso que puxa
            para o caramelo e nozes.</li>
          <li><strong>Matas de Minas:</strong> Uma das regiões que mais cresce em qualidade, entregando cafés com acidez
            brilhante e notas florais ou de frutas amarelas (como maracujá e pêssego).</li>
        </ul>

        <hr style="border: 0; height: 1px; background: #d4b296; margin: 20px 0;">

        <blockquote
          style="background: #fdfaf7; border-left: 5px solid #5c3a21; margin: 0; padding: 10px 20px; font-style: italic;">
          <strong>Dica de ouro:</strong> Café especial de verdade não precisa (e nem deve!) levar açúcar. Como ele é
          colhido maduro e torrado do jeito certo, a própria doçura natural da fruta já está ali na xícara. É um caminho
          sem volta: depois que você acostuma o paladar com um especial mineiro, o café tradicional de mercado começa a
          parecer carvão líquido!
        </blockquote>
      </AccordionItem>
    </section>
  </main>

  <SiteFooter />
</template>
