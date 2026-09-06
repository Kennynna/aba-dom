"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const accentMap = {
  coral: "bg-coral text-white shadow-[0_6px_0_#ee5253]",
  sun: "bg-sun text-ink shadow-[0_6px_0_#e0a820]",
  sky: "bg-sky text-white shadow-[0_6px_0_#3d96dd]",
};

const cardTint = {
  coral: "hover:border-coral/40",
  sun: "hover:border-sun/60",
  sky: "hover:border-sky/50",
};

export function Audience() {
  const { approach } = site;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={approach.id}
      className="relative border-t border-line/80 bg-bg-elevated"
      aria-labelledby="approach-title"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="inline-flex rounded-full bg-peach/40 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.08em] text-coral">
            {approach.eyebrow}
          </p>
          <h2
            id="approach-title"
            className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl"
          >
            {approach.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {approach.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {approach.points.map((point, index) => (
            <motion.article
              key={point.title}
              className={`rounded-[1.8rem] border-2 border-line bg-white p-6 md:p-7 ${cardTint[point.accent]}`}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.1, type: "spring", stiffness: 80 }}
              whileHover={reduceMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl font-display text-lg font-extrabold ${accentMap[point.accent]}`}
              >
                {point.badge}
              </span>
              <h3 className="mt-5 text-xl font-extrabold leading-snug text-ink">{point.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{point.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
