"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { extraProcedures, site, units, waLink } from "@/lib/site";
import { treatments } from "@/lib/treatments";

const options = [...treatments.map((item) => item.name), ...extraProcedures];

export function ContactForm() {
  const params = useSearchParams();
  const tratamentoParam = params.get("tratamento") ?? "";
  const unidadeParam = params.get("unidade") ?? "Tatuapé";

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [unidade, setUnidade] = useState(unidadeParam);
  const [tratamento, setTratamento] = useState(tratamentoParam);
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState("");
  const [query, setQuery] = useState({ tratamento: tratamentoParam, unidade: unidadeParam });

  if (query.tratamento !== tratamentoParam || query.unidade !== unidadeParam) {
    setQuery({ tratamento: tratamentoParam, unidade: unidadeParam });
    setTratamento(tratamentoParam);
    setUnidade(unidadeParam);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (nome.trim().length < 2 || telefone.replace(/\D/g, "").length < 8) {
      setError("Informe seu nome e um telefone com DDD para continuarmos.");
      return;
    }

    const destino =
      unidade === "Tanto faz"
        ? site.whatsapp
        : (units.find((item) => item.name === unidade)?.whatsapp ?? site.whatsapp);

    const text = [
      "Olá! Quero agendar uma avaliação gratuita na Palladium.",
      `Nome: ${nome.trim()}`,
      `Telefone: ${telefone.trim()}`,
      email.trim() ? `E-mail: ${email.trim()}` : "",
      `Unidade: ${unidade}`,
      tratamento ? `Interesse: ${tratamento}` : "",
      mensagem.trim() ? `Mensagem: ${mensagem.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setError("");
    window.open(waLink(text, destino), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-paper p-6 sm:p-8" noValidate>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-bronze-deep">
        Avaliação gratuita
      </p>
      <h2 className="mt-3 font-serif text-4xl leading-none">Conte o que você busca</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        O formulário abre uma conversa no WhatsApp da unidade escolhida. Nada fica armazenado neste
        site.
      </p>

      <div className="mt-8 grid gap-5">
        <label className="block text-sm">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">Nome</span>
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            name="nome"
            autoComplete="name"
            required
            className="w-full border border-line bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-gold"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">
            Telefone / WhatsApp
          </span>
          <input
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className="w-full border border-line bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-gold"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">E-mail</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border border-line bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-gold"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">Unidade</span>
          <select
            value={unidade}
            onChange={(event) => setUnidade(event.target.value)}
            name="unidade"
            className="w-full border border-line bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-gold"
          >
            {units.map((unit) => (
              <option key={unit.slug} value={unit.name}>
                {unit.name}
              </option>
            ))}
            <option value="Tanto faz">Tanto faz</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">
            Interesse
          </span>
          <select
            value={tratamento}
            onChange={(event) => setTratamento(event.target.value)}
            name="tratamento"
            className="w-full border border-line bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-gold"
          >
            <option value="">Quero ajuda para escolher</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">
            Mensagem
          </span>
          <textarea
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            name="mensagem"
            rows={4}
            className="w-full resize-y border border-line bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-gold"
          />
        </label>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-bronze-deep" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 w-full bg-ink px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold hover:text-ink"
      >
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
