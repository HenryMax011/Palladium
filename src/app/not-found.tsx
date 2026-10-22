import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-night text-ivory">
      <Container className="py-28 sm:py-36">
        <p className="text-[11px] uppercase tracking-[0.28em] text-sand">404</p>
        <h1 className="mt-5 font-serif text-4xl sm:text-6xl">Esta página não está na casa.</h1>
        <p className="mt-5 max-w-md text-ivory/75">
          O endereço pode ter mudado. Volte ao início ou veja os tratamentos.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="light">
            Ir ao início
          </ButtonLink>
          <ButtonLink href="/tratamentos" variant="ghost">
            Ver tratamentos
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
