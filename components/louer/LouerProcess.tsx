"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Prenez contact",
    description: "avec nous",
  },
  {
    number: "02",
    title: "Nous déterminons",
    description: "vos besoins",
  },
  {
    number: "03",
    title: "Nous intervenons",
    description: "sur votre bien",
  },
  {
    number: "04",
    title: "Recevez vos",
    description: "rapports",
  },
];

const easeCurve = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeCurve,
    },
  },
};

export function LouerProcess() {
  return (
    <section className="px-6 pb-16 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-[#b58a55]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Votre location
            </span>
          </div>

          <h2 className="mt-4 text-[30px] font-semibold leading-none tracking-[-0.045em] text-[#202020] sm:text-[36px]">
            Notre processus en 4 étapes
          </h2>

          <p className="mt-2 text-[12px] leading-5 text-neutral-500">
            Une démarche simple pour louer en toute sérénité.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="relative"
        >
          {/* Ligne desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[17px] hidden lg:block">
            <motion.div
              initial={{
                scaleX: 0,
                transformOrigin: "left",
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px bg-[#ded8ce]"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative rounded-[18px] bg-[#f7f5f1] px-5 py-5 text-center lg:bg-transparent lg:px-4"
              >
                {/* Number */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="relative z-10 mx-auto flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#ae814e] text-[10px] font-semibold text-white"
                >
                  {step.number}
                </motion.div>

                {/* Text */}
                <p className="mt-4 text-[11px] font-semibold text-[#202020] transition-transform duration-300 group-hover:-translate-y-0.5">
                  {step.title}
                </p>

                <p className="mt-0.5 text-[10px] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-b border-black/20 pb-1 text-[10px] font-medium text-[#202020] transition-colors hover:border-black"
          >
            Préparer ma mise en location

            <ArrowRight
              size={11}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}