
import { VendreHero } from "@/components/vendre/VendreHero";
import { VendreDiagnostics } from "@/components/vendre/VendreDiagnostics";
import { VendreAccompagnement } from "@/components/vendre/VendreAccompagnement";
import { VendreProcess } from "@/components/vendre/VendreProcess";
import { FinalCta } from "@/components/home/FinalCta";

export default function VendrePage() {
  return (
    <main>
      <VendreHero />
      <VendreDiagnostics />
      <VendreAccompagnement />
      <VendreProcess />
      <FinalCta />
    </main>
  );
}
