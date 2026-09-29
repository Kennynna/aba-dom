"use client";

import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HousePattern } from "@/components/motion/HousePattern";

const stepTones = ["#2F9BFF", "#3CCB4E", "#8B5CFF", "#FF4D4D"];

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

        <Stagger as="ol" className="relative mt-14 grid gap-5 md:mt-16 md:grid-cols-4" step={0.12}>
          {route.steps.map((step, index) => (
            <StaggerItem
              as="li"
              key={step.number}
              className="flex flex-col rounded-[2rem] p-6 text-white"
              style={{ backgroundColor: stepTones[index] }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 font-display text-xl text-white">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl text-white md:text-2xl">{step.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-white">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-cream-deep p-6 text-center md:mt-16 md:p-10">
            <HousePattern color="rgb(90 156 181 / 0.2)" />
            <div className="relative">
              <p className="mx-auto max-w-[40ch] font-display text-xl leading-snug text-orange md:text-2xl">
                {route.shortcut}
              </p>
              <a
                href={contacts.phoneHref}
                className="lift mx-auto mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-orange px-7 text-base font-semibold text-white sm:w-auto"
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
