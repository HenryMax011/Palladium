import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { TreatmentCard } from "@/components/TreatmentCard";
import { categoryMeta, getTreatment, relatedTreatments, treatments } from "@/lib/treatments";
import { waLink } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Tratamento" };
  return {
    title: treatment.name,
    description: treatment.summary,
    alternates: { canonical: `/tratamentos/${treatment.slug}` },
  };
}

export default function TratamentoPage(props: Props) {
  return (
    <Suspense fallback={<ArticleFallback />}>
      <TreatmentContent {...props} />
    </Suspense>
  );
}

async function TreatmentContent({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const related = relatedTreatments(treatment);
  const message = `Olá! Gostaria de agendar uma avaliação gratuita para ${treatment.name}.`;

  return (
    <>
      <section className="bg-night text-ivory">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow light>{categoryMeta[treatment.category].label}</Eyebrow>
            <h1 className="mt-6 font-serif text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {treatment.name}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">{treatment.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/contato?tratamento=${encodeURIComponent(treatment.name)}`} variant="light">
                Agendar avaliação
              </ButtonLink>
              <ButtonLink href={waLink(message)} variant="ghost">
                WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-night-soft lg:min-h-[520px]">
            <Photo
              name={treatment.image}
              alt={`Imagem de referência para ${treatment.name}.`}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink/85">
            {treatment.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="h-fit border border-line bg-paper p-6 lg:sticky lg:top-24">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-deep">
              Neste protocolo
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed">
              {treatment.points.map((point) => (
                <li key={point} className="border-t border-line pt-4">
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              Sessões, indicação e resultado dependem da avaliação individual. Não há um efeito
              igual para todas as pessoas.
            </p>
          </aside>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-24">
        <Container>
          <h2 className="font-serif text-4xl">Continue a leitura</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <TreatmentCard key={item.slug} treatment={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function ArticleFallback() {
  return (
    <section className="bg-night">
      <Container className="py-24">
        <div className="h-4 w-32 bg-white/10" />
        <div className="mt-6 h-16 max-w-xl bg-white/10" />
      </Container>
    </section>
  );
}
