import { site } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-peach">
      <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-coral/30 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-berry/35 blur-2xl" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-md">
          <p className="flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight text-white">
            <LogoMark className="h-9 w-9" />
            {site.brand}
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-peach">{site.tagline}</p>
          <p className="mt-5 text-sm leading-relaxed text-peach/80">{site.footer.disclaimer}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm font-bold">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-peach transition-colors hover:text-sun">
              {item.label}
            </a>
          ))}
          <a href={site.contacts.emailHref} className="text-peach transition-colors hover:text-sun">
            {site.contacts.email}
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl px-5 py-5 text-xs font-semibold text-peach/70 md:px-8">
          {site.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
