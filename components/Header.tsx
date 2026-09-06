"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-[1.6rem] px-4 transition-[background,box-shadow] duration-300 md:h-[4.25rem] md:px-6 ${
          scrolled || open
            ? "border border-white/70 bg-white/90 shadow-[0_10px_0_rgba(255,196,61,0.35)] backdrop-blur-md"
            : "border border-transparent bg-white/40 backdrop-blur-sm"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5" onClick={close}>
          <LogoMark />
          <span className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
            {site.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Основная навигация">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-semibold text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <motion.a
            href="#contact"
            className="rounded-full bg-coral px-5 py-2.5 text-[0.95rem] font-bold text-white shadow-[0_5px_0_#ee5253]"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { y: 2, boxShadow: "0 1px 0 #ee5253" }}
          >
            Контакты
          </motion.a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-ink/10 bg-white text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Меню</span>
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-ink transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-full bg-ink transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-full bg-ink transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-[1.4rem] border border-white/80 bg-white md:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Мобильная навигация">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3 text-base font-semibold text-ink"
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-1 rounded-full bg-coral px-3 py-3 text-center text-base font-bold text-white"
                onClick={close}
              >
                Контакты
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
