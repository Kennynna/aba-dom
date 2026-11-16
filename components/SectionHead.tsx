"use client";

import { Reveal } from "@/components/motion/Reveal";
import type { ReactNode } from "react";

type SectionHeadProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  tone?: "ink" | "cream";
  className?: string;
};

export function SectionHead({
  id,
  eyebrow,
  title,
  lead,
  tone = "ink",
  className = "",
}: SectionHeadProps) {
  const isCream = tone === "cream";

  return (
    <Reveal className={className}>
      <p
        className={`inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium uppercase tracking-[0.12em] ${
          isCream ? "bg-cream/20 text-ink" : "bg-blue/15 text-ink"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        id={id}
        className={`mt-5 max-w-3xl font-display text-[clamp(1.6rem,4.4vw,2.75rem)] font-medium leading-[1.2] ${
          isCream ? "text-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={`mt-5 max-w-[60ch] whitespace-pre-line text-base leading-relaxed md:text-lg ${
            isCream ? "text-ink" : "text-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
