import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[150px] overflow-hidden rounded-[18px] bg-[#1d1d1d]">
          <Image
            src="/images/cta.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-45"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

          <div className="relative z-10 flex min-h-[150px] flex-col items-start justify-center gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9 lg:px-10">
            <div>
              <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[27px]">
                Prêt à réaliser votre diagnostic ?
              </h2>

              <p className="mt-1 text-[11px] leading-5 text-white/65 sm:text-[12px]">
                Obtenez votre devis gratuitement en quelques clics.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex shrink-0 items-center gap-4 rounded-full bg-white px-5 py-3 text-[11px] font-semibold text-[#202020] transition-all duration-300 hover:bg-[#f1f1ef]"
            >
              Demander un devis

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}