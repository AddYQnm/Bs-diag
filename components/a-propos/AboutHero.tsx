// components/a-propos/AboutHero.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto min-h-[620px] max-w-full overflow-hidden rounded-[28px] bg-[#e9e8e3] sm:min-h-[680px]">
        <Image
          src="/images/about-hero.jpg"
          alt="Diagnostic immobilier"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1440px) 100vw, 1440px"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

        <div className="relative z-10 flex min-h-[620px] flex-col justify-between p-7 sm:min-h-[680px] sm:p-10 lg:p-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-white/60" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
                À propos de BS Diag
              </span>
            </div>
          </div>

          <div className="max-w-[760px]">
            <h1 className="text-[48px] font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-[64px] lg:text-[82px]">
              Le diagnostic
              <br />
              immobilier,
              <br />
              <span className="text-white/60">autrement.</span>
            </h1>

            <p className="mt-7 max-w-[500px] text-[13px] leading-6 text-white/70 sm:text-[14px]">
              Chez BS Diag, nous pensons qu&apos;un diagnostic immobilier
              doit être simple à comprendre, réalisé avec sérieux et adapté
              à chaque projet.
            </p>

            <Link
              href="#notre-approche"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[11px] font-semibold text-[#202020] transition-all duration-300 hover:bg-[#ead2a7]"
            >
              Découvrir notre approche

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
                <ArrowDown
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </span>
            </Link>
          </div>

          <div className="flex justify-end">
            <div className="rounded-full border border-white/20 bg-black/10 px-4 py-2 backdrop-blur-md">
              <span className="text-[9px] uppercase tracking-[0.16em] text-white/60">
                Rouen · Normandie
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}