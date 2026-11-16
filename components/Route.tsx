"use client";

import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HousePattern } from "@/components/motion/HousePattern";


export function Route() {
  const { route, contacts } = site;

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

        <Stagger as="ol" className="relative mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4" step={0.12}>
          {route.steps.map((step) => (
            <StaggerItem
              as="li"
              key={step.number}
              className="flex flex-col rounded-[2rem] border border-blue/30 bg-blue/10 p-6 text-ink"
            >
              <span className="route-step-mark grid h-14 w-14 place-items-center bg-blue-deep pb-1 font-display text-xl text-cream">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl text-ink md:text-2xl">{step.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-ink">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="route-callout relative mt-12 overflow-hidden bg-blue-deep px-6 py-10 text-center md:mt-16 md:px-12 md:py-12">
            <HousePattern color="rgb(255 240 209 / 0.12)" />
            <div className="relative">
              <p className="mx-auto max-w-[40ch] font-display text-xl leading-snug text-cream md:text-2xl">
                {route.shortcut}
              </p>
              <a
                href={contacts.phoneHref}
                className="lift mx-auto mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-red px-7 text-base font-medium text-cream sm:w-auto"
              >
                {contacts.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
