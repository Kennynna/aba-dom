"use client";

import { diagnostics } from "@/content/diagnostics";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HousePattern } from "@/components/motion/HousePattern";

export function Diagnostics() {
  return (
    <section
      id={diagnostics.id}
      className="relative bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="diagnostics-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          id="diagnostics-title"
          eyebrow="Нейропсихология"
          title={diagnostics.title}
          lead="Если что-то из списка узнаёте — это повод показать ребёнка специалисту, а не ждать, что «перерастёт»."
        />

        <Stagger as="ol" className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {diagnostics.signs.map((sign) => (
            <StaggerItem
              as="li"
              key={sign.number}
              className="lift relative flex flex-col overflow-hidden rounded-[2rem] bg-cream-deep/70 p-6 md:p-7"
            >
              <HousePattern color="rgb(248 134 64 / 0.14)" />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange font-display text-lg text-ink">
                  {sign.number}
                </span>
                <h3 className="mt-5 font-display text-xl leading-tight text-ink md:text-2xl">
                  {sign.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{sign.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Единственная ember-плашка на страницу */}
        <Reveal delay={0.1}>
          <div className="grad-ember relative mt-12 overflow-hidden rounded-[2.5rem] px-6 py-10 md:mt-14 md:px-12 md:py-14">
            <HousePattern variant="fill" color="rgb(255 241 209 / 0.12)" density="plate" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h3 className="font-display text-[clamp(1.5rem,3.6vw,2.25rem)] leading-tight text-cream">
                  {diagnostics.closing.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink md:text-lg">
                  {diagnostics.closing.text}
                </p>
              </div>

              <div className="lg:justify-self-end">
                <p className="text-base leading-relaxed text-ink">{diagnostics.cta.text}</p>
                <a
                  href={diagnostics.cta.phoneHref}
                  className="lift mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cream px-7 font-display text-xl text-ink sm:w-auto"
                >
                  {diagnostics.cta.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
