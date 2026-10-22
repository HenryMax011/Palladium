import { TopicPage, topicMetadata, topicsFor } from "@/components/catalog-routes";

type Props = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return topicsFor("/criolipolise");
}

export function generateMetadata({ params }: Props) {
  return topicMetadata("/criolipolise", params);
}

export default function Page({ params }: Props) {
  return <TopicPage prefix="/criolipolise" params={params} />;
}
