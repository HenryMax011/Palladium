"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { units, waLink, type Unit } from "@/lib/site";
import "./whatsapp.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 3.2c-4.8 0-8.7 3.7-8.7 8.3 0 1.5.4 2.9 1.2 4.1L3.2 20.8l5.4-1.4c1.1.6 2.3.9 3.4.9 4.8 0 8.7-3.7 8.7-8.3S16.8 3.2 12 3.2zm0 15.1c-1 0-2-.3-2.9-.7l-.2-.1-3.2.8.9-3.1-.2-.2c-.6-.9-.9-1.9-.9-3 0-3.2 2.8-5.8 6.5-5.8s6.5 2.6 6.5 5.8-2.9 6.3-6.5 6.3zm3.6-4.3c-.2-.1-1.2-.6-1.3-.6-.2-.1-.3-.1-.5.1s-.5.6-.6.8-.2.2-.4.1c-.2-.1-.9-.3-1.7-1-.6-.6-1.1-1.3-1.2-1.5s0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3l-.6-1.4c-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.7.6-.7 1.6s.7 1.8.8 2c.1.1 1.4 2.2 3.4 3 .5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const openedOnce = useRef(false);
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;
    const hero = document.querySelector("section.hero-screen");
    if (!hero) return;

    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.clearTimeout(timer);
        if (!entry || entry.isIntersecting || openedOnce.current) return;
        timer = window.setTimeout(() => {
          if (openedOnce.current) return;
          openedOnce.current = true;
          setOpen(true);
        }, 3000);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [pathname]);

  function openChat() {
    openedOnce.current = true;
    setOpen(true);
  }

  function choose(unit: Unit) {
    const place = unit.slug === "tatuape" ? "do Tatuapé" : "da Avenida Paulista";
    setChosen(place);
    window.open(
      waLink(
        `Olá! Gostaria de agendar uma avaliação gratuita na Palladium ${unit.name}.`,
        unit.whatsapp,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="wa-dock">
      {open ? (
        <section
          ref={panelRef}
          id={panelId}
          className="wa-chat"
          role="dialog"
          aria-label="WhatsApp da Palladium"
          tabIndex={-1}
        >
          <header className="wa-chat-head">
            <span className="wa-chat-brand">
              <Logo tone="light" className="text-[34px]" />
              <span className="wa-chat-status">Escolha a unidade</span>
            </span>
            <button type="button" className="wa-chat-close" onClick={() => setOpen(false)} aria-label="Fechar conversa">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </header>
          <div className="wa-chat-body">
            <p className="wa-chat-bubble">Olá. Qual casa fica melhor para a sua avaliação?</p>
            {chosen ? <p className="wa-chat-note">Abrindo o WhatsApp {chosen}.</p> : null}
            <div className="wa-chat-options">
              {units.map((unit) => (
                <button
                  key={unit.slug}
                  type="button"
                  className="wa-chat-option"
                  aria-pressed={chosen?.includes(unit.name) ?? false}
                  onClick={() => choose(unit)}
                >
                  <span className="wa-chat-option-name">{unit.name}</span>
                  <span className="wa-chat-option-meta">
                    {unit.region} · {unit.phoneDisplay}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className="wa-fab"
          aria-expanded={false}
          aria-controls={panelId}
          aria-label="Fale agora pelo WhatsApp"
          onClick={openChat}
        >
          <span className="wa-fab-icon">
            <WhatsAppIcon />
          </span>
          <span className="wa-fab-copy">
            <span className="wa-fab-kicker">Fale agora</span>
            <span className="wa-fab-name">WhatsApp</span>
          </span>
        </button>
      )}
    </div>
  );
}
