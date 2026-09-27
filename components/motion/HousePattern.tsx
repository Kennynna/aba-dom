type HousePatternProps = {
  /** Цвет домиков */
  color?: string;
  variant?: "outline" | "fill";
  /** Плотность плитки: `card` — для небольших карточек, `plate` — для крупных плашек */
  density?: "card" | "plate";
  className?: string;
};

/** Декоративная плитка домиков для небольших блоков. Не на всю страницу. */
export function HousePattern({
  color = "rgb(248 134 64 / 0.18)",
  variant = "outline",
  density = "card",
  className = "",
}: HousePatternProps) {
  const src = variant === "fill" ? "pattern-house-fill.svg" : "pattern-house.svg";

  return (
    <div
      aria-hidden
      className={`houses pointer-events-none absolute inset-0 ${
        density === "plate" ? "houses-plate" : "houses-edge"
      } ${className}`}
      style={
        {
          backgroundColor: color,
          "--houses-src": `url(/brand/${src})`,
        } as React.CSSProperties
      }
    />
  );
}
