import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceMap } from "./ServiceMap";

export function ServiceArea() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        <div className="relative overflow-hidden rounded-[28px] bg-[#f5f5f3]">

          {/* CONTENU */}
          <div className="relative z-30 flex min-h-[380px] w-full flex-col justify-center px-7 py-10 sm:px-9 sm:py-12 lg:min-h-[380px] lg:w-[42%] lg:px-12">

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-4 bg-[#61766a]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Zone d&apos;intervention
              </span>
            </div>

            <h2 className="mt-5 max-w-[380px] text-[42px] font-semibold leading-[0.95] tracking-[-0.045em] text-[#202020] sm:text-[46px] lg:text-[48px]">
              Dans toute la
              <br />
              Normandie
            </h2>

            <p className="mt-5 max-w-[330px] text-[14px] leading-[1.55] text-neutral-600">
              Nous intervenons à Rouen et dans les communes de
              Seine-Maritime (76) et de l&apos;Eure (27).
            </p>

            <Link
              href="/zone-intervention"
              className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full border border-black/15 bg-white px-5 py-3 text-[12px] font-medium text-neutral-800 transition-all duration-300 hover:bg-black hover:text-white"
            >
              Voir notre zone

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white/20"
              >
                <ArrowRight size={11} />
              </span>
            </Link>

          </div>

          {/* CARTE INTERACTIVE */}
          <div className="relative w-full lg:absolute lg:inset-y-0 lg:left-[34%] lg:z-10 lg:w-[38%]">
            <ServiceMap />
          </div>

          {/* PHOTO */}
          <div className="relative mx-5 mb-5 mt-5 h-[240px] overflow-hidden rounded-[20px] sm:h-[300px] lg:absolute lg:bottom-6 lg:right-6 lg:top-6 lg:z-20 lg:mx-0 lg:mb-0 lg:mt-0 lg:h-auto lg:w-[29%]">

            <Image
              src="/images/rouen.jpg"
              alt="Vue de Rouen en Normandie"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 450px"
            />

          </div>

        </div>
      </div>
    </section>
  );
}