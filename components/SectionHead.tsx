"use client";

import { Reveal } from "@/components/motion/Reveal";

type SectionHeadProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
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
        className={`inline-flex rounded-full px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] ${
          isCream ? "bg-cream/20 text-cream" : "bg-orange/15 text-ink"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        id={id}
        className={`mt-5 max-w-3xl font-sans text-[clamp(1.6rem,4.4vw,2.75rem)] font-medium leading-[1.2] ${
          isCream ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={`mt-5 max-w-[60ch] text-base leading-relaxed md:text-lg ${
            isCream ? "text-cream" : "text-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
