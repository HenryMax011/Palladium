import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui";
import { posts } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Textos da Palladium sobre Ultraformer, criolipólise e como se preparar para a avaliação gratuita.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Diário"
        title="Notas claras sobre o que fazemos."
        lede="Textos curtos para chegar à avaliação com pergunta melhor. Sem promessa de resultado igual para todo mundo."
      />
      <section className="py-16 sm:py-24">
        <Container className="divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <article key={post.slug} className="grid gap-4 py-10 md:grid-cols-[180px_minmax(0,1fr)]">
              <p className="text-sm text-muted">
                {post.date}
                <span className="mt-1 block text-[11px] uppercase tracking-[0.18em]">{post.reading}</span>
              </p>
              <div>
                <h2 className="font-serif text-4xl leading-tight">
                  <Link href={`/blog/${post.slug}`} className="link-underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
