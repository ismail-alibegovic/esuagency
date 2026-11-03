"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/content";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "./icons";

export default function OfferTabs({ t, contactId }: { t: Dictionary["offer"]; contactId: string }) {
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const track = useRef<HTMLDivElement>(null);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [active, update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const tab = t.tabs[active];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label={t.eyebrow} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {t.tabs.map((tb, i) => (
            <button
              key={tb.id}
              role="tab"
              id={`tab-${tb.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${tb.id}`}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                i === active ? "bg-white text-black" : "bg-white/[0.06] text-white/70 ring-1 ring-white/10 hover:text-white"
              }`}
            >
              {tb.label}
            </button>
          ))}
        </div>
        <div className={`hidden gap-2 ${canPrev || canNext ? "sm:flex" : ""}`}>
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label={t.prev}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10 transition hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label={t.next}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10 transition hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={track}
        id={`panel-${tab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab.id}`}
        className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
      >
        {tab.items.map((it, i) => (
          <article
            key={`${tab.id}-${it.title}`}
            data-card
            className="group relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl bg-panel sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]"
            style={{ animation: `fade-up 800ms ${i * 70}ms cubic-bezier(.22,1,.36,1) both` }}
          >
            <Image
              src={it.image}
              alt={it.alt}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 80vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
              {it.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-black/45 px-2.5 py-1 text-[11px] text-white/90 ring-1 ring-white/15 backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <h3 className="font-display text-xl font-medium leading-tight">{it.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">{it.text}</p>
              <a
                href={`#${contactId}`}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[12px] font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                {t.cardCta} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-5 text-[12.5px] text-white/45">{t.note}</p>
    </div>
  );
}
