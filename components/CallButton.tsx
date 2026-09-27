"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSafeReducedMotion } from "./motion/useSafeReducedMotion";
import { site } from "@/content/site";

/** Липкая кнопка звонка. Только мобильные. */
export function CallButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useSafeReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-x-4 bottom-4 z-40 md:hidden"
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={site.contacts.phoneHref}
            className="flex min-h-13 items-center justify-center rounded-full bg-orange px-6 text-base font-semibold text-ink shadow-[0_14px_30px_-10px_rgba(31,26,23,0.5)]"
          >
            Позвонить · {site.contacts.phone}
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
