# Fatescope — Personal Home

Bilingual (ZH/EN) personal site built with **Next.js + TypeScript + Tailwind**.  
Animated **Aurora hero**, **glassy cards**, smart **scroll-spy navbar** (click & scroll highlight), **masonry gallery** with a lightweight **lightbox**, and an **i18n language switcher** that works with typed routes.

---

## Highlights
- **Bilingual UX** — top-right language switcher (preference saved), optional first-visit language gate
- **Aurora Hero** — layered radial gradients + paper-like highlights; speed presets (`aurora-fast` / `aurora-faster`); `prefers-reduced-motion` supported
- **Glassy Cards** — `<GlassCard tint="emerald|amber|indigo|sky|slate">` for quick theming
- **Smart Navigation** — glassy bar, scroll-spy + click-to-activate, mobile friendly
- **Gallery + Lightbox** — native `<dialog>`; arrow keys, swipe, counter; zero third-party deps
- **Clean architecture** — App Router, typed TS, Tailwind; easy to extend and SEO-ready

---

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Custom components: `HeroAurora` / `HeroAuroraCool`, `GlassCard`, `Header`, `LangSwitcher`, `LangGate` (optional), `ClientGallery` + `Lightbox`

---

---

## Getting Started

> Requires Node.js ≥ 18

```bash
npm install
npm run dev   # http://localhost:3000

# production
npm run build
npm run start

Configure
Hero colors & speed

ZH uses <HeroAurora /> (warm amber-lime-emerald)

EN uses <HeroAuroraCool /> (cool sky-cyan-indigo)

Add aurora-fast / aurora-faster to the hero section to adjust speed.

Card tints
<GlassCard tint="emerald">App</GlassCard>  // ZH suggestion
<GlassCard tint="amber">Substack</GlassCard>
<GlassCard tint="slate">About</GlassCard>

# EN suggestion
<GlassCard tint="indigo">App</GlassCard>
<GlassCard tint="sky">Substack</GlassCard>

Gallery images

Edit photos arrays in app/page.tsx and app/en/page.tsx
(store images under public/images/). Clicking an image opens the lightbox.

Language switch

LangSwitcher toggles between / and /en and stores the preference in localStorage.lang.
Optional LangGate shows a subtle bottom bar for first-time visitors.

SEO (optional)

Configure metadata in app/layout.tsx (set metadataBase, OG/Twitter, alternates.languages).
Add app/sitemap.ts and app/robots.ts if needed.

Deployment

Vercel (recommended) or any static/Node hosting

Set custom domain and update metadataBase

Roadmap

Contact API → email/Slack

Dynamic OG images

WebP/AVIF & LQIP placeholders

PWA (manifest, icons)

License

Site code: MIT

Fatescope App (algorithms/backend): separate repo & license (private for now)

Contact

Email: franciszz937@gmail.com