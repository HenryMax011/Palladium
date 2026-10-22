import { TopicPage, topicMetadata, topicsFor } from "@/components/catalog-routes";

type Props = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return topicsFor("/ultraformer");
}

export function generateMetadata({ params }: Props) {
  return topicMetadata("/ultraformer", params);
}

export default function Page({ params }: Props) {
  return <TopicPage prefix="/ultraformer" params={params} />;
}
