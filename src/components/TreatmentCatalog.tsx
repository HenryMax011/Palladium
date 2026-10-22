"use client";

import { useEffect, useState } from "react";
import { categoryMeta, treatments, type Category } from "@/lib/treatments";
import { TreatmentCard } from "@/components/TreatmentCard";

const filters = [
  { id: "todos", label: "Todos" },
  { id: "facial", label: "Faciais" },
  { id: "corporal", label: "Corporais" },
  { id: "masculina", label: "Masculina" },
] as const;

type Filter = (typeof filters)[number]["id"];

function filterFromHash(hash: string): Filter | null {
  if (hash === "#faciais") return "facial";
  if (hash === "#corporais") return "corporal";
  if (hash === "#masculina") return "masculina";
  return null;
}

export function TreatmentCatalog() {
  const [filter, setFilter] = useState<Filter>("todos");

  useEffect(() => {
    const apply = () => {
      const next = filterFromHash(window.location.hash);
      if (next) setFilter(next);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const visible =
    filter === "todos" ? treatments : treatments.filter((item) => item.category === filter);

  return (
    <div>
      <div className="-mx-1 flex gap-x-5 gap-y-3 overflow-x-auto px-1 pb-1" role="tablist" aria-label="Filtrar protocolos">
        {filters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(item.id)}
              className={`shrink-0 py-2 text-[11px] font-medium uppercase tracking-[0.16em] sm:tracking-[0.2em] ${
                selected ? "border-b border-bronze text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>

      {filter !== "todos" ? (
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted">
          {categoryMeta[filter as Category].text}
        </p>
      ) : null}
    </div>
  );
}
