# Sultana's Daycare & Babysitting

Marketing + enrollment website for Sultana's Daycare & Babysitting, a home
daycare in Bradford West Gwillimbury, Ontario. Built with Next.js (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values as they're provided:

- `NEXT_PUBLIC_FORM_ENDPOINT` — the Google Apps Script Web App URL the
  application/contact forms POST to. Left blank until the owner deploys the
  Phase 5 backend; forms fail gracefully while it's unset.

In Vercel, set the same variable under Project Settings → Environment
Variables.

## Design system

- `src/app/globals.css` — color tokens, fonts, and shadow/radius utilities
  (Tailwind v4 `@theme`).
- `src/components/design/PhotoCutout.tsx` — reusable scrapbook-style photo
  component (circle/blob/star/heart/arch/scallop masks; polaroid/sticker/taped
  frames). Renders a labeled placeholder until a real `src` is supplied.
- `src/components/design/Doodles.tsx` — decorative cloud/star/sparkle/rainbow/
  crayon SVG accents.
- `src/components/design/AnimatedSection.tsx` — scroll-in reveal wrapper
  (respects `prefers-reduced-motion`).
- `src/components/design/SectionDivider.tsx` — wavy/cloud/torn-paper section
  edges.

## Deployment

Deployed to Vercel from the `main` branch. Production builds run
`next build`; there are no server-side secrets required beyond the form
endpoint above.
