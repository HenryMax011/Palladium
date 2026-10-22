import Link from "next/link";
import { site, units, waLink } from "@/lib/site";
import { menuColumns } from "@/lib/catalog";
import { categoryMeta } from "@/lib/treatments";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";

const clinicLinks = [
  { href: "/quem-somos", label: "A clínica" },
  { href: "/unidades", label: "Unidades" },
  { href: "/depoimentos", label: "Depoimentos" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Agendar avaliação" },
  { href: "/privacidade", label: "Política de privacidade" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night text-ivory">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Palladium, página inicial">
            <Logo tone="light" className="text-[42px]" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/65">
            Duas unidades em São Paulo, Tatuapé e Avenida Paulista, com protocolos faciais e
            corporais minimamente invasivos.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block text-sm link-underline"
          >
            {site.email}
          </a>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Protocolos
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {menuColumns.map((column) => (
              <li key={column.href}>
                <Link href={column.href} className="text-ivory/80 link-underline">
                  {column.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/criolipolise/antes-e-depois" className="text-ivory/80 link-underline">
                Antes e depois · criolipólise
              </Link>
            </li>
            <li>
              <Link href="/ultraformer/antes-e-depois" className="text-ivory/80 link-underline">
                Antes e depois · Ultraformer
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            A casa
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {clinicLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ivory/80 link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Unidades
          </p>
          <ul className="mt-5 space-y-6 text-sm">
            {units.map((unit) => (
              <li key={unit.slug}>
                <Link href={`/unidades#${unit.slug}`} className="font-medium text-ivory link-underline">
                  {unit.name}
                </Link>
                <p className="mt-1 text-ivory/55">{unit.address}</p>
                <a href={`tel:${unit.phoneTel}`} className="mt-1 inline-block text-ivory/80 link-underline">
                  {unit.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ivory/55">{site.hours}</p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-gold link-underline"
          >
            WhatsApp {site.whatsappDisplay}
          </a>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 pb-24 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
        <p>© 2026 Palladium Clínica de Estética. Todos os direitos reservados.</p>
        <p className="tracking-[0.16em] uppercase">
          {categoryMeta.facial.label} · {categoryMeta.corporal.label} · {categoryMeta.masculina.label}
        </p>
      </Container>
    </footer>
  );
}
