import { faqs } from "@/lib/site";

export function FaqList({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  return (
    <div className="border border-line bg-paper">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-serif text-2xl leading-tight sm:px-8 sm:text-3xl">
            {item.q}
            <span
              aria-hidden
              className="grid h-8 w-8 shrink-0 place-items-center border border-gold/50 text-lg text-gold motion-safe:transition-transform motion-safe:group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl px-6 pb-6 leading-relaxed text-muted sm:px-8">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
