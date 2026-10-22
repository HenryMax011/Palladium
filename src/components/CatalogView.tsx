import Image from "next/image";
import Link from "next/link";
import type { CatalogPage, Shot } from "@/lib/catalog";
import { menuColumns } from "@/lib/catalog";
import { ReviewGrid } from "@/components/Reviews";
import { testimonials } from "@/lib/stories";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export function ResultGallery({ items }: { items: Shot[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item.src + item.caption} className="border border-line bg-ivory">
          <div className="relative aspect-square bg-[#efeae3]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="flex items-end justify-between gap-4 border-t border-line px-4 py-4">
            <span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                Antes · depois
              </span>
              <span className="mt-1 block font-serif text-2xl leading-none">{item.caption}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CatalogView({ page }: { page: CatalogPage }) {
  const column = menuColumns.find((item) => item.links.some((link) => link.href === page.path));

  return (
    <>
      <section className="bg-night text-ivory">
        <Container className="grid items-end gap-10 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:py-24">
          <div>
            <Eyebrow light>{page.eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">{page.summary}</p>
            <div className="mt-8">
              <ButtonLink href={`/contato?tratamento=${encodeURIComponent(page.title)}`} variant="light">
                Agendar avaliação
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] border border-white/10 bg-[#efeae3]">
            <Image
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain"
            />
          </div>
        </Container>
        <div className="h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="border border-line border-t-2 border-t-gold bg-paper p-6 lg:sticky lg:top-24">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-deep">Nesta aba</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Avaliação gratuita no Tatuapé e na Avenida Paulista. Resultados variam de pessoa para pessoa.
            </p>
            <div className="mt-6">
              <ButtonLink href={`/contato?tratamento=${encodeURIComponent(page.title)}`}>
                Quero avaliar
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>

      {page.gallery?.length ? (
        <section className="border-t border-line bg-paper py-16 sm:py-20">
          <Container>
            <Eyebrow>Antes e depois</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Registros da clínica</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Fotos publicadas pela Palladium. O antes e o depois estão na mesma imagem. O que você vê não é garantia
              de um resultado igual ao seu.
            </p>
            <div className="mt-10">
              <ResultGallery items={page.gallery} />
            </div>
          </Container>
        </section>
      ) : null}

      {page.reviews ? (
        <section className="border-t border-line py-16 sm:py-20">
          <Container>
            <ReviewGrid items={testimonials.filter((item) => item.treatment.toLowerCase().includes("crio"))} />
          </Container>
        </section>
      ) : null}

      {column ? (
        <section className="border-t border-line py-14">
          <Container>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-deep">{column.title}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-block border px-3 py-2 text-xs tracking-wide transition-colors ${
                      link.href === page.path
                        ? "border-gold bg-gold text-ink"
                        : "border-line text-ink hover:border-gold"
                    }`}
                    aria-current={link.href === page.path ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}

export function HomeResults() {
  const items = [{ ...crioFirst(), href: "/criolipolise/antes-e-depois" }, ...ultraFirst()];
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <Eyebrow>Antes e depois</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl">
              Os registros publicados pela clínica.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Cada foto junta os dois momentos. O que aparece aqui é o arquivo da Palladium, e o resultado muda de
              pessoa para pessoa.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-5 sm:gap-x-12">
            {[
              ["/criolipolise/antes-e-depois", "Criolipólise"],
              ["/ultraformer/antes-e-depois", "Ultraformer"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="group">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">Ver galeria</span>
                <span className="mt-2 flex items-center gap-2 font-serif text-[1.65rem] leading-none transition-[gap] duration-300 group-hover:gap-3 sm:text-[2rem]">
                  {label}
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <Link key={item.src} href={item.href} className="group block bg-ivory">
              <div className="relative aspect-square overflow-hidden bg-[#f4f0ea]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-gold/40 px-4 py-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">Antes · depois</p>
                  <p className="mt-1 font-serif text-3xl leading-none">{item.caption}</p>
                </div>
                <span className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-bronze-deep">Ver</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function crioFirst() {
  return {
    src: "/clinica/crioliolise-palladium-antes-e-depois-1.png",
    alt: "Antes e depois de criolipólise no abdômen",
    caption: "Criolipólise · abdômen",
  };
}

function ultraFirst(): Array<Shot & { href: string }> {
  return [
    {
      src: "/clinica/antes-e-depois-criolipolise-homem.png",
      alt: "Antes e depois de criolipólise em homem",
      caption: "Criolipólise · homens",
      href: "/criolipolise/homens",
    },
    {
      src: "/clinica/palladium-site-2-1.png",
      alt: "Antes e depois de papada",
      caption: "Ultraformer · papada",
      href: "/ultraformer/papada",
    },
    {
      src: "/clinica/palladium-site-8.png",
      alt: "Antes e depois da região dos olhos",
      caption: "Ultraformer · olhos",
      href: "/ultraformer/antes-e-depois",
    },
  ];
}
