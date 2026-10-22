import { catalogIndexMetadata, ClinicaIndex } from "@/components/catalog-routes";

export const metadata = catalogIndexMetadata("/clinica-de-estetica");

export default function Page() {
  return <ClinicaIndex />;
}
