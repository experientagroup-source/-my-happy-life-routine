# My Happy Life Routine — Natascha Wright

Next.js 16 + TypeScript + Tailwind v4 site for the "My Happy Life Routine" project, presented within the world of Natascha Wright (The Experienta Group).

Visual and content source of truth: `My Happy Life Routine - 10 Small Habits I Live By - V2 (Final Revisions)` (the approved PDF). All photography and both logo marks (gold script signature, lips mark) were extracted directly from that PDF — no stock photography, no AI-generated imagery of Natascha.

## Stack

- Next.js 16 (App Router, static export via `output: "export"`)
- Tailwind CSS v4
- Fonts: Fraunces (display/serif), Inter (body/sans) — self-hosted via `@fontsource`
- Deploy target: Netlify (see `netlify.toml`) — build command `npm run build`, publish directory `out`

## Local development

```bash
npm install
npm run dev
```

No build has been run in the environment this project was scaffolded in (Node/npm are not installed there) — this has **not yet been verified to compile**. Run `npm run build` locally before deploying to catch any TypeScript/Tailwind issues.

## Outstanding items (do not invent these — confirm and wire in for real)

1. **Kit form integration.** The Kit inline form "My Happy Life Routine – Free Guide" already exists per the project brief, but its embed code / form ID was not found anywhere in the project's Drive or local files. `components/KitForm.tsx` renders the correct UI but does not submit anywhere. To finish: open Kit → Grow → Landing Pages & Forms → that form → Embed, and either paste the embed snippet in or drop the numeric form ID into the commented-out `action` URL in `KitForm.tsx`.
2. **Free guide PDF attachment.** The final PDF is still being adjusted per the brief, so nothing is hard-coded to it. Once approved-final, either link/attach it through the Kit form's own delivery settings, or add a direct download link here.
3. **Legal Notice details.** `app/legal/page.tsx` intentionally omits registered address, company registration number and VAT ID — these were not available in project materials. Add them once confirmed; do not guess them.
4. **Social links.** No verified Instagram/YouTube handles for this project were found in Drive or locally, so none are linked (per brief §17, "do not guess social handles"). Add them to `lib/site.ts` once verified.
5. **Production domain.** `app/robots.ts` and `app/sitemap.ts` use a placeholder domain (`myhappyliferoutine.com`) marked `TODO` — swap in the real domain once chosen.
6. **Kit paid automation.** The welcome email sequence described in the brief (Sections 12–13) requires upgrading Kit's plan; nothing here pretends that automation is already active.

## Structure

- `app/page.tsx` — homepage (hero, intro, 10 habits, free guide, Happy Life Letter, about teaser, music bridge, closing note)
- `app/about/` — About Natascha
- `app/privacy/`, `app/legal/` — policy pages
- `components/` — section + shared components
- `lib/habits.ts` — the 10 habits, transcribed from the approved PDF
- `lib/site.ts` — verified links/contact info only
