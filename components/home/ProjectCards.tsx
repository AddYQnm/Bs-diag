import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectCards() {
  return (
    <section className="px-6 pb-28 lg:pb-40">
      <div className="mx-auto max-w-[1440px]">

        <SectionHeading
          eyebrow="Votre projet"
          title="Quel est votre projet ?"
          description="Chaque situation immobilière implique des obligations différentes. Trouvez rapidement le parcours adapté à votre projet."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              className="group relative min-h-[460px] overflow-hidden rounded-[24px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white">

                <div className="flex items-end justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                      {project.description}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}