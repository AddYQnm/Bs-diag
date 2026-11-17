import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCtaProps {
  title: string;
  description: string;
}

export function ProjectCta({
  title,
  description,
}: ProjectCtaProps) {
  return (
    <section className="px-6 pb-12 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="group relative min-h-[190px] overflow-hidden rounded-[22px] bg-[#1f1f1d] sm:min-h-[210px]">
          <Image
            src="/images/cta.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-45 transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

          <div className="relative z-10 flex min-h-[190px] flex-col justify-center px-7 py-8 sm:min-h-[210px] sm:px-10 lg:px-12">
            <div className="max-w-[680px]">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-[#d4b17a]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  BS Diag
                </span>
              </div>

              <h2 className="mt-4 max-w-[600px] text-[28px] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[38px]">
                {title}
              </h2>

              <p className="mt-2 max-w-[460px] text-[11px] leading-5 text-white/60 sm:text-[12px]">
                {description}
              </p>
            </div>

            <Link
              href="/contact"
              className="group/button absolute bottom-7 right-7 inline-flex items-center gap-3 rounded-full bg-[#ead2a7] px-4 py-2.5 text-[10px] font-semibold text-[#202020] transition-all duration-300 hover:bg-white sm:bottom-8 sm:right-8"
            >
              Demander un devis

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight
                  size={11}
                  className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}