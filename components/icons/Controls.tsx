const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
  focusable: false as const,
  className: "block h-5 w-5 shrink-0",
};

export function CloseIcon() {
  return (
    <svg {...iconProps}>
      <path d="m6 6 12 12M6 18 18 6" />
    </svg>
  );
}

export function PlusMinusIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg {...iconProps}>
      <path d="M6 12h12" />
      <path
        d="M12 6v12"
        className="transition-transform duration-300"
        style={{ transformOrigin: "12px 12px", transform: expanded ? "scaleY(0)" : "scaleY(1)" }}
      />
    </svg>
  );
}

export function MenuIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg {...iconProps}>
      <path
        d="M5 6h14"
        className="transition-transform duration-300"
        style={{ transformOrigin: "12px 6px", transform: expanded ? "translateY(6px) rotate(45deg)" : "none" }}
      />
      <path d="M5 12h14" className={`transition-opacity duration-300 ${expanded ? "opacity-0" : "opacity-100"}`} />
      <path
        d="M5 18h14"
        className="transition-transform duration-300"
        style={{ transformOrigin: "12px 18px", transform: expanded ? "translateY(-6px) rotate(-45deg)" : "none" }}
      />
    </svg>
  );
}
