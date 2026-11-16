"use client";

import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HousePattern } from "@/components/motion/HousePattern";

export function Services() {
  const { services } = site;

  return (
    <section
      id={services.id}
      className="relative bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          id="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          lead={services.lead}
        />

        <Stagger as="ul" className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.main.map((item) => (
            <StaggerItem
              as="li"
              key={item.name}
              className="lift group relative flex flex-col overflow-hidden rounded-[2rem] border border-blue/40 bg-blue/10 p-6 md:p-8"
            >
              <HousePattern color="rgb(89 155 180 / 0.12)" />
              <div className="relative flex flex-1 flex-col">
                <h3 className="font-display text-2xl leading-tight text-ink md:text-[1.75rem]">
                  {item.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{item.text}</p>
                {item.meta ? <p className="mt-6 border-t border-line pt-4 text-base font-medium text-ink">{item.meta}</p> : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="services-ticket relative mt-12 overflow-hidden bg-blue-deep px-8 py-8 md:mt-14 md:px-14 md:py-10">
            <svg className="absolute h-0 w-0" aria-hidden focusable="false">
              <defs>
                <clipPath id="services-ticket-shape" clipPathUnits="objectBoundingBox">
                  <path d="M.04 0H.96Q1 0 1 .08V.40C.96 .40 .96 .60 1 .60V.92Q1 1 .96 1H.04Q0 1 0 .92V.60C.04 .60 .04 .40 0 .40V.08Q0 0 .04 0Z" />
                </clipPath>
              </defs>
            </svg>
            <HousePattern variant="fill" color="rgb(255 240 209 / 0.13)" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h3 className="font-display text-2xl text-cream md:text-3xl">
                {services.extra.title}
              </h3>

              <Stagger as="ul" className="flex flex-wrap gap-2.5 md:max-w-xl" step={0.06}>
                {services.extra.items.map((item) => (
                  <StaggerItem
                    as="li"
                    key={item}
                    className="rounded-full bg-cream-soft px-4 py-2 text-base font-medium text-ink"
                  >
                    {item}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
