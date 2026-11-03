"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/i18n/content";
import { ArrowUpRight, Close, Menu } from "./icons";

export default function Nav({ t, locale, contactId }: { t: Dictionary["nav"]; locale: Locale; contactId: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = locale === "bs" ? "/" : "/en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-6">
      <nav
        aria-label={t.aria}
        className={`mx-auto flex h-14 max-w-[1000px] items-center justify-between rounded-full border pl-5 pr-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 sm:h-[60px] sm:pl-6 ${
          scrolled || open
            ? "border-white/10 bg-black/65 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
            : "border-white/15 bg-white/[0.08]"
        }`}
      >
        <Link href={home} className="flex shrink-0 items-center" aria-label="ESU Agency">
          <Image src="/brand/logo-white.png" alt="ESU Agency" width={394} height={59} priority className="h-[22px] w-auto sm:h-6" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {t.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangSwitch locale={locale} label={t.langLabel} />
          <a
            href={`#${contactId}`}
            className="group hidden items-center gap-1.5 rounded-full bg-black px-4 py-2.5 text-[13px] font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-white hover:text-black sm:inline-flex"
          >
            {t.cta}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.close : t.menu}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-black lg:hidden"
          >
            {open ? <Close className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-4 top-[84px] origin-top rounded-3xl border border-white/10 bg-black/90 p-3 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${
          open ? "visible scale-100 opacity-100" : "invisible scale-[0.98] opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {t.links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl text-white transition-colors hover:bg-white/5"
              >
                {l.label}
                <span className="text-xs text-white/40">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`#${contactId}`}
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-medium text-black"
        >
          {t.cta} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const items: { code: Locale; href: string }[] = [
    { code: "bs", href: "/" },
    { code: "en", href: "/en" },
  ];
  return (
    <div role="group" aria-label={label} className="flex items-center rounded-full bg-white/10 p-1 ring-1 ring-white/10">
      {items.map((it) => {
        const active = it.code === locale;
        return (
          <a
            key={it.code}
            href={it.href}
            hrefLang={it.code}
            lang={it.code}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1.5 text-[11.5px] font-semibold uppercase tracking-wide transition-colors ${
              active ? "bg-white text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {it.code}
          </a>
        );
      })}
    </div>
  );
}
