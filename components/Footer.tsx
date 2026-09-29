import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-blue-foot pb-24 pt-14 text-cream md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-sm">
          <Image
            src="/brand/wordmark-cream.png"
            alt={`${site.brand} — ${site.tagline}`}
            width={520}
            height={480}
            sizes="160px"
            className="h-auto w-28 object-contain md:w-32"
          />
        </div>

        <nav className="flex flex-col gap-3 text-base" aria-label="Навигация в подвале">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-cream/90 transition-colors duration-300 hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-cream/90 transition-colors duration-300 hover:text-cream"
          >
            Контакты
          </a>
        </nav>

        <div className="flex flex-col gap-2">
          <a
            href={site.contacts.phoneHref}
            className="font-display text-2xl text-cream"
          >
            {site.contacts.phone}
          </a>
          {site.contacts.addresses.map((address) => (
            <p key={address} className="text-base text-cream/90">
              {address}
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-cream/15 px-5 pt-6 md:px-8">
        <p className="text-sm text-cream/80">{site.footer.copyright}</p>
      </div>
    </footer>
  );
}
