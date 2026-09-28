"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./motion/useSafeReducedMotion";
import { site } from "@/content/site";
import { SplitText } from "@/components/motion/SplitText";
import { HousePattern } from "@/components/motion/HousePattern";
import { Seam } from "@/components/motion/Seam";

export function Hero() {
  const reduceMotion = useSafeReducedMotion();
  const { hero, contacts } = site;

  return (
    <section
      id="top"
      className="grad-warm warm-drift relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-32 pt-28 md:pb-40 md:pt-32"
      aria-labelledby="hero-slogan"
    >
      <HousePattern color="rgb(255 241 209 / 0.12)" density="plate" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div>
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.18em] text-ink"
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {site.tagline}
          </motion.p>

          <SplitText
            as="h1"
            id="hero-slogan"
            text={`«${site.slogan}»`}
            delay={0.2}
            className="mt-5 font-display text-[clamp(2.1rem,7.5vw,4.5rem)] leading-[1.06] text-cream"
          />

          <motion.p
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-ink md:text-lg"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.55 }}
          >
            {hero.lead}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.7 }}
          >
            <a
              href={contacts.phoneHref}
              className="lift inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cream px-7 text-base font-semibold text-ink sm:w-auto"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="lift inline-flex min-h-12 w-full items-center justify-center rounded-full border border-ink/25 bg-cream/25 px-7 text-base font-semibold text-ink sm:w-auto"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.a
            href={contacts.phoneHref}
            className="mt-7 inline-block font-display text-2xl text-ink md:text-3xl"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.85 }}
          >
            {contacts.phone}
          </motion.a>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: [0.94, 1, 1.03, 1] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: 0.8, delay: 0.3 },
                  scale: {
                    duration: 9,
                    delay: 0.3,
                    times: [0, 0.14, 0.57, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        >
          <Image
            src="/brand/silhouette-play.png"
            alt=""
            width={1400}
            height={886}
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 460px"
            className="h-auto w-full object-contain drop-shadow-[0_24px_40px_rgba(31,26,23,0.18)]"
          />
        </motion.div>
      </div>

      <Seam from="transparent" to="var(--cream)" className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
