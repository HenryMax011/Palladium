import { TopicPage, topicMetadata, topicsFor } from "@/components/catalog-routes";

type Props = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return topicsFor("/clinica-de-estetica");
}

export function generateMetadata({ params }: Props) {
  return topicMetadata("/clinica-de-estetica", params);
}

export default function Page({ params }: Props) {
  return <TopicPage prefix="/clinica-de-estetica" params={params} />;
}
