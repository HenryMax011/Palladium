import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CatalogView } from "@/components/CatalogView";
import { childPages, getPage, pages, singlePages } from "@/lib/catalog";

function metadataFor(path: string): Metadata {
  const page = getPage(path);
  if (!page) return { title: "Palladium" };
  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: page.path },
  };
}

export function CriolipoliseIndex() {
  const page = getPage("/criolipolise");
  if (!page) notFound();
  return <CatalogView page={page} />;
}

export function UltraformerIndex() {
  const page = getPage("/ultraformer");
  if (!page) notFound();
  return <CatalogView page={page} />;
}

export function ClinicaIndex() {
  const page = getPage("/clinica-de-estetica");
  if (!page) notFound();
  return <CatalogView page={page} />;
}

export function catalogIndexMetadata(path: string) {
  return metadataFor(path);
}

export function topicsFor(prefix: string) {
  return childPages(prefix).map((page) => ({ topic: page.path.split("/").pop() as string }));
}

export async function topicMetadata(prefix: string, params: Promise<{ topic: string }>): Promise<Metadata> {
  const { topic } = await params;
  return metadataFor(`${prefix}/${topic}`);
}

export function TopicPage({ prefix, params }: { prefix: string; params: Promise<{ topic: string }> }) {
  return (
    <Suspense fallback={null}>
      <TopicContent prefix={prefix} params={params} />
    </Suspense>
  );
}

async function TopicContent({ prefix, params }: { prefix: string; params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const page = getPage(`${prefix}/${topic}`);
  if (!page) notFound();
  return <CatalogView page={page} />;
}

export function rootParams() {
  return singlePages().map((page) => ({ slug: page.path.slice(1) }));
}

export async function rootMetadata(params: Promise<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
  return metadataFor(`/${slug}`);
}

export function RootCatalogPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <RootContent params={params} />
    </Suspense>
  );
}

async function RootContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(`/${slug}`);
  if (!page) notFound();
  return <CatalogView page={page} />;
}

export const allCatalogPaths = pages.map((page) => page.path);
