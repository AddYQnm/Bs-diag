
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCtaProps {
  title: string;
  description: string;
  image: string;
}

export function ProjectCta({
  title,
  description,
  image,
}: ProjectCtaProps) {
  return (
    <section className="px-6 pb-10 sm:pb-12 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative min-h-[110px] overflow-hidden rounded-[18px] bg-[#252525] sm:min-h-[120px]">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-center opacity-45"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

          <div className="relative z-10 flex min-h-[110px] flex-col justify-center gap-4 px-5 py-5 sm:min-h-[120px] sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">
            <div>
              <h2 className="text-[20px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[23px]">
                {title}
              </h2>

              <p className="mt-1 text-[10px] text-white/60 sm:text-[11px]">
                {description}
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#ead2a7] px-4 py-2.5 text-[10px] font-semibold text-[#202020] transition-colors hover:bg-white"
            >
              Demander un devis

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10">
                <ArrowRight
                  size={10}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
