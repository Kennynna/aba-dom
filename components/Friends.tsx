"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { scrollPageTo } from "@/components/SmoothScroll";

const cardSlots = {
  bear: "left-[21%] top-[42%] h-[39%] w-[41%]",
  fox: "left-[37%] top-[40%] h-[40%] w-[41%]",
  bunny: "left-[29%] top-[43%] h-[37%] w-[41%]",
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function Friends() {
  const { friends } = site;
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const phrase = friends.phrases[active];
  const count = friends.phrases.length;

  const updateFromScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const total = section.offsetHeight - window.innerHeight;
    if (total <= 0) {
      return;
    }

    const progress = clamp(-section.getBoundingClientRect().top / total, 0, 0.999);
    setActive(Math.floor(progress * count));
  }, [count]);

  useEffect(() => {
    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [updateFromScroll]);

  const goTo = (index: number) => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const total = section.offsetHeight - window.innerHeight;
    const top = section.offsetTop + ((index + 0.35) / count) * total;
    scrollPageTo(top, Boolean(reduceMotion));
  };

  return (
    <section
      ref={sectionRef}
      id="friends"
      className="relative border-t border-line/80 bg-[#fff8f1]"
      style={{ height: "270svh" }}
      aria-labelledby="friends-title"
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: "url('/svg/pattern-stars.svg')",
            backgroundSize: "420px 420px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col px-5 pb-4 pt-20 md:justify-center md:px-8 md:py-24">
          <p className="inline-flex w-fit rounded-full bg-mint/20 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-ink md:text-sm">
            {friends.eyebrow}
          </p>
          <h2
            id="friends-title"
            className="mt-2 max-w-2xl font-display text-2xl font-extrabold tracking-tight text-ink md:mt-4 md:text-5xl"
          >
            {friends.title}
          </h2>

          <div className="mt-4 flex min-h-0 flex-1 flex-col md:mt-8 md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={`${phrase.name}-quote`}
                className="order-1 rounded-[1.4rem] bg-white p-4 shadow-[0_8px_0_rgba(255,196,61,0.35)] md:order-2 md:rounded-[2rem] md:p-8"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-base font-extrabold leading-snug text-ink md:text-2xl">
                  «{phrase.text}»
                </p>
                <footer className="mt-3 text-sm font-bold text-muted">— {phrase.name}</footer>
              </motion.blockquote>
            </AnimatePresence>

            <div
              className="relative order-2 mx-auto mt-3 w-full max-w-[200px] md:order-1 md:mt-0 md:max-w-none"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={phrase.animal}
                  className="relative"
                  initial={reduceMotion ? false : { opacity: 0, x: -20, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: 20, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={phrase.src}
                    alt=""
                    className="mx-auto h-auto max-h-[28svh] w-auto md:max-h-none md:w-full md:max-w-[340px]"
                  />
                  <div
                    className={`absolute hidden items-center justify-center px-3 text-center md:flex ${cardSlots[phrase.animal]}`}
                  >
                    <p className="font-display text-xs font-extrabold leading-snug text-ink">
                      {phrase.text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="order-3 mt-3 flex items-center justify-center gap-3 md:col-start-2 md:mt-5 md:justify-start">
              {friends.phrases.map((item, index) => (
                <button
                  key={item.animal}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={item.name}
                  className={`h-3 rounded-full transition-all ${
                    index === active ? "w-8 bg-coral" : "w-3 bg-line hover:bg-peach"
                  }`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <img
          src="/svg/pattern-waves.svg"
          alt=""
          className="relative mt-auto hidden w-full shrink-0 md:block"
        />
      </div>
    </section>
  );
}
