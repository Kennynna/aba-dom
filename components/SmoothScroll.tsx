"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";

let scroller: Lenis | null = null;

export function scrollPageTo(top: number, instant = false) {
  if (scroller) {
    scroller.scrollTo(top, { immediate: instant });
    return;
  }
  window.scrollTo({ top, behavior: instant ? "auto" : "smooth" });
}

export function SmoothScroll() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    scroller = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };
    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      if (scroller === lenis) {
        scroller = null;
      }
      lenis.destroy();
    };
  }, [reduceMotion]);

  return null;
}
