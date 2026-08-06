# BRIEF — Build "import history": an 8-bit documentary site about Python's evolution

**How to use this file:** Place this file and `content-outline.md` together in an empty
folder, start Claude Code there, and send as the first message:
> Read claude-code-brief.md and content-outline.md completely, then execute Milestone 0.
> Stop and report at every milestone checkpoint (✅) before continuing.

---

## 1. Mission

A one-day build. A static documentary website telling the story of Python's evolution
in 8 episodes — not a syntax tutorial, but the fights, the people, and the industry
pressure behind every feature. Site thesis (verbatim, appears on the landing page):

> **Language features are lagging indicators of industry pressure.** Python never added
> anything because it was elegant — every feature is a delayed response to something
> happening outside the language.

`content-outline.md` is the **single source of truth for all content.** Episodes 3, 4,
and 8 are FULL (the human writes their prose today); episodes 1, 2, 5, 6, 7 are STUBS.

## 2. Non-negotiable ground rules

1. **NEVER invent historical facts, dates, quotes, names, or mailing-list excerpts.**
   Every historical claim on the site comes from `content-outline.md` or from prose the
   human writes. When scaffolding an episode, use `<!-- TODO: human prose -->` markers.
   Any `ArchiveCard` you scaffold gets the literal placeholder text `SOURCE-NEEDED` —
   never a plausible-sounding email you composed. This is a documentary; a fabricated
   quote is a site-killing bug.
2. **Stack is locked:** Astro + MDX content collections, Tailwind (mapped to CSS custom
   properties), GSAP + ScrollTrigger, hand-authored SVG. Vanilla TypeScript in
   `<script>` islands. **No** React/Vue/Svelte, no D3, no canvas/WebGL, no Lottie, no
   CMS. Ask before adding any dependency beyond `astro`, `@astrojs/mdx`,
   `tailwindcss`, `gsap`.
3. **Deploy first.** The skeleton goes live in Milestone 0 (Cloudflare Pages). Shipping
   is a formality from hour one, never a cliff at hour eight.
4. **Mobile-first at 390px.** Traffic arrives from LinkedIn on phones. Design at 390px,
   enhance upward.
5. **Copyright:** no official Python logo (draw an original pixel snake instead), no
   Nintendo/Sega/arcade sprites, no game assets, no copyrighted fonts. Google Fonts only.
6. **Accessibility floor (non-optional):** `prefers-reduced-motion` jumps every
   animation to its final static state; visible keyboard focus (2px accent outline,
   2px offset); semantic HTML; body-text contrast ≥ 7:1; pixel display font never used
   for body copy.
7. Work in small commits with clear messages. Keep the dev server running; verify each
   component visually before moving on.

## 3. Design system — codename "PHOSPHOR": 8-bit *computing*, not 8-bit gaming

**Concept:** the site looks like the machines this history actually happened on — CRT
terminals, usenet, BBS screens, early beige-box GUIs — with pixel-game energy carried
by the chrome: chunky borders, sprites, stepped motion. The mailing-list threads at the
heart of the story were literally read on green phosphor; the aesthetic *is* the
archive. Pixel-art playfulness is welcome in sprites and UI furniture; the reading
experience stays disciplined.

**Rule zero: the 8-bit aesthetic lives in the chrome; body text stays readable.**

### Tokens (define as CSS custom properties; map Tailwind theme to them)

Color — deliberately *not* a single-accent black/green scheme; it's a multi-phosphor
system grounded in period hardware plus Python's own blue/yellow:

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#0b0d10` | page background (near-black, blue cast) |
| `--surface` | `#12151a` | panels, cards |
| `--ink` | `#e6eee6` | body text (green-tinted off-white) |
| `--dim` | `#8a978a` | secondary text, captions |
| `--phosphor` | `#3dff7c` | terminal green — archival/terminal content |
| `--amber` | `#ffb000` | amber-monitor orange — banners, warnings, era stamps |
| `--py-blue` | `#4b8bbe` | Python blue — links, explicit-concurrency branch |
| `--py-yellow` | `#ffd43b` | Python yellow — highlights, timeline nodes |
| `--alert` | `#ff5555` | "The Fight" sections, VERIFY badges, errors |

