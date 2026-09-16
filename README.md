# CrowdStock — Landing Page

Marketing landing page for **CrowdStock**, a live crowd-prediction game app. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, respects `prefers-reduced-motion`)
- lucide-react icons

## Structure

- `src/app` — root layout, global styles, page entry
- `src/components` — one component per section (Nav, Hero, HowItWorks, RoundsPreview, AutoPlaySpotlight, Features, Security, InviteEarn, Faq, DownloadCta, Footer) plus shared primitives (Container, Reveal, Logo)
- `public/brand` — the real CrowdStock app logo/favicon
