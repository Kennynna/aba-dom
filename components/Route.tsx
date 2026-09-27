"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./motion/useSafeReducedMotion";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HousePattern } from "@/components/motion/HousePattern";

export function Route() {
  const { route, contacts } = site;
  const reduceMotion = useSafeReducedMotion();

  return (
    <section
      id={route.id}
      className="relative bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="route-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          id="route-title"
          eyebrow={route.eyebrow}
          title={route.title}
          lead={route.lead}
        />

        <div className="relative mt-14 md:mt-16">
          {/* Линия маршрута: дорисовывается при появлении */}
          {reduceMotion ? (
            <>
              <div
                aria-hidden
                className="absolute bottom-4 left-[1.75rem] top-4 w-[2px] rounded bg-blue/35 md:hidden"
              />
              <div
                aria-hidden
                className="absolute left-0 right-0 top-7 hidden h-[2px] rounded bg-blue/35 md:block"
              />
            </>
          ) : (
            <>
              <motion.div
                aria-hidden
                className="absolute bottom-4 left-[1.75rem] top-4 w-[2px] origin-top rounded bg-blue/35 md:hidden"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                aria-hidden
                className="absolute left-0 right-0 top-7 hidden h-[2px] origin-left rounded bg-blue/35 md:block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </>
          )}

          <Stagger as="ol" className="relative grid gap-8 md:grid-cols-4 md:gap-5" step={0.12}>
            {route.steps.map((step) => (
              <StaggerItem
                as="li"
                key={step.number}
                className="flex gap-5 md:flex-col md:gap-0"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blue font-display text-xl text-ink">
                  {step.number}
                </span>
                <div className="md:mt-6">
                  <h3 className="font-display text-xl text-ink md:text-2xl">{step.title}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-muted">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-12 grid gap-8 overflow-hidden rounded-[2.5rem] bg-cream-deep p-6 md:mt-16 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <HousePattern color="rgb(90 156 181 / 0.2)" />
            <div className="relative">
              <p className="max-w-[52ch] font-display text-xl leading-snug text-ink md:text-2xl">
                {route.shortcut}
              </p>
              <a
                href={contacts.phoneHref}
                className="lift mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-orange px-7 text-base font-semibold text-ink sm:w-auto"
              >
                {contacts.phone}
              </a>
            </div>

            <Image
              src="/brand/silhouette-orange.png"
              alt=""
              width={520}
              height={520}
              sizes="(max-width: 768px) 60vw, 260px"
              className="relative mx-auto h-auto w-40 object-contain md:w-56"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
