"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { menuColumns } from "@/lib/catalog";
import { site } from "@/lib/site";

const links = [
  { href: "/unidades", label: "Unidades" },
  { href: "/quem-somos", label: "A clínica" },
  { href: "/depoimentos", label: "Depoimentos" },
  { href: "/blog", label: "Blog" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const treatmentsOpen =
    mega || menuColumns.some((column) => column.links.some((link) => isActive(pathname, link.href)));

  if (pathname !== activePath) {
    setActivePath(pathname);
    setOpen(false);
    setMega(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 text-ivory" onMouseLeave={() => setMega(false)}>
      <div className="border-b border-gold/40 bg-night/95 backdrop-blur-xl">
        <div className="site-header-bar mx-auto flex !h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-8 lg:!h-[6.5rem]">
          <Link href="/" className="shrink-0" aria-label="Palladium, página inicial">
            <Logo tone="light" className="text-[32px] sm:text-[40px] lg:text-[50px]" />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Principal">
            <div onMouseEnter={() => setMega(true)} onFocus={() => setMega(true)}>
              <Link
                href="/criolipolise"
                className={`inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.2em] transition-colors ${
                  treatmentsOpen ? "text-gold" : "text-ivory/80 hover:text-ivory"
                }`}
                aria-expanded={mega}
              >
                Tratamentos
                <span
                  aria-hidden
                  className={`inline-block text-[11px] leading-none transition-transform ${mega ? "rotate-180" : ""}`}
                >
                  ▾
                </span>
              </Link>
            </div>
            {links.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setMega(false)}
                  className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-colors ${
                    active ? "text-gold" : "text-ivory/80 hover:text-ivory"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-5">
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden shrink-0 whitespace-nowrap border-r border-white/15 pr-5 text-[13px] font-medium tracking-[0.06em] text-ivory/75 xl:inline"
            >
              {site.phoneDisplay}
            </a>
            <Link
              href="/contato"
              className="group hidden items-center gap-2.5 bg-gold px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ivory sm:inline-flex"
            >
              Agendar
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-3.5 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-ivory transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ivory ${open ? "opacity-0" : ""}`} />
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-ivory transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-full hidden border-t border-gold/40 bg-night shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition duration-200 lg:block ${
          mega ? "visible opacity-100" : "invisible opacity-0"
        }`}
        inert={mega ? undefined : true}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-5 gap-8 px-8 py-10">
          {menuColumns.map((column, index) => (
            <div key={column.title}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
              <Link href={column.href} className="mt-2 block font-serif text-2xl leading-tight text-ivory">
                {column.title}
              </Link>
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm leading-snug transition-colors hover:text-gold ${
                        link.href.includes("antes-e-depois") ? "font-medium text-gold" : "text-ivory/65"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="overflow-y-auto bg-night lg:hidden"
          style={{ minHeight: "calc(100svh - 4.5rem)", maxHeight: "calc(100svh - 4.5rem)" }}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {menuColumns.map((column) => (
              <details key={column.title} className="border-b border-white/10">
                <summary className="flex cursor-pointer items-center justify-between py-4 font-serif text-2xl">
                  {column.title}
                  <span className="text-lg text-gold" aria-hidden>
                    +
                  </span>
                </summary>
                <ul className="space-y-2 pb-4">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-1.5 text-sm ${link.href.includes("antes-e-depois") ? "text-gold" : "text-ivory/75"}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-white/10 py-4 font-serif text-2xl">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-6 bg-gold px-5 py-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-ink"
            >
              Agendar avaliação
            </Link>
            <p className="mt-6 text-sm text-ivory/60">{site.hoursShort}</p>
            <a href={`tel:${site.phoneTel}`} className="mt-2 text-sm text-gold">
              {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
