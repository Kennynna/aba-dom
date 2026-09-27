"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

type SplitTextProps = {
  text: string;
  className?: string;
  id?: string;
  as?: keyof typeof tags;
  /** Запускать при появлении в вьюпорте, а не сразу */
  onView?: boolean;
  delay?: number;
};

/** Разбивка по словам: Lena не должна переноситься внутри слова. */
export function SplitText({
  text,
  className,
  id,
  as = "p",
  onView = false,
  delay = 0,
}: SplitTextProps) {
  const reduceMotion = useSafeReducedMotion();
  const words = text.split(" ");
  const MotionTag = tags[as];

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain id={id} className={className}>
        {text}
      </Plain>
    );
  }

  return (
    <MotionTag
      id={id}
      className={className}
      aria-label={text}
      initial="hidden"
      {...(onView
        ? { whileInView: "show" as const, viewport: { once: true, amount: 0.6 } }
        : { animate: "show" as const })}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.075, delayChildren: delay } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block whitespace-pre"
          aria-hidden
          variants={{
            hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
