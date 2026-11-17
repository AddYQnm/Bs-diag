import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Vendre",
    description:
      "Préparez votre vente avec les diagnostics nécessaires à la mise en vente de votre bien.",
    href: "/vendre",
    image: "/images/project-vendre.jpg",
  },
  {
    number: "02",
    title: "Louer",
    description:
      "Constituez un dossier de location complet et conforme aux obligations en vigueur.",
    href: "/louer",
    image: "/images/louer-hero.png",
  },
  {
    number: "03",
    title: "Travaux",
    description:
      "Avant de rénover ou transformer un bâtiment, identifiez les diagnostics à réaliser.",
    href: "/travaux",
    image: "/images/project-travaux.jpg",
  },
];

export function DiagnosticsProjects() {
  return (
    <section className="bg-[#f5f5f3] px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-4 bg-[#61766a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Votre projet
              </span>
            </div>

            <h2 className="mt-5 max-w-[700px] text-[42px] font-semibold leading-[0.96] tracking-[-0.045em] text-[#202020] sm:text-[52px] lg:text-[60px]">
              Un diagnostic adapté
              <br />
              <span className="text-neutral-400">
                à chaque situation.
              </span>
            </h2>
          </div>

          <p className="max-w-[350px] text-[13px] leading-6 text-neutral-500 lg:pb-1">
            Les diagnostics à réaliser dépendent de votre projet, du type
            de bien et de ses caractéristiques. Nous vous aidons à y voir
            plus clair.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-14 grid gap-3 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className={`group relative min-h-[300px] overflow-hidden rounded-[22px] bg-[#202020] p-7 text-white transition-transform duration-500 hover:-translate-y-1 sm:p-9 lg:min-h-[340px] lg:p-10 ${
                project.number === "03" ? "lg:col-span-2" : ""
              }`}
            >
              {/* IMAGE */}
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes={
                  project.number === "03"
                    ? "(max-width: 1024px) 100vw, 1400px"
                    : "(max-width: 1024px) 100vw, 700px"
                }
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/55" />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

              {/* NUMÉRO */}
              <div className="absolute right-7 top-7 z-10 text-[10px] font-medium tracking-[0.12em] text-white/55 sm:right-9 sm:top-9 lg:right-10 lg:top-10">
                {project.number}
              </div>

              {/* CONTENU */}
              <div className="relative z-10 flex h-full min-h-[246px] flex-col justify-end lg:min-h-[260px]">
                <h3 className="text-[42px] font-semibold leading-none tracking-[-0.05em] sm:text-[48px] lg:text-[54px]">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-white/75">
                  {project.description}
                </p>

                <div className="mt-7 flex items-center gap-3 text-[11px] font-medium">
                  En savoir plus

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/5 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight
                      size={12}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
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