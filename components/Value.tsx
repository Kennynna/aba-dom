"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Value() {
  const { value } = site;

  return (
    <section
      id={value.id}
      className="relative overflow-hidden bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="value-title"
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative lg:min-h-[32rem]">
          <div className="lg:max-w-[34rem]">
            <SectionHead
              id="value-title"
              eyebrow={value.eyebrow}
              title={value.title}
              lead={value.lead}
            />
          </div>
          <Image
            src="/brand/lockup-orange.png"
            alt=""
            width={700}
            height={860}
            sizes="460px"
            className="pointer-events-none absolute top-0 right-0 hidden h-full w-auto max-w-[46%] object-contain object-right lg:block"
          />
        </div>

        <Image
          src="/brand/lockup-orange.png"
          alt={`${site.brand} — ${site.tagline}`}
          width={700}
          height={860}
          sizes="280px"
          className="mx-auto mt-10 h-auto w-full max-w-[280px] object-contain lg:hidden"
        />

        <Stagger as="ul" className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3" step={0.1}>
          {value.points.map((point) => (
            <StaggerItem
              as="li"
              key={point.title}
              className="lift relative overflow-hidden rounded-[2rem] bg-cream-deep/70 p-6 md:p-7"
            >
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
                <h3 className="mt-5 font-sans text-xl font-medium text-ink md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-muted">{point.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