Per-episode accent: each episode's frontmatter picks one accent
(`phosphor | amber | py-blue | py-yellow`) applied to its headings, progress bar, and
timeline band — the palette shifts as eras change, which keeps the site from collapsing
into generic green-on-black.

Spacing: `--grid: 8px`. **Every** margin, padding, and size is a multiple of 8. SVG
viewBoxes on the 8px grid, integer coordinates only.

### Type (3 Google families, preloaded, `font-display: swap`)

- **Display — "Press Start 2P":** episode numbers, H1/H2, labels, buttons. Never below
  12px, never more than ~8 words in one element, line-height 1.6 when it wraps.
- **Terminal — "VT323":** archival cards, cold-open stamps, timestamps, UI chrome.
  20px minimum (it runs thin).
- **Body — "IBM Plex Mono":** 17px / line-height 1.75 / max-width 68ch. On-theme but
  genuinely comfortable for 1,500-word episodes.

### Chrome & texture

- **Pixel borders:** 2px solid + hard offset shadow `6px 6px 0` (never blurred).
  Square corners everywhere.
- **CRT overlay:** one fixed, full-viewport `repeating-linear-gradient` scanline layer
  at 3–4% opacity + a very subtle vignette; `pointer-events: none`; static (no flicker
  animation); a footer toggle adds `body.no-crt` to disable it.
- **Blinking block cursor** `▮` via `steps(2)` animation — cold opens, stub banners,
  site title.
- **Links/buttons:** inverse on hover (accent bg, `--bg` text), transitions ≤ 120ms,
  stepped easing.
- **SVG rules:** `shape-rendering="crispEdges"`, stroke widths 2 or 4 only, fills from
  tokens only.

### Motion rules

- **Everything is stepped.** GSAP `SteppedEase` / CSS `steps()` exclusively — no smooth
  ease-in-out anywhere on the site. 8-bit motion is discrete frames; conveniently, this
  is also less code.
- ScrollTrigger scrubs between labeled timeline states and **snaps** to them.
- Animate `transform` and `opacity` only. If it can't hold 60fps, cut the animation.
- Reduced motion: scrubbing, typewriters, and cursor blinks all render final frames.

## 4. Component inventory

Build in this order (grouped into milestones in §6):

1. **`PageShell`** — header: pixel-snake favicon-mark + site title (Press Start 2P) +
   blinking cursor; segmented episode progress bar (10 blocks, fills like a health bar
   with scroll %); footer: CRT toggle, colophon link.
2. **`PixelPanel`** — the base bordered box. Variants: `default`, `terminal` (title bar
   with three ● ● ● fake buttons, VT323 body), `alert` (red border).
3. **`ArchiveCard`** — terminal-variant panel for a mailing-list excerpt: `From:` /
   `Date:` / `Subject:` header rows, body in VT323 phosphor-on-dark, an "ARCHIVE" pixel
   stamp rotated −3°, and a source link. Props: `from`, `date`, `subject`, `href`.
   Scaffolds ship with `SOURCE-NEEDED` body text (rule 2.1).
4. **`ColdOpen`** — full-viewport: location/date stamp types on with `steps()`, one
   hook sentence appears, a pixel `▼` arrow bounces in 2 frames. Props: `stamp`, `hook`.
5. **`EraBanner`** — stub marker: `[ IN PRODUCTION ▮ ]` in amber on `--surface`.
6. **`Verify`** — inline red pixel badge `[VERIFY]` wrapping unchecked claims migrated
   from the outline. Add an `npm run verify-check` script that greps `src/content` and
   reports the count (warn in dev; the human decides what blocks publishing).
