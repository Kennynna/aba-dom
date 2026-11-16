"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PlusMinusIcon } from "@/components/icons/Controls";

export function Faq() {
  const { faq, contacts } = site;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={faq.id}
      className="relative bg-cream py-16 md:py-24 lg:py-32"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />

        <Stagger as="ul" className="mt-12 flex max-w-4xl flex-col md:mt-14" step={0.06}>
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <StaggerItem as="li" key={item.q} className="border-b border-blue/25 py-2">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 rounded-2xl bg-blue-deep px-4 py-5 text-left text-cream transition-colors duration-300 hover:text-cream"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-base font-medium leading-snug md:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-red text-cream" : "bg-cream text-blue-deep"
                      }`}
                      aria-hidden
                    >
                      <PlusMinusIcon expanded={isOpen} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="max-w-[68ch] pb-6 pr-10 text-base leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {faq.reviews.map(review => (
            <StaggerItem as="figure" key={review.author} className="flex flex-col rounded-[2rem] border border-blue/30 bg-blue/10 p-6">
              <blockquote className="flex-1 text-base leading-relaxed"><p>{review.text}</p></blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 text-base"><span className="block font-medium">{review.author}</span><a href={contacts.reviews} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block py-2 underline decoration-red underline-offset-4">Отзыв из 2ГИС</a></figcaption>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
