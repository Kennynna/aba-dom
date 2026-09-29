"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";
import type { CSSProperties, ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Пауза между соседними элементами */
  step?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl";
};

type ItemProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li" | "article";
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Stagger({
  children,
  className,
  step = 0.09,
  delay = 0,
  as = "div",
}: StaggerProps) {
  const reduceMotion = useSafeReducedMotion();

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, style, as = "div" }: ItemProps) {
  const reduceMotion = useSafeReducedMotion();

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} style={style}>
        {children}
      </Plain>
    );
  }

  const Tag = motion[as];

  return (
    <Tag className={className} style={style} variants={itemVariants}>
      {children}
    </Tag>
  );
}