7. **`DualTimeline`** — the landing spine. Vertical center rail; industry events on the
   left, Python releases on the right; 8×8 pixel-square node markers; era bands as
   background blocks (episode accent at ~12% opacity) that link to episodes. Data from
   `src/data/timeline.json`. Entrance: items pop in with `steps(3)` scale 0.92 → 1.
8. **`GilMachine`** — **the signature element; spend the boldness budget here.** One
   SVG (~640×400, responsive): four horizontal thread lanes with simple 16×16 pixel
   runner sprites, a pixel padlock sprite that hops lane-to-lane in discrete jumps, a
   10-segment CPU meter on the right, and a core grid in the background. Three GSAP
   labeled states, scroll-scrubbed with snap:
   - **A "1991":** one large core behind the lanes; lock hops; meter 10/10. Caption:
     the GIL was the right call.
   - **B "2006":** background flips to four cores; the identical lock dance continues;
     meter drops to ~3/10; three cores rendered dark. Caption: the free lunch ends.
   - **C "2024+":** padlock dissolves in 3 step-frames; all four lanes animate
     simultaneously; meter refills to 10/10.
   Component takes a `states` prop: episode 3 mounts A→B, episode 8 mounts B→C. Include
   a footnote slot ("a metaphor, not a scheduler simulation"). Do **not** make it
   physically accurate.
9. **`GenealogyTree`** (eps 3/6) — SVG, two trunks growing downward: implicit line in
   `--phosphor` (Stackless → greenlet → eventlet → gevent), explicit line in
   `--py-blue` (Medusa → Twisted → generators → asyncio → async/await), year labels at
   nodes. Draw-on via `stroke-dashoffset`, scrubbed, with chunky dash steps.
10. **`GiftDiagram`** (ep 4) — layered stack SVG: thin Python layer, fat C/BLAS blocks
    below, GIL bar spanning only the Python layer. One scrubbed sequence: a call square
    drops below the line → bar drops to 40% opacity → blocked lane sprites light up →
    meter fills.
11. **`SpeedBars`** (ep 8) — horizontal segmented bars for 3.10 → 3.14 relative
    performance, growing in steps on scroll; number labels + a citation-line slot
    (numbers come from the human, not from memory).
12. **`EpisodeLayout`** — MDX layout: episode number (Press Start 2P), title, era
    stamp, accent from frontmatter, the section sequence from the template, and a
    "NEXT EPISODE →" footer (renders even when the next episode is a stub).

## 5. Content architecture

- `src/content/episodes/` — eight MDX files scaffolded **from `content-outline.md`**:
  frontmatter `{ number, title, era, status: "full" | "stub", accent }` + section
  headings in template order (Cold Open → The World → The Pressure → The Response →
  The Fight → Why Your Code Looks Like This → Sources).
  - FULL (03, 04, 08): convert the outline's bullets into short `<!-- TODO -->`
    comments under each heading; place empty `ArchiveCard` scaffolds where the outline
    names a thread/talk; carry the outline's `[verify]` tags into `<Verify>` badges.
  - STUB (01, 02, 05, 06, 07): teaser paragraph (verbatim from the outline's stub
    teaser), the cold-open stamp, and an `EraBanner`. Nothing else.
- **Landing page:** title card + thesis (verbatim from §1) → `DualTimeline` → episode
  grid (cards clearly distinguish FULL vs `[ IN PRODUCTION ]`).
- **`src/data/timeline.json`:** seed **only** with events and releases that appear in
  `content-outline.md` (industry events left column, releases right, era band per
  episode). Do not add entries from your own memory.
- **Cast** and **Archive** routes: `PixelPanel` placeholder pages marked IN PRODUCTION.
- **OG image:** one shared static image — site title, scanline texture, pixel snake.
- **Pixel snake:** original 24×24 SVG pixel-art snake (blue/yellow), used in the
  header and OG image. It is explicitly *not* the official Python logo.

