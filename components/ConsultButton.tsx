"use client";
import { useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { CloseIcon } from "@/components/icons/Controls";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/Social";
import { useSafeReducedMotion } from "@/components/motion/useSafeReducedMotion";

export function ConsultButton({ note = false }: { note?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [visible, setVisible] = useState(false);
  const reduceMotion = useSafeReducedMotion();

  const open = () => {
    dialog.current?.showModal();
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
    if (reduceMotion) dialog.current?.close();
  };
  return (
    <div>
      <button type="button" className="lift inline-flex min-h-14 w-full items-center justify-center rounded-full bg-red px-6 py-3 text-base font-medium text-cream sm:w-auto" onClick={open}>
        {site.hero.primaryCta.label}
      </button>
      {note && <p className="mt-4 w-fit max-w-full rounded-2xl bg-blue-deep px-4 py-3 text-base leading-snug text-cream">{site.hero.note}</p>}
      <motion.dialog
        ref={dialog}
        aria-labelledby={titleId}
        data-visible={visible}
        className="consult-dialog m-auto max-h-[calc(100svh-2rem)] w-[calc(100%-2.5rem)] max-w-md overflow-y-auto rounded-[2rem] border border-red bg-cream p-6 text-ink backdrop:bg-ink/45 sm:p-8"
        initial={false}
        animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.97 }}
        transition={{ duration: reduceMotion ? 0 : visible ? 0.32 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => { if (!visible && dialog.current?.open) dialog.current.close(); }}
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClose={() => setVisible(false)}
      >
        <div className="flex items-center justify-between gap-3">
          <h2 id={titleId} className="font-display text-3xl">Консультация</h2>
          <button type="button" aria-label="Закрыть" onClick={close} className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-blue-deep bg-blue-deep text-cream"><CloseIcon /></button>
        </div>
        <a href={site.contacts.phoneHref} className="mt-6 block py-2 text-xl font-medium sm:text-2xl">{site.contacts.phone}</a>
        <div className="mt-6 flex gap-3">
          <a href={site.contacts.whatsapp} aria-label="Написать в WhatsApp" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-red text-cream"><WhatsAppIcon /></a>
          <a href={site.contacts.instagram} aria-label="Открыть Instagram" title="Instagram" target="_blank" rel="noopener noreferrer" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blue-deep text-cream"><InstagramIcon /></a>
        </div>
      </motion.dialog>
    </div>
  );
}
