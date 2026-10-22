export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export type CatalogPage = {
  path: string;
  title: string;
  summary: string;
  eyebrow: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  gallery?: Shot[];
  reviews?: boolean;
};

const file = (name: string) => `/clinica/${name}`;

export const crioGallery: Shot[] = [
  {
    src: file("crioliolise-palladium-antes-e-depois-1.png"),
    alt: "Antes e depois de criolipólise no abdômen, vista lateral",
    caption: "Abdômen · criolipólise",
  },
  {
    src: file("crioliolise-palladium-antes-e-depois-3.png"),
    alt: "Antes e depois de criolipólise no abdômen",
    caption: "Abdômen · criolipólise",
  },
  {
    src: file("crioliolise-palladium-antes-e-depois-4.png"),
    alt: "Antes e depois de criolipólise",
    caption: "Criolipólise",
  },
  {
    src: file("antes-e-depois-criolipolise.png"),
    alt: "Antes e depois de criolipólise",
    caption: "Criolipólise",
  },
  {
    src: file("criolipolise-antes-e-depois.jpg"),
    alt: "Antes e depois de criolipólise",
    caption: "Criolipólise",
  },
  {
    src: file("antes-e-depois-criolipolise-homem.png"),
    alt: "Antes e depois de criolipólise abdominal em paciente homem",
    caption: "Abdômen masculino",
  },
  {
    src: file("perda-de-gordura-abdominal-homem-2.png"),
    alt: "Antes e depois de perda de gordura abdominal em homem",
    caption: "Gordura abdominal · homens",
  },
];

export const ultraGallery: Shot[] = [
  {
    src: file("palladium-site-2-1.png"),
    alt: "Antes e depois de papada com Ultraformer",
    caption: "Papada",
  },
  {
    src: file("palladium-site-4.png"),
    alt: "Antes e depois de pescoço e papada com ultrassom microfocado",
    caption: "Pescoço e papada",
  },
  {
    src: file("palladium-site-7.png"),
    alt: "Antes e depois da região do pescoço com Ultraformer",
    caption: "Pescoço",
  },
  {
    src: file("palladium-site-8.png"),
    alt: "Antes e depois da região dos olhos com Ultraformer",
    caption: "Região dos olhos",
  },
  {
    src: file("palladium-site-3-1.png"),
    alt: "Antes e depois da área dos olhos",
    caption: "Área dos olhos",
  },
  {
    src: file("palladium-site-5.png"),
    alt: "Antes e depois de ultrassom microfocado",
    caption: "Ultrassom microfocado",
  },
  {
    src: file("foxy-eyes-antes-e-depois.png"),
    alt: "Antes e depois do olhar com Ultraformer",
    caption: "Olhar",
  },
  {
    src: file("palladium-site-3.png"),
    alt: "Antes e depois com Ultraformer",
    caption: "Ultraformer",
  },
];

const papada = ultraGallery.filter((item) => /apada|escoço/i.test(item.caption));
const olhos = ultraGallery.filter((item) => /olho|lhar/i.test(item.caption));
const homens = crioGallery.filter((item) => /masculino|homens/i.test(item.caption));

