import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { getPost, posts } from "@/lib/stories";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artigo" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function PostPage(props: Props) {
  return (
    <Suspense
      fallback={
        <section className="bg-night">
          <Container className="py-24">
            <div className="h-16 max-w-xl bg-white/10" />
          </Container>
        </section>
      }
    >
      <PostContent {...props} />
    </Suspense>
  );
}

async function PostContent({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <section className="bg-night text-ivory">
        <Container className="py-16 sm:py-24">
          <Eyebrow light>
            {post.date} · {post.reading}
          </Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.98] sm:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-xl text-ivory/75">{post.excerpt}</p>
        </Container>
      </section>
      <Container className="max-w-3xl py-16 sm:py-20">
        <div className="space-y-6 text-base leading-relaxed">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-8">
          <ButtonLink href="/contato">Agendar avaliação</ButtonLink>
          <Link href="/blog" className="text-[11px] font-medium uppercase tracking-[0.18em] link-underline">
            Voltar ao blog
          </Link>
        </div>
      </Container>
    </article>
  );
}
