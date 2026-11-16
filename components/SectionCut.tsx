/** Небольшой фирменный акцент между существующими блоками. */
export function SectionCut({ index }: { index: number }) {
  return <div aria-hidden className="mx-auto flex max-w-6xl items-center gap-4 px-5 md:px-8"><span className="h-px flex-1 bg-line" /><span className={`h-2 w-2 rounded-full ${index === 3 ? "bg-blue" : "bg-red"}`} /><span className="h-px flex-1 bg-line" /></div>;
}
