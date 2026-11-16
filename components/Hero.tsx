import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ConsultButton } from "@/components/ConsultButton";
import { HousePattern } from "@/components/motion/HousePattern";
export function Hero() {
  const [brandName, description] = site.hero.title.split(" — ");

  return (
    <section id="top" className="relative isolate overflow-hidden bg-cream pb-16 pt-36 md:pb-24 md:pt-44 lg:pb-32" aria-labelledby="hero-title">
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden focusable="false">
        <defs>
          <clipPath id="hero-diagonal-desktop" clipPathUnits="objectBoundingBox">
            <path d="M.77 0H1V1H.43Q.39 1 .41 .96L.48 .86Q.50 .83 .48 .80L.46 .78Q.44 .75 .47 .72L.54 .62Q.56 .59 .54 .56L.52 .54Q.50 .51 .53 .48L.60 .38Q.62 .35 .60 .32L.58 .30Q.56 .27 .59 .24L.66 .14Q.68 .11 .66 .08L.65 .07Q.63 .04 .67 .02L.72 0Z" />
          </clipPath>
          <clipPath id="hero-diagonal-mobile" clipPathUnits="objectBoundingBox">
            <path d="M0 .28L.12 .23Q.15 .22 .17 .24Q.19 .26 .22 .24L.35 .18Q.38 .17 .40 .19Q.42 .21 .45 .19L.58 .13Q.61 .12 .63 .14Q.65 .16 .68 .14L.81 .08Q.84 .07 .86 .09Q.88 .11 .91 .09L1 .04V1H0Z" />
          </clipPath>
        </defs>
      </svg>
      <HousePattern color="rgb(221 74 64 / 0.08)" density="plate" />
      <div aria-hidden className="hero-diagonal hero-diagonal-edge" />
      <div aria-hidden className="hero-diagonal hero-diagonal-panel">
        <HousePattern color="rgb(255 240 209 / 0.22)" density="plate" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-base"><span aria-hidden className="h-2 w-2 rounded-full bg-red" />{site.tagline}</p>
          <h1 id="hero-title" className="font-display leading-[1.1] text-ink">
            <span className="hero-brand">
              {brandName}
              <svg aria-hidden focusable="false" viewBox="0 0 420 28" className="hero-brand-stroke" fill="none">
                <path d="M5 18C108 5 259 4 412 12M283 20C328 17 369 18 399 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="sr-only"> — </span>
            <span className="mt-5 block text-[clamp(2rem,3.7vw,3.25rem)]">{description}</span>
          </h1>
          <p className="mb-8 mt-7 max-w-[60ch] text-base leading-relaxed md:text-lg">{site.hero.lead}</p>
          <ConsultButton note />
        </Reveal>
        <Reveal delay={0.15} className="hero-art mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none">
          <div aria-hidden className="hero-silhouette w-full" />
        </Reveal>
      </div>
    </section>
  );
}
