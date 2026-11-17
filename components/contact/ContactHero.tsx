import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function ContactHero() {
  return (
    <section className="px-6 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#61766a]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Contact
              </span>
            </div>

            <h1 className="mt-7 max-w-[850px] text-[52px] font-semibold leading-[0.91] tracking-[-0.055em] text-[#191919] sm:text-[68px] lg:text-[86px]">
              Parlons de votre
              <br />
              <span className="text-black/35">projet immobilier.</span>
            </h1>
          </div>

          <div className="max-w-[380px] lg:justify-self-end">
            <p className="text-[13px] leading-6 text-black/50">
              Besoin d&apos;un diagnostic, d&apos;un devis ou simplement d&apos;un
              renseignement ? Choisissez directement un créneau ou
              contactez-nous.
            </p>

            <Link
              href="#rendez-vous"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#191919] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-[#61766a]"
            >
              Prendre rendez-vous

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <ArrowDown
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}