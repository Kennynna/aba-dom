import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
export function Footer() {
  return (
    <footer className="border-t border-blue/30 bg-blue/10 pb-28 pt-12 text-ink md:pb-12">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:justify-between md:px-8">
        <a href="#top" className="flex items-center gap-3 self-start" aria-label="авадом — на главную"><span aria-hidden className="brand-house h-12 w-12 bg-red" /><span className="font-display text-3xl text-red">{site.brand}</span></a>
        <nav aria-label="Навигация в подвале" className="flex flex-col">
          {site.nav.map(item => <a key={item.href} href={item.href} className="inline-flex min-h-12 items-center">{item.label}</a>)}
          <a href="#contact" className="inline-flex min-h-12 items-center">Контакты</a>
        </nav>
        <div className="max-w-sm space-y-3"><a href={site.contacts.phoneHref} className="inline-flex min-h-12 items-center text-xl font-medium">{site.contacts.phone}</a>{site.contacts.addresses.map(address=><p key={address} className="text-base">{address}</p>)}</div>
      </Reveal>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-base md:px-8">{site.footer.copyright}</p>
    </footer>
  );
}
