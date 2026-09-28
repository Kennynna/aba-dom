"use client";

import { price } from "@/content/price";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HousePattern } from "@/components/motion/HousePattern";

const blocks = [price.programs, price.tutoring, price.consultations];

export function Price() {
  return (
    <section
      id={price.id}
      className="relative bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="price-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          id="price-title"
          eyebrow="Цены"
          title={price.title}
          lead={price.note}
        />

        <div className="relative mt-14 overflow-hidden rounded-[2.5rem] bg-orange md:mt-16">
          <HousePattern variant="fill" color="rgb(255 241 209 / 0.14)" density="plate" />
          <Stagger as="ul" className="relative">
            {price.therapies.map((item, index) => (
              <StaggerItem
                as="li"
                key={`${item.name}-${item.duration}-${index}`}
                className="border-b border-white/25 px-6 py-6 last:border-b-0 md:px-10 md:py-7"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
                  <div className="md:max-w-[28ch] md:pt-1">
                    <h3 className="font-sans text-xl font-semibold text-white md:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-base text-cream">{item.duration}</p>
                  </div>

                  <dl className="flex flex-1 flex-col gap-3 md:max-w-md">
                    {item.options.map((option, optionIndex) => {
                      const label = "label" in option ? option.label : null;

                      return (
                        <div
                          key={label ?? optionIndex}
                          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
                        >
                          {label ? (
                            <dt className="text-sm font-semibold uppercase tracking-[0.08em] text-cream">
                              {label}
                            </dt>
                          ) : (
                            <dt className="sr-only">Стоимость</dt>
                          )}
                          <dd className="ml-auto text-right">
                            <span className="font-sans text-2xl font-bold text-white">
                              {option.pack}
                            </span>
                            <span className="mt-1 block text-base text-cream md:mt-0 md:ml-3 md:inline">
                              разово {option.single}
                            </span>
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger as="ul" className="mt-5 grid gap-5 md:grid-cols-3" step={0.1}>
          {blocks.map((block) => (
            <StaggerItem
              as="li"
              key={block.title}
              className="rounded-[2rem] bg-orange p-6 md:p-7"
            >
              <h3 className="font-sans text-xl font-bold text-white md:text-2xl">{block.title}</h3>
              <dl className="mt-5 flex flex-col gap-3.5">
                {block.items.map((row) => (
                  <div
                    key={row.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-white/30 pb-3.5 last:border-b-0 last:pb-0"
                  >
                    <dt className="max-w-[24ch] text-base font-bold leading-snug text-white">
                      {row.name}
                    </dt>
                    <dd className="font-sans text-lg font-bold text-white md:text-xl">{row.price}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 text-base leading-relaxed text-muted">
            Точную сумму под ваш маршрут подскажет менеджер —{" "}
            <a
              href={site.contacts.phoneHref}
              className="font-semibold text-ink underline decoration-orange underline-offset-4"
            >
              {site.contacts.phone}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
