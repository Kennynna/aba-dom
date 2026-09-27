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

        <Stagger as="ul" className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {price.therapies.map((item, index) => (
            <StaggerItem
              as="li"
              key={`${item.name}-${item.duration}-${index}`}
              className="lift relative flex flex-col overflow-hidden rounded-[2rem] bg-cream-deep p-6 md:p-7"
            >
              <HousePattern color="rgb(248 134 64 / 0.16)" />
              <div className="relative flex flex-1 flex-col">
                <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-muted">{item.duration}</p>

                <dl className="mt-6 flex flex-1 flex-col justify-end gap-4">
                  {item.options.map((option, optionIndex) => {
                    const label = "label" in option ? option.label : null;

                    return (
                      <div
                        key={label ?? optionIndex}
                        className="border-t border-orange/25 pt-4 first:border-t-0 first:pt-0"
                      >
                        {label ? (
                          <dt className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">
                            {label}
                          </dt>
                        ) : null}
                        <dd className={label ? "mt-1.5" : ""}>
                          <span className="font-display text-2xl text-ink md:text-[1.75rem]">
                            {option.pack}
                          </span>
                          <span className="ml-2 text-sm text-muted">
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

        <Stagger as="ul" className="mt-5 grid gap-5 md:grid-cols-3" step={0.1}>
          {blocks.map((block) => (
            <StaggerItem
              as="li"
              key={block.title}
              className="rounded-[2rem] border border-orange/25 p-6 md:p-7"
            >
              <h3 className="font-display text-xl text-ink md:text-2xl">{block.title}</h3>
              <dl className="mt-5 flex flex-col gap-3.5">
                {block.items.map((row) => (
                  <div
                    key={row.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-3.5 last:border-b-0 last:pb-0"
                  >
                    <dt className="max-w-[24ch] text-base leading-snug text-muted">{row.name}</dt>
                    <dd className="font-display text-lg text-ink md:text-xl">{row.price}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm leading-relaxed text-muted">
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
