import { price } from "@/content/price";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
const blocks = [price.programs, price.tutoring, price.consultations];
export function Price() {
  return (
    <section id={price.id} className="bg-cream py-16 md:py-24 lg:py-32" aria-labelledby="price-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead id="price-title" eyebrow="Цены" title={price.title} lead={price.note} />
        <Stagger as="ul" className="mt-12 overflow-hidden rounded-[2rem] border border-line" step={0.06}>
          {price.therapies.map((item,index) => (
            <StaggerItem as="li" key={index} className="border-b border-blue/25 bg-cream-soft p-6 odd:bg-blue/10 last:border-0 md:p-8">
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-10">
                <div><h3 className="font-display text-2xl">{item.name}</h3><p className="mt-2 text-base">{item.duration}</p></div>
                <dl className="space-y-5">
                  {item.options.map((option,i) => (
                    <div key={i} className="flex flex-wrap items-baseline justify-between gap-3">
                      <dt className="text-base font-medium">{"label" in option ? option.label : "Без куратора"}</dt>
                      <dd className="ml-auto text-right"><span className="text-2xl font-medium whitespace-nowrap">{option.pack}</span><span className="mt-1 block text-base">разово {option.single}</span></dd>
                    </div>
                  ))}
                </dl>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Stagger as="ul" className="mt-5 grid gap-5 lg:grid-cols-3">
          {blocks.map(block => (
            <StaggerItem as="li" key={block.title} className="min-w-0 rounded-[2rem] border border-blue/30 bg-blue/10 p-6">
              <h3 className="font-display text-2xl">{block.title}</h3>
              <dl className="mt-6 space-y-4">
                {block.items.map(row => (
                  <div key={row.name} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4 last:border-0 last:pb-0">
                    <dt className="text-base leading-relaxed">{row.name}</dt>
                    <dd className="ml-auto whitespace-nowrap text-lg font-medium">{row.price}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal><p className="mt-8 text-base leading-relaxed">Итоговую сумму по вашему маршруту подскажет менеджер: <a href={site.contacts.phoneHref} className="underline decoration-red underline-offset-4">{site.contacts.phone}</a>.</p></Reveal>
      </div>
    </section>
  );
}
