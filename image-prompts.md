# Episode Image Prompts — "import history"

One image per episode, 16:9, matched to each episode's accent color from the
PHOSPHOR design system. Generate E01 first and use it as a style reference for
the other seven so the set stays coherent.

## Shared style block (append to every prompt)

> Detailed 8-bit pixel art, retro computing aesthetic (CRT terminals and beige
> boxes, not video games), dark near-black background with a blue cast
> (#0b0d10), subtle scanline texture, phosphor glow, chunky pixels, hard edges,
> no anti-aliasing, cinematic documentary mood, 16:9 wide composition, no text,
> no letters, no words, no logos, no recognizable real people's faces.

## Guardrails (baked into the prompts)

- No official Python logo — a generic pixel snake is fine.
- No real faces, silhouettes only — these are real living people.
- No brand logos, no Nintendo/Sega/arcade sprites.
- No text — generators mangle it; the site's VT323 / Press Start 2P chrome
  does the typography.

---

## E01 — A Language for Christmas
*Accent: phosphor green `#3dff7c`*

> A quiet research-institute office in Amsterdam at night in December 1989,
> snow falling past a dark window, one desk lamp on, a beige terminal glowing
> green phosphor, a mug of coffee, an empty chair, a tiny pixel snake curled
> beside the keyboard, everything closed for the holidays, green light as the
> only warmth.

## E02 — The Web Arrives
*Accent: Python blue `#4b8bbe`*

> A small-town newspaper newsroom at deadline, 2003: stacks of newsprint, CRT
> monitors glowing blue, tangled ethernet cables running from the desks toward
> a humming server rack in the corner, clock on the wall near midnight, the
> glow of an early web page reflected on a window, blue light dominant with
> warm desk lamps.

## E03 — The Free Lunch Is Over
*Accent: amber `#ffb000`*

> A dark conference stage in 2010, a huge projector screen showing a jagged
> pixel graph trending downward, a lone silhouetted speaker at a podium, an
> audience of dark silhouettes gone silent, and looming behind the screen: two
> large CPU cores with a single amber padlock chained across both, amber light
> flooding the room.

## E04 — The Accidental Gift
*Accent: Python yellow `#ffd43b`*

> A financial quant desk at night in 2008: six monitors of green and yellow
> pixel spreadsheets and charts, and beneath the transparent floor of the
> scene a vast glowing machine room of fat golden blocks doing the real work —
> a thin quiet layer on top, an enormous engine below, yellow light rising up
> through the floor grate.

## E05 — Two Pythons
*Accent: amber `#ffb000`, with red `#ff5555`*

> One pixel snake splitting into two snakes at a forked road, one snake old
> and faded, one new and bright, a jagged red crack in the ground between them
> running toward the horizon, broken garbled character-blocks (mojibake
> squares, not real letters) raining like snow, amber and red against the dark.

## E06 — Scripts Become Systems
*Accent: Python blue `#4b8bbe`*

> A hallway conversation at a tech conference in 2013, two silhouettes by a
> whiteboard, and through the window behind them a skyline made of towering
> stacked shipping containers and server racks reaching into the clouds, blue
> annotation-like pixel brackets and connector lines floating over the scene
> like scaffolding.

## E07 — The Abdication
*Accent: phosphor green `#3dff7c`*

> An empty office chair at a desk, a mechanical keyboard, and a green phosphor
> CRT showing the faint glow of a short four-paragraph message just sent
> (rendered as soft green pixel blocks, not readable text), a small pixel
> crown set down deliberately beside the keyboard, cursor still blinking, the
> room otherwise dark and still.

## E08 — The Lock Comes Off
*Accent: Python yellow `#ffd43b`*

> A massive amber padlock dissolving into pixels mid-air, its fragments
> scattering like confetti, four parallel lanes below all lighting up
> simultaneously with running pixel figures, a ten-segment meter on the right
> filling to full, GPU racks glowing in the background, yellow and phosphor
> green triumphant against the dark — full circle.

---

## When the images exist

Drop them in `src/assets/episodes/` as `01.png` … `08.png`, then ask Claude to
add an `image` field to episode frontmatter and wire them into
`EpisodeLayout` (optionally per-episode `og:image` too).
