import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function DiagnosticsHero() {
  return (
    <section className="relative overflow-hidden border-b border-black/[0.06] px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
      
      {/* IMAGE DE FOND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/diagnostics/diagnostics-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center grayscale-[20%]"
          sizes="100vw"
        />
      </div>

      {/* VOILE BLANC */}
      <div className="absolute inset-0 -z-10 bg-white/-80" />

      {/* DÉGRADÉ POUR RENFORCER LA LECTURE */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/50 to-white/10" />

      <div className="mx-auto max-w-[1440px]">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          {/* TITRE */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-4 bg-[#61766a]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Nos diagnostics
              </span>
            </div>

            <h1 className="mt-6 max-w-[850px] text-[52px] font-semibold leading-[0.92] tracking-[-0.05em] text-[#202020] sm:text-[64px] lg:text-[82px]">
              Les diagnostics
              <br />
              immobiliers,
              <br />
              <span className="text-neutral-400">
                en toute simplicité.
              </span>
            </h1>
          </div>

          {/* INTRODUCTION */}
          <div className="max-w-[400px] lg:pb-2">
            <p className="text-[15px] leading-7 text-neutral-600">
              Vente, location ou travaux : BS Diag vous accompagne
              dans l&apos;ensemble de vos obligations en matière de
              diagnostic immobilier à Rouen et en Normandie.
            </p>

            <Link
              href="#diagnostics"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#61766a]"
            >
              Découvrir les diagnostics

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={11} />
              </span>
            </Link>
          </div>
        </div>

        {/* INDICATION DE SCROLL */}
        <div className="mt-16 flex items-center gap-3 text-neutral-400">
          <ArrowDown size={15} />

          <span className="text-[10px] uppercase tracking-[0.18em]">
            Explorer nos prestations
          </span>
        </div>

      </div>
    </section>
  );
}