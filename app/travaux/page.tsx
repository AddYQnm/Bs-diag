
import { TravauxHero } from "@/components/travaux/TravauxHero";
import { TravauxDiagnostics } from "@/components/travaux/TravauxDiagnostics";
import { TravauxAccompagnement } from "@/components/travaux/TravauxAccompagnement";
import { TravauxProcess } from "@/components/travaux/TravauxProcess";
import { ProjectCta } from "@/components/travaux/ProjectCta";

export default function TravauxPage() {
  return (
    <main>
      <TravauxHero />
      <TravauxDiagnostics />
      <TravauxAccompagnement />
      <TravauxProcess />

      <ProjectCta
        title="Un projet de rénovation ?"
        description="Parlons ensemble des diagnostics nécessaires."
      />
    </main>
  );
}
