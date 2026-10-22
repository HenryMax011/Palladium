import { catalogIndexMetadata, UltraformerIndex } from "@/components/catalog-routes";

export const metadata = catalogIndexMetadata("/ultraformer");

export default function Page() {
  return <UltraformerIndex />;
}
