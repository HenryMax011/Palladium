import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { UnitCard } from "@/components/UnitCard";
import { units, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unidades",
  description:
    "Palladium Estética no Tatuapé, Praça Sílvio Romero, e na Avenida Paulista, Brigadeiro Luís Antônio. Horários, telefones e como chegar.",
  alternates: { canonical: "/unidades" },
};

export default function UnidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="São Paulo"
        title="Tatuapé e Avenida Paulista."
        lede={`${site.hours}. Escolha a unidade pela sua rota. O atendimento segue o mesmo padrão.`}
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          {units.map((unit) => (
            <UnitCard key={unit.slug} unit={unit} />
          ))}
        </Container>
        <Container className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          <p>
            Central telefônica {site.phoneDisplay}. WhatsApp geral {site.whatsappDisplay}. Cada
            unidade também tem o próprio WhatsApp, nos cartões acima.
          </p>
        </Container>
      </section>
    </>
  );
}
