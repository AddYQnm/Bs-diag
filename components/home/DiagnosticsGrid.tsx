import Link from "next/link";
import {
  ArrowUpRight,
  Flame,
  Home,
  MapPin,
  Ruler,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { diagnostics } from "@/data/diagnostics";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  dpe: Home,
  amiante: ShieldCheck,
  plomb: ShieldCheck,
  electricite: Zap,
  gaz: Flame,
  termites: ShieldCheck,
  erp: MapPin,
  carrez: Ruler,
};

export function DiagnosticsGrid() {
  return (
    <section className="bg-[#b5c4b7] px-6 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px]">

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:items-start">

          {/* Intro */}
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Nos prestations"
              title="Tous vos diagnostics immobiliers."
              description="Une gamme complète de diagnostics pour répondre aux obligations liées à votre bien."
            />

            <Link
              href="/diagnostics"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-black
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-neutral-800
              "
            >
              Voir tous les diagnostics
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid overflow-hidden rounded-[28px] border border-black/5 bg-white sm:grid-cols-2 lg:grid-cols-4">

            {diagnostics.map((diagnostic, index) => {
              const Icon =
                icons[diagnostic.slug as keyof typeof icons] ?? Home;

              return (
                <Link
                  key={diagnostic.slug}
                  href={diagnostic.href}
                  className="
                    group
                    relative
                    flex
                    min-h-[180px]
                    flex-col
                    justify-between
                    border-black/5
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-black
                    hover:text-white
                  "
                >
                  {/* Borders */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      border-b
                      border-black/5
                      ${
                        index % 4 !== 3
                          ? "lg:border-r"
                          : ""
                      }
                    `}
                  />

                  {/* Top */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/10
                        transition
                        group-hover:border-white/20
                      "
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="
                        text-neutral-400
                        transition
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-10">
                    <h3 className="font-semibold tracking-tight">
                      {diagnostic.name}
                    </h3>

                    <p className="mt-1 text-xs text-neutral-500 transition group-hover:text-white/55">
                      {diagnostic.description}
                    </p>
                  </div>
                </Link>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}