"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { SectionHead } from "@/components/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Faq() {
  const { faq } = site;
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
              <StaggerItem as="li" key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-5 py-5 text-left transition-colors duration-300 hover:text-ink"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-base font-semibold leading-snug md:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`relative mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-orange" : "bg-orange/15"
                      }`}
                      aria-hidden
                    >
                      <span
                        className={`absolute h-[2px] w-3 rounded transition-colors duration-300 ${
                          isOpen ? "bg-cream" : "bg-orange"
                        }`}
                      />
                      <span
                        className={`absolute h-3 w-[2px] rounded transition-all duration-300 ${
                          isOpen ? "scale-y-0 bg-cream" : "scale-y-100 bg-orange"
                        }`}
                      />
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
      </div>
    </section>
  );
}
