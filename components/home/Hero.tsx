"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Check, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="px-4 pt-4 lg:px-6">
      <div className="relative mx-auto min-h-[720px] max-w-full overflow-hidden rounded-[28px] bg-neutral-900 lg:min-h-[calc(100vh-32px)]">

        {/* Background desktop */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 hidden sm:block"
        >
          <Image
            src="/images/hero-home.jpg"
            alt="Maison contemporaine"
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 640px) 100vw, 1440px"
          />
        </motion.div>

        {/* Background mobile */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 sm:hidden"
        >
          <Image
            src="/images/hero-home-mobile.jpg"
            alt="Maison contemporaine"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.15,
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-black/40
            to-black/10
            sm:bg-gradient-to-r
            sm:from-black/75
            sm:via-black/40
            sm:to-black/10
          "
        />

        <div className="relative flex min-h-[720px] flex-col justify-between p-7 pt-32 lg:min-h-[calc(100vh-32px)] lg:p-12 lg:pt-36">

          {/* Main content */}
          <div className="max-w-3xl text-white">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75"
            >
              Diagnostic immobilier · Rouen (76) & Eure (27)
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[clamp(64px,7vw,104px)]"
            >
              Vos diagnostics
              <br />
              immobiliers,
              <br />
              <span className="text-white/55">
                simplement.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-lg text-base leading-7 text-white/75 lg:text-lg"
            >
              Vente, location, travaux… BS Diag vous accompagne
              avec expertise, réactivité et proximité.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="/contact" variant="light">
                Demander un devis
              </Button>

              <a
                href="#a-propos"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30">
                  <ArrowDown
                    size={13}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </span>

                Découvrir
              </a>
            </motion.div>
          </div>

          {/* Bottom information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-5 border-t border-white/20 pt-5 text-white lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex flex-wrap gap-6">

              <div className="flex items-center gap-2 text-xs text-white/80">
                <Check size={14} />
                Expertise certifiée
              </div>

              <div className="flex items-center gap-2 text-xs text-white/80">
                <Zap size={14} />
                Intervention rapide
              </div>

              <div className="flex items-center gap-2 text-xs text-white/80">
                <MapPin size={14} />
                76 & 27
              </div>

            </div>

            <div className="hidden rounded-2xl border border-white/20 bg-black/20 px-5 py-4 backdrop-blur-md md:block">
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                Zone principale
              </p>

              <p className="mt-1 text-sm font-medium">
                Rouen · Seine-Maritime
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}