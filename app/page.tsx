import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ProjectCards } from "@/components/home/ProjectCards";
import { DiagnosticsGrid } from "@/components/home/DiagnosticsGrid";
import { Process } from "@/components/home/Process";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
   

      <main>
        <Hero />

        <AboutPreview />

        <ProjectCards />

        <DiagnosticsGrid />

        <Process />

        <ServiceArea />

        <Testimonials />

        <FinalCta />
      </main>

     
    </>
  );
}