"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const accentMap = {
  coral: "bg-coral text-white",
  sun: "bg-sun text-ink",
  mint: "bg-mint text-ink",
  berry: "bg-berry text-white",
};

export function Process() {
  const { process } = site;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={process.id}
      className="relative overflow-hidden border-t border-line/80 bg-bg"
      aria-labelledby="process-title"
    >
      <div className="play-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="inline-flex rounded-full bg-sky/20 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.08em] text-sky">
            {process.eyebrow}
          </p>
          <h2
            id="process-title"
            className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl"
          >
            {process.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {process.lead}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-5 md:mt-16 md:grid-cols-4">
          {process.steps.map((step, index) => (
            <motion.li
              key={step.number}
              className="relative rounded-[1.8rem] bg-white p-6 shadow-[0_8px_0_rgba(255,196,61,0.35)]"
              initial={reduceMotion ? false : { opacity: 0, y: 28, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.12,
                type: "spring",
                stiffness: 90,
              }}
            >
              <p
                className={`inline-flex h-14 w-14 items-center justify-center rounded-full font-display text-xl font-extrabold ${accentMap[step.accent]}`}
              >
                {step.number}
              </p>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
