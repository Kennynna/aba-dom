"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useSafeReducedMotion } from "./motion/useSafeReducedMotion";
import { site } from "@/content/site";
import { MenuIcon } from "@/components/icons/Controls";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useSafeReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full bg-cream px-4 backdrop-blur-md transition-shadow duration-500 md:h-[4.5rem] md:px-6 ${
          scrolled || open
            ? "shadow-[0_12px_32px_-16px_rgba(31,26,23,0.45)]"
            : "shadow-[0_10px_24px_-18px_rgba(31,26,23,0.28)]"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          onClick={close}
          aria-label={`${site.brand} — на главную`}
        >
          <span aria-hidden className="brand-house h-9 w-9 shrink-0 bg-red" />
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Основная навигация">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[0.95rem] font-medium text-ink uppercase transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contacts.phoneHref}
            className="lift inline-flex min-h-12 items-center rounded-full bg-red px-4 text-sm font-medium text-cream md:px-5 md:text-[0.95rem]"
          >
            Позвонить
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-deep text-cream transition-colors duration-300 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon expanded={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-0 -z-10 bg-cream px-6 pb-10 pt-24 lg:hidden"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col" aria-label="Мобильная навигация">
              {site.nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="border-b border-line py-4 font-sans text-xl font-medium text-ink uppercase"
                  onClick={close}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + index * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="border-b border-line py-4 font-sans text-xl font-medium text-ink uppercase"
                onClick={close}
              >
                Контакты
              </a>
            </nav>

            <a
              href={site.contacts.phoneHref}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-red px-6 text-base font-medium text-cream"
              onClick={close}
            >
              {site.contacts.phone}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
