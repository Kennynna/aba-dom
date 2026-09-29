"use client";

import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const pointIcons = [RouteIcon, ProgramIcon, FamilyIcon];

function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-cream" fill="none" aria-hidden>
      <circle cx="6" cy="6.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="17.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 8c2.2.6 3.4 1.2 4.6 3.1 1.2 1.9 2.2 3.4 4.4 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProgramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-cream" fill="none" aria-hidden>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 9h7M8.5 13h7M8.5 16.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-cream" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.8 18.5c.4-2.6 2.2-4 4.2-4s3.8 1.4 4.2 4M13.2 18.5c.3-2.1 1.7-3.4 3.3-3.4 1.7 0 3 .1 3.7 3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Value() {
  const { value } = site;

  return (
    <section
      id={value.id}
      className="relative overflow-hidden bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="value-title"
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            id="value-title"
            eyebrow={value.eyebrow}
            title={value.title}
            lead={value.lead}
          />
          <div className="lg:justify-self-end">
            <svg className="absolute h-0 w-0" aria-hidden focusable="false">
              <defs>
                <clipPath id="slogan-wrap" clipPathUnits="objectBoundingBox">
                  <path d="M0.14,0.22 C0.04,0.1 0.28,0.02 0.5,0.06 C0.74,0.01 0.97,0.14 0.95,0.36 C1,0.58 0.88,0.84 0.64,0.94 C0.38,1.02 0.08,0.88 0.05,0.62 C0.02,0.4 0.06,0.3 0.14,0.22 Z" />
                </clipPath>
              </defs>
            </svg>
            <div className="slogan-wrap px-10 py-14 text-center sm:px-14 sm:py-16">
              <p className="font-display text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[1.05] text-cream">
                Ты не одна,
                <br />
                мы рядом
              </p>
            </div>
          </div>
        </div>

        <Stagger as="ul" className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3" step={0.1}>
          {value.points.map((point, index) => {
            const Icon = pointIcons[index];

            return (
            <StaggerItem
              as="li"
              key={point.title}
              className="lift relative overflow-hidden rounded-[2rem] bg-cream-deep/70 p-6 md:p-7"
            >
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange">
                  <Icon />
                </span>
                <h3 className="mt-5 font-sans text-xl font-medium text-ink md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-muted">{point.text}</p>
              </div>
            </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
