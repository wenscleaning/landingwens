# CleanPro - Project Instructions

## Overview
Landing page for "CleanPro" home cleaning service, inspired by Batmaid (batmaid.ch).
Built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS v3**, **Framer Motion**, **Lucide React**.

## Quick Start
```bash
npm run dev    # http://localhost:3000
npm run build  # Production build
```

## Project Structure
```
app/[locale]/
  layout.tsx        → LocaleLayout (Outfit font, NextIntlClientProvider)
  page.tsx          → Assembles all sections
  globals.css       → Tailwind imports + CSS vars

src/
  i18n/routing.ts   → Locale config: ["en","es","fr"], default "en"
  i18n/request.ts   → getRequestConfig (loads messages)
  i18n/navigation.ts → Link, useRouter, usePathname (locale-aware)
  middleware.ts      → next-intl middleware (locale detect + redirect)
  components/language-toggle.tsx → Locale switcher (in Navbar)

messages/
  en.json, es.json, fr.json → Complete translations per locale

components/
  layout/           → Navbar.tsx, Footer.tsx (both "use client" + useTranslations)
  sections/         → 10 sections (all use useTranslations)
  ui/               → Button, StarRating, BoltPattern, DiagonalDivider
```

## Brand Colors (use `brand-*` Tailwind classes)
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-purple` | #4902F9 | Primary — hero, sections, footer |
| `brand-yellow` | #FFD900 | Accent — app section, stars |
| `brand-green` | #417360 | CTA buttons ("Let's go!") |
| `brand-blue-soft` | #5C92FF | Life milestones section |
| `brand-teal` | #4A8A70 | How it works section |
| `brand-dark` | #1C1B1D | Text on light backgrounds |
| `brand-muted` | #4F4D52 | Subtitles, secondary text |

## Typography
- Font: **Outfit** (via `next/font/google`, variable: `--font-outfit`)
- Display headings: `text-display` (80px/88px/bold)
- Section headings: `text-section` (48px/56px/bold)
- Body: 18px/400

## Conventions
- All components are `"use client"` (animations + useTranslations)
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Images: placeholder gradients + Lucide icons (replace with real images later)
- Tailwind config extended in `tailwind.config.ts` — always use `brand-*` tokens
- **No hardcoded strings** — all text comes from useTranslations()

## i18n (next-intl) — FULLY IMPLEMENTED
- **Locales:** en (default), es, fr → routes: `/en`, `/es`, `/fr`
- **Namespaces:** Navbar, Hero, Bento, Milestones, Services, ExtraServices, HowItWorks, Reviews, App, Locations, Become, Footer
- **Adding a new language:**
  1. Copy `messages/en.json` → `messages/{locale}.json` and translate all keys
  2. Add locale to `src/i18n/routing.ts` locales array + type
  3. Add option to `src/components/language-toggle.tsx`
- **Skill:** `next-intl-add-language` installed in `.agents/skills/`

## Section Order
Navbar → Hero → BentoCards → LifeMilestones → Services → ExtraServices → HowItWorks → Reviews → App → Locations → Become → Footer
