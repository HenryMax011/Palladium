import type { Testimonial } from "@/lib/stories";

function Stars() {
  return (
    <span className="inline-flex items-center gap-1 text-gold" aria-label="5 de 5">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-[1.15rem] w-[1.15rem]" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 1.2 12.35 6.22l5.52.7-4.04 3.78.98 5.47L10 13.77l-4.81 2.4.98-5.47-4.04-3.78 5.52-.7L10 1.2Z"
          />
        </svg>
      ))}
    </span>
  );
}

export function ReviewGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={`${item.name}-${item.when}`}
          className="flex flex-col border-t-[3px] border-gold bg-white px-6 py-7 shadow-[0_18px_50px_rgba(18,16,14,0.08)]"
        >
          <div className="flex items-center justify-between gap-4">
            <Stars />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">Google</p>
          </div>
          <blockquote className="mt-5 flex-1 font-serif text-[1.4rem] leading-snug text-ink">“{item.text}”</blockquote>
          <figcaption className="mt-6 border-t border-line pt-4">
            <span className="block font-medium">{item.name}</span>
            <span className="mt-1 block text-sm text-muted">
              {item.treatment}
              {item.when ? ` · ${item.when}` : ""}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
