import { HousePattern } from "@/components/motion/HousePattern";

const cuts = [
  {
    id: "section-cut-1",
    color: "#2F9BFF",
    d: "M0,0.28 C0.18,0.02 0.4,0.16 0.58,0.04 C0.78,0.22 0.9,0 1,0.12 L1,0.78 C0.82,0.98 0.6,0.62 0.4,0.92 C0.18,1.08 0,0.72 0,0.72 Z",
  },
  {
    id: "section-cut-2",
    color: "#3CCB4E",
    d: "M0,0.18 C0.22,0.42 0.38,0 0.58,0.2 C0.78,0.4 0.9,0.06 1,0.24 L1,0.86 C0.76,0.62 0.54,1.02 0.32,0.7 C0.14,0.46 0,0.92 0,0.92 Z",
  },
  {
    id: "section-cut-3",
    color: "#8B5CFF",
    d: "M0,0.36 C0.16,0.08 0.34,0.28 0.5,0.06 C0.7,0.32 0.84,0.02 1,0.2 L1,0.84 C0.78,1.02 0.56,0.58 0.36,0.94 C0.16,1.08 0,0.68 0,0.68 Z",
  },
  {
    id: "section-cut-4",
    color: "#FF4D4D",
    d: "M0,0.16 C0.2,0.38 0.36,0.02 0.56,0.22 C0.76,0.44 0.88,0.08 1,0.28 L1,0.9 C0.74,0.66 0.52,1.04 0.3,0.72 C0.12,0.48 0,0.96 0,0.96 Z",
  },
  {
    id: "section-cut-5",
    color: "#FF8A1E",
    d: "M0,0.32 C0.18,0.06 0.4,0.24 0.58,0.02 C0.78,0.26 0.9,0.04 1,0.18 L1,0.82 C0.8,1.02 0.58,0.6 0.38,0.96 C0.16,1.1 0,0.7 0,0.7 Z",
  },
] as const;

export function SectionCut({ index }: { index: number }) {
  const cut = cuts[index];

  return (
    <div aria-hidden className="pointer-events-none relative z-20 -my-12 h-24 md:-my-20 md:h-40">
      <svg className="absolute h-0 w-0" aria-hidden focusable="false">
        <defs>
          <clipPath id={cut.id} clipPathUnits="objectBoundingBox">
            <path d={cut.d} />
          </clipPath>
        </defs>
      </svg>
      <div
        className="relative h-full w-full"
        style={{ background: cut.color, clipPath: `url(#${cut.id})` }}
      >
        <HousePattern variant="fill" color="rgb(255 241 209 / 0.34)" density="card" />
      </div>
    </div>
  );
}
