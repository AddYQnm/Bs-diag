import { AboutHero } from "@/components/a-propos/AboutHero";
import { AboutApproach } from "@/components/a-propos/AboutApproach";
import { AboutExperience } from "@/components/a-propos/AboutExperience";
import { AboutMethod } from "@/components/a-propos/AboutMethod";
import { ProjectCta } from "@/components/ProjectCta";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
<section className="px-4 pt-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom,#ffffff_0%,#f5f8f5_20%,#dce5de_45%,#b5c4b7_100%)]">
      <AboutApproach />

      <AboutExperience />
</section>
      <AboutMethod />

      <ProjectCta
        title="Vous avez un projet immobilier ?"
        description="Parlons ensemble des diagnostics dont vous avez besoin."
      />
    </main>
  );
}