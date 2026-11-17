"use client";

import type { Variants } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  {
    value: "10+",
    label: "Années d'expérience",
  },
  {
    value: "1000+",
    label: "Clients accompagnés",
  },
  {
    value: "4000+",
    label: "Diagnostics réalisés",
  },
  {
    value: "95%",
    label: "Clients satisfaits",
  },
];

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AboutPreview() {
  return (
    <section
      id="a-propos"
      className="px-6 py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1540px]">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            min-h-[520px]
            overflow-hidden
            rounded-[28px]
            bg-neutral-200
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(255,255,255,0.98) 0%,
                rgba(255,255,255,0.94) 35%,
                rgba(255,255,255,0.35) 65%,
                rgba(255,255,255,0.05) 100%
              ),
              url('/images/about.jpg')
            `,
          }}
        >

          {/* Contenu */}
          <div className="relative z-10 flex min-h-[520px] items-center px-7 py-10 lg:px-12">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.35,
              }}
              className="max-w-xl"
            >
              <SectionHeading
                eyebrow="À propos"
                title="Un partenaire de confiance pour vos projets immobiliers."
                description="BS Diag accompagne particuliers et professionnels dans leurs démarches de diagnostic immobilier avec une approche simple, claire et professionnelle."
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/a-propos"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-black
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-neutral-800
                  "
                >
                  En savoir plus

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={statsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="
              absolute
              bottom-6
              right-6
              z-20
              w-[calc(100%-48px)]
              max-w-[560px]
              overflow-hidden
              rounded-2xl
              border
              border-black/5
              bg-white/90
              shadow-xl
              backdrop-blur-xl
              lg:right-10
              lg:w-[560px]
            "
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  className={`
                    p-5
                    lg:p-6
                    ${index !== 0 ? "border-l border-neutral-200" : ""}
                  `}
                >
                  <div className="text-2xl font-semibold tracking-tight lg:text-3xl">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-[11px] leading-4 text-neutral-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}