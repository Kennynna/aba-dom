"use client";

import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const { contact, contacts } = site;

  const items = [
    { label: "Телефон", value: contacts.phone, href: contacts.phoneHref },
    { label: "Telegram", value: contacts.telegram, href: contacts.telegramHref, external: true },
    { label: "Email", value: contacts.email, href: contacts.emailHref },
    { label: "Адрес", value: `${contacts.address} · ${site.city}` },
  ];

  return (
    <section
      id={contact.id}
      className="border-t border-line/80 bg-bg-elevated"
      aria-labelledby="contact-title"
    >
      <img src="/svg/pattern-waves.svg" alt="" className="w-full opacity-80" />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="inline-flex rounded-full bg-berry/15 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.08em] text-berry">
            {contact.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl"
          >
            {contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{contact.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={0.06 * index}>
              <div className="rounded-[1.6rem] bg-bg px-5 py-5">
                <span className="block text-sm font-bold text-muted">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 inline-block text-lg font-extrabold text-ink hover:text-coral"
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-extrabold text-ink">{item.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
