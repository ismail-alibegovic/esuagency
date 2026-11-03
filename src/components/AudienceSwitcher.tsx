"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/i18n/content";
import { Plus, Quote } from "./icons";

export default function AudienceSwitcher({ t }: { t: Dictionary["audience"] }) {
  const [active, setActive] = useState(0);
  const current = t.items[active];

  return (
    <div>
      {/* Mobile / tablet selector */}
      <div role="tablist" aria-label={t.eyebrow} className="mb-4 flex justify-center gap-2 lg:hidden">
        {t.items.map((it, i) => (
          <button
            key={it.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              i === active ? "bg-white text-black" : "bg-white/[0.06] text-white/70 ring-1 ring-white/10"
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        {/* Featured card */}
        <div className="relative grid overflow-hidden rounded-3xl bg-panel ring-1 ring-white/[0.06] sm:min-h-[460px] sm:grid-cols-[1.25fr_1fr]">
          <div className="relative z-10 flex flex-col justify-between p-6 sm:p-10">
            <div>
              <Quote className="text-white" />
              <blockquote className="font-display mt-6 text-[22px] font-medium leading-[1.22] sm:text-[27px]">{t.quote}</blockquote>
            </div>
            <div key={active} className="fade-up mt-8" aria-live="polite">
              <p className="text-sm font-medium">{current.title}</p>
              <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-white/60">{current.text}</p>
              <p className="mt-5 text-[12px] text-white/40">
                {t.quoteBy} · {t.quoteRole}
              </p>
            </div>
          </div>
          <div className="relative min-h-[240px] sm:min-h-0">
            <Image
              key={current.image}
              src={current.image}
              alt={current.alt}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:640px) 45vw, 100vw"
              className="fade-up object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-panel via-transparent to-transparent sm:bg-gradient-to-r sm:from-panel/90" />
          </div>
        </div>

        {/* Desktop: narrow selector cards */}
        {t.items.map((it, i) =>
          i === active ? null : (
            <button
              key={it.label}
              type="button"
              onClick={() => setActive(i)}
              className="group relative hidden min-h-[460px] overflow-hidden rounded-3xl bg-panel text-left ring-1 ring-white/[0.06] lg:block"
            >
              <Image
                src={it.image}
                alt=""
                fill
                sizes="20vw"
                className="object-cover grayscale transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                <span className="font-display text-xl font-medium">{it.label}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-90">
                  <Plus className="h-4 w-4" />
                </span>
              </span>
            </button>
          ),
        )}
      </div>
    </div>
  );
}
