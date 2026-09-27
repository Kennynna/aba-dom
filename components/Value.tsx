"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HousePattern } from "@/components/motion/HousePattern";

export function Value() {
  const { value } = site;

  return (
    <section
      id={value.id}
      className="relative bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="value-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <SectionHead
            id="value-title"
            eyebrow={value.eyebrow}
            title={value.title}
            lead={value.lead}
          />

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-cream-deep p-8 md:p-10">
              <HousePattern color="rgb(248 134 64 / 0.22)" />
              <Image
                src="/brand/lockup-orange.png"
                alt={`${site.brand} — ${site.tagline}`}
                width={700}
                height={860}
                sizes="(max-width: 1024px) 70vw, 420px"
                className="relative mx-auto h-auto w-full max-w-[280px] object-contain md:max-w-[340px]"
              />
            </div>
          </Reveal>
        </div>

        <Stagger as="ul" className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3" step={0.1}>
          {value.points.map((point) => (
            <StaggerItem
              as="li"
              key={point.title}
              className="lift relative overflow-hidden rounded-[2rem] bg-cream-deep/70 p-6 md:p-7"
            >
              <HousePattern color="rgb(248 134 64 / 0.14)" />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange">
                  <Image
                    src="/brand/house-cream.png"
                    alt=""
                    width={44}
                    height={48}
                    className="h-5 w-auto object-contain"
                  />
                </span>
                <h3 className="mt-5 font-display text-xl text-ink md:text-2xl">{point.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{point.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
