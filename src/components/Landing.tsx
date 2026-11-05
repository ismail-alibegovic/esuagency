import Image from "next/image";
import LogoLink from "./LogoLink";
import type { ReactNode } from "react";
import { company, dictionaries, sectionIds, type Locale } from "@/i18n/content";
import AudienceSwitcher from "./AudienceSwitcher";
import ContactForm from "./ContactForm";
import Faq from "./Faq";
import Knowledge from "./Knowledge";
import Nav from "./Nav";
import OfferTabs from "./OfferTabs";
import Reveal from "./Reveal";
import {
  ArrowUp,
  ArrowUpRight,
  IconInvest,
  IconPartner,
  IconPin,
  IconSales,
  Mail,
  Phone,
  Pin,
  Play,
} from "./icons";

const container = "mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8";

function BtnPrimary({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-medium text-black transition hover:bg-white/90"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function BtnGhost({ href, children, icon = "arrow" }: { href: string; children: ReactNode; icon?: "arrow" | "play" }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-5 py-3 text-[13.5px] font-medium text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/[0.14]"
    >
      {children}
      {icon === "play" ? (
        <Play className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      ) : (
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const center = align === "center";
  return (
    <div data-reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="text-[13.5px] text-white/50">{eyebrow}</p>
      <h2 className="font-display mt-3 text-balance text-[34px] font-medium leading-[1.06] sm:text-[44px] lg:text-[48px]">
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-pretty text-[14.5px] leading-relaxed text-white/55 ${center ? "mx-auto max-w-lg" : "max-w-md"}`}>
          {text}
        </p>
      )}
      {children && <div className={`mt-7 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>{children}</div>}
    </div>
  );
}

export default function Landing({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const id = sectionIds[locale];
  const home = locale === "bs" ? "/" : "/en";
  const trustIcons = [IconInvest, IconSales, IconPartner, IconPin];

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-white px-4 py-2 text-black focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4"
      >
        {t.skip}
      </a>
      <Nav t={t.nav} locale={locale} contactId={id.contact} />
      <Reveal />

      <main id="main">
        {/* ───────────── HERO ───────────── */}
        <section className="relative isolate flex min-h-[640px] items-center overflow-hidden h-[100svh] max-h-[980px]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero.jpg"
              alt={t.hero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="hero-zoom object-cover object-[50%_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_55%,rgba(0,0,0,0.35),transparent_70%)]" />
          </div>
          <div className={`${container} pt-24 text-center`}>
            <h1
              className="fade-up font-display mx-auto max-w-[16ch] text-balance text-[38px] font-medium leading-[1.04] sm:text-[58px] lg:text-[68px]"
              style={{ animationDelay: "200ms" }}
            >
              {t.hero.title}
            </h1>
            <p
              className="fade-up mx-auto mt-5 max-w-[560px] text-pretty text-[15px] leading-relaxed text-white/80 sm:text-base"
              style={{ animationDelay: "380ms" }}
            >
              {t.hero.text}
            </p>
            <div className="fade-up mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: "540ms" }}>
              <BtnPrimary href={`#${id.contact}`}>{t.hero.primary}</BtnPrimary>
              <BtnGhost href={`#${id.process}`} icon="play">
                {t.hero.secondary}
              </BtnGhost>
            </div>
          </div>
        </section>

        {/* ───────────── TRUST STRIP ───────────── */}
        <section className="relative">
          <div className={`${container} grid items-end gap-10 pb-20 pt-6 sm:pb-28 lg:grid-cols-[1fr_auto]`}>
            <div data-reveal>
              <p className="text-[13.5px] text-white/50">{t.trust.label}</p>
              <p className="font-display mt-2 max-w-[26ch] text-[26px] font-medium leading-[1.12] sm:text-[32px]">
                {t.trust.title}
              </p>
            </div>
            <ul data-reveal className="grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10">
              {t.trust.items.map((label, i) => {
                const Icon = trustIcons[i];
                return (
                  <li key={label} className="flex items-center gap-2.5 text-white/85">
                    <Icon className="text-white" />
                    <span className="font-display text-[19px] font-semibold tracking-tight">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ───────────── EXPERTISE ───────────── */}
        <section id={id.services} className="pb-24 sm:pb-32">
          <div className={container}>
            <SectionHead eyebrow={t.expertise.eyebrow} title={t.expertise.title} text={t.expertise.text} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.expertise.cards.map((c, i) => (
                <article
                  key={c.title}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                  className={`group relative overflow-hidden rounded-2xl bg-panel ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="relative aspect-[4/5] sm:aspect-[4/4.6] lg:aspect-[4/5]">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[11px] ring-1 ring-white/15 backdrop-blur-md">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="font-display text-[26px] font-medium">{c.title}</h3>
                    <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-white/70">{c.text}</p>
                    <a
                      href={`#${id.contact}`}
                      className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[12px] font-medium text-black transition-transform hover:-translate-y-0.5"
                    >
                      {c.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── OFFER / SPACES ───────────── */}
        <section id={id.spaces} className="pb-24 sm:pb-32">
          <div className={container}>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHead eyebrow={t.offer.eyebrow} title={t.offer.title} text={t.offer.text} />
              <div data-reveal className="flex flex-wrap gap-3">
                <BtnPrimary href={`#${id.contact}`}>{t.offer.primary}</BtnPrimary>
                <BtnGhost href={company.phones[0].href}>{t.offer.secondary}</BtnGhost>
              </div>
            </div>
            <div data-reveal className="mt-10">
              <OfferTabs t={t.offer} contactId={id.contact} />
            </div>
          </div>
        </section>

        {/* ───────────── APPROACH ───────────── */}
        <section id={id.approach} className="relative overflow-hidden pb-24 pt-10 sm:pb-32">
          <div aria-hidden className="dot-field pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
          <div className={`${container} relative`}>
            <SectionHead eyebrow={t.approach.eyebrow} title={t.approach.title} text={t.approach.text} align="center">
              <BtnPrimary href={`#${id.contact}`}>{t.approach.primary}</BtnPrimary>
              <BtnGhost href={`#${id.process}`}>{t.approach.secondary}</BtnGhost>
            </SectionHead>
            <ol className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {t.approach.items.map((it, i) => (
                <li
                  key={it.title}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-panel sm:aspect-[4/5]"
                >
                  <Image
                    src={it.image}
                    alt={it.alt}
                    fill
                    sizes="(min-width:1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/90" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] ring-1 ring-white/15 backdrop-blur-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
                    <h3 className="font-display text-[18px] font-medium leading-tight sm:text-[22px]">{it.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-snug text-white/65 sm:text-[13px]">{it.text}</p>
                    <ul className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
                      {it.points.map((p) => (
                        <li key={p} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-black">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── SIX STEPS ───────────── */}
        <section id={id.process} className="pb-24 pt-8 sm:pb-32">
          <div className={container}>
            <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} text={t.steps.text} align="center">
              <BtnPrimary href={`#${id.contact}`}>{t.steps.primary}</BtnPrimary>
              <BtnGhost href={`mailto:${company.email}`}>{t.steps.secondary}</BtnGhost>
            </SectionHead>
          </div>
          <ol className="mt-14 grid gap-[3px] sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.items.map((s, i) => {
              const wide = i < 2;
              const span = wide ? "sm:col-span-2" : "";
              return (
                <li
                  key={s.title}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${(wide ? i : i - 2) * 90}ms` }}
                  className={`group relative overflow-hidden bg-panel ${span} ${
                    wide ? "aspect-[16/10] sm:aspect-[1096/560]" : "aspect-[4/3] sm:aspect-[512/560]"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes={wide ? "(min-width:640px) 50vw, 100vw" : "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/85" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
                    <div className="max-w-[60%] sm:max-w-[52%]">
                      <h3 className="font-display text-[17px] font-medium leading-tight sm:text-[20px]">{s.title}</h3>
                      <p className="mt-1.5 text-[12px] leading-snug text-white/70 sm:text-[13px]">{s.text}</p>
                    </div>
                    <span
                      aria-hidden
                      className="font-display select-none bg-gradient-to-b from-white/90 to-white/25 bg-clip-text text-[64px] font-medium leading-[0.8] tracking-[-0.06em] text-transparent sm:text-[88px] lg:text-[112px]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
          <p data-reveal className={`${container} mt-8 text-center text-[13px] text-white/45`}>
            {t.steps.note}
          </p>
        </section>

        {/* ───────────── AUDIENCE ───────────── */}
        <section className="pb-24 pt-8 sm:pb-32">
          <div className={container}>
            <SectionHead eyebrow={t.audience.eyebrow} title={t.audience.title} text={t.audience.text} align="center">
              <BtnPrimary href={`#${id.contact}`}>{t.audience.cta}</BtnPrimary>
            </SectionHead>
            <div data-reveal className="mt-14">
              <AudienceSwitcher t={t.audience} />
            </div>
          </div>
        </section>

        {/* ───────────── KNOWLEDGE ───────────── */}
        <section id={id.insights} className="pb-24 sm:pb-32">
          <div className={container}>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHead eyebrow={t.knowledge.eyebrow} title={t.knowledge.title} text={t.knowledge.text} />
              <div data-reveal>
                <BtnGhost href={`#${id.faq}`}>{t.faq.eyebrow}</BtnGhost>
              </div>
            </div>
            <div data-reveal className="mt-10">
              <Knowledge t={t.knowledge} />
            </div>
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section id={id.faq} className="pb-24 sm:pb-32">
          <div className="mx-auto w-full max-w-[760px] px-4 sm:px-6">
            <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} text={t.faq.text} align="center">
              <BtnGhost href={`#${id.contact}`}>{t.faq.cta}</BtnGhost>
            </SectionHead>
            <div data-reveal className="mt-12">
              <Faq items={t.faq.items} />
            </div>
          </div>
        </section>

        {/* ───────────── CONTACT ───────────── */}
        <section id={id.contact} className="relative overflow-hidden pb-24 pt-8 sm:pb-32">
          <div aria-hidden className="grid-field pointer-events-none absolute inset-0" />
          <div className={`${container} relative`}>
            <SectionHead eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} align="center" />
            <div className="mt-12 grid gap-4 lg:grid-cols-[1.55fr_1fr]">
              <div data-reveal className="rounded-3xl bg-coal/80 p-5 ring-1 ring-white/[0.08] backdrop-blur sm:p-8">
                <ContactForm t={t.contact.form} locale={locale} />
              </div>
              <aside data-reveal className="relative overflow-hidden rounded-3xl ring-1 ring-white/[0.08]">
                <Image
                  src="/images/sarajevo-night.jpg"
                  alt=""
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover object-bottom opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/30" />
                <div className="relative flex h-full flex-col gap-8 p-6 sm:p-8">
                  <div>
                    <p className="font-display text-xl font-medium">{t.contact.side.writeTitle}</p>
                    <p className="mt-1 text-[13px] text-white/55">{t.contact.side.writeText}</p>
                    <a href={`mailto:${company.email}`} className="mt-3 inline-flex items-center gap-2 text-[14px] underline-offset-4 hover:underline">
                      <Mail className="h-4 w-4" /> {company.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-display text-xl font-medium">{t.contact.side.callTitle}</p>
                    <p className="mt-1 text-[13px] text-white/55">{t.contact.side.callText}</p>
                    <ul className="mt-3 space-y-2">
                      {company.phones.map((p) => (
                        <li key={p.href}>
                          <a href={p.href} className="inline-flex items-center gap-2 text-[14px] underline-offset-4 hover:underline">
                            <Phone className="h-4 w-4" /> {p.display}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-display text-xl font-medium">{t.contact.side.visitTitle}</p>
                    <p className="mt-1 text-[13px] text-white/55">{t.contact.side.visitText}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Vogo%C5%A1%C4%87a%2C%20Sarajevo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-start gap-2 text-[14px] underline-offset-4 hover:underline"
                    >
                      <Pin className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        {company.name}
                        <br />
                        {company.locality}, {company.city}, {locale === "bs" ? company.country : company.countryEn}
                      </span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="border-t border-white/[0.08] bg-black">
        <div className={`${container} grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.2fr_2fr]`}>
          <div>
            <LogoLink href={home}>
              <Image src="/brand/logo-white.png" alt="ESU Agency" width={394} height={59} className="h-9 w-auto sm:h-11" />
            </LogoLink>
            <p className="font-display mt-6 text-[22px] font-medium">{t.footer.tagline}</p>
            <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-white/55">{t.footer.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BtnPrimary href={`#${id.contact}`}>{t.footer.cta}</BtnPrimary>
              <BtnGhost href={company.phones[0].href}>{company.phones[0].display}</BtnGhost>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {t.footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-[14px] font-medium">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-[13px] text-white/55 transition-colors hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-[14px] font-medium">{t.contact.eyebrow}</p>
              <ul className="mt-4 space-y-2.5 text-[13px] text-white/55">
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-white">
                    {company.email}
                  </a>
                </li>
                {company.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="hover:text-white">
                      {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  {company.locality}, {company.city}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.08]">
          <div className={`${container} flex flex-col gap-4 py-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between`}>
            <p>
              © {new Date().getFullYear()} {company.name} {t.footer.rights}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#main" className="inline-flex items-center gap-1.5 hover:text-white">
                {t.footer.top} <ArrowUp className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
