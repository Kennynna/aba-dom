type SeamProps = {
  /** Цвет сверху: обычно transparent или цвет предыдущей секции */
  from?: string;
  /** Цвет снизу: цвет следующей секции */
  to: string;
  className?: string;
};

/** Мягкий стык двух секций. Между цветными блоками всегда cream-пауза. */
export function Seam({ from = "transparent", to, className = "" }: SeamProps) {
  return (
    <div
      aria-hidden
      className={`h-24 w-full md:h-40 ${className}`}
      style={{ backgroundImage: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  );
}
