import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/Social";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
export function Contact() {
  const { contact, contacts } = site;
  const [leadBeforeSocial, leadAfterSocial] = contact.lead.split("WhatsApp");
  return (
    <section id={contact.id} className="relative overflow-hidden border-t border-line bg-cream-soft py-16 md:py-24 lg:py-32" aria-labelledby="contact-title">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div aria-hidden className="contact-illustration pointer-events-none absolute right-8 top-0 hidden h-40 w-52 bg-blue-deep lg:block" />
        <SectionHead id="contact-title" eyebrow={contact.eyebrow} title={contact.title} lead={<>{leadBeforeSocial}<span role="img" aria-label="WhatsApp" title="WhatsApp" className="inline-flex align-middle"><WhatsAppIcon className="inline-block h-6 w-6" /></span>{leadAfterSocial}</>} />
        <Reveal className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a href={contacts.phoneHref} className="py-2 text-[clamp(1.4rem,5vw,2.25rem)] font-medium">{contacts.phone}</a>
          <div className="flex items-center gap-3">
            <a href={contacts.whatsapp} aria-label="Написать в WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-red text-cream"><WhatsAppIcon /></a>
            <a href={contacts.instagram} aria-label="Открыть Instagram" title="Instagram" target="_blank" rel="noopener noreferrer" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blue-deep text-cream"><InstagramIcon /></a>
          </div>
        </Reveal>
        <Stagger as="ul" className="mt-10 grid gap-5 md:grid-cols-2">
          {contacts.addresses.map((address,index) => (
            <StaggerItem as="li" key={address} className="rounded-[2rem] border border-blue/40 bg-blue/10 p-6">
              <span className="text-base font-medium">Адрес {index + 1}</span><p className="mt-3 text-lg">{address}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal><a href={contacts.reviews} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center text-base underline decoration-red underline-offset-4">Отзывы о центре на 2ГИС</a></Reveal>
      </div>
    </section>
  );
}
