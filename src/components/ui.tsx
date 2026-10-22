import type { ReactNode } from "react";
import Link from "next/link";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] ${
        light ? "text-gold" : "text-bronze-deep"
      }`}
    >
      <span className="h-px w-8 bg-gold" aria-hidden />
      {children}
    </p>
  );
}

const buttonVariants = {
  solid: "bg-ink px-6 py-3.5 text-ivory hover:bg-gold hover:text-ink",
  line: "border-b border-gold pb-1.5 text-ink hover:gap-4 hover:text-bronze-deep",
  ghost: "border-b border-gold pb-1.5 text-ivory hover:gap-4 hover:text-gold",
  light: "bg-ivory px-6 py-3.5 text-ink hover:bg-gold",
} as const;

function ButtonArrow({ gold = false }: { gold?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 ${gold ? "text-gold" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}) {
  const classNames = `group inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-all ${buttonVariants[variant]} ${className}`;
  const content = (
    <>
      {children}
      <ButtonArrow gold={variant === "line" || variant === "ghost"} />
    </>
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classNames}>
        {content}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classNames}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {content}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-night text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 font-serif text-[12rem] leading-none text-white/[0.04] sm:text-[18rem]"
      >
        P
      </div>
      <Container className="relative py-14 sm:py-28">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lede ? <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">{lede}</p> : null}
      </Container>
      <div className="h-px bg-gradient-to-r from-gold via-gold/40 to-transparent" />
    </section>
  );
}
