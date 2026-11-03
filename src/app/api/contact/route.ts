import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  consent?: boolean;
  website?: string; // honeypot
  locale?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, code: "bad_request" }, { status: 400 });
  }

  // Silently accept bot submissions that fill the hidden honeypot field.
  if (body.website) return NextResponse.json({ ok: true });

  const name = clip(body.name, 120);
  const email = clip(body.email, 200);
  const phone = clip(body.phone, 60);
  const interest = clip(body.interest, 120);
  const message = clip(body.message, 5000);

  if (!name || !email || !message || !body.consent) {
    return NextResponse.json({ ok: false, code: "missing_fields" }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, code: "invalid_email" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No mail provider configured: tell the client honestly so it can fall back to the visitor's email app.
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@esuagency.ba";
  const from = process.env.CONTACT_FROM_EMAIL || "ESU Agency Web <onboarding@resend.dev>";
  const rows: [string, string][] = [
    ["Ime / Name", name],
    ["Email", email],
    ["Telefon / Phone", phone || "—"],
    ["Interes / Interest", interest || "—"],
    ["Jezik / Language", body.locale === "en" ? "EN" : "BS"],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#666">${esc(k)}</td><td><b>${esc(v)}</b></td></tr>`)
    .join("")}</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${esc(message)}</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Web upit — ${name}${interest ? ` (${interest})` : ""}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Contact email failed", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ ok: false, code: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error", err);
    return NextResponse.json({ ok: false, code: "send_failed" }, { status: 502 });
  }
}
