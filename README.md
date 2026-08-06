# import history

**An 8-bit documentary website about Python's evolution** — not a syntax tutorial, but the fights, the people, and the industry pressure behind every feature.

**Live site: https://import-history.pages.dev**

> Language features are lagging indicators of industry pressure. Python never added
> anything because it was elegant — every feature is a delayed response to something
> happening outside the language.

Eight episodes trace the story from a Christmas hobby project in 1989 to the GIL's
removal in 2025 — the lock that went in without a fight, the ecosystem it accidentally
created, and the industry that ultimately paid to take it out.

## Episodes

| # | Title | Era |
|---|-------|-----|
| 01 | A Language for Christmas | Origins · 1989–1999 |
| 02 | The Web Arrives | 1995–2005 |
| 03 | The Free Lunch Is Over | 2005–2012 |
| 04 | The Accidental Gift | The Science Invasion · 2001–2015 |
| 05 | Two Pythons | The Schism · 2008–2020 |
| 06 | Scripts Become Systems | 2012–2018 |
| 07 | The Abdication | 2018–2019 |
| 08 | The Lock Comes Off | AI Coronation & the Speed Reckoning · 2015–now |

## Design — "PHOSPHOR"

8-bit *computing*, not 8-bit gaming: CRT scanlines, phosphor green, amber warnings,
Python blue/yellow. Pixel borders with hard offset shadows, stepped `steps()` motion
everywhere, and a multi-phosphor palette that shifts per episode era. The signature
element is the **GIL Machine** — one scroll-scrubbed SVG state machine that appears in
episode 3 (one core → four cores, meter collapses) and returns in episode 8 (the
padlock dissolves), same component, one prop changed.

Accessibility floor: `prefers-reduced-motion` renders final frames, visible keyboard
focus, 7:1+ body contrast, mobile-first at 390px.

## Stack

- [Astro](https://astro.build) + MDX content collections
- Tailwind CSS 4 (mapped to CSS custom properties)
- GSAP + ScrollTrigger (scroll-scrubbed SVG state machines)
- Hand-authored SVG, vanilla TypeScript islands
- Deployed on Cloudflare Pages

## Development

```sh
npm install
npm run dev          # local dev server
npm run build        # static build to dist/
npm run verify-check # report unresolved [VERIFY] / SOURCE-NEEDED items
```

## Fact discipline

This is a documentary; a fabricated quote is a site-killing bug. Every historical
claim traces to `content-outline.md` or a linked primary source — PEPs, pipermail
archives, original blog posts. Claims that haven't been checked against a primary
source wear a red `[VERIFY]` badge; archival excerpts that haven't been filled from
the real thread carry the literal placeholder `SOURCE-NEEDED`. Run
`npm run verify-check` to see what's still unresolved.

Episode poster images are AI-generated pixel art (prompts in `image-prompts.md`).
The pixel snake is an original mark — deliberately not the official Python logo.
