import Link from "next/link";
import "./hero.css";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { HomeResults } from "@/components/CatalogView";
import { FaqList } from "@/components/FaqList";
import { offer, site, units, waLink } from "@/lib/site";
import { categoryMeta, treatments, type Category } from "@/lib/treatments";
import { ReviewGrid } from "@/components/Reviews";
import { testimonials } from "@/lib/stories";

const signature = ["ultraformer", "criolipolise", "harmonizacao-facial"]
  .map((slug) => treatments.find((item) => item.slug === slug))
  .filter((item) => item !== undefined);

const names = treatments.map((item) => item.name);

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Home() {
  const preview = testimonials.slice(0, 6);

  return (
    <>
      <section className="hero-screen relative isolate overflow-hidden bg-night text-ivory">
        <div className="absolute inset-0">
          <Photo
            name="hero"
            alt="Profissional realizando um tratamento facial em ambiente de clínica."
            priority
            sizes="100vw"
            className="hero-photo"
          />
          <div className="hero-shade absolute inset-0" />
        </div>
        <div className="hero-screen relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:py-20 lg:pb-16">
          <div>
            <Eyebrow light>Tatuapé · Avenida Paulista</Eyebrow>
            <h1 className="mt-6 max-w-xl font-serif text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Beleza com precisão,{" "}
              <span className="italic text-gold">do rosto ao corpo.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/80">
              Ultraformer, criolipólise e harmonização facial em duas clínicas de São Paulo.
              Protocolos minimamente invasivos, avaliação gratuita e um cuidado que continua
              depois da sessão.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Link href="/contato" className="hero-cta hero-cta-light">
                Agendar avaliação
                <span className="hero-cta-arrow" aria-hidden>
                  <ArrowIcon />
                </span>
              </Link>
              <Link href="/tratamentos" className="hero-cta hero-cta-ghost">
                Ver tratamentos
                <span className="hero-cta-arrow" aria-hidden>
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Google</dt>
                <dd>4.9</dd>
              </div>
              <div>
                <dt>Depoimentos</dt>
                <dd>+500</dd>
              </div>
              <div>
                <dt>Cartão</dt>
                <dd>10×</dd>
              </div>
            </dl>
          </div>
          <aside className="hero-offer">
            <p className="hero-offer-kicker">{offer.kicker}</p>
            <p className="hero-offer-discount">{offer.discount}</p>
            <p className="hero-offer-name">{offer.name}</p>
            <p className="hero-offer-price">
              {offer.price} {offer.note}
            </p>
            <Link href={offer.href} className="hero-cta hero-cta-light">
              Quero esta oferta
              <span className="hero-cta-arrow" aria-hidden>
                <ArrowIcon />
              </span>
            </Link>
          </aside>
        </div>
      </section>

      <section className="overflow-hidden bg-night py-4 text-ivory" aria-hidden>
        <div className="marquee-track flex w-max items-center gap-8 pr-8">
          {[...names, ...names].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/70"
            >
              {name}
              <span className="inline-block h-1 w-1 bg-gold" />
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>A clínica</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Dois endereços em São Paulo. O mesmo padrão de cuidado.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              A Palladium existe para melhorar autoestima, confiança e bem-estar — com um rosto
              mais firme e um corpo sem a gordura localizada, a flacidez, a celulite e as estrias
              que incomodam. Sem internação, com recuperação pensada para a rotina.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Uma unidade no Tatuapé, na Zona Leste. Outra ao lado da Avenida Paulista, no metrô
              Brigadeiro. Profissionais capacitados, tecnologia atual e acolhimento antes, durante
              e depois do procedimento.
            </p>
            <div className="mt-8">
              <ButtonLink href="/quem-somos" variant="line">
                Conhecer a casa
              </ButtonLink>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] bg-night-soft sm:aspect-[5/4]">
              <Photo
                name="clinic"
                alt="Interior claro de consultório."
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 border border-line border-l-2 border-l-gold bg-ivory p-5 sm:left-auto sm:w-64">
              <p className="font-serif text-2xl leading-none">Tatuapé</p>
              <p className="mt-2 text-sm text-muted">e Avenida Paulista</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Em destaque</Eyebrow>
              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] sm:text-5xl">
                Os protocolos que mais chegam à recepção.
              </h2>
            </div>
            <ButtonLink href="/tratamentos" variant="line">
              Catálogo completo
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href={`/tratamentos/${signature[0].slug}`}
              className="feature-tall group relative block overflow-hidden bg-night"
            >
              <Photo
                name={signature[0].image}
                alt="Aplicação de Ultraformer no contorno do rosto."
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-[center_40%] motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                  01 · {categoryMeta[signature[0].category].label}
                </p>
                <h3 className="mt-2 font-serif text-4xl leading-none text-ivory sm:text-5xl">{signature[0].name}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/80">{signature[0].summary}</p>
              </div>
            </Link>
            <div className="feature-stack grid gap-4">
              {signature.slice(1).map((treatment, index) => (
                <Link
                  key={treatment.slug}
                  href={`/tratamentos/${treatment.slug}`}
                  className="feature-short group relative block overflow-hidden bg-night"
                >
                  <Photo
                    name={treatment.image}
                    alt=""
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={`motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-105 ${
                      treatment.slug === "harmonizacao-facial" ? "object-[center_22%]" : "object-center"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                      0{index + 2} · {categoryMeta[treatment.category].label}
                    </p>
                    <h3 className="mt-2 font-serif text-4xl leading-none text-ivory">{treatment.name}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/80">{treatment.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <HomeResults />

      <section className="bg-night py-20 text-ivory sm:py-28">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
            <div>
              <Eyebrow light>Por que a Palladium</Eyebrow>
              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] sm:text-5xl">
                Credibilidade construída consulta a consulta.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/70">
                Média 4.9 no Google, em mais de 500 depoimentos espontâneos. O segundo motivo é o
                jeito de atender: escuta, plano e presença depois que a sessão acaba.
              </p>
            </div>
            <dl className="grid grid-cols-2 border border-white/15">
              <div className="p-6">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-gold">Google</dt>
                <dd className="mt-3 font-serif text-5xl">4.9</dd>
              </div>
              <div className="border-l border-white/15 p-6">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-gold">Depoimentos</dt>
                <dd className="mt-3 font-serif text-5xl">+500</dd>
              </div>
            </dl>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Atendimento personalizado",
                text: "A conversa começa pela queixa real. O protocolo sai dessa leitura, não de um cardápio padrão.",
              },
              {
                n: "02",
                title: "Acolhimento depois",
                text: "A equipe retoma o contato para ver o que foi alcançado, orientar cuidados e decidir se há um próximo passo.",
              },
              {
                n: "03",
                title: "Alta performance",
                text: "Tecnologia atual e profissionais capacitados, com parcelamento em até 10× sem juros ou 10% no PIX.",
              },
            ].map((item) => (
              <article key={item.n} className="border border-white/15 bg-white/[0.03] p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">{item.n}</p>
                <h3 className="mt-5 font-serif text-3xl leading-none">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/70">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Protocolos</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Facial, corporal e masculina.</h2>
            </div>
            <ButtonLink href="/tratamentos" variant="line">
              Catálogo completo
            </ButtonLink>
          </div>
          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
            {(Object.keys(categoryMeta) as Category[]).map((key, index) => {
              const meta = categoryMeta[key];
              const items = treatments.filter((item) => item.category === key).slice(0, 6);
              const notes = items.length === 1 ? items[0].points : [];
              return (
                <article key={key} className="flex flex-col border border-line bg-paper p-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
                  <h3 className="mt-3 font-serif text-4xl leading-none">{meta.label}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{meta.text}</p>
                  <ul className="mt-6 border-t border-line">
                    {items.map((item) => (
                      <li key={item.slug} className="border-b border-line">
                        <Link
                          href={`/tratamentos/${item.slug}`}
                          className="flex items-center justify-between gap-4 py-3 text-sm"
                        >
                          {item.name}
                          <span aria-hidden className="text-gold">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                    {notes.map((note) => (
                      <li key={note} className="border-b border-line py-3 text-sm text-muted">
                        {note}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={meta.href}
                    className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-bronze-deep"
                  >
                    Ver categoria
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Depoimentos</Eyebrow>
              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] sm:text-5xl">
                O que os pacientes escrevem no Google.
              </h2>
            </div>
            <ButtonLink href="/depoimentos" variant="line">
              Ler todos
            </ButtonLink>
          </div>
          <div className="mt-12">
            <ReviewGrid items={preview} />
          </div>
        </Container>
      </section>

      <section className="bg-night py-20 text-ivory sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow light>Unidades</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl">Tatuapé e Avenida Paulista.</h2>
            </div>
            <ButtonLink href="/unidades" variant="ghost">
              Ver as duas casas
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {units.map((unit) => (
              <article key={unit.slug} className="flex flex-col border border-white/15 bg-white/[0.03] p-6 sm:p-10">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{unit.region}</p>
                <h3 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">{unit.name}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/70">{unit.note}</p>
                <p className="mt-6">{unit.address}</p>
                <p className="text-sm text-ivory/55">
                  {unit.reference} · {unit.city}
                </p>
                <p className="mt-4 text-sm text-ivory/70">{site.hours}</p>
                <a href={`tel:${unit.phoneTel}`} className="mt-2 inline-block text-sm text-gold">
                  {unit.phoneDisplay}
                </a>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={`/unidades#${unit.slug}`} variant="ghost">
                    Ver unidade
                  </ButtonLink>
                  <ButtonLink
                    href={waLink(`Olá! Gostaria de agendar uma avaliação gratuita na Palladium ${unit.name}.`, unit.whatsapp)}
                    variant="light"
                  >
                    WhatsApp
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Dúvidas</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Antes de vir.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{site.payment}</p>
            </div>
            <ButtonLink href="/contato" variant="line">
              Agendar avaliação
            </ButtonLink>
          </div>
          <div className="mt-12">
            <FaqList />
          </div>
        </Container>
      </section>

      <section className="bg-night pb-10 pt-16 text-ivory sm:pt-20">
        <Container>
          <div className="border border-white/15 px-6 py-10 sm:px-10 sm:py-14">
            <div className="grid items-end gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow light>Avaliação gratuita</Eyebrow>
                <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl">
                  Reserve um horário no Tatuapé ou na <span className="italic text-gold">Paulista.</span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/70">
                  {site.hours}. {site.payment}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contato" variant="light">
                  Agendar agora
                </ButtonLink>
                <ButtonLink href={waLink()} variant="ghost">
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
            <div className="mt-10 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2">
              {units.map((unit) => (
                <div key={unit.slug}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{unit.region}</p>
                  <p className="mt-2 font-serif text-3xl">{unit.name}</p>
                  <a href={`tel:${unit.phoneTel}`} className="mt-2 inline-block text-sm text-ivory/70">
                    {unit.phoneDisplay}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
