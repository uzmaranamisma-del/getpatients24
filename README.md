# GetPatients24 website (Next.js)

Patient-acquisition agency site for medical clinics. Built with Next.js 15 (App Router) and React 19.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Deploy

Push to GitHub and import the repo on Vercel (zero config), or run `npm run build && npm start` on any Node 18+ host.
Copy `.env.example` to `.env.local` (or set the same variables in Vercel):

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your live domain, used for SEO, sitemap and robots |
| `LEAD_TO_EMAIL` | Where every form submission is emailed (default getpatients24@gmail.com) |
| `SMTP_USER` / `SMTP_PASS` | Gmail address and its App Password used to send those emails |
| `LEAD_WEBHOOK_URL` | Optional: also forward each lead as JSON to n8n, Make, Zapier or a CRM |

## Where things live

- `app/globals.css`: brand colours (`--pri`, `--ink`, ...). Change a colour once, it updates everywhere.
- `components/Logo.jsx`: the GetPatients24 logo (icon + wordmark, light and dark).
- `components/Header.jsx`: top bar, menu, dropdowns, mobile menu, phone and email.
- `components/Footer.jsx`: footer links and contact details.
- `components/ContactForm.jsx`: homepage form.
- `components/BookingForm.jsx` + `SlotPicker.jsx`: Book Demo questions and time picker.
- `components/PricingPlans.jsx`: Organic / Paid switch and plan tables.
- `app/api/lead/route.js`: receives all forms, emails them to `LEAD_TO_EMAIL` and optionally forwards them to `LEAD_WEBHOOK_URL`.
- `app/<page>/page.jsx`: one folder per page; page title and description are in `metadata` at the top.

## Pages

`/`, `/how-we-help`, `/done-for-you-patient-acquisition`, `/website-ai-booking-system`, `/pricing-plans`,
`/about`, `/book-demo`, `/chiropractic`, `/regenerative-clinics`, `/physical-therapy-clinics`,
`/dental-clinics`, `/med-spa`, `/eye-clinics`, `/surgeons`, `/privacy-policy`, `/terms`.

## Before going live

- Replace example stats, results and testimonials with real, verifiable ones.
- Fill in the `[bracketed]` placeholders on Privacy Policy, Terms and the Pricing FAQ, and have them reviewed.
- Set `SMTP_PASS` (a Gmail App Password for getpatients24@gmail.com) so form submissions arrive in your inbox.
