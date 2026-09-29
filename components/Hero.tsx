"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./motion/useSafeReducedMotion";
import { site } from "@/content/site";
import { HousePattern } from "@/components/motion/HousePattern";
import { Seam } from "@/components/motion/Seam";

export function Hero() {
  const reduceMotion = useSafeReducedMotion();
  const { hero, contacts } = site;
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <section
      id="top"
      className="grad-warm warm-drift relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-32 pt-28 md:pb-40 md:pt-32"
      aria-labelledby="hero-slogan"
    >
      <svg className="absolute h-0 w-0" aria-hidden focusable="false">
        <defs>
          <clipPath id="hero-split-mobile" clipPathUnits="objectBoundingBox">
            <path d="M0,0.72 C0.34,0.64 0.68,0.66 1,0.62 L1,1 L0,1 Z" />
          </clipPath>
          <clipPath id="hero-split-desktop" clipPathUnits="objectBoundingBox">
            <path d="M1,0 L1,0.12 C0.62,0.16 0.46,0.28 0.48,0.55 C0.5,0.82 0.52,0.92 0.54,1 L1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div aria-hidden className="hero-split pointer-events-none absolute inset-0 bg-cream">
        <HousePattern color="rgb(248 134 64 / 0.16)" density="plate" />
      </div>
      <HousePattern color="rgb(255 241 209 / 0.12)" density="plate" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <motion.h1
            id="hero-slogan"
            className="font-display text-[clamp(3.1rem,8.6vw,6.4rem)] leading-[0.9] whitespace-nowrap text-cream"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ABADOM —
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[12ch] font-display text-[clamp(1.55rem,2.8vw,2.35rem)] leading-[1.05] text-cream uppercase"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12 }}
          >
            {site.tagline}
          </motion.p>

          <motion.p
            className="mt-6 max-w-[22ch] text-[clamp(1.25rem,2.2vw,1.85rem)] leading-snug text-cream"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.22 }}
          >
            {hero.lead}
          </motion.p>

          <motion.div
            className="mt-8"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.32 }}
          >
            <button
              type="button"
              className="lift inline-flex min-h-16 w-full items-center justify-center rounded-full bg-cream px-8 font-display text-[clamp(1.35rem,2vw,1.75rem)] tracking-[0.08em] text-orange uppercase sm:w-auto"
              onClick={() => {
                const dialog = dialogRef.current;
                dialog?.showModal();
                dialog?.querySelector("button")?.focus();
              }}
            >
              {hero.primaryCta.label}
            </button>
          </motion.div>
        </div>

        <div className="mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none">
          <div aria-hidden className="hero-silhouette w-full" />
        </div>
      </div>

      <Seam from="transparent" to="var(--cream)" className="absolute inset-x-0 bottom-0" />

      <dialog
        ref={dialogRef}
        className="m-auto w-[min(calc(100%-2.5rem),28rem)] rounded-[2rem] border-0 bg-cream p-8 text-ink backdrop:bg-ink/45"
        aria-labelledby="consult-title"
        onCancel={(event) => {
          event.preventDefault();
          dialogRef.current?.close();
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="consult-title" className="font-display text-3xl text-orange">
            Консультация
          </h2>
          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-2xl leading-none text-ink"
            onClick={() => dialogRef.current?.close()}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <a
          href={contacts.phoneHref}
          className="mt-6 block font-display text-3xl text-orange"
        >
          {contacts.phone}
        </a>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={contacts.whatsapp}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange px-6 text-base font-semibold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={contacts.instagram}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-orange px-6 text-base font-semibold text-orange"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </dialog>
    </section>
  );
}
