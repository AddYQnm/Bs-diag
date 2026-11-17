import { DiagnosticsHero } from "@/components/diagnostics/DiagnosticsHero";
import { DiagnosticsList } from "@/components/diagnostics/DiagnosticsList";
import { DiagnosticsProjects } from "@/components/diagnostics/DiagnosticsProjects";
import { DiagnosticsApproach } from "@/components/diagnostics/DiagnosticsApproach";
import { FinalCta } from "@/components/home/FinalCta";

export default function DiagnosticsPage() {
  return (
    <main>
      <DiagnosticsHero />
      <DiagnosticsList />
      <DiagnosticsProjects />
      <DiagnosticsApproach />
      <FinalCta />
    </main>
  );
}