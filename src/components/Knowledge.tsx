"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/content";
import { ArrowUpRight, Clock, Close } from "./icons";

export default function Knowledge({ t }: { t: Dictionary["knowledge"] }) {
  const categories = useMemo(() => [t.all, ...Array.from(new Set(t.articles.map((a) => a.category)))], [t]);
  const [cat, setCat] = useState(t.all);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (openIdx !== null && !d.open) d.showModal();
    if (openIdx === null && d.open) d.close();
  }, [openIdx]);

  const list = t.articles.map((a, i) => ({ a, i })).filter(({ a }) => cat === t.all || a.category === cat);
  const art = openIdx !== null ? t.articles[openIdx] : null;

  return (
    <>
      <div role="tablist" aria-label={t.eyebrow} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === cat}
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              c === cat ? "bg-white text-black" : "bg-white/[0.06] text-white/70 ring-1 ring-white/10 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map(({ a, i }, k) => (
          <article
            key={a.title}
            className="group relative aspect-[4/3.4] overflow-hidden rounded-2xl bg-panel sm:aspect-[4/5]"
            style={{ animation: `fade-up 700ms ${k * 60}ms cubic-bezier(.22,1,.36,1) both` }}
          >
            <Image
              src={a.image}
              alt={a.alt}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />
            <div className="absolute left-3 top-3 flex gap-1.5">
              <span className="rounded-full bg-black/45 px-2.5 py-1 text-[11px] ring-1 ring-white/15 backdrop-blur-md">{a.category}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-[11px] ring-1 ring-white/15 backdrop-blur-md">
                <Clock className="h-3 w-3" /> {a.readTime}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-[19px] font-medium leading-snug">{a.title}</h3>
              <p className="mt-2 line-clamp-2 text-[13px] text-white/65">{a.excerpt}</p>
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[12px] font-medium text-black transition-transform hover:-translate-y-0.5"
                aria-haspopup="dialog"
              >
                {t.read} <ArrowUpRight className="h-3.5 w-3.5" />
                <span className="sr-only">: {a.title}</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpenIdx(null)}
        onClick={(e) => e.target === dialog.current && setOpenIdx(null)}
        aria-labelledby="article-title"
        className="m-auto max-h-[90vh] w-[min(720px,calc(100%-24px))] overflow-hidden rounded-3xl bg-coal p-0 text-white ring-1 ring-white/10 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {art && (
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-[16/8]">
              <Image src={art.image} alt={art.alt} fill sizes="720px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coal" />
              <button
                type="button"
                onClick={() => setOpenIdx(null)}
                aria-label={t.close}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/60 ring-1 ring-white/20 backdrop-blur"
              >
                <Close />
              </button>
            </div>
            <div className="px-6 pb-8 sm:px-10 sm:pb-10">
              <p className="text-[12px] uppercase tracking-[0.14em] text-white/45">
                {art.category} · {art.readTime}
              </p>
              <h3 id="article-title" className="mt-3 font-display text-[28px] font-medium leading-tight sm:text-[34px]">
                {art.title}
              </h3>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/75">
                {art.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8 border-t border-white/10 pt-5 text-[12.5px] leading-relaxed text-white/45">{t.disclaimer}</p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
