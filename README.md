# White Sand Funding

**0% Business Credit Funding & Credit Building Service** — landing site + future CRM.

White Sand Funding is an independent funding & credit strategist (NOT a lender, NOT a credit repair organization). The service helps clients access 0% interest business credit cards and build the personal & business credit profile that unlocks them — through tradelines, credit repair, shelf corporations, and structured application sequencing.

This folder contains the **Phase 1 mockup** used to align stakeholders before development begins.

---

## Quick Start

Open `whitesandfunding_index.html` directly to see the public landing page, or open `showcase.html` for the project showcase with embedded previews.

### Public site (deployed)

| File | Purpose |
|---|---|
| `whitesandfunding_index.html` | **Public landing page** — hero with booking widget, why-it-works, services, how-it-works, FAQ. Primary CTA: book a strategy call. |
| `privacy.html` | Privacy Policy (DRAFT — GDPR + CCPA coverage) |
| `terms.html` | Terms of Service (DRAFT) |
| `showcase.html` | Internal project showcase — overview + embedded previews |
| `og-image.png` | Social share image (1200×630) |

### Internal folders

| Path | Purpose |
|---|---|
| `docs/` | Internal documentation (audit, briefs) |
| `phase-2/` | Phase 2 reference mockups (paused — not launching) |

When deployed (e.g. Vercel), the entry URLs are:

- `…/whitesand-funding/whitesandfunding_index.html` — the live public landing page
- `…/whitesand-funding/showcase.html` — project showcase with embedded previews

---

## Business model & positioning

**Legal positioning (critical):**
- ❌ Not a lender
- ❌ Not a credit repair organization (CROA)
- ✅ Independent funding & credit strategist
- ✅ All funding comes via 3rd-party issuer banks in the form of business credit cards & lines of credit, subject to their approval

**Primary funnel:** Landing page → Pre-qualification form OR Calendly booking → Strategy call → Onboarded client.

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
| **1 · Landing page** | ✅ Done | `whitesandfunding_index.html` — public marketing site with Calendly booking |
| **2 · CRM / Login** | ⏸ Paused | On hold — focus on lead-gen first |
| **3 · PRD** | 🔜 Later | Product requirements document for developer handoff |

---

## Before going live — checklist

All three pages (`whitesandfunding_index.html`, `privacy.html`, `terms.html`) have **yellow placeholder pills** showing exactly where real data needs to go. Search for `class="ph"` or `[BRACKETS]` in any file to find them. Also remove the amber **DRAFT banner** at the top of each page.

### Critical (blocks launch)

- [ ] **Entity name** — replace `[LEGAL ENTITY NAME]` everywhere (e.g. "White Sand Funding LLC")
- [ ] **State of incorporation** — replace `[STATE OF INCORPORATION]` (e.g. "Delaware")
- [ ] **Business address** — replace `[BUSINESS ADDRESS]` (street, city, state, ZIP)
- [ ] **Phone** — replace `[PHONE]` everywhere (footer + JSON-LD + legal pages)
- [ ] **Email** — replace `[EMAIL]` everywhere (footer + JSON-LD + privacy@/legal@ in policies)
- [ ] **Hours** — replace `[HOURS]` (e.g. "Mon–Fri, 9am–6pm ET")
- [ ] **Year** — replace `[YEAR]` in copyright lines
- [ ] **Effective date** — replace `[EFFECTIVE DATE]` on privacy.html + terms.html (launch date)
- [ ] **Calendly inline embed** — replace the mock widget in `#book` section with real Calendly snippet (`<div class="calendly-inline-widget" data-url="...">`)
- [ ] **Attorney review** of privacy.html + terms.html + footer disclosure paragraph
- [ ] **Remove DRAFT banner** from top of all three HTML files

### Terms-specific placeholders

- [ ] `[USD amount]` for liability cap (e.g. "$500" or "the amount you paid in last 6 months")
- [ ] `[CITY, STATE]` for arbitration venue
- [ ] `[COUNTY, STATE]` for court jurisdiction
- [ ] Fee model paragraph in Section 6 (currently bracketed placeholder)

### Nice to have

- [ ] OG image `og-image.png` (1200×630) for social shares
- [ ] State-by-state compliance review for tradeline & credit consulting services
- [ ] Real testimonials (only when client consent obtained — do NOT fabricate)
- [ ] Vercel deploy + custom domain pointed to whitesandfunding.com

---

## Recommended Tech Stack (for Phase 2)

- **Frontend** — Next.js 14, Tailwind CSS, shadcn/ui, react-hook-form + zod
- **Backend** — Next.js API Routes, PostgreSQL via Prisma ORM
- **Hosting & Data** — Supabase or Neon, Cloudflare R2 for documents
- **Auth** — Clerk or Auth.js with role-based access control
- **Communications** — Resend (email), Twilio (SMS), Calendly (booking)
- **Automation** — Inngest or Trigger.dev for event-driven workflows
- **Integrations (later)** — DocuSign (e-signature for service agreements), Plaid (income verification), Zapier

---

## Notes

- All mockups are static HTML with Tailwind via CDN — no build step required.
- Brand palette: white background + `navy` (#0B1730) dark sections + `sand` gold (#D4A847) accents + Apple system font stack (SF Pro on Apple devices, Inter fallback).
- The Calendly section is currently a visual mockup. When ready, replace the entire `<div class="relative rounded-2xl bg-white p-5 sm:p-8">...</div>` block inside `#book` with the real Calendly inline embed snippet.
- Yellow `[PLACEHOLDER]` pills are styled to be visually obvious — they will not look "good" on the live site, so you will notice if you forget to fill any.
