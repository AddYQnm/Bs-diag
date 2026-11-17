
import { LouerHero } from "@/components/louer/LouerHero";
import { LouerDiagnostics } from "@/components/louer/LouerDiagnostics";
import { LouerWhy } from "@/components/louer/LouerWhy";
import { LouerProcess } from "@/components/louer/LouerProcess";
import { ProjectCta } from "@/components/louer/ProjectCta";

export default function LouerPage() {
  return (
    <main>
      <LouerHero />

      <LouerDiagnostics />

      <LouerWhy />

      <LouerProcess />

      <ProjectCta
        title="Une mise en location sereine ?"
        description="Demandez votre devis dès maintenant."
        image="/images/cta-location.jpg"
      />
    </main>
  );
}
