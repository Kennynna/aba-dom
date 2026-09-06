type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-9 w-9" }: LogoMarkProps) {
  return (
    <span
      className={`relative inline-grid place-items-center rounded-[1.1rem] bg-coral shadow-[0_6px_0_#ee5253] ${className}`}
      aria-hidden
    >
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-sun" />
      <span className="absolute -bottom-0.5 -left-1 h-2.5 w-2.5 rounded-full bg-sky" />
      <span className="font-display text-lg font-extrabold leading-none text-white">A</span>
    </span>
  );
}
