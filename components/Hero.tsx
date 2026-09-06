"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { BlobField } from "@/components/motion/BlobField";
import { SplitText } from "@/components/motion/SplitText";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { hero } = site;

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden pt-20 md:pt-24"
      aria-labelledby="hero-brand"
    >
      <BlobField />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: "url('/svg/pattern-stars.svg')",
          backgroundSize: "480px 480px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col justify-end px-5 pb-16 pt-16 md:min-h-[calc(100svh-6rem)] md:justify-center md:px-8 md:pb-24">
        <motion.span
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-ink shadow-[0_4px_0_rgba(255,176,135,0.7)]"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          {site.ageRange} · {site.format}
        </motion.span>

        <SplitText
          id="hero-brand"
          text={hero.brand}
          className="font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <motion.h1
          className="mt-6 max-w-2xl font-display text-2xl font-extrabold leading-snug tracking-tight text-ink md:mt-8 md:text-4xl md:leading-tight"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.35 }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-muted md:mt-5 md:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.48 }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.58 }}
        >
          <motion.a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 text-base font-bold text-white shadow-[0_6px_0_#ee5253]"
            whileHover={reduceMotion ? undefined : { y: -3, rotate: -1 }}
            whileTap={reduceMotion ? undefined : { y: 3, boxShadow: "0 1px 0 #ee5253" }}
          >
            {hero.primaryCta.label}
          </motion.a>
          <motion.a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 text-base font-bold text-ink shadow-[0_5px_0_rgba(91,184,255,0.45)]"
            whileHover={reduceMotion ? undefined : { y: -3, rotate: 1 }}
            whileTap={reduceMotion ? undefined : { y: 3 }}
          >
            {hero.secondaryCta.label}
          </motion.a>
        </motion.div>

        <p className="mt-10 text-sm font-semibold text-muted md:mt-14">{site.city}</p>
      </div>
    </section>
  );
}
