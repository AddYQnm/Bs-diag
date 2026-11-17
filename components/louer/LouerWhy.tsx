
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Une expertise reconnue",
  "Une intervention rapide",
  "Un accompagnement sur mesure",
];

export function LouerWhy() {
  return (
    <section className="px-6 pb-16 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-[#ddd3c5]">
          <Image
            src="/images/louer-accompagnement.png"
            alt="Appartement préparé pour une mise en location"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#ded3c5] via-[#ded3c5]/90 to-transparent lg:w-[72%]" />

          <div className="relative z-10 flex min-h-[360px] items-center">
            <div className="max-w-[540px] px-7 py-10 sm:px-10 lg:px-12 xl:px-14">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-[#a87b46]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                  Pourquoi choisir BS Diag ?
                </span>
              </div>

              <h2 className="mt-4 max-w-[450px] text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#202020] sm:text-[40px]">
                Pourquoi choisir
                <br />
                BS Diag ?
              </h2>

              <ul className="mt-6 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2.5 text-[11px] font-medium text-[#35312c]"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#cda86f]/60">
                      <Check size={9} strokeWidth={2.5} />
                    </span>

                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                href="/a-propos"
                className="group mt-6 inline-flex items-center gap-3 rounded-[8px] bg-[#28251f] px-4 py-2.5 text-[10px] font-medium text-white transition-colors duration-300 hover:bg-[#61766a]"
              >
                En savoir plus

                <ArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
