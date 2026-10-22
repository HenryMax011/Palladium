import { catalogIndexMetadata, CriolipoliseIndex } from "@/components/catalog-routes";

export const metadata = catalogIndexMetadata("/criolipolise");

export default function Page() {
  return <CriolipoliseIndex />;
}
