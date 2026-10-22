import Link from "next/link";
import { categoryMeta } from "@/lib/treatments";
import type { Treatment } from "@/lib/treatments";
import { Photo } from "@/components/Photo";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link href={`/tratamentos/${treatment.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-night">
        <Photo
          name={treatment.image}
          alt=""
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            {categoryMeta[treatment.category].label}
          </p>
          <h3 className="mt-2 font-serif text-3xl leading-none">{treatment.name}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{treatment.summary}</p>
    </Link>
  );
}
