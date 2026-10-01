"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Contact() {
  const { contact, contacts } = site;

  return (
    <section
      id={contact.id}
      className="relative overflow-hidden bg-blue-field py-16 md:py-24 lg:py-32"
      aria-labelledby="contact-title"
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionHead
              id="contact-title"
              eyebrow={contact.eyebrow}
              title={contact.title}
              tone="cream"
            />

            <Reveal delay={0.15}>
              <a
                href={contacts.phoneHref}
                className="mt-9 inline-block font-display text-[clamp(2rem,7vw,3.5rem)] leading-none text-cream"
              >
                {contacts.phone}
              </a>
            </Reveal>
          </div>

          <Image
            src="/brand/silhouette-cream.png"
            alt=""
            width={520}
            height={520}
            sizes="(max-width: 1024px) 50vw, 260px"
            className="mx-auto h-auto w-40 object-contain lg:mx-0 lg:w-60"
          />
        </div>

        <Stagger as="ul" className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2" step={0.1}>
          {contacts.addresses.map((address) => (
            <StaggerItem
              as="li"
              key={address}
              className="lift rounded-[1.75rem] bg-cream px-6 py-6"
            >
              <span className="text-sm font-medium uppercase tracking-[0.1em] text-muted">
                Адрес
              </span>
              <p className="mt-2 font-display text-xl text-ink md:text-2xl">{address}</p>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
