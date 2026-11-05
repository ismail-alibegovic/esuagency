# ESU Agency — web stranica

Bilingual (Bosnian / English) landing page for **ESU Agency d.o.o.**, a real estate investment company from Vogošća, Sarajevo.

- `/` — Bosanski (default)
- `/en` — English

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

```bash
npm run build && npm start
```

## Content

All copy for both languages lives in `src/i18n/content.ts`. Sections are composed in `src/components/Landing.tsx`.

## Contact form

The form posts to `/api/contact`.

- If `RESEND_API_KEY` is set, the message is emailed through [Resend](https://resend.com) to `CONTACT_TO_EMAIL` (default `info@esuagency.ba`), from `CONTACT_FROM_EMAIL` (a sender on a domain verified in Resend, e.g. `ESU Agency <web@esuagency.ba>`).
- If no key is configured, the API answers honestly with `not_configured` and the visitor's email app opens with the message pre-filled, addressed to `info@esuagency.ba`. Nothing is silently dropped.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Enables direct email delivery |
| `CONTACT_TO_EMAIL` | Recipient (default `info@esuagency.ba`) |
| `CONTACT_FROM_EMAIL` | Verified sender address |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO (e.g. `https://esuagency.ba`); falls back to the Vercel production URL |

## Images

Photography sources and licences are listed in `public/images/CREDITS.md`.

## cPanel / shared hosting (static version)

```bash
SITE_URL=https://esuagency.ba scripts/build-cpanel.sh
```

Creates `dist/esuagency-cpanel.zip` — plain HTML/CSS/JS for the cPanel `public_html` folder, plus:

- `contact.php` — emails the contact form to `info@esuagency.ba` using the server's `mail()`.
- `.htaccess` — caching, compression, security headers and the 404 page. Uncomment the HTTPS redirect once SSL is active.

The Vercel/Node version (`npm run build`) is unchanged and keeps using `/api/contact`.
