import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageHero } from "@/components/ui";
import { TreatmentCatalog } from "@/components/TreatmentCatalog";

export const metadata: Metadata = {
  title: "Tratamentos",
  description:
    "Protocolos faciais, corporais e de estética masculina da Palladium: Ultraformer, criolipólise, harmonização, flacidez, estrias e celulite.",
  alternates: { canonical: "/tratamentos" },
};

export default function TratamentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Protocolos"
        title="Tratamentos com indicação, não com vitrine."
        lede="Faciais, corporais e estética masculina nas unidades do Tatuapé e da Avenida Paulista. O plano é fechado na avaliação gratuita."
      />
      <section className="py-16 sm:py-24">
        <div id="faciais" className="scroll-mt-24" />
        <div id="corporais" className="scroll-mt-24" />
        <div id="masculina" className="scroll-mt-24" />
        <Container>
          <Suspense fallback={<div className="h-40 bg-line/40" />}>
            <TreatmentCatalog />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
