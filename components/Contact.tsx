"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const fieldClass =
  "rounded-2xl border-2 border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-sky";

export function Contact() {
  const { contact, contacts } = site;
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const time = String(data.get("time") ?? "").trim();
    const comment = String(data.get("comment") ?? "").trim();

    const subject = encodeURIComponent(`Заявка с сайта ABA-DOM — ${name || "без имени"}`);
    const body = encodeURIComponent(
      [
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Удобное время: ${time}`,
        `Комментарий: ${comment}`,
      ].join("\n"),
    );

    const mailto = `mailto:${contacts.email}?subject=${subject}&body=${body}`;
    const link = document.createElement("a");
    link.href = mailto;
    link.rel = "noopener noreferrer";
    link.click();
    setSent(true);
    form.reset();
  };

  return (
    <section
      id={contact.id}
      className="border-t border-line/80 bg-bg-elevated"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <p className="inline-flex rounded-full bg-berry/15 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.08em] text-berry">
            {contact.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl"
          >
            {contact.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            {contact.lead}
          </p>

          <ul className="mt-10 space-y-4 text-base text-ink">
            <li className="rounded-2xl bg-bg px-4 py-3">
              <span className="block text-sm font-bold text-muted">Телефон</span>
              <a href={contacts.phoneHref} className="font-extrabold hover:text-coral">
                {contacts.phone}
              </a>
            </li>
            <li className="rounded-2xl bg-bg px-4 py-3">
              <span className="block text-sm font-bold text-muted">Telegram</span>
              <a
                href={contacts.telegramHref}
                className="font-extrabold hover:text-coral"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contacts.telegram}
              </a>
            </li>
            <li className="rounded-2xl bg-bg px-4 py-3">
              <span className="block text-sm font-bold text-muted">Email</span>
              <a href={contacts.emailHref} className="font-extrabold hover:text-coral">
                {contacts.email}
              </a>
            </li>
            <li className="rounded-2xl bg-bg px-4 py-3">
              <span className="block text-sm font-bold text-muted">Адрес</span>
              <span className="font-extrabold">
                {contacts.address} · {site.city}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] border-2 border-line bg-white p-6 shadow-[0_10px_0_rgba(139,124,255,0.25)] md:p-8"
            noValidate
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-muted">
                {contact.form.nameLabel}
                <input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={contact.form.namePlaceholder}
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-muted">
                {contact.form.phoneLabel}
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder={contact.form.phonePlaceholder}
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-muted">
                {contact.form.timeLabel}
                <input
                  name="time"
                  placeholder={contact.form.timePlaceholder}
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-muted">
                {contact.form.commentLabel}
                <textarea
                  name="comment"
                  rows={4}
                  placeholder={contact.form.commentPlaceholder}
                  className={`${fieldClass} resize-y`}
                />
              </label>
            </div>

            <motion.button
              type="submit"
              className="mt-6 w-full rounded-full bg-coral px-5 py-3.5 text-base font-extrabold text-white shadow-[0_6px_0_#ee5253]"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { y: 3, boxShadow: "0 1px 0 #ee5253" }}
            >
              {contact.form.submitLabel}
            </motion.button>

            {sent ? (
              <p className="mt-4 text-sm leading-relaxed text-mint" role="status">
                <strong className="font-extrabold text-ink">{contact.form.successTitle}. </strong>
                {contact.form.successText}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