## 6. Milestones — stop and report at every ✅

- **M0 · Scaffold & deploy (≈45 min):** init Astro + MDX + Tailwind; tokens + fonts +
  `PageShell`; hello-world landing; `git init` + first commit; Cloudflare Pages setup —
  if `wrangler` is available run `wrangler pages deploy dist`, otherwise print exact
  dashboard settings (build `npm run build`, output `dist`).
  ✅ = live URL, or repo ready to connect with settings printed.
- **M1 · Landing spine (≈60 min):** `timeline.json`, `DualTimeline`, episode grid,
  thesis section. ✅ = landing scrolls with era bands linking to episode routes.
- **M2 · GIL Machine A/B (≈90 min):** component + scrub + snap + captions.
  ✅ = A→B works at 390px and desktop; reduced-motion shows state B's final frame.
- **M3 · Documentary kit (≈45 min):** `PixelPanel`, `ArchiveCard`, `ColdOpen`,
  `EraBanner`, `Verify`, `EpisodeLayout`, `verify-check` script.
  ✅ = a dev-only `/kit` route renders every variant.
- **M4 · Episode scaffolds:** all eight MDX files per §5, generated while the human
  writes prose for 03/04/08. **Do not write historical prose.**
  ✅ = FULL episodes show full template structure with TODOs; stubs complete.
- **M5 · Secondary visuals (≈75 min):** `GiftDiagram`, `SpeedBars`, `GenealogyTree`
  (top half), wired into episodes 4 / 8 / 3.
- **M6 · Finale (≈30 min):** `GilMachine` state C wired into episode 8 with the
  full-circle caption from the outline.
- **M7 · Ship pass (≈45 min):** 390px pass, reduced-motion pass, OG image, pixel-snake
  favicon, Lighthouse sanity (static site — performance ≥ 90), final deploy.
  ✅ = live URL + `verify-check` report of remaining `[VERIFY]` count.

## 7. Cut order when behind (cut from the top)

1. `GenealogyTree` animation → ship static SVG
2. `GiftDiagram` animation → ship static SVG
3. `SpeedBars` → static
4. `GilMachine` state C → hard cut between two static frames (locked grid / lit grid)
5. CRT toggle (keep the overlay, drop the toggle)

**Never cut:** the deploy, the episode scaffolds, `GilMachine` A/B, `ArchiveCard`,
reduced-motion support.

## 8. Anti-goals — do not do these

- No inventing history, quotes, or dates (repeated because it matters most).
- No D3, no canvas, no framework islands, no smooth easing curves, no light mode, no
  CMS, no RSS/tags/search, no sound effects, no horizontal timeline.
- No relitigating the stack or the tokens; propose changes only at milestone
  checkpoints, with a one-line reason.
- No Konami-code easter egg until M7 is ✅. (If time remains after M7: it may toggle
  the CRT overlay. That is the entire easter-egg budget.)
- Don't tune the GIL Machine toward scheduler accuracy — it's a metaphor with a
  footnote.

## 9. Acceptance checklist (run at M7)

- [ ] Live URL; fonts preloaded; no layout shift on font load
- [ ] All 8 episode routes exist; FULL episodes render every template section
- [ ] `GilMachine` A/B (ep 3) and C (ep 8) scrub and snap; reduced-motion renders
      final frames
- [ ] Every `ArchiveCard` contains human-provided text or the literal `SOURCE-NEEDED`
- [ ] `verify-check` runs and reports; zero fabricated claims anywhere
- [ ] 390px: no horizontal scroll; tap targets ≥ 44px; Press Start 2P ≥ 12px
- [ ] Contrast: `--ink` on `--bg` ≥ 7:1; accent colors used for chrome/large text only
- [ ] No console errors; Lighthouse performance ≥ 90
