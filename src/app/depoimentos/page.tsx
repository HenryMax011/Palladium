import type { Metadata } from "next";
import { ReviewGrid } from "@/components/Reviews";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { testimonials } from "@/lib/stories";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Avaliações de pacientes da Palladium Clínica de Estética, publicadas no Google, sobre criolipólise, preenchimento, toxina e fios.",
  alternates: { canonical: "/depoimentos" },
};

export default function DepoimentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Google"
        title="Quem fez o tratamento, conta."
        lede="Relatos publicados pela clínica, sobre atendimento, resultado e a experiência nas unidades de São Paulo."
      />
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <ReviewGrid items={testimonials} />
        </Container>
        <Container className="mt-16 flex flex-wrap gap-3">
          <ButtonLink href="/contato">Agendar avaliação</ButtonLink>
          <ButtonLink href={waLink()} variant="line">
            Falar no WhatsApp
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
