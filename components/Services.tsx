"use client";

import Image from "next/image";
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
              className="lift group relative flex flex-col overflow-hidden rounded-[2rem] bg-cream-deep p-6 md:p-8"
            >
              <HousePattern color="rgb(248 134 64 / 0.2)" />
              <div className="relative flex flex-1 flex-col">
                <h3 className="font-display text-2xl leading-tight text-ink md:text-[1.75rem]">
                  {item.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{item.text}</p>
                <p className="mt-6 border-t border-orange/25 pt-4 text-sm font-medium text-muted">
                  {item.meta}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-blue px-6 py-8 md:mt-14 md:px-10 md:py-10">
            <HousePattern variant="fill" color="rgb(255 241 209 / 0.13)" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/brand/house-cream.png"
                  alt=""
                  width={44}
                  height={48}
                  className="h-9 w-auto shrink-0 object-contain"
                />
                <h3 className="font-display text-2xl text-ink md:text-3xl">
                  {services.extra.title}
                </h3>
              </div>

              <Stagger as="ul" className="flex flex-wrap gap-2.5 md:max-w-xl" step={0.06}>
                {services.extra.items.map((item) => (
                  <StaggerItem
                    as="li"
                    key={item}
                    className="rounded-full bg-cream px-4 py-2 text-base font-medium text-ink"
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
