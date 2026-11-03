import type { Metadata } from "next";
import { company, dictionaries, type Locale } from "@/i18n/content";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const localePath: Record<Locale, string> = { bs: "/", en: "/en" };

export function buildMetadata(locale: Locale): Metadata {
  const t = dictionaries[locale].meta;
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    applicationName: company.short,
    authors: [{ name: company.name }],
    alternates: {
      canonical: localePath[locale],
      languages: { bs: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: company.short,
      title: t.title,
      description: t.description,
      url: localePath[locale],
      locale: locale === "bs" ? "bs_BA" : "en_US",
      alternateLocale: locale === "bs" ? ["en_US"] : ["bs_BA"],
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/og.jpg"],
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: true, email: true, address: true },
  };
}

export function organizationJsonLd(locale: Locale) {
  const t = dictionaries[locale].meta;
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: company.short,
    description: t.description,
    url: locale === "bs" ? `${siteUrl}/` : `${siteUrl}/en`,
    logo: `${siteUrl}/brand/logo-black.png`,
    image: `${siteUrl}/og.jpg`,
    email: company.email,
    telephone: company.phones.map((p) => p.display),
    slogan: "Build your world with us.",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.locality,
      addressRegion: company.city,
      addressCountry: "BA",
    },
    areaServed: { "@type": "City", name: "Sarajevo" },
    knowsLanguage: ["bs", "en"],
  };
}
