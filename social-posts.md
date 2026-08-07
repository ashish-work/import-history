# Social posts — import history launch

## LinkedIn

---

In 1992, Guido van Rossum added a lock to Python without a fight.

It was the right call. Every machine had one core. Clock speeds doubled every 18 months. One big lock was simple, correct, and free.

Then the hardware changed, and for the next 30 years that lock — the GIL — became the most argued-about decision in programming:

→ 1996: first removal attempt. Single-threaded code got ~2x slower. Rejected.
→ 2010: David Beazley shows PyCon a two-thread program running SLOWER on two cores. The room goes quiet.
→ 2016: the "Gilectomy" dies on the same cliff.
→ 2025: free-threaded Python is officially supported. The lock is coming off.

Here's the part almost nobody says out loud: the GIL is also why Python won.

The lock pushed heavy compute into C extensions. A world-class C ecosystem grew below the line. Science chose Python *because of that ecosystem*. Science became AI. And AI's owners paid to remove the GIL.

The flaw built the ecosystem. The ecosystem became an industry. The industry funded the fix.

I built an 8-bit documentary website that tells this story in 8 episodes — the fights, the people, and the industry pressure behind every feature. Every claim links its primary source: the actual mailing-list threads, PEPs, and bug reports.

Language features are lagging indicators of industry pressure. Python never added anything because it was elegant.

Link in the comments. Start with Episode 3.

#Python #SoftwareEngineering #ProgrammingHistory

*(First comment: 📺 https://import-history.pages.dev — best on desktop for the animations, works on mobile. Repo: https://github.com/ashish-work/import-history)*

---

## Reddit — r/Python (flair: Showcase)

**Title:** I made an 8-bit documentary website about Python's history — the fights, the people, and why your code looks the way it does

---

**What it is:** [import history](https://import-history.pages.dev) — 8 episodes covering Python's evolution from the 1989 Christmas project to the GIL's removal in 3.14. Not a syntax tutorial: it's about the pressure behind every feature. Why indentation is syntax (ABC's inheritance). Why `lambda` feels bolted on (it literally was — a patch from "a Lisp hacker who missed them"). Why every 2010s shop has a gevent scar or a Twisted scar. Why `python3.13t` exists.

The through-line: the GIL pushed compute into C → the C ecosystem won science → science became AI → AI's owners paid to remove the GIL. Full circle across 34 years.

**The archive-nerd part:** every historical claim links a primary source — the actual pipermail threads, PEPs, bpo issues, and talks. Guido's "Transfer of power" email quoted verbatim from the archive. Greg Stein's 1996 free-threading patches (the README is still on python.org's FTP). Beazley's convoy-effect bug, bpo-7946, still open. The claims I couldn't pin to a primary source are marked with a red [VERIFY] badge on the page rather than silently guessed — a documentary should show its uncertainty.

**Target audience:** anyone who writes Python and has wondered why the weird parts are weird. Educational/reading site, no product, no signup.

**The build:** Astro + MDX, GSAP scroll-scrubbed SVG (the "GIL Machine" in episodes 3 and 8 is the same component with one prop changed), hand-drawn pixel art aesthetic — 8-bit *computing*, not gaming, since the mailing-list threads at the heart of the story were literally read on green phosphor. Source: https://github.com/ashish-work/import-history

**Corrections welcome.** If you were there for any of this — the 2→3 migration, the gevent wars, python-dev in the 2000s — and I got something wrong, open an issue. The site's whole brand is "checked against the archives," so I'd rather fix it than defend it.

---

### Posting notes (not part of the posts)

- LinkedIn: paste the link as the FIRST COMMENT, not the post body (LinkedIn suppresses external links in posts). Post Tue–Thu morning.
- Reddit r/Python: use "Showcase" flair; some subs require a comment with details — the body above works as-is. Expect fact-checking; the [VERIFY] badges and sources are the defense.
- The outline's own plan: week 1 content = GIL Machine material (this post), week 2 = the Accidental Gift diagram + mechanism paragraph (ep 4) — a natural follow-up post.
