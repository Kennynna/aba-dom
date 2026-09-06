"use client";

import { motion, useReducedMotion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
  id?: string;
};

export function SplitText({ text, className, id }: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const letters = Array.from(text);

  if (reduceMotion) {
    return (
      <p id={id} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p id={id} className={className} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="inline-block"
          aria-hidden
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.45,
            delay: 0.04 * index,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </p>
  );
}
