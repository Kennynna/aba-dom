"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  { className: "bg-coral", size: "h-[22rem] w-[22rem]", x: "-12%", y: "8%", duration: 14 },
  { className: "bg-sun", size: "h-[18rem] w-[18rem]", x: "68%", y: "-6%", duration: 16 },
  { className: "bg-sky", size: "h-[20rem] w-[20rem]", x: "58%", y: "52%", duration: 18 },
  { className: "bg-berry", size: "h-[16rem] w-[16rem]", x: "8%", y: "62%", duration: 15 },
  { className: "bg-mint", size: "h-[14rem] w-[14rem]", x: "38%", y: "28%", duration: 13 },
];

export function BlobField() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff6eb_0%,#ffe8d2_42%,#e8f4ff_100%)]" />
      <div className="play-dots absolute inset-0 opacity-50" />
      {blobs.map((blob, index) => (
        <motion.div
          key={blob.className + index}
          className={`absolute rounded-full blur-3xl ${blob.className} ${blob.size}`}
          style={{ left: blob.x, top: blob.y, opacity: 0.38 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 24, -16, 0],
                  y: [0, -20, 18, 0],
                  scale: [1, 1.08, 0.94, 1],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />
      ))}
    </div>
  );
}
