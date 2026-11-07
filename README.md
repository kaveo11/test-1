# Sheer Façade Care: Astro website

Static website for a façade and glass cleaning company in Dubai, UAE (English, en-AE). Built with Astro, no UI framework.

> **Sample project.** The brand, phone number (`+971 50 000 0000`), email, client names, case studies and testimonials are placeholders. Replace them before launch (`src/data/`). The footer states this; remove that line when the content is real.

## Setup

```bash
npm install
cp .env.example .env     # then add your Pexels key
npm run dev              # http://localhost:4321
npm run build            # output in dist/
npm run preview
```

### Pexels key

`.env`:

```env
PUBLIC_PEXELS_KEY="YOUR_API_KEY"
```

- The key is read from `import.meta.env.PUBLIC_PEXELS_KEY` and inlined **at build time**. Without a key at build, the site still works and shows solid-colour fallbacks. **Rebuild after adding the key.**
- `PUBLIC_` variables ship to the browser. Use a key you can rotate, and do not reuse one that has other privileges.
- Pexels asks for attribution. The footer links to Pexels; keep it.

### Saving Pexels requests

- One request per unique `kind + query + orientation`. Results are reused by index across sections (`src/data/media.ts`).
- `localStorage` cache, 24 h TTL. Failed lookups are cached for 10 min.
- A `429` response pauses all requests for 1 h.
- Lazy loading: media is requested only when it is within 500 px of the viewport.
- Fallback: solid colour from `--fallback` on each `.media` block.
- Videos do not autoplay when `prefers-reduced-motion` is set.

## Deploy

Upload `dist/` to any static host (Netlify, Cloudflare Pages, Vercel, S3 + CDN). Set `PUBLIC_PEXELS_KEY` in the host's build environment if it builds for you. Update `site` in `astro.config.mjs` and `src/data/site.ts`.

## Where to edit

| What | File |
|---|---|
| Phone, email, hours, areas | `src/data/site.ts` |
| Services, scope, steps, plans, FAQ | `src/data/services.ts` |
| Clients, cases, testimonials, team | `src/data/content.ts` |
| Pexels keywords | `src/data/media.ts` |
| Colours, spacing, type sizes | `src/styles/global.css` (`:root`) |

## Pages and sections

| Page | Sections |
|---|---|
| `/` | Hero (video), client marquee, method finder, service list, process, season strip, video band, gallery, case studies, testimonials, CTA |
| `/services` | Service rows, FAQ |
| `/services/[slug]` ×4 | Overview, scope, process timeline, plans, FAQ, other methods |
| `/about` | Story (video), values, team, service areas |
| `/case-studies` | Project details, before/after compare, testimonials |
| `/contact` | WhatsApp form, office and hours |

## Libraries

| Library | Used for | Installed via |
|---|---|---|
| `astro` | Static site, routing, components, View Transitions (`ClientRouter`) | npm |
| `@fontsource/fraunces` | Display serif (headlines, logo) | npm (self-hosted) |
| `@fontsource-variable/inter-tight` | Body and UI text | npm (self-hosted) |
| Pexels API | Photos and videos | Runtime `fetch` (no package) |

No CDN dependencies.

## Research notes

- Rope access crews on Dubai high-rises are expected to hold IRATA certification; Dubai Municipality and Civil Defence may inspect active worksites; a method statement and risk assessment are expected per project.
- Winter (Dec–Feb) is described by industry sources as the safest cleaning window; summer temperatures exceed 45°C.
- Commonly quoted frequency: every 1–2 months for commercial towers, quarterly for residential.
- Commonly quoted market range: AED 5–15 per m² for high-rise window cleaning. Used only as an indicative range on service pages.
