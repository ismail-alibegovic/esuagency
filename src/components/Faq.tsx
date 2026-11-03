"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/content";
import { Plus } from "./icons";

export default function Faq({ items }: { items: Dictionary["faq"]["items"] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.q} className={`rounded-2xl ring-1 transition-colors ${isOpen ? "bg-white/[0.06] ring-white/15" : "bg-white/[0.03] ring-white/[0.07]"}`}>
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left text-[15px] font-medium sm:px-6 sm:py-5"
              >
                {it.q}
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ring-1 ring-white/20 transition-transform duration-500 ${isOpen ? "rotate-45 bg-white text-black" : ""}`}>
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[14px] leading-relaxed text-white/65 sm:px-6">{it.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
