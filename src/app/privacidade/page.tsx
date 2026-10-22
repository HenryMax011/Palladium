import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Palladium Clínica de Estética trata os dados enviados por este site.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="O que este site faz com os seus dados."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-5 leading-relaxed text-ink/85">
          <p>
            Esta página descreve o site institucional da {site.legalName}. Ela não substitui uma
            política jurídica completa e deve ser revista antes do lançamento, junto do responsável
            pela clínica.
          </p>
          <h2 className="pt-4 font-serif text-3xl">Formulário de avaliação</h2>
          <p>
            Nome, telefone, e-mail, unidade, interesse e mensagem são usados só para abrir uma
            conversa no WhatsApp da unidade escolhida. Esta versão do site não grava esses dados em
            banco próprio. A partir do WhatsApp, o atendimento segue os canais da clínica.
          </p>
          <h2 className="pt-4 font-serif text-3xl">Cookies</h2>
          <p>
            Esta versão não instala cookies de anúncio nem de análise. Se ferramentas de medição
            forem adicionadas depois, esta página precisa passar a dizer quais são, para quê, e como
            recusar.
          </p>
          <h2 className="pt-4 font-serif text-3xl">Contato</h2>
          <p>
            Para falar sobre dados pessoais, escreva para{" "}
            <a className="link-underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            ou ligue para {site.phoneDisplay}.
          </p>
        </Container>
      </section>
    </>
  );
}
