
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function LouerHero() {
  return (
    <section className="px-4 pt-3 sm:px-5 lg:px-6">
      <div className="relative mx-auto min-h-[560px] max-w-full overflow-hidden rounded-[22px] bg-[#202020] sm:min-h-[620px] lg:min-h-[680px]">
        <Image
          src="/images/louer-hero.png"
          alt="Immeuble résidentiel à Rouen"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1440px) 100vw, 1440px"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative z-10 flex min-h-[560px] items-end sm:min-h-[620px] lg:min-h-[680px]">
          <div className="w-full px-7 pb-10 sm:px-10 sm:pb-12 lg:max-w-[720px] lg:px-12 lg:pb-14 xl:px-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-[#d9bd8e]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                Location immobilière
              </span>
            </div>

            <h1 className="mt-5 max-w-[680px] text-[46px] font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-[60px] lg:text-[70px] xl:text-[76px]">
              Vous mettez votre
              <br />
              bien en location ?
            </h1>

            <p className="mt-5 max-w-[470px] text-[14px] leading-6 text-white/75 sm:text-[15px]">
              Assurez-vous de respecter vos obligations avec l'expertise de
              BS Diag et proposez à vos futurs locataires un logement conforme.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#ead2a7] px-5 py-3 text-[11px] font-semibold text-[#202020] transition-all duration-300 hover:bg-white"
              >
                Demander un devis

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={11} />
                </span>
              </Link>

              <Link
                href="#diagnostics-location"
                className="group inline-flex items-center gap-2.5 text-[11px] font-medium text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <Play size={10} fill="currentColor" />
                </span>

                <span className="border-b border-white/30 pb-0.5 transition-colors group-hover:border-white">
                  Découvrir
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-8 z-10 hidden max-w-[250px] lg:block">
          <div className="border-l border-white/30 pl-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Location immobilière
            </p>

            <p className="mt-2 text-[12px] leading-5 text-white/75">
              Un dossier de diagnostics clair pour louer votre bien
              sereinement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