export const pages: CatalogPage[] = [
  {
    path: "/criolipolise",
    title: "Criolipólise",
    eyebrow: "Corporal",
    summary: "Redução de gordura localizada por resfriamento, no abdômen e em outras áreas, sem cirurgia.",
    image: file("criolipose.jpg"),
    imageAlt: "Criolipólise na Palladium",
    paragraphs: [
      "A criolipólise é o protocolo mais pedido na Palladium por quem quer reduzir medida sem corte, sobretudo no abdômen. O resfriamento controlado atinge a gordura localizada, em mulheres e em homens.",
      "Não substitui alimentação nem movimento. A área, o número de aplicações e a combinação com placas ou enzimas saem da avaliação gratuita, no Tatuapé ou na Avenida Paulista.",
    ],
    gallery: crioGallery.slice(0, 4),
  },
  {
    path: "/criolipolise/antes-e-depois",
    title: "Criolipólise antes e depois",
    eyebrow: "Resultados",
    summary: "Registros de antes e depois publicados pela Palladium, em abdômen feminino e masculino.",
    image: file("crioliolise-palladium-antes-e-depois-1.png"),
    imageAlt: "Antes e depois de criolipólise no abdômen",
    paragraphs: [
      "Estas fotos fazem parte do material da própria clínica. Cada imagem junta o antes e o depois do mesmo protocolo de criolipólise.",
      "O contorno muda conforme a gordura de partida, o número de sessões e a rotina de quem fez. A avaliação mostra o que é possível no seu caso.",
    ],
    gallery: crioGallery,
  },
  {
    path: "/criolipolise/depoimentos-de-quem-fez",
    title: "Depoimentos de quem fez criolipólise",
    eyebrow: "Google",
    summary: "Relatos de pacientes que contrataram criolipólise na Palladium.",
    image: file("criolipolise.jpg"),
    imageAlt: "Tratamento de criolipólise",
    paragraphs: [
      "Os textos abaixo vieram de avaliações espontâneas no Google, já publicadas pela clínica. O destaque costuma ser o acolhimento na avaliação e o retorno das sessões.",
    ],
    reviews: true,
  },
  {
    path: "/criolipolise/placas",
    title: "Criolipólise de placas",
    eyebrow: "Corporal",
    summary: "Aplicadores planos para áreas maiores ou quando a prega não encaixa no vácuo tradicional.",
    image: file("placas.png"),
    imageAlt: "Criolipólise de placas",
    paragraphs: [
      "A criolipólise de placas usa aplicadores retos. Entra quando a área é extensa ou quando a dobra de gordura não se adapta bem à ponteira tradicional.",
      "O princípio é o mesmo: resfriar a gordura localizada. A escolha entre placas e ponteiras é feita na avaliação, olhando o seu contorno.",
    ],
  },
  {
    path: "/criolipolise/funciona",
    title: "Criolipólise funciona?",
    eyebrow: "Criolipólise",
    summary: "Funciona para gordura localizada. Não é emagrecimento do corpo inteiro.",
    image: file("areas-para-criolipolise.png"),
    imageAlt: "Áreas em que a criolipólise pode ser aplicada",
    paragraphs: [
      "A criolipólise reduz células de gordura na área tratada. Por isso os registros de antes e depois da casa mostram mudança de contorno, principalmente no abdômen.",
      "Ela não trata obesidade, não aperta pele sozinha e não dispensa hábito. Se a queixa for flacidez, o plano precisa de outro recurso.",
    ],
    gallery: crioGallery.slice(0, 3),
  },
  {
    path: "/criolipolise/o-que-e",
    title: "O que é criolipólise",
    eyebrow: "Criolipólise",
    summary: "Um resfriamento controlado da gordura localizada, sem corte e sem internação.",
    image: file("areas-para-criolipolise.png"),
    imageAlt: "Mapa de áreas para criolipólise",
    paragraphs: [
      "Criolipólise é a aplicação de frio em uma dobra de gordura até a célula adiposa entrar em eliminação. O corpo conclui esse processo ao longo das semanas.",
      "Na Palladium o protocolo mais comum é o abdômen, com versão tradicional e de placas. Homens e mulheres passam pela mesma avaliação.",
    ],
  },
  {
    path: "/criolipolise/homens",
    title: "Criolipólise para homens",
    eyebrow: "Estética masculina",
    summary: "O abdômen masculino também entra no protocolo, sem cirurgia.",
    image: file("criolipolie-para-homens.png"),
    imageAlt: "Criolipólise para homens",
    paragraphs: [
      "A gordura do abdômen masculino responde à criolipólise do mesmo modo: área localizada, sem corte. O desenho da aplicação muda porque a gordura e a pele não são iguais às de outro paciente.",
      "Os registros abaixo são de antes e depois publicados pela clínica em pacientes homens.",
    ],
    gallery: homens,
  },
  {
    path: "/criolipolise/preco",
    title: "Criolipólise preço",
    eyebrow: "Valores",
    summary: "O valor depende da área e do número de aplicações. A avaliação para montar o plano é gratuita.",
    image: file("criolipolise.jpg"),
    imageAlt: "Sessão de criolipólise",
    paragraphs: [
      "Não há um preço único de vitrine, porque abdômen, flancos e costas não consomem a mesma sessão. Na avaliação a equipe fecha área, quantidade e forma de pagamento.",
      "A casa parcela em até 10 vezes sem juros no cartão e dá 10% de desconto no PIX. Campanhas mudam ao longo do ano e são confirmadas no contato.",
    ],
  },
  {
    path: "/criolipolise/resultados",
    title: "Resultados de criolipólise",
    eyebrow: "Resultados",
    summary: "O que os registros da clínica mostram: menos volume na área tratada, ao longo das semanas.",
    image: file("antes-e-depois-criolipolise.png"),
    imageAlt: "Resultado de criolipólise",
    paragraphs: [
      "O resultado não aparece no dia da sessão. A gordura tratada é eliminada aos poucos. As fotos reunidas aqui são o material de antes e depois da própria Palladium.",
      "Medida, foto e a sua percepção entram no retorno. Se ainda houver flacidez, o plano seguinte é outro.",
    ],
    gallery: crioGallery,
  },
  {
    path: "/criolipolise/tratamento",
    title: "Tratamento de criolipólise",
    eyebrow: "Como é a sessão",
    summary: "Avaliação, aplicação e acompanhamento. Sem internação.",
    image: file("criolipose.jpg"),
    imageAlt: "Aplicação de criolipólise",
    paragraphs: [
      "Tudo começa na avaliação gratuita: o que é gordura, o que é flacidez e o que é inchaço. Só então a área é marcada.",
      "A sessão não pede afastamento do trabalho na maior parte dos casos. O WhatsApp da unidade marca os retornos e a equipe acompanha o que mudou.",
    ],
  },
  {
    path: "/ultraformer",
    title: "Ultraformer",
    eyebrow: "Ultrassom microfocado",
    summary: "Firmeza de rosto, papada e corpo, sem cortes. Campanha atual com 15% off.",
    image: file("ultraformer.png"),
    imageAlt: "Ultraformer",
    paragraphs: [
      "O Ultraformer é o ultrassom microfocado da Palladium para flacidez e contorno. A energia chega às camadas profundas da pele, no rosto, na papada e também no corpo.",
      "Na campanha vigente, o protocolo está com 15% off, a partir de 10 vezes de R$ 129 sem juros. A indicação continua sendo definida na avaliação.",
    ],
    gallery: ultraGallery.slice(0, 4),
  },
  {
    path: "/ultraformer/antes-e-depois",
    title: "Ultraformer antes e depois",
    eyebrow: "Resultados",
    summary: "Papada, pescoço, olhos e olhar. Fotos de antes e depois publicadas pela clínica.",
    image: file("palladium-site-2-1.png"),
    imageAlt: "Antes e depois de papada",
    paragraphs: [
      "O material abaixo é o arquivo de antes e depois de Ultraformer da Palladium: papada, pescoço e região dos olhos.",
      "Firmeza não é a mesma coisa que perda de gordura. Se a queixa for dobra de abdômen, a conversa começa pela criolipólise.",
    ],
    gallery: ultraGallery,
  },
  {
    path: "/ultraformer/papada",
    title: "Ultraformer para papada",
    eyebrow: "Rosto",
    summary: "Contorno do pescoço e da papada com ultrassom microfocado, sem cirurgia.",
    image: file("palladium-site-4.png"),
    imageAlt: "Antes e depois de pescoço e papada",
    paragraphs: [
      "A papada pode ser pele, gordura ou as duas coisas. O Ultraformer entra quando a queixa é firmeza e contorno do submento e do pescoço.",
      "Os registros ao lado são os antes e depois de papada e pescoço publicados no site da clínica.",
    ],
    gallery: papada,
  },
  {
    path: "/ultraformer/o-que-e",
    title: "O que é Ultraformer",
    eyebrow: "Tecnologia",
    summary: "Ultrassom microfocado para estimular colágeno e tratar flacidez, sem corte.",
    image: file("ultraformer-iii.png"),
    imageAlt: "Equipamento Ultraformer III",
    paragraphs: [
      "Ultraformer, ou ultrassom microfocado, concentra energia em profundidades determinadas da pele. O objetivo é firmeza, não aspiração de gordura.",
      "Na Palladium ele aparece em planos de rosto, papada e corpo. Área e energia mudam de uma pessoa para outra, por isso o anúncio não substitui a avaliação.",
    ],
  },
  {
    path: "/ultraformer/preco",
    title: "Ultraformer preço",
    eyebrow: "Oferta da casa",
    summary: "Campanha atual: 15% off, a partir de 10 vezes de R$ 129 sem juros.",
    image: file("ultraformer3.png"),
    imageAlt: "Protocolo de Ultraformer",
    paragraphs: [
      "A oferta publicada pela clínica neste momento é de 15% off no Ultraformer, a partir de 10 vezes de R$ 129 sem juros. O valor final depende da área tratada.",
      "Há também parcelamento geral em até 10 vezes sem juros e 10% de desconto no PIX. A avaliação para saber se o protocolo é o seu é gratuita.",
    ],
    gallery: ultraGallery.slice(0, 3),
  },
  {
    path: "/carboxiterapia",
    title: "Carboxiterapia",
    eyebrow: "Corporal",
    summary: "Gás carbônico medicinal para circulação, celulite e flacidez, quase sempre combinado.",
    image: file("carboxiterapia.jpg"),
    imageAlt: "Carboxiterapia",
    paragraphs: [
      "A carboxiterapia aplica gás carbônico sob a pele para estimular a circulação local. Na Palladium ela entra em planos de celulite, flacidez e gordura.",
      "Sozinha, raramente é o plano inteiro. Desconforto e número de sessões são explicados antes de começar.",
    ],
  },
  {
    path: "/tratamento-celulite",
    title: "Tratamento de celulite",
    eyebrow: "Corporal",
    summary: "Relevo e gordura tratados juntos, não só um dos dois.",
    image: file("tratamento-da-celulite.jpg"),
    imageAlt: "Tratamento de celulite",
    paragraphs: [
      "Celulite é relevo de pele, não apenas gordura. Tratar só uma das partes deixa o resultado pela metade.",
      "O protocolo pode reunir carboxiterapia, enzimas e tecnologia de firmeza. A quantidade de sessões sai da avaliação, não de um pacote padrão.",
    ],
  },
  {
    path: "/emagrecer-rapido",
    title: "Emagrecer rápido",
    eyebrow: "Corporal",
    summary: "Protocolos estéticos de apoio à redução de gordura. Sem promessa de milagre.",
    image: file("lipo-enzimatica.jpg"),
    imageAlt: "Protocolo de emagrecimento estético",
    paragraphs: [
      "O que a Palladium faz é um caminho estético: tecnologias e enzimas quando há indicação, com acompanhamento do que de fato mudou.",
      "Isso não substitui saúde, alimentação ou movimento. Não existe atalho milagroso, e a avaliação deixa esse limite claro.",
    ],
  },
  {
    path: "/tratamento-estrias",
    title: "Tratamento de estrias",
    eyebrow: "Corporal",
    summary: "Para suavizar cor e relevo de estrias recentes e antigas.",
    image: file("tratamento-de-estrias.jpg"),
    imageAlt: "Tratamento de estrias",
    paragraphs: [
      "Estrias vermelhas e brancas não respondem do mesmo jeito. As recentes ainda têm componente inflamatório. As brancas são cicatrizes mais antigas.",
      "O objetivo é suavizar cor e textura, não devolver a pele de antes da marca. A combinação é definida na avaliação.",
    ],
  },
  {
    path: "/tratamento-flacidez",
    title: "Tratamento para flacidez",
    eyebrow: "Corporal",
    summary: "Firmeza para abdômen, braços, coxas e outras áreas que cederam.",
    image: file("tratamento-para-flacidez.jpg"),
    imageAlt: "Tratamento para flacidez",
    paragraphs: [
      "Depois de um emagrecimento, de uma gestação ou com o tempo, a pele perde apoio. Firmeza não é a mesma coisa que perda de gordura.",
      "O plano pode reunir Ultraformer corporal, carboxiterapia e técnicas manuais. A região e a expectativa são alinhadas na avaliação.",
    ],
  },
  {
    path: "/como-perder-gordura-abdominal",
    title: "Perder gordura abdominal",
    eyebrow: "Corporal",
    summary: "Criolipólise e lipo enzimática para a gordura que não sai só com dieta.",
    image: file("gordura-localizada.jpg"),
    imageAlt: "Gordura localizada no abdômen",
    paragraphs: [
      "O abdômen que resiste à rotina é o pedido mais comum da casa. O eixo costuma ser a criolipólise, com lipo enzimática quando faz sentido.",
      "Antes de indicar aparelho, a avaliação separa gordura, flacidez e inchaço. Os antes e depois de criolipólise mostram o tipo de mudança de contorno.",
    ],
    gallery: crioGallery.slice(0, 4),
  },
  {
    path: "/ultraformer-corporal",
    title: "Ultraformer corporal",
    eyebrow: "Corporal",
    summary: "O mesmo ultrassom microfocado, aplicado para firmeza do corpo.",
    image: file("ultraforme-3.png"),
    imageAlt: "Ultraformer corporal",
    paragraphs: [
      "No corpo, o Ultraformer entra quando a queixa é pele sem sustentação: abdômen, braços, coxas. Não é o protocolo de quem quer só reduzir uma dobra de gordura.",
      "Pode conversar com a criolipólise quando existem as duas queixas. A ordem das sessões é definida na avaliação.",
    ],
  },
  {
    path: "/fios-de-sustentacao",
    title: "Fios de sustentação",
    eyebrow: "Facial",
    summary: "Apoio para flacidez leve e média, sem bisturi.",
    image: file("fios-de-pdo.png"),
    imageAlt: "Fios de sustentação",
    paragraphs: [
      "Os fios reposicionam tecidos que cederam e estimulam colágeno no trajeto em que são colocados. Entram quando a face pede apoio, não apenas volume.",
      "Na Palladium eles costumam conversar com preenchimento e com o Ultraformer, quando o plano pede as três coisas.",
    ],
  },
  {
    path: "/flacidez-facial",
    title: "Flacidez facial",
    eyebrow: "Facial",
    summary: "Rosto, papada e contorno da mandíbula, com tecnologia e técnicas combinadas.",
    image: file("full-face.png"),
    imageAlt: "Protocolo facial",
    paragraphs: [
      "A flacidez do rosto não se resolve com um único aparelho. Pele, papada e perda de contorno pedem combinações diferentes.",
      "Ultraformer, fios e preenchimento de sustentação são os caminhos mais usados na casa. Os antes e depois de papada e pescoço estão na galeria de Ultraformer.",
    ],
    gallery: papada,
  },
  {
    path: "/harmonizacao-facial",
    title: "Harmonização facial",
    eyebrow: "Facial",
    summary: "Um plano de rosto, não um procedimento único. No Tatuapé e na Avenida Paulista.",
    image: file("armonizacao-facial.jpg"),
    imageAlt: "Harmonização facial",
    paragraphs: [
      "Harmonização, aqui, é um conjunto: preenchimento, toxina, fios, bioestimulador ou Ultraformer, escolhidos conforme o que você quer preservar.",
      "O objetivo é um rosto mais harmônico, não um rosto padronizado. A avaliação alinha proporção, histórico e expectativa.",
    ],
    gallery: olhos,
  },
  {
    path: "/preenchimento-facial",
    title: "Preenchimento facial",
    eyebrow: "Facial",
    summary: "Volume e contorno com ácido hialurônico, em pontos precisos.",
    image: file("preenchimento-facial.png"),
    imageAlt: "Preenchimento facial",
    paragraphs: [
      "O preenchimento devolve apoio onde a face perdeu volume: malar, mandíbula, lábios, olheiras ou sulcos. Ele entra num desenho de harmonização.",
      "Quantidade e produto são definidos na avaliação. Não é uma aplicação isolada sem critério.",
    ],
  },
  {
    path: "/preenchimento-com-acido-hialuronico",
    title: "Preenchimento com ácido hialurônico",
    eyebrow: "Facial",
    summary: "O gel usado para projetar, sustentar e hidratar, com densidade escolhida por região.",
    image: file("colageno.png"),
    imageAlt: "Ácido hialurônico e bioestimuladores",
    paragraphs: [
      "O ácido hialurônico é uma molécula que a pele reconhece. Em gel, projeta lábios, suaviza olheiras e devolve contorno.",
      "A densidade muda tudo: um gel macio não faz o trabalho de um gel de sustentação. Essa escolha fica para a avaliação.",
    ],
  },
  {
    path: "/ultraformer-facial",
    title: "Ultraformer facial",
    eyebrow: "Facial",
    summary: "Firmeza do rosto, da papada e do olhar, sem cirurgia.",
    image: file("ultraformer3-1.png"),
    imageAlt: "Ultraformer facial",
    paragraphs: [
      "No rosto, o Ultraformer trata flacidez, papada e região dos olhos. É não invasivo e costuma caber na rotina.",
      "A campanha atual é de 15% off, a partir de 10 vezes de R$ 129 sem juros. Veja os antes e depois publicados pela clínica.",
    ],
    gallery: ultraGallery,
  },
  {
    path: "/ultrassom-microfocado",
    title: "Ultrassom microfocado",
    eyebrow: "Facial",
    summary: "O nome da tecnologia por trás do Ultraformer.",
    image: file("ultraformer-iii.png"),
    imageAlt: "Ultrassom microfocado",
    paragraphs: [
      "Ultrassom microfocado é a categoria. Ultraformer é o equipamento usado na Palladium. Os dois nomes aparecem no mesmo protocolo.",
      "Serve para firmeza de pele no rosto e no corpo. Os registros de antes e depois estão na página de resultados do Ultraformer.",
    ],
    gallery: ultraGallery.slice(0, 4),
  },
  {
    path: "/clinica-de-estetica",
    title: "Clínica de estética",
    eyebrow: "A casa",
    summary: "Duas unidades em São Paulo, com o mesmo padrão de avaliação e de tecnologia.",
    image: file("banner-principal-home.jpg"),
    imageAlt: "Palladium Clínica de Estética",
    paragraphs: [
      "A Palladium é uma clínica de estética com unidades no Tatuapé e na Avenida Paulista. O atendimento é individual: a queixa vem antes do aparelho.",
      "Os protocolos são minimamente invasivos, com parcelamento em até 10 vezes sem juros ou 10% no PIX, e avaliação gratuita.",
    ],
  },
  {
    path: "/clinica-de-estetica/masculina",
    title: "Clínica de estética masculina",
    eyebrow: "Homens",
    summary: "Abdômen, mandíbula, olhar e harmonização íntima, com discrição.",
    image: file("criolipolie-para-homens.png"),
    imageAlt: "Estética masculina",
    paragraphs: [
      "A estética masculina da casa cobre gordura abdominal, contorno de mandíbula, olheiras e firmeza do rosto. O desenho é masculino.",
      "Também há harmonização íntima, só depois de avaliação e com discrição. A criolipólise para homens tem registros de antes e depois próprios.",
    ],
    gallery: homens,
  },
  {
    path: "/clinica-de-estetica/sao-paulo",
    title: "Clínica de estética em São Paulo",
    eyebrow: "São Paulo",
    summary: "Tatuapé e Avenida Paulista, com metrô ao lado das duas casas.",
    image: file("banner-principal-home.jpg"),
    imageAlt: "Clínica em São Paulo",
    paragraphs: [
      "As duas unidades ficam em São Paulo: Praça Sílvio Romero, no Tatuapé, e Brigadeiro Luís Antônio, ao lado da Paulista.",
      "O padrão de tecnologia e de escuta é o mesmo. A escolha é pela sua rota.",
    ],
  },
  {
    path: "/clinica-de-estetica/tatuape",
    title: "Clínica de estética no Tatuapé",
    eyebrow: "Zona Leste",
    summary: "Praça Sílvio Romero, 55, sala 107. Ao lado do metrô Tatuapé.",
    image: file("mulher-negra-de-meia-idade.png"),
    imageAlt: "Atendimento na unidade Tatuapé",
    paragraphs: [
      "A unidade do Tatuapé fica na Praça Sílvio Romero, 55, sala 107, a poucos minutos do metrô e do shopping.",
      "WhatsApp (11) 95294-3842. Horário de segunda a sexta, das 9h às 20h, e sábados das 9h às 15h.",
    ],
  },
  {
    path: "/clinica-de-estetica/zona-leste",
    title: "Clínica de estética na Zona Leste",
    eyebrow: "Zona Leste",
    summary: "A unidade da Zona Leste é a do Tatuapé.",
    image: file("mulher-negra-de-meia-idade.png"),
    imageAlt: "Unidade da Zona Leste",
    paragraphs: [
      "Quem busca clínica de estética na Zona Leste encontra a Palladium no Tatuapé, na Praça Sílvio Romero.",
      "Os mesmos protocolos de criolipólise, Ultraformer e harmonização da unidade Paulista.",
    ],
  },
  {
    path: "/clinica-de-estetica/melhores-sp",
    title: "Melhores clínicas de estética em SP",
    eyebrow: "A casa",
    summary: "A Palladium sustenta a escolha na nota e no acompanhamento, não num ranking comprado.",
    image: file("banner-principal-home.jpg"),
    imageAlt: "Palladium Estética",
    paragraphs: [
      "A clínica publica média 4.9 no Google, em mais de 500 depoimentos espontâneos, nas unidades do Tatuapé e da Paulista.",
      "O que pesa na prática é a avaliação individual, o retorno depois da sessão e a clareza do que cada protocolo faz e não faz.",
    ],
  },
];

