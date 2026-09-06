"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const accentStyles = {
  coral: {
    badge: "bg-coral text-white",
    card: "border-coral/30 shadow-[0_10px_0_rgba(255,107,107,0.28)]",
    tile: "bg-coral",
  },
  sun: {
    badge: "bg-sun text-ink",
    card: "border-sun/50 shadow-[0_10px_0_rgba(255,196,61,0.4)]",
    tile: "bg-sun",
  },
  sky: {
    badge: "bg-sky text-white",
    card: "border-sky/40 shadow-[0_10px_0_rgba(91,184,255,0.35)]",
    tile: "bg-sky",
  },
  berry: {
    badge: "bg-berry text-white",
    card: "border-berry/40 shadow-[0_10px_0_rgba(139,124,255,0.32)]",
    tile: "bg-berry",
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function Team() {
  const { team } = site;
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [pathD, setPathD] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(reduceMotion ? 1 : 0);

  const lastIndex = Math.max(team.people.length - 1, 1);
  const isReached = (index: number) => reduceMotion || progress >= index / lastIndex - 0.01;

  const measurePath = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const trackBox = track.getBoundingClientRect();
    const points = cardRefs.current
      .map((card) => {
        if (!card) {
          return null;
        }
        const box = card.getBoundingClientRect();
        return {
          x: box.left - trackBox.left + box.width / 2,
          y: box.top - trackBox.top + box.height / 2,
        };
      })
      .filter((point): point is { x: number; y: number } => point !== null);

    if (points.length < 2) {
      return;
    }

    let next = `M ${points[0].x} ${points[0].y}`;
    for (let index = 1; index < points.length; index += 1) {
      const previous = points[index - 1];
      const current = points[index];
      const midY = (previous.y + current.y) / 2;
      next += ` C ${previous.x} ${midY}, ${current.x} ${midY}, ${current.x} ${current.y}`;
    }
    setPathD(next);
  }, []);

  const updateProgress = useCallback(() => {
    if (reduceMotion) {
      setProgress(1);
      return;
    }

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (cards.length < 2) {
      return;
    }

    const first = cards[0].getBoundingClientRect();
    const last = cards[cards.length - 1].getBoundingClientRect();
    const start = first.top + first.height / 2;
    const end = last.top + last.height / 2;
    const cursor = window.innerHeight * 0.42;
    setProgress(clamp((cursor - start) / (end - start), 0, 1));
  }, [reduceMotion]);

  useEffect(() => {
    measurePath();
    updateProgress();

    const onResize = () => {
      measurePath();
      updateProgress();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", updateProgress, { passive: true });

    const observer = new ResizeObserver(() => {
      measurePath();
      updateProgress();
    });
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, [measurePath, updateProgress]);

  useEffect(() => {
    const node = pathRef.current;
    if (!node || !pathD) {
      return;
    }
    const length = node.getTotalLength();
    if (Number.isFinite(length)) {
      setPathLength(length);
    }
  }, [pathD]);

  return (
    <section
      id={team.id}
      className="relative overflow-hidden border-t border-line/80 bg-bg"
      aria-labelledby="team-title"
    >
      <div className="chess-board pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="inline-flex rounded-full bg-sun/30 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.08em] text-ink">
            {team.eyebrow}
          </p>
          <h2
            id="team-title"
            className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl"
          >
            {team.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{team.lead}</p>
        </Reveal>

        <div ref={trackRef} className="relative mt-16 md:mt-20">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            aria-hidden
          >
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="url(#team-line)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={pathLength || 1}
              strokeDashoffset={(pathLength || 1) * (1 - progress)}
              style={{ transition: reduceMotion ? undefined : "stroke-dashoffset 80ms linear" }}
            />
            <defs>
              <linearGradient id="team-line" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="40%" stopColor="#ffc43d" />
                <stop offset="70%" stopColor="#5bb8ff" />
                <stop offset="100%" stopColor="#8b7cff" />
              </linearGradient>
            </defs>
          </svg>

          <ul className="relative z-10 flex flex-col gap-16 md:gap-24">
            {team.people.map((person, index) => {
              const isEven = index % 2 === 1;
              const accent = accentStyles[person.accent];
              const reached = isReached(index);

              return (
                <li
                  key={person.name}
                  className={`flex ${isEven ? "md:justify-end" : "md:justify-start"}`}
                >
                  <article
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    className={`relative w-full max-w-md rounded-[1.8rem] border-2 bg-white p-6 transition-[opacity,transform] duration-500 md:p-7 ${accent.card} ${
                      reached ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <span
                      className={`absolute -top-3 ${isEven ? "-left-3" : "-right-3"} grid h-10 w-10 place-items-center rounded-lg ${accent.tile} chess-tile transition-all duration-300 ${
                        reached ? "scale-100 opacity-100" : "scale-50 opacity-0"
                      }`}
                      aria-hidden
                    />
                    <p className={`inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${accent.badge}`}>
                      {person.focus}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">{person.name}</h3>
                    <p className="mt-1 text-sm font-bold text-muted">{person.role}</p>
                    <p className="mt-3 text-base leading-relaxed text-muted">{person.text}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
