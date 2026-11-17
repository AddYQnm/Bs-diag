import Image from "next/image";
import { ArrowUpRight, FileText, Search, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Votre demande",
    description:
      "Vous nous présentez votre projet et les caractéristiques de votre bien.",
    icon: Search,
  },
  {
    number: "02",
    title: "Identification",
    description:
      "Nous déterminons les diagnostics nécessaires selon votre situation.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "Intervention",
    description:
      "Notre diagnostiqueur intervient directement sur votre bien.",
    icon: ArrowUpRight,
  },
  {
    number: "04",
    title: "Votre rapport",
    description:
      "Vous recevez vos rapports et les informations nécessaires à la suite de votre projet.",
    icon: FileText,
  },
];

export function Process() {
  return (
    <section className="px-6 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px]">

        <SectionHeading
          eyebrow="Comment ça marche ?"
          title="Notre méthode, simplement."
          description="Un parcours clair du premier contact à la réception de vos diagnostics."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Image */}
          <div className="relative min-h-[480px] overflow-hidden rounded-[28px]">
            <Image
              src="/images/process.jpg"
              alt="Architecture moderne"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xs uppercase tracking-[0.15em] text-white/60">
                BS Diag
              </p>

              <p className="mt-2 max-w-xs text-2xl font-medium leading-tight">
                Un accompagnement clair à chaque étape.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="divide-y divide-black/10 border-y border-black/10">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group grid gap-5 py-7 md:grid-cols-[70px_1fr_40px] md:items-center"
                >
                  <span className="text-xs text-neutral-400">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition group-hover:bg-black group-hover:text-white">
                    <Icon size={16} />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}