# White Sand Funding

**0% Business Credit Funding & Credit Building Service** — landing site + future CRM.

White Sand Funding is an independent funding & credit strategist (NOT a lender, NOT a credit repair organization). The service helps clients access 0% interest business credit cards and build the personal & business credit profile that unlocks them — through tradelines, credit repair, shelf corporations, and structured application sequencing.

This repo contains the **Phase 1 landing site** — a static, production-ready HTML site backed by a single compiled Tailwind stylesheet and a Calendly inline booking widget.

---

## Quick Start

Open `index.html` directly in a browser to preview locally (CSS is already compiled and committed at `assets/css/site.css`).

```bash
# Optional: serve locally so internal links resolve cleanly
npm run serve         # python3 -m http.server 8000 — http://localhost:8000

# Modify styles
npm install            # one-time
npm run dev            # watch + rebuild assets/css/site.css on save
npm run build          # production build (minified)
```

### Site map

| Path | Purpose |
|---|---|
| `index.html` | **Public landing page** — hero with Calendly inline embed, why-it-works, services, how-it-works, FAQ |
| `privacy.html` | Privacy Policy (GDPR + CCPA coverage) |
| `terms.html` | Terms of Service |
| `assets/css/site.css` | Compiled Tailwind + custom styles (committed; rebuild with `npm run build`) |
| `assets/css/input.css` | Tailwind source — edit this, not `site.css` |
| `assets/js/site.js` | Shared JS — mobile menu, nav-scroll, scroll-reveal observer |
| `assets/img/og-image.png` | Social share image (1200×630) |
| `assets/img/og-image.svg` | Source SVG for the OG image |
| `tailwind.config.js` | Brand palette, shadows, animations |
| `vercel.json` | Clean URLs (`/privacy` not `/privacy.html`), security headers, asset cache |
| `robots.txt`, `sitemap.xml` | SEO |

### Architecture

The 3 HTML pages share a single stylesheet (`assets/css/site.css`) and a single script (`assets/js/site.js`). The announcement bar, nav, and footer are **structurally duplicated** across the 3 files but marked with `SHARED:` comment blocks — when editing any of those, sync the change in all 3 files.

```
index.html  ─┐
privacy.html─┼─ <link href="assets/css/site.css">
terms.html  ─┘   <script src="assets/js/site.js" defer>
```

---

## Business model & positioning

**Legal positioning (critical):**
- ❌ Not a lender
- ❌ Not a credit repair organization (CROA)
- ✅ Independent funding & credit strategist
- ✅ All funding comes via 3rd-party issuer banks in the form of business credit cards & lines of credit, subject to their approval

**Primary funnel:** Landing page → Calendly booking → Strategy call → Onboarded client.

### Six services

1. **Shelf Corporations** — pre-established aged business entities w/ EIN verification, clean ownership transfer, banking setup
2. **Tradelines** — authorized-user accounts to boost average age & lower utilization
3. **Credit Repair & Optimization** — disputing inaccurate / unverifiable negatives
4. **Personal Funding** — 0% personal credit strategy + smart application sequencing
5. **Business Funding** — business credit cards & lines of credit (no-doc + full-doc pathways)
6. **Corporate Credit Building** — D&B reporting profile for non-personally-guaranteed accounts

### Why it works (4 pillars)

- **0% Introductory Offers** — 6 to 18 months interest-free
- **Flexible, Unrestricted Use** — pay anyone via compliant bill-pay tools
- **No Collateral or Equity** — keep full ownership
- **Education That Pays Off** — coaching on recycling & stacking credit

### Pre-qualification criteria

- 700+ personal FICO typically required (below = start with credit optimization first)
- No hard credit pull during pre-qual
- Typical first funding round: 14–21 days

---

## Project Phases

| Phase | Status | Description |
|---|---|---|
| **1 · Landing page** | ✅ Done | `index.html` — public marketing site with Calendly booking |
| **2 · CRM / Login** | ⏸ Paused | On hold — focus on lead-gen first |
| **3 · PRD** | 🔜 Later | Product requirements document for developer handoff |

---

## Before going live — checklist

The legal pages still contain a single **yellow placeholder pill** (`class="ph"`) that needs attorney review. Search for `class="ph"` to find it.

### Critical (blocks launch)

- [ ] **Attorney review** of `privacy.html`, `terms.html`, and footer disclosure paragraph
- [ ] **Arbitration clause** in `terms.html` §17 — attorney to confirm whether to retain (currently marked with a `ph` pill)
- [ ] **Effective date** on `privacy.html` + `terms.html` — currently 2026-05-17, update to actual launch date
- [ ] **Calendly URL** — currently points to `calendly.com/skyfah-info/30min`; verify this is the correct production booking link

### Nice to have

- [ ] State-by-state compliance review for tradeline & credit consulting services
- [ ] Real testimonials (only when client consent obtained — do NOT fabricate)
- [ ] Set up Vercel project, point custom domain to `whitesandfunding.com`
- [ ] Set up analytics (Vercel Analytics or Plausible recommended — both privacy-friendly)

---

## Deploy (Vercel)

```bash
# One-time setup
vercel link
# Deploys
vercel --prod
```

`vercel.json` enables:
- Clean URLs — `/privacy` and `/terms` resolve to the `.html` files
- Security headers — HSTS, CSP (allowing Calendly), Permissions-Policy, Referrer-Policy
- 1-year immutable cache on `/assets/*`

---

## Recommended Tech Stack (for Phase 2 CRM — not yet started)

- **Frontend** — Next.js 14, Tailwind CSS, shadcn/ui, react-hook-form + zod
- **Backend** — Next.js API Routes, PostgreSQL via Prisma ORM
- **Hosting & Data** — Supabase or Neon, Cloudflare R2 for documents
- **Auth** — Clerk or Auth.js with role-based access control
- **Communications** — Resend (email), Twilio (SMS), Calendly (booking)
- **Automation** — Inngest or Trigger.dev for event-driven workflows
- **Integrations (later)** — DocuSign (e-signature), Plaid (income verification), Zapier

---

## Notes

- Brand palette: white background + `navy` (#0B1730) dark sections + `sand` gold (#D4A847) accents + Apple system font stack (SF Pro on Apple devices, Inter fallback).
- The compiled `site.css` is committed so the site works without `npm install` — only rebuild when you edit `input.css` or any Tailwind classes in HTML.
- All booking flows through the inline Calendly widget; no custom form handler is wired up.
