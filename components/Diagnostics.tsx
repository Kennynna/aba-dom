"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { diagnostics } from "@/content/diagnostics";
import { Reveal } from "@/components/motion/Reveal";
import { HousePattern } from "@/components/motion/HousePattern";

const signs = diagnostics.signs;

const tones = [
  { bg: "#2F9BFF", mark: "#1878D4" },
  { bg: "#3CCB4E", mark: "#1E9A32" },
  { bg: "#8B5CFF", mark: "#6A3FE0" },
  { bg: "#FF4D4D", mark: "#D62828" },
  { bg: "#FF4FA3", mark: "#E02880" },
  { bg: "#14C4C4", mark: "#0B9494" },
  { bg: "#FF8A1E", mark: "#E06A00" },
];

type Arrow = { x1: number; y1: number; x2: number; y2: number; color: string };

/** Центры карточек, в процентах поля. Подогнаны под разную высоту текстов. */
const slots = [
  { x: 50, y: 15 },
  { x: 80, y: 24 },
  { x: 84, y: 55 },
  { x: 66, y: 82 },
  { x: 40, y: 82 },
  { x: 14, y: 58 },
  { x: 20, y: 24 },
];

function orbitPoint(index: number, scale = 1) {
  const slot = slots[index];
  const x = 50 + (slot.x - 50) * scale;
  const y = 50 + (slot.y - 50) * scale;

  return { x, y };
}

export function Diagnostics() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [arrows, setArrows] = useState<Arrow[]>([]);

  useLayoutEffect(() => {
    const field = fieldRef.current;

    const measure = () => {
      const hub = hubRef.current;
      if (!field || !hub) return;

      const root = field.getBoundingClientRect();
      const hubBox = hub.getBoundingClientRect();
      const hx = hubBox.left + hubBox.width / 2 - root.left;
      const hy = hubBox.top + hubBox.height / 2 - root.top;
      const hubRadius = hubBox.width / 2;

      const next = signs.map((sign, index) => {
        const card = cardRefs.current[index];
        if (!card) return null;

        const box = card.getBoundingClientRect();
        const cx = box.left + box.width / 2 - root.left;
        const cy = box.top + box.height / 2 - root.top;
        const dx = cx - hx;
        const dy = cy - hy;
        const dist = Math.hypot(dx, dy) || 1;
        const tx = Math.abs(dx) < 1 ? Infinity : box.width / 2 / Math.abs(dx);
        const ty = Math.abs(dy) < 1 ? Infinity : box.height / 2 / Math.abs(dy);
        const edge = Math.min(tx, ty);

        return {
          x1: hx + (dx / dist) * (hubRadius + 8),
          y1: hy + (dy / dist) * (hubRadius + 8),
          x2: cx - dx * edge,
          y2: cy - dy * edge,
          color: tones[index].mark,
        };
      });

      setArrows(next.filter((arrow): arrow is Arrow => arrow !== null));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (field) observer.observe(field);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={diagnostics.id}
      className="relative bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="diagnostics-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="inline-flex rounded-full bg-orange/15 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-ink">
            Нейропсихология
          </p>
        </Reveal>

        <div ref={fieldRef} className="relative mt-10 lg:mt-6 lg:h-[62rem]">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden>
            {arrows.map((arrow, index) => (
              <line
                key={signs[index].number}
                x1={arrow.x1}
                y1={arrow.y1}
                x2={arrow.x2}
                y2={arrow.y2}
                stroke={arrow.color}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}
          </svg>

          <div
            ref={hubRef}
            className="relative z-10 mx-auto flex aspect-square w-[min(100%,20rem)] items-center justify-center rounded-full bg-orange px-7 text-center shadow-[0_18px_40px_rgba(31,26,23,0.1)] lg:absolute lg:top-1/2 lg:left-1/2 lg:w-[20rem] lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <h2
              id="diagnostics-title"
              className="font-display text-[clamp(1.15rem,1.45vw,1.35rem)] leading-[1.2] text-balance text-white"
            >
              {diagnostics.title}
            </h2>
          </div>

          <ol className="mt-8 grid gap-5 lg:absolute lg:inset-0 lg:mt-0 lg:block">
            {signs.map((sign, index) => {
              const point = orbitPoint(index);
              const tone = tones[index];

              return (
                <li
                  key={sign.number}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  style={
                    {
                      "--x": `${point.x}%`,
                      "--y": `${point.y}%`,
                      backgroundColor: tone.bg,
                    } as CSSProperties
                  }
                  className="relative z-10 flex flex-col overflow-hidden rounded-[2rem] p-6 md:p-7 lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] lg:w-[13rem] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:p-4"
                >
                  <HousePattern color="rgb(255 241 209 / 0.16)" />
                  <div className="relative">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream font-display text-lg"
                      style={{ color: tone.mark }}
                    >
                      {sign.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl leading-tight text-white lg:mt-3 lg:text-lg">
                      {sign.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white lg:mt-2 lg:text-sm lg:leading-snug">
                      {sign.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <div className="grad-ember relative mt-12 overflow-hidden rounded-[2.5rem] px-6 py-10 md:mt-14 md:px-12 md:py-14">
            <HousePattern variant="fill" color="rgb(255 241 209 / 0.12)" density="plate" />
            <div className="relative">
              <h3 className="font-display text-[clamp(1.5rem,3.6vw,2.25rem)] leading-tight text-cream">
                {diagnostics.closing.title}
              </h3>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-white md:text-lg">
                {diagnostics.closing.text}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
