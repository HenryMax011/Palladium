import Link from "next/link";
import type { Unit } from "@/lib/site";
import { site, waLink } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

export function UnitCard({ unit }: { unit: Unit }) {
  const message = `Olá! Gostaria de agendar uma avaliação gratuita na Palladium ${unit.name}.`;

  return (
    <article id={unit.slug} className="flex scroll-mt-24 flex-col border border-line border-t-2 border-t-gold bg-paper p-8 sm:p-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-bronze-deep">{unit.region}</p>
      <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{unit.name}</h2>
      <p className="mt-5 text-sm leading-relaxed text-muted">{unit.note}</p>
      <p className="mt-6 text-base">{unit.address}</p>
      <p className="text-sm text-muted">
        {unit.reference} · {unit.city}
      </p>
      <p className="mt-4 text-sm">{site.hours}</p>
      <a href={`tel:${unit.phoneTel}`} className="mt-4 inline-block text-sm link-underline">
        {unit.phoneDisplay}
      </a>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={waLink(message, unit.whatsapp)}>WhatsApp</ButtonLink>
        <ButtonLink href={unit.maps} variant="line">
          Como chegar
        </ButtonLink>
        <Link href={`/contato?unidade=${encodeURIComponent(unit.name)}`} className="self-center text-[11px] font-medium uppercase tracking-[0.18em] link-underline">
          Agendar nesta unidade
        </Link>
      </div>
    </article>
  );
}
