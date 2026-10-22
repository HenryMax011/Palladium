import { RootCatalogPage, rootMetadata, rootParams } from "@/components/catalog-routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rootParams();
}

export function generateMetadata({ params }: Props) {
  return rootMetadata(params);
}

export default function Page({ params }: Props) {
  return <RootCatalogPage params={params} />;
}