const reserved = new Set([
  "criolipolise",
  "ultraformer",
  "clinica-de-estetica",
  "tratamentos",
  "blog",
  "contato",
  "unidades",
  "quem-somos",
  "depoimentos",
  "privacidade",
]);

export function getPage(path: string) {
  return pages.find((page) => page.path === path);
}

export function childPages(prefix: string) {
  return pages.filter(
    (page) => page.path.startsWith(`${prefix}/`) && page.path.split("/").length === prefix.split("/").length + 1,
  );
}

export function singlePages() {
  return pages.filter((page) => {
    const parts = page.path.split("/").filter(Boolean);
    return parts.length === 1 && !reserved.has(parts[0]);
  });
}

export const menuColumns = [
  {
    title: "Criolipólise",
    href: "/criolipolise",
    links: [
      { href: "/criolipolise", label: "Criolipólise" },
      { href: "/criolipolise/antes-e-depois", label: "Criolipólise Antes e Depois" },
      { href: "/criolipolise/depoimentos-de-quem-fez", label: "Criolipólise Depoimentos" },
      { href: "/criolipolise/placas", label: "Criolipólise de Placas" },
      { href: "/criolipolise/funciona", label: "Criolipólise Funciona" },
      { href: "/criolipolise/o-que-e", label: "Criolipólise o que é" },
      { href: "/criolipolise/homens", label: "Criolipólise para homens" },
      { href: "/criolipolise/preco", label: "Criolipólise Preço" },
      { href: "/criolipolise/resultados", label: "Criolipólise Resultados" },
      { href: "/criolipolise/tratamento", label: "Criolipólise Tratamentos" },
    ],
  },
  {
    title: "Ultraformer",
    href: "/ultraformer",
    links: [
      { href: "/ultraformer", label: "Ultraformer" },
      { href: "/ultraformer/antes-e-depois", label: "Ultraformer Antes e Depois" },
      { href: "/ultraformer/papada", label: "Ultraformer para Papada" },
      { href: "/ultraformer/o-que-e", label: "Ultraformer o que é" },
      { href: "/ultraformer/preco", label: "Ultraformer Preço" },
    ],
  },
  {
    title: "Tratamentos Corporais",
    href: "/como-perder-gordura-abdominal",
    links: [
      { href: "/carboxiterapia", label: "Carboxiterapia" },
      { href: "/tratamento-celulite", label: "Celulite" },
      { href: "/criolipolise", label: "Criolipólise" },
      { href: "/emagrecer-rapido", label: "Emagrecer Rápido" },
      { href: "/tratamento-estrias", label: "Estrias" },
      { href: "/tratamento-flacidez", label: "Flacidez" },
      { href: "/como-perder-gordura-abdominal", label: "Perder Gordura Abdominal" },
      { href: "/ultraformer-corporal", label: "Ultraformer Corporal" },
    ],
  },
  {
    title: "Tratamentos Faciais",
    href: "/harmonizacao-facial",
    links: [
      { href: "/fios-de-sustentacao", label: "Fios de Sustentação" },
      { href: "/flacidez-facial", label: "Flacidez Facial" },
      { href: "/harmonizacao-facial", label: "Harmonização Facial" },
      { href: "/preenchimento-facial", label: "Preenchimento Facial" },
      { href: "/preenchimento-com-acido-hialuronico", label: "Preenchimento com Ácido Hialurônico" },
      { href: "/ultraformer-facial", label: "Ultraformer Facial" },
      { href: "/ultrassom-microfocado", label: "Ultrassom Microfocado" },
    ],
  },
  {
    title: "Outros",
    href: "/clinica-de-estetica",
    links: [
      { href: "/clinica-de-estetica", label: "Clínica de Estética" },
      { href: "/clinica-de-estetica/masculina", label: "Clínica de Estética Masculina" },
      { href: "/clinica-de-estetica/sao-paulo", label: "Clínica de Estética em São Paulo" },
      { href: "/clinica-de-estetica/tatuape", label: "Clínica de Estética no Tatuapé" },
      { href: "/clinica-de-estetica/zona-leste", label: "Clínica de Estética Zona Leste" },
      { href: "/clinica-de-estetica/melhores-sp", label: "Melhores Clínicas de Estética em SP" },
    ],
  },
] as const;
