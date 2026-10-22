import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site, units } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Agende uma avaliação gratuita na Palladium Estética, no Tatuapé ou na Avenida Paulista, por WhatsApp ou telefone.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliação gratuita"
        title="Vamos marcar a sua avaliação."
        lede="Diga a unidade e o que você quer tratar. A mensagem segue direto para o WhatsApp da casa."
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Suspense fallback={<div className="h-[40rem] border border-line bg-paper" />}>
            <ContactForm />
          </Suspense>
          <aside className="space-y-8">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-deep">
                Central
              </p>
              <a href={`tel:${site.phoneTel}`} className="mt-3 block font-serif text-4xl">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mt-3 block text-sm link-underline">
                {site.email}
              </a>
              <p className="mt-4 text-sm text-muted">{site.hours}</p>
              <p className="mt-2 text-sm text-muted">WhatsApp {site.whatsappDisplay}</p>
            </div>
            {units.map((unit) => (
              <div key={unit.slug} className="border-t border-line pt-6">
                <h2 className="font-serif text-3xl">{unit.name}</h2>
                <p className="mt-2 text-sm text-muted">{unit.address}</p>
                <p className="text-sm text-muted">{unit.reference}</p>
                <a href={`tel:${unit.phoneTel}`} className="mt-3 inline-block text-sm link-underline">
                  {unit.phoneDisplay}
                </a>
              </div>
            ))}
          </aside>
        </Container>
      </section>
    </>
  );
}
