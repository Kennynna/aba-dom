"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
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
    window.lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };
    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      if (window.lenis === lenis) {
        delete window.lenis;
      }
      lenis.destroy();
    };
  }, [reduceMotion]);

  return null;
}
