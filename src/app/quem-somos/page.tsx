import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow, PageHero } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { units } from "@/lib/site";

export const metadata: Metadata = {
  title: "A clínica",
  description:
    "Conheça a Palladium Clínica de Estética, com unidades no Tatuapé e na Avenida Paulista, atendimento personalizado e protocolos de alta performance.",
  alternates: { canonical: "/quem-somos" },
};

const pillars = [
  {
    title: "Atendimento personalizado",
    text: "O primeiro encontro identifica a queixa, o histórico e o que já foi tentado. O tratamento proposto nasce dessa conversa.",
  },
  {
    title: "Acolhimento pós-atendimento",
    text: "Depois da sessão, a equipe retoma o contato para avaliar o que foi alcançado, orientar cuidados e decidir complementos.",
  },
  {
    title: "Alta performance",
    text: "Profissionais capacitados e equipamentos atuais, em protocolos minimamente invasivos, sem internação.",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Uma clínica à altura do que ela promete."
        lede="Autoestima, confiança e bem-estar, com tecnologia e um jeito de atender que não termina quando a sessão acaba."
      />
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] bg-night-soft">
            <Photo
              name="stones"
              alt="Pedras e ambiente de spa em luz suave."
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <Eyebrow>A missão</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Rosto mais firme. Corpo mais leve. Rotina preservada.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                A Palladium Clínica de Estética atende em São Paulo com duas casas: o Tatuapé, na
                Zona Leste, e a região da Avenida Paulista, ao lado do metrô Brigadeiro. O padrão
                de escuta e de tecnologia é o mesmo nos dois endereços.
              </p>
              <p>
                Os protocolos são minimamente invasivos. Não há internação, e a recuperação é
                pensada para quem trabalha, estuda e não pode sumir da própria agenda. O
                parcelamento chega a 10× sem juros no cartão, com 10% de desconto no PIX.
              </p>
              <p>
                Média 4.9 no Google, em mais de 500 depoimentos espontâneos ao longo dos anos. É
                esse histórico — e não um slogan — que sustenta a casa.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper py-16 sm:py-24">
        <Container className="grid gap-10 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title}>
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Eyebrow>Onde estamos</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {units.map((unit) => (
              <article key={unit.slug} className="border border-line p-8">
                <h2 className="font-serif text-4xl">{unit.name}</h2>
                <p className="mt-3 text-muted">{unit.address}</p>
                <p className="text-sm text-muted">{unit.reference}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/unidades" variant="line">
              Ver horários e mapas
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
