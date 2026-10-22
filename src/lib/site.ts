/** Dados institucionais, oferta e contatos. Ajuste aqui antes de publicar. */

export const site = {
  name: "Palladium",
  legalName: "Palladium Clínica de Estética",
  url: "https://palladiumestetica.com.br",
  description:
    "Clínica de estética no Tatuapé e na Avenida Paulista. Ultraformer, criolipólise, harmonização facial e protocolos corporais, com avaliação gratuita.",
  email: "contato@palladiumestetica.com.br",
  phoneDisplay: "(11) 4217-7700",
  phoneTel: "+551142177700",
  whatsappDisplay: "(11) 93336-5050",
  whatsapp: "5511933365050",
  hours: "Segunda a sexta, 9h às 20h · Sábados, 9h às 15h",
  hoursShort: "Seg–sex 9h–20h · Sáb 9h–15h",
  payment: "Até 10× sem juros no cartão, ou 10% de desconto no PIX.",
  ratingLabel: "Média 4.9 no Google",
  reviewsLabel: "+500 depoimentos",
  defaultMessage:
    "Olá! Gostaria de agendar uma avaliação gratuita na Palladium Clínica de Estética.",
} as const;

export const offer = {
  name: "Ultraformer",
  kicker: "Oferta da casa",
  discount: "15% off",
  price: "A partir de 10× R$ 129",
  note: "sem juros",
  href: "/contato?tratamento=Ultraformer",
} as const;

export const photos = {
  hero: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=80",
  facial:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
  portrait:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=80",
  body: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
  relax:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1600&q=80",
  clinic:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
  stones:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
  massage:
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80",
  man: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
  skin: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80",
  ultraformer: "/destaques/ultraformer.webp",
  criolipolise: "/destaques/criolipolise.webp",
  harmonizacao: "/destaques/harmonizacao.webp",
} as const;

export type PhotoKey = keyof typeof photos;

export const units = [
  {
    slug: "tatuape",
    name: "Tatuapé",
    region: "Zona Leste",
    address: "Praça Sílvio Romero, 55 – Sala 107",
    reference: "Metrô Tatuapé",
    city: "São Paulo, SP",
    phoneDisplay: "(11) 95294-3842",
    phoneTel: "+5511952943842",
    whatsapp: "5511952943842",
    maps: "https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+S%C3%ADlvio+Romero+55+Tatuap%C3%A9+S%C3%A3o+Paulo",
    note: "Unidade da Zona Leste, a poucos minutos do metrô e do Shopping Tatuapé.",
  },
  {
    slug: "paulista",
    name: "Avenida Paulista",
    region: "Jardins",
    address: "Av. Brigadeiro Luís Antônio, 2503 – Sala 103",
    reference: "Metrô Brigadeiro",
    city: "São Paulo, SP",
    phoneDisplay: "(11) 98469-3092",
    phoneTel: "+5511984693092",
    whatsapp: "5511984693092",
    maps: "https://www.google.com/maps/search/?api=1&query=Avenida+Brigadeiro+Luis+Antonio+2503+S%C3%A3o+Paulo",
    note: "No centro de São Paulo, ao lado da Avenida Paulista.",
  },
] as const;

export type Unit = (typeof units)[number];

export const extraProcedures = [
  "Microagulhamento",
  "Jato de plasma",
  "Limpeza de pele",
  "Peeling",
  "Sculptra",
  "Radiesse",
  "Laser Lavieen",
  "Hidrolipo não aspirativa",
  "Secagem de vasinhos",
  "Drenagem pós-operatória",
  "Toxina botulínica",
  "Harmonização íntima masculina",
] as const;

export const faqs = [
  {
    q: "A avaliação é gratuita?",
    a: "Sim. A avaliação inicial é gratuita nas duas unidades. Nela a equipe entende o que incomoda, o histórico e indica um protocolo — sem compromisso de fechar na hora.",
  },
  {
    q: "Os procedimentos exigem cirurgia?",
    a: "A Palladium trabalha com protocolos minimamente invasivos, sem internação. A recuperação é pensada para caber na rotina de trabalho, estudo e lazer, e varia conforme o procedimento e a resposta de cada pessoa.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Há parcelamento em até 10 vezes sem juros no cartão e 10% de desconto no PIX. Campanhas específicas, como a do Ultraformer, aparecem na página inicial e podem mudar ao longo do ano.",
  },
  {
    q: "Qual unidade escolher?",
    a: "O padrão de atendimento é o mesmo no Tatuapé e na Avenida Paulista. Escolha pela proximidade: Praça Sílvio Romero, ao lado do metrô Tatuapé, ou Brigadeiro Luís Antônio, ao lado do metrô Brigadeiro.",
  },
  {
    q: "Quando volto à rotina?",
    a: "A maioria dos protocolos não pede afastamento. O que muda de um tratamento para outro — e de uma pele para outra — é explicado na avaliação e no acolhimento depois da sessão.",
  },
] as const;

export function waLink(message: string = site.defaultMessage, phone: string = site.whatsapp) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#org`,
        name: site.legalName,
        url: site.url,
        email: site.email,
        telephone: site.phoneTel,
      },
      ...units.map((unit) => ({
        "@type": "BeautySalon",
        name: `Palladium Estética ${unit.name}`,
        parentOrganization: { "@id": `${site.url}/#org` },
        telephone: unit.phoneTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: unit.address,
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "15:00",
          },
        ],
      })),
    ],
  };
}
