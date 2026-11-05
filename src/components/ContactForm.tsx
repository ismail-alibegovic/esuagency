"use client";

import { useState, type FormEvent } from "react";
import { company, type Dictionary, type Locale } from "@/i18n/content";
import { ArrowUpRight, ChevronDown } from "./icons";

type Status = "idle" | "sending" | "success" | "fallback" | "error" | "invalid";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";

const field =
  "w-full rounded-xl bg-white/[0.04] px-4 py-3.5 text-[14px] text-white placeholder:text-white/30 ring-1 ring-white/10 outline-none transition focus:bg-white/[0.07] focus:ring-white/40";

export default function ContactForm({ t, locale }: { t: Dictionary["contact"]["form"]; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      interest: String(fd.get("interest") || ""),
      message: String(fd.get("message") || "").trim(),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") || ""),
      locale,
    };
    if (!data.name || !data.email || !data.message || !data.consent) {
      setStatus("invalid");
      setMsg(t.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus("invalid");
      setMsg(t.invalidEmail);
      return;
    }

    setStatus("sending");
    setMsg("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string };
      if (res.ok && json.ok) {
        setStatus("success");
        setMsg(t.success);
        form.reset();
        return;
      }
      if (json.code === "not_configured") {
        const body = [
          `${t.name}: ${data.name}`,
          `${t.email}: ${data.email}`,
          data.phone ? `${t.phone}: ${data.phone}` : "",
          data.interest ? `${t.interest}: ${data.interest}` : "",
          "",
          data.message,
        ]
          .filter((l, i) => l !== "" || i === 4)
          .join("\n");
        const href = `mailto:${company.email}?subject=${encodeURIComponent(`${t.subject} — ${data.name}`)}&body=${encodeURIComponent(body)}`;
        setMailto(href);
        setStatus("fallback");
        setMsg(t.fallback);
        window.location.href = href;
        return;
      }
      setStatus("error");
      setMsg(t.error);
    } catch {
      setStatus("error");
      setMsg(t.error);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field label={t.name} required>
        <input name="name" autoComplete="name" required placeholder={t.namePh} className={field} />
      </Field>
      <Field label={t.phone}>
        <input name="phone" type="tel" autoComplete="tel" placeholder={t.phonePh} className={field} />
      </Field>
      <Field label={t.email} required>
        <input name="email" type="email" autoComplete="email" required placeholder={t.emailPh} className={field} />
      </Field>
      <Field label={t.interest}>
        <div className="relative">
          <select name="interest" defaultValue={t.interestOptions[0]} className={`${field} appearance-none pr-10`}>
            {t.interestOptions.map((o) => (
              <option key={o} value={o} className="bg-coal">
                {o}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
        </div>
      </Field>
      <div className="sm:col-span-2">
        <Field label={t.message} required>
          <textarea name="message" rows={5} required placeholder={t.messagePh} className={`${field} resize-y`} />
        </Field>
      </div>
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex items-start gap-3 text-[13px] leading-relaxed text-white/60 sm:col-span-2">
        <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-white" />
        {t.consent}
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[14px] font-medium text-black transition hover:bg-white/90 disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.submit}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <div aria-live="polite" className="min-h-6">
          {msg && (
            <p
              className={`mt-4 rounded-xl px-4 py-3 text-[13.5px] leading-relaxed ring-1 ${
                status === "success"
                  ? "bg-emerald-400/10 text-emerald-200 ring-emerald-300/20"
                  : status === "fallback"
                    ? "bg-white/[0.06] text-white/80 ring-white/15"
                    : "bg-red-400/10 text-red-200 ring-red-300/20"
              }`}
            >
              {msg}{" "}
              {status === "fallback" && mailto && (
                <a href={mailto} className="underline underline-offset-4">
                  {t.fallbackLink}
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12.5px] text-white/55">
        {label}
        {required && <span className="text-white/35"> *</span>}
      </span>
      {children}
    </label>
  );
}
