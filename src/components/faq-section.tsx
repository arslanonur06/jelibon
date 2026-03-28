"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass-panel relative isolate overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={onToggle}
        className="relative z-[1] flex w-full items-center justify-between gap-4 bg-transparent px-5 py-4 text-left transition hover:bg-white/[0.06] sm:px-6 sm:py-5"
        aria-expanded={isOpen}
      >
        <span className="text-pretty text-sm font-medium text-white sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="relative z-[1] px-5 pb-5 text-sm leading-relaxed text-zinc-200 sm:px-6 sm:pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative scroll-mt-44 border-t border-white/10 bg-[#050510]/30 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[#E9A8FF]/90">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {dict.faq.heading}
          </h2>
          <p className="mt-3 text-zinc-400">{dict.faq.subheading}</p>
        </div>

        {/* Accordion */}
        <div className="mt-10 flex flex-col gap-2 sm:mt-12 sm:gap-3">
          {dict.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
