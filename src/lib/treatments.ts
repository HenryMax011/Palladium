import type { PhotoKey } from "@/lib/site";

export type Category = "facial" | "corporal" | "masculina";

export type Treatment = {
  slug: string;
  name: string;
  category: Category;
  summary: string;
  body: string[];
  points: string[];
  image: PhotoKey;
  featured?: boolean;
};

export const categoryMeta: Record<
  Category,
  { label: string; href: string; text: string }
> = {
  facial: {
    label: "Faciais",
    href: "/tratamentos#faciais",
    text: "Firmeza, contorno e harmonização com ultrassom microfocado, preenchimento e fios — sem cirurgia.",
  },
  corporal: {
    label: "Corporais",
    href: "/tratamentos#corporais",
    text: "Gordura localizada, flacidez, celulite, estrias e modelagem, com protocolos combinados depois da avaliação.",
  },
  masculina: {
    label: "Estética masculina",
    href: "/tratamentos#masculina",
    text: "Rosto, abdômen e harmonização íntima com discrição, no Tatuapé e na Avenida Paulista.",
  },
};

export const treatments: Treatment[] = [
  {
    slug: "ultraformer",
    name: "Ultraformer",
    category: "facial",
    summary:
      "Ultrassom microfocado para firmeza do rosto, da papada e do corpo, sem cortes.",
    body: [
      "O Ultraformer é o ultrassom microfocado usado na Palladium por quem busca pele mais firme e menos flacidez, no rosto e no corpo. A energia chega às camadas profundas e estimula colágeno, com um caminho bem diferente do de uma cirurgia plástica.",
      "É um dos protocolos mais pedidos nas unidades do Tatuapé e da Avenida Paulista — inclusive para papada e marcas de expressão. A área e a intensidade são definidas na avaliação. Na campanha atual, o Ultraformer está com 15% off, a partir de 10× de R$ 129 sem juros.",
    ],
    points: [
      "Sem cortes e sem internação",
      "Rosto, papada e áreas corporais",
      "Campanha vigente: 15% off, a partir de 10× R$ 129",
    ],
    image: "ultraformer",
    featured: true,
  },
  {
    slug: "harmonizacao-facial",
    name: "Harmonização facial",
    category: "facial",
    summary:
      "Um conjunto de técnicas para um rosto mais equilibrado, jovem e com a sua identidade.",
    body: [
      "Harmonização facial, na Palladium, não é um procedimento único. É um plano: preenchimento, toxina, fios ou ultrassom, escolhidos conforme o que o espelho mostra e o que você quer preservar.",
      "O protocolo é desenhado nas duas unidades, Tatuapé e Avenida Paulista, depois de uma conversa franca sobre proporção, histórico e expectativa. O objetivo é um rosto mais harmônico — não um rosto padronizado.",
    ],
    points: [
      "Plano individual, não pacote genérico",
      "Pode combinar preenchimento, fios e Ultraformer",
      "Feito nas duas unidades",
    ],
    image: "harmonizacao",
    featured: true,
  },
  {
    slug: "preenchimento-facial",
    name: "Preenchimento facial",
    category: "facial",
    summary: "Volume, contorno e sustentação com ácido hialurônico, em pontos precisos.",
    body: [
      "O preenchimento devolve volume onde a face perdeu apoio: malar, mandíbula, lábios, olheiras ou sulcos. Na Palladium ele entra num desenho de harmonização, não como aplicação isolada sem critério.",
      "O produto mais usado é o ácido hialurônico, escolhido conforme a região e a densidade que a área pede. O plano, a quantidade e o retorno são combinados na avaliação.",
    ],
    points: [
      "Contorno, volume e sulcos",
      "Ácido hialurônico conforme a área",
      "Integra a harmonização facial",
    ],
    image: "skin",
  },
  {
    slug: "acido-hialuronico",
    name: "Ácido hialurônico",
    category: "facial",
    summary: "O preenchedor usado para hidratar, projetar e sustentar com naturalidade.",
    body: [
      "O ácido hialurônico é uma molécula que a própria pele reconhece. Em gel, ele preenche, projeta lábios, suaviza olheiras e devolve o contorno que o tempo foi apagando.",
      "A escolha da densidade muda tudo: um gel macio não faz o mesmo trabalho de um gel de sustentação. Por isso a indicação fica para a avaliação, junto com o que faz sentido combinar — ou não — com outros protocolos.",
    ],
    points: [
      "Lábios, olheiras, malar e mandíbula",
      "Densidade escolhida por região",
      "Pode entrar num plano de harmonização",
    ],
    image: "facial",
  },
  {
    slug: "fios-de-sustentacao",
    name: "Fios de sustentação",
    category: "facial",
    summary: "Sustentação do rosto para flacidez leve e média, sem bisturi.",
    body: [
      "Os fios de sustentação reposicionam tecidos que cederam e estimulam colágeno no trajeto em que são colocados. Entram quando a flacidez pede apoio, e não apenas volume.",
      "Na Palladium eles costumam conversar com preenchimento e com o Ultraformer, quando o plano pede as três coisas. A indicação depende da qualidade da pele e do grau de queda — algo que só a avaliação define.",
    ],
    points: [
      "Apoio para flacidez facial",
      "Sem cirurgia",
      "Pode ser combinado com outros protocolos",
    ],
    image: "portrait",
  },
  {
    slug: "flacidez-facial",
    name: "Flacidez facial",
    category: "facial",
    summary: "Protocolos para devolver firmeza ao rosto, à papada e ao contorno.",
    body: [
      "A flacidez facial não se resolve com um único aparelho. Pele fina, papada e perda de contorno pedem combinações diferentes — Ultraformer, fios, bioestimuladores ou preenchimento de sustentação.",
      "O caminho começa pela avaliação: o que é pele, o que é gordura e o que é estrutura. A partir daí a equipe monta um plano com recuperação compatível com a sua rotina.",
    ],
    points: [
      "Rosto, papada e contorno da mandíbula",
      "Tecnologia e técnicas combinadas",
      "Plano definido caso a caso",
    ],
    image: "facial",
  },
  {
    slug: "rejuvenescimento-facial",
    name: "Rejuvenescimento facial",
    category: "facial",
    summary: "Estímulo de colágeno e qualidade de pele com tecnologia de ponta.",
    body: [
      "Rejuvenescimento, aqui, é qualidade de pele: firmeza, viço e suavização de marcas, sem prometer apagar a sua expressão. O Ultraformer é o eixo tecnológico, e pode ser acompanhado de skinbooster, peelings ou bioestimuladores.",
      "O plano olha para a pele de hoje e para a manutenção. O acolhimento depois da sessão existe para ajustar o que vier a seguir — e para orientar o cuidado em casa.",
    ],
    points: [
      "Firmeza e textura",
      "Ultraformer como tecnologia central",
      "Manutenção combinada na avaliação",
    ],
    image: "skin",
  },
  {
    slug: "criolipolise",
    name: "Criolipólise",
    category: "corporal",
    summary:
      "Redução de gordura localizada por resfriamento, no abdômen e em outras áreas.",
    body: [
      "A criolipólise é o protocolo mais procurado na Palladium por quem quer reduzir medida sem cirurgia, sobretudo no abdômen. O resfriamento controlado atinge a gordura localizada, em corpos femininos e masculinos.",
      "Não é emagrecimento geral nem substitui alimentação e movimento. É um tratamento de contorno. A área, o número de aplicações e a combinação com outros protocolos — placas, enzimas, drenagem — saem da avaliação.",
    ],
    points: [
      "Gordura localizada, com foco em abdômen",
      "Minimamente invasiva, sem cortes",
      "Indicada também para homens",
    ],
    image: "criolipolise",
    featured: true,
  },
  {
    slug: "criolipolise-de-placas",
    name: "Criolipólise de placas",
    category: "corporal",
    summary: "A versão em placas, para áreas maiores e um encaixe mais confortável.",
    body: [
      "A criolipólise de placas usa aplicadores planos, úteis quando a dobra de gordura não se adapta bem ao vácuo tradicional ou quando a área é mais extensa.",
      "O princípio é o mesmo: resfriar a gordura localizada para o corpo eliminá-la aos poucos. A escolha entre ponteiras e placas é técnica, feita na avaliação, e não uma questão de moda.",
    ],
    points: [
      "Aplicadores planos",
      "Áreas extensas ou de difícil prega",
      "Mesmo objetivo da criolipólise clássica",
    ],
    image: "relax",
  },
  {
    slug: "gordura-abdominal",
    name: "Gordura abdominal",
    category: "corporal",
    summary: "Criolipólise e lipo enzimática para a gordura que não sai com dieta.",
    body: [
      "A gordura do abdômen que resiste à rotina tem tratamento na Palladium, sem centro cirúrgico. O eixo costuma ser a criolipólise, associada quando faz sentido à lipo enzimática e a cuidados de pele.",
      "O plano só fecha depois de ver o que é gordura, o que é flacidez e o que é inchaço. Misturar as três coisas num único aparelho é o atalho que a avaliação evita.",
    ],
    points: [
      "Sem cirurgia",
      "Criolipólise e lipo enzimática",
      "Leitura individual do abdômen",
    ],
    image: "body",
    featured: true,
  },
  {
    slug: "emagrecimento",
    name: "Emagrecimento",
    category: "corporal",
    summary: "Protocolos da casa para queima de gordura, sempre depois da avaliação.",
    body: [
      "Os protocolos de emagrecimento da Palladium combinam recursos estéticos para acelerar a redução de gordura. Eles não substituem acompanhamento de saúde, alimentação ou movimento — e não existem atalhos milagrosos.",
      "O que a clínica faz é montar um caminho estético objetivo, com tecnologias e enzimas quando há indicação, e com acompanhamento para ver o que de fato mudou.",
    ],
    points: [
      "Protocolos combinados",
      "Sem promessa de milagre",
      "Acompanhamento depois das sessões",
    ],
    image: "stones",
  },
  {
    slug: "flacidez-corporal",
    name: "Flacidez corporal",
    category: "corporal",
    summary: "Firmeza para abdômen, braços, coxas e outras áreas que cederam.",
    body: [
      "Depois de emagrecer, de uma gestação ou simplesmente com o tempo, a pele do corpo pode perder sustentação. O tratamento de flacidez da Palladium busca firmeza com tecnologia — entre elas o Ultraformer corporal — e com técnicas manuais quando a pele pede.",
      "A região e a expectativa são alinhadas na avaliação. Firmeza não é a mesma coisa que perda de gordura, e o plano deixa essa diferença clara.",
    ],
    points: [
      "Abdômen, braços, coxas e glúteos",
      "Tecnologia de firmeza, não só redução",
      "Expectativa alinhada na avaliação",
    ],
    image: "massage",
    featured: true,
  },
  {
    slug: "estrias",
    name: "Estrias",
    category: "corporal",
    summary: "Protocolos para suavizar estrias vermelhas e brancas.",
    body: [
      "Estrias são rompimentos da pele. As vermelhas ainda têm componente inflamatório; as brancas são cicatrizes mais antigas e respondem de outro jeito. O tratamento da Palladium parte dessa diferença.",
      "O objetivo é suavizar cor e relevo, não prometer pele de antes da estria. A combinação de técnicas é definida na avaliação, conforme a cor, a largura e a região.",
    ],
    points: [
      "Estrias recentes e antigas",
      "Foco em cor e textura",
      "Protocolo conforme o tipo de marca",
    ],
    image: "skin",
  },
  {
    slug: "celulite",
    name: "Celulite",
    category: "corporal",
    summary: "Para a pele com ondulações, furinhos e irregularidade de relevo.",
    body: [
      "Celulite é relevo, não só gordura. Tratar só a gordura e ignorar a pele — ou o contrário — deixa o resultado pela metade. O protocolo da Palladium olha para os dois.",
      "Entram recursos como carboxiterapia, enzimas e tecnologias de firmeza, na medida da indicação. O número de sessões não é padrão de vitrine: sai da avaliação.",
    ],
    points: [
      "Relevo e gordura tratados juntos",
      "Pode incluir carboxiterapia e enzimas",
      "Sessões definidas individualmente",
    ],
    image: "relax",
  },
  {
    slug: "carboxiterapia",
    name: "Carboxiterapia",
    category: "corporal",
    summary: "Gás carbônico medicinal para circulação, celulite e flacidez.",
    body: [
      "A carboxiterapia aplica gás carbônico sob a pele para estimular circulação local. Na Palladium ela entra em planos de celulite, flacidez e gordura, quase sempre junto de outras técnicas.",
      "O desconforto e o número de sessões são explicados antes. Sozinha, ela raramente é o plano inteiro — e a avaliação deixa isso transparente.",
    ],
    points: [
      "Estímulo de circulação local",
      "Celulite, flacidez e gordura",
      "Quase sempre combinada",
    ],
    image: "clinic",
  },
  {
    slug: "empina-bumbum",
    name: "Empina bumbum",
    category: "corporal",
    summary: "Pump up para levantar e desenhar os glúteos sem cirurgia.",
    body: [
      "O empina bumbum, ou pump up, é o protocolo da Palladium para quem quer glúteos mais altos e desenhados sem prótese e sem cirurgia. A técnica é escolhida conforme o que falta: projeção, firmeza ou ambos.",
      "O resultado convive com treino e com o peso corporal. A avaliação explica o que o procedimento faz e o que fica a cargo da rotina.",
    ],
    points: [
      "Projeção e firmeza dos glúteos",
      "Sem cirurgia",
      "Plano alinhado à sua rotina",
    ],
    image: "massage",
  },
  {
    slug: "massagem-terapeutica",
    name: "Massagem terapêutica",
    category: "corporal",
    summary:
      "Modeladora, relaxante, pedras quentes, drenagem linfática e reflexologia.",
    body: [
      "A massagem terapêutica da Palladium reúne modeladora, relaxante com pedras quentes, drenagem linfática e reflexologia, além de massagens faciais. Cada uma tem um propósito — inchaço, conforto muscular ou complemento de um protocolo estético.",
      "Drenagem pós-operatória também faz parte do cuidado, quando há indicação. A frequência é combinada conforme o objetivo, não como um cardápio fechado.",
    ],
    points: [
      "Modeladora, relaxante e pedras quentes",
      "Drenagem linfática e reflexologia",
      "Também como apoio a outros tratamentos",
    ],
    image: "stones",
  },
  {
    slug: "estetica-masculina",
    name: "Estética masculina",
    category: "masculina",
    summary:
      "Rosto, gordura abdominal e harmonização íntima, com discrição e critério.",
    body: [
      "A estética masculina da Palladium cobre corpo e rosto: gordura abdominal, preenchimento de mandíbula, olheiras, lábios e nariz, rejuvenescimento e firmeza. O desenho é masculino — estrutura e descanso do olhar, não um rosto feminilizado.",
      "Também há harmonização íntima masculina, conduzida com discrição e só depois de avaliação. Os protocolos são minimamente invasivos, nas unidades do Tatuapé e da Avenida Paulista, com a mesma lógica da casa: plano individual, recuperação compatível com a rotina e acompanhamento depois.",
    ],
    points: [
      "Abdômen, mandíbula, olheiras e contorno",
      "Harmonização íntima com discrição",
      "Atendimento nas duas unidades",
    ],
    image: "man",
    featured: true,
  },
];

export function getTreatment(slug: string) {
  return treatments.find((item) => item.slug === slug);
}

export function relatedTreatments(current: Treatment) {
  const same = treatments.filter(
    (item) => item.slug !== current.slug && item.category === current.category,
  );
  const featured = treatments.filter(
    (item) => item.slug !== current.slug && item.featured && item.category !== current.category,
  );
  return [...same, ...featured].slice(0, 3);
}
