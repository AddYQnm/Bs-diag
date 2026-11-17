import Image from "next/image";

export function AboutExperience() {
  return (
    <section className="px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-[#e8e6df]">
          <Image
            src="/images/about-experience.png"
            alt="Intérieur d'un bien immobilier"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          <div className="relative z-10 flex min-h-[560px] items-end p-7 sm:p-10 lg:p-14">
            <div className="max-w-[580px]">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Notre métier
              </span>

              <h2 className="mt-5 text-[38px] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[50px]">
                Au-delà du
                <br />
                simple rapport.
              </h2>

              <p className="mt-6 max-w-[470px] text-[13px] leading-6 text-white/65">
                Un diagnostic immobilier ne se résume pas à une série de
                documents. Il permet de mieux comprendre un bien, d&apos;anticiper
                certaines démarches et de sécuriser chaque étape d&apos;un projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}