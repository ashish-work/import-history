Content Outline — Python: The Documentary Site
Working title options: import history · The Pressure Line · Lagging Indicators

Thesis (appears on landing page, restated in every episode): Language features are lagging indicators of industry pressure. Python never added anything because it was elegant — every feature is a delayed response to something happening outside the language. Modern Python is full of fossils; this site explains why the weirdness exists.

How to read this file

FULL = written on day one (episodes 3, 4, 8). STUB = teaser card + "IN PRODUCTION" era banner.
Every episode follows the template: Cold Open → The World → The Pressure → The Response → The Fight → Why Your Code Looks Like This → Visual → Primary Sources.
[verify] = written from memory; fact-check the number/quote/name against the primary source before publishing. A documentary lives or dies on this.


Site-level pages
Landing page
Title card + one-paragraph thesis (above).
Dual-track timeline (the spine): industry events left (Mosaic, dot-com crash, Core Duo, iPhone, Node.js, Docker, TensorFlow, ChatGPT), Python releases right (0.9.0 → 3.14), era bands linking to episodes.
Episode grid: 8 cards, FULL vs IN PRODUCTION states.
One-line methodology note: "Written from the primary sources: python-dev, PEPs, and the people who were there."
Cast of Characters (stub OK for day one)
Card grid, documentary "talking heads" style: Guido van Rossum, Tim Peters, Greg Stein, Christian Tismer, Armin Rigo, David Beazley, Antoine Pitrou, Travis Oliphant, Wes McKinney, Fernando Pérez, John Hunter, Glyph Lefkowitz, Nathaniel J. Smith, Yury Selivanov, Jukka Lehtosalo, Łukasz Langa, Chris Angelico, Barry Warsaw / Brett Cannon / Carol Willing / Nick Coghlan (first steering council), Eric Snow, Mark Shannon, Brandt Bucher, Sam Gross.
Each card: name, role in the story, episodes they appear in, one defining quote or act.
The Archive (bibliography page)
Every primary source cited anywhere on the site, grouped by episode: mailing-list threads, PEPs, blog posts, talks. This page doubles as SEO surface and credibility signal.
About / Colophon
Who made it, the one-day-build story, stack note, corrections policy ("found an error? open an issue").


Episode 1 — "A Language for Christmas" · Origins (1989–1999) · STUB
Stub teaser: A bored researcher, a Christmas holiday, and a teaching language nobody wanted — plus the most consequential lock in programming history, added without a fight.
Cold Open
Amsterdam, December 1989. CWI is closed for the holidays. Guido needs a hobby project.
The World
ABC at CWI: the teaching-language DNA (indentation, no braces, high-level types) and why ABC itself failed (closed ecosystem, no extensibility, no files/IO escape hatches).
The Amoeba distributed-OS project needing a scripting language; Unix shell vs C gap.
Perl's rise as the sysadmin lingua franca — the rivalry that defined Python's first decade.
The Pressure
Scripting niche: glue for Unix, text munging, sysadmin work. Pressure = "easier than C, more structured than shell/Perl."
1999 DARPA proposal "Computer Programming for Everybody" — the teaching mission made explicit.
The Response
Feb 1991: Python 0.9.0 posted to alt.sources. Name from Monty Python, not the snake.
1992: threads arrive — and with them the GIL, because reference counting isn't thread-safe. Framed as the right call: every machine has one core, clock speeds double every 18 months. [verify exact year threads landed]
Python 1.0 (Jan 1994). Functional programming arrives by patch, not by design: lambda, map, filter, reduce contributed by "a Lisp hacker who missed them" (Guido's own History of Python blog phrasing). Guido's decade of ambivalence starts here — pays off in later comprehension chapters.
1.5 era: packages, class refinements; comp.lang.python culture; "batteries included" philosophy forming.
1999: Tim Peters posts what becomes the Zen of Python (PEP 20 in 2004).
The Fight
The Greg Stein free-threading patch (1999): GIL removed from 1.5 with fine-grained locks; single-threaded performance drops roughly 50% [verify figure]; Guido sets the bar that holds for two decades: no single-threaded regression. Archival card: excerpt Stein's patch announcement + Guido's response.
Sidebar: this is the first of four GIL-removal attempts the site tracks (Stein → Gilectomy → nogil → free-threaded builds).
Why Your Code Looks Like This
Why indentation is syntax (ABC inheritance). Why self is explicit. Why lambda feels bolted on — it literally was.
Visual
Timeline fragment 1989–1999. GIL Machine State A ("1991: one core, lock passes around, 100% utilization — the GIL was correct").
Primary Sources
Guido's "History of Python" blog series (esp. the functional-features post and ABC posts).
Greg Stein free-threading thread, python-dev 1999.
CP4E proposal text. Zen of Python original c.l.py post.


Episode 2 — "The Web Arrives" (1995–2005) · STUB
Stub teaser: The dot-com boom turns a scripting language into a server language — and quietly plants both seeds of the concurrency war.
Cold Open
A newsroom in Lawrence, Kansas, 2003–2005: two developers on newspaper deadlines extract a framework. It becomes Django.
The World
Dot-com boom and bust; CGI era; Perl/PHP own the early web; Java owns "serious" servers.
Guido's job odyssey mirrors the industry: CNRI → BeOpen (months) → Zope Corp → Elemental Security → Google (2005). [verify BeOpen/Zope dates]
Zope (open-sourced 1998): Python's first killer app, funds core development.
The Pressure
Web workloads: strings, requests, templates, databases. Pressure = "make Python a server citizen."
Ruby on Rails (2004) lights a fire under every dynamic language's web story.
C10K problem named (Dan Kegel, 1999): one machine, ten thousand connections — threads won't cut it.
The Response
Python 2.0 (Oct 2000): list comprehensions (the Haskell import Guido did like — contrast with ep 1's lambda), cycle-detecting GC, first unicode strings (u''), and the PEP process itself — governance as a feature.
2.2 (Dec 2001), the intellectual big-bang release: new-style classes / type-class unification, descriptors, iterators (PEP 234), and generators (PEP 255, behind from __future__) — the seed of everything async.
2.4 (2004): decorators and the @ syntax fight (PEP 318's notorious syntax bake-off). 2.5 (2006): with (PEP 343), and PEP 342 — generator.send(), the moment generators become coroutines. Flag forward-reference to ep 6.
WSGI (PEP 333, 2003): the interface that let Django/Flask/Pylons interoperate.
Django (2005, Lawrence Journal-World), TurboGears, Pylons. Google makes Python one of its three official languages; YouTube and Reddit (rewritten from Lisp, 2005) run on it.
The other seed: Stackless Python (Christian Tismer, ~1999) — microthreads; EVE Online (2003) bets an MMO on it. Medusa/asyncore as the ancient event-loop ancestor.
The Fight
PEP 318 decorator syntax threads (the @ vs list-syntax war) — a good low-stakes intro to how python-dev argues.
Early unicode design arguments — plant the charge that detonates in episode 5.
Why Your Code Looks Like This
Why @decorator looks like that. Why dict.items() behaves like it does (iterator protocol). Why there's a with statement instead of try/finally everywhere.
Visual
Timeline fragment; small "two seeds" diagram — generators (explicit branch) and Stackless (implicit branch) planted twenty years before the war ends.
Primary Sources
PEP 255, PEP 318 threads, PEP 333, Guido's "Origins of Python's Functional Features" and comprehension history posts.


Episode 3 — "The Free Lunch Is Over" (2005–2012) · FULL — day one
The concurrency crisis. The GIL becomes the villain; the community routes around it twice.
Cold Open
PyCon Atlanta, February 2010. David Beazley walks on stage with graphs of a two-thread program running slower on two cores than one. The room goes quiet.
The World
Herb Sutter, "The Free Lunch Is Over" (DDJ, March 2005): clock speeds stall, the future is cores.
Intel Core Duo ships (Jan 2006); by 2008 every laptop is multicore. Hardware breaks Python's 1991 assumption overnight.
Node.js at JSConf EU (Nov 2009): single-threaded async as a brand. Sudden outside pressure on Python's web story.
The Pressure
The GIL goes from footnote to villain: multicore machines, CPU-bound Python can't scale up.
Web tier needs C10K-class concurrency; Twisted exists but callback style splits the community.
The Response (three simultaneous escape routes)
Sidestep it — processes: multiprocessing lands in 2.6/3.0 (2008, PEP 371, from the pyprocessing package). Teaching beat: not a fix, a workaround with serialization taxes — explains a decade of if __name__ == "__main__": cargo cult.
Hide it — implicit green threads: greenlet (extracted from Stackless ideas, Armin Rigo) → eventlet, born at Linden Lab to run Second Life → gevent (Denis Bilenko, 2009): monkey-patch the world, blocking code that doesn't block. Tornado (FriendFeed → open-sourced 2009) as the pragmatic middle path.
Fix the GIL itself — and fail (mostly): Antoine Pitrou's new GIL (3.2, 2011): time-slice based, fixes multicore thrashing; Beazley's 2010 follow-up exposes the convoy effect with I/O threads. Google's Unladen Swallow (2009): LLVM JIT, 5x goal, PEP 3146 merge plan — fizzles by 2011, retrospective published. Psyco (Armin Rigo, 2001) retired in favor of PyPy, which gets genuinely fast ~2010–11 and becomes the perennial "just use PyPy" answer that production mostly doesn't take.
The Fight
Beazley's "Inside the Python GIL" (ChiPy 2009) + "Understanding the Python GIL" (PyCon 2010) — archival cards from the slides/talk transcripts.
python-dev threads on the new GIL and the convoy-effect bug report. [verify bug number]
gevent-vs-Twisted flame threads: implicit vs explicit, round one.
First-person sidebar (archival-card style, "field report"): the author's production gevent/greenlet locking bug at an ML inference platform doing 1M+ requests/day — what implicit context-switching does to your mental model of a lock. This is the site's "I was there" moment.
Why Your Code Looks Like This
Why threading exists but nobody trusts it for CPU work; why multiprocessing exists at all; why every 2010s Python shop had a gevent scar or a Twisted scar; why "the GIL" is the first thing interviewers ask about.
Visual
GIL Machine States A→B (the flagship): same lock-dance, background flips from one core to four, utilization meter collapses 100% → 25%.
Concurrency genealogy tree (top half): Stackless → greenlet → eventlet → gevent (green trunk) vs Medusa → Twisted → generators/send() (blue trunk). Tree continues in ep 6.
Primary Sources
Sutter's essay; Beazley's two talks; PEP 371; Unladen Swallow retrospective; gevent announcement post.


Episode 4 — "The Accidental Gift" · The Science Invasion (2001–2015) · FULL — day one
The GIL pushed compute into C — and the C ecosystem is exactly why science chose Python. The flaw causes the win.
Cold Open
A quant desk at AQR Capital, 2008. Wes McKinney, frustrated with the tools, starts a side project to wrangle financial tables in Python. He calls it pandas.
The World
MATLAB licenses cost thousands per seat; academics are priced out. Fortran/C are fast but hostile. The "two-language problem": prototype in one language, rewrite in another.
Astronomy (Hubble/STScI) and physics labs need array computing on a budget.
The Pressure
Scientists need: interactive exploration, fast arrays, plotting, and a language they can teach grad students in a week. Nobody built Python for this — the pressure found the language.
The Response (the stack assembles, one defection at a time)
Arrays: Numeric (Jim Hugunin, 1995) → numarray split (STScI, 2001) → Travis Oliphant unifies into NumPy (2005–06) — a community schism healed, contrast with ep 5.
Plotting: matplotlib (John Hunter, 2003) — built by a MATLAB refugee doing epilepsy research; memorial note (d. 2012, NumFOCUS award named for him).
Interactivity: IPython (Fernando Pérez, 2001 — a physics-PhD procrastination project) → Notebook (2011) → Jupyter (2014–15): the lab notebook becomes the industry's default interface.
Tables: pandas open-sourced 2009–10; "Python for Data Analysis" (2012) converts an industry.
ML: scikit-learn (GSoC 2007, INRIA release 2010) — the API design (fit/predict) that later frameworks imitate.
Packaging the pain away: compiled extensions are hell to install → Anaconda/conda (Continuum, 2012, Oliphant & Peter Wang); wheels (PEP 427, 2012). Cython (2007, from Pyrex 2002) as the C-glue on-ramp.
The Fight
Numeric vs numarray split threads and the unification story — schism done right.
R vs Python discourse as Kaggle (2010–2015) tilts Python. [verify tilt date range]
Why Your Code Looks Like This — the thesis chapter
The mechanism, stated plainly: C extensions release the GIL. NumPy dives below the lock; other threads run; the meter climbs. The GIL forced heavy compute below the line → a world-class C/Fortran ecosystem accreted → science chose Python because of that ecosystem.
Why import numpy as np is the real Python logo; why your "Python" hot loop is actually BLAS; why @ exists (matrix multiply, PEP 465 — numpy literally got syntax added to the language, the ecosystem now steers the core; forward-ref to ep 8).
Visual
The Accidental Gift diagram: thin Python layer, fat C/BLAS blocks, GIL bar spanning only the Python layer; on scroll a call dives below the line, the bar goes translucent, blocked threads light up.
Primary Sources
Oliphant's NumPy unification writings; Pérez's IPython origin post; McKinney's pandas history talks; PEP 465.


Episode 5 — "Two Pythons" · The Schism (2008–2020) · STUB
Stub teaser: Guido breaks the world over strings. It takes twelve years, two economic crises, and a peace-offering u'' to put it back together.
Cold Open
December 3, 2008. Python 3.0 ships. It is, by most benchmarks, slower than 2.6. Almost nobody upgrades.
The World
The financial crisis (2008): nobody has budget to port working code. Then the mobile boom: everyone's building, nobody's migrating.
Unicode is no longer optional: the web is global, emoji are coming, UnicodeDecodeError is every 2.x app's landmine.
The Pressure
2.x's original sin: str is bytes, unicode is separate, implicit coercion hides bugs until production. Plus accumulated cruft: print statement, integer division, classic classes.
The Response
What 3.0 actually changed and why (each item = pressure): str/bytes split, print(), true division, iterators/views everywhere, classic classes gone.
The moratorium (PEP 3003, 2009–11): freezing the language so PyPy/Jython/IronPython can catch up — the road not taken more often.
The long repair: 3.1 fixes io speed; PEP 404 declares "there will be no 2.8" (2011); 3.3 restores u'' (PEP 414, pushed by Armin Ronacher) as an explicit peace offering, plus PEP 393 flexible strings; 3.4 bundles pip (PEP 453 — packaging becomes core's problem); 3.5 delivers the carrots: async/await, @, typing. Ecosystem tooling: 2to3's failure, six and single-source straddling's victory, python3wos "wall of superpowers."
2.7's EOL extended to 2020 (announced PyCon 2014); final release 2.7.18 (April 2020); pip drops 2.7 (Jan 2021); macOS finally stops shipping it (12.3, 2022).
The Fight
The chicken-and-egg deadlock threads (users wait for libraries, libraries wait for users).
Zed Shaw's "The Case Against Python 3" (2016) vs Eevee's rebuttal — the schism's loudest late battle.
Migration war stories as archival cards: Instagram (PyCon 2017 keynote), Dropbox's multi-year, mypy-assisted port.
Why Your Code Looks Like This
Why b'' and .encode()/.decode() are everywhere; why print has parentheses; why deprecation in Python is now glacial and from __future__ is a culture — the community's permanent trauma: never again a big-bang break. Guido's "there will never be a Python 4" framing. Cross-language echoes: PHP 6, Perl 6/Raku.
Visual
Adoption-gap chart (2.x vs 3.x share over 2008–2020) [verify data source]; optional mojibake widget ("café" → wrong decode → garbage) on the stub page as a toy.
Primary Sources
PEP 3000/404/414/3003; Guido's PyCon 2014 EOL announcement coverage; Instagram and Dropbox migration posts; Nick Coghlan's "Python 3 Q&A."


Episode 6 — "Scripts Become Systems" (2012–2018) · STUB
Stub teaser: Dropbox and Instagram hit millions of lines of untyped Python, Node steals the async crown, and the language grows types and await in self-defense.
Cold Open
PyCon 2013, a hallway conversation. A Cambridge PhD student demos a new language with Python-ish syntax and static types. Guido's counter-offer: make it check Python instead. It becomes mypy.
The World
Docker (2013), Kubernetes (2014), microservices, SaaS everywhere. Go 1.0 (2012) starts eating Python's ops niche. Node's async model owns the "modern server" narrative.
Codebases cross a million lines: Dropbox (Guido joins, 2013), Instagram's Django monolith at a billion users, OpenStack.
The Pressure
Untyped Python at scale: refactoring fear, onboarding cost, "what does this function take?" Types = pressure from codebase size, not fashion.
Async needed a standard: gevent vs Twisted vs Tornado fragmentation (ep 3's unresolved war).
The Response
Typing arc: annotations existed since 3.0 with no semantics (PEP 3107) → mypy (Jukka Lehtosalo) → PEP 484 gradual typing (3.5, 2015) → variable annotations (3.6), dataclasses (3.7, attrs-inspired), Protocols (PEP 544, 3.8). Facebook/Google/Microsoft build their own checkers (pyre, pytype, pyright) — types become an industry, typeshed a commons.
Async arc: yield from (PEP 380, 3.3) → Guido's own tulip → asyncio (3.4) → async/await keywords (PEP 492, 3.5, Yury Selivanov) → async generators (3.6), contextvars (3.7), uvloop; ASGI (Andrew Godwin) → Starlette/uvicorn (2018) → FastAPI (2018) — async finally gets its Rails moment.
Quality-of-life era: 3.6 f-strings (PEP 498) and ordered dicts (impl detail → guaranteed 3.7) — the "Python got nice" release.
Structured-concurrency counterculture: curio (Beazley), trio (Nathaniel Smith, 2017) + "Go statement considered harmful" (2018) → later vindicated by TaskGroups/ExceptionGroups in 3.11.
The Fight
The canon of the color war, as archival cards: Glyph's "Unyielding" (2014, pro-explicit), Nystrom's "What Color Is Your Function?" (2015), Armin Ronacher's asyncio-skeptic posts (2016).
Typing backlash threads: "this isn't Python anymore" vs maintainers of million-line codebases.
PEP 563 vs PEP 649 annotations saga — starts here, resolves only in 3.14 (thread the needle to ep 8).
Why Your Code Looks Like This
Why there are two concurrency models in the stdlib; why async colors your whole call stack; why type hints are optional-but-everywhere; why FastAPI function signatures look the way they do.
Visual
Concurrency genealogy tree, bottom half: blue trunk formalizes into the stdlib (asyncio → async/await), gevent branch survives off to the side, trio branches in with a dotted "influence" arrow back into 3.11.
Primary Sources
PEP 484 and the mypy origin story; PEP 492; Glyph/Nystrom/Ronacher/njs essays; Dropbox mypy-at-4M-lines post.


Episode 7 — "The Abdication" (2018–2019) · STUB
Stub teaser: A two-character operator triggers a succession crisis. The purest primary-source episode: the resignation email, timestamped.
Cold Open
July 12, 2018, python-committers. Subject line: "Transfer of power." The message is four paragraphs long.
The World
Python is now critical infrastructure (top-3 language on every index); python-dev's volume and temperature scale with the userbase. BDFL was a 1995 joke title now carrying a real industry.
The Pressure
PEP 572, assignment expressions (:=): hundreds of messages across python-ideas/python-dev, comprehension-scoping edge cases, "kill it with fire" energy. Guido accepts it himself — then counts the cost.
The Response
The email: "I don't ever want to have to fight so hard for a PEP again... I'm basically giving myself a permanent vacation from being BDFL." [verify exact wording against pipermail] — and crucially, he names no successor and defines no process: "So what are you all going to do?"
The governance bake-off, PEPs 8010–8016: dictator, council, community models, each summarized in a card. Condorcet vote (Dec 2018) → PEP 8016 (Smith & Stufft) wins → PEP 13 constitution → first Steering Council (Feb 2019): Warsaw, Cannon, Willing, Coghlan, and van Rossum himself.
Immediate consequences: PEP 602 annual release cadence (2019); the SC — not a BDFL — will later make the nogil call (hand-off to ep 8).
The Fight
The episode is the fight: walrus threads, the resignation, the 8000-series debates. Densest archival-card episode; minimal narration, let the emails talk.
Why Your Code Looks Like This
Why := exists and why its scoping feels odd; why PEPs now end with "the SC accepted…"; why Python releases every October.
Visual
Governance timeline strip: BDFL (1991–2018) → interregnum (5 months) → Steering Council (2019–). Small, mostly typographic.
Primary Sources
The "Transfer of power" pipermail message (link the original); PEP 572; PEPs 8000–8016; PEP 13; first SC election results post.


Episode 8 — "The Lock Comes Off" · AI Coronation & the Speed Reckoning (2015–now) · FULL — day one
The ecosystem the GIL accidentally created comes back to remove it. Full circle; roll credits.
Cold Open
November 2020. Guido van Rossum, retired for a year, tweets that retirement was boring — he's joined Microsoft, and he has a plan about performance.
The World
The coronation: TensorFlow (Nov 2015) picks a Python frontend because episode 4 already happened — numpy idioms, notebooks, researchers in place. PyTorch (2017) arrives from Lua Torch — explicit lesson: Lua had the better runtime story and lost on ecosystem. Keras, Hugging Face transformers (2018–19), then ChatGPT (Nov 2022): the AI boom runs on Python glue over CUDA.
The bill: cloud economics make "Python is slow" a line item. Instagram/Dropbox-scale fleets price interpreter overhead in dollars.
The Pressure
Two converging vectors: AI workloads that want threads (data loaders, serving) hitting the GIL; and general fleet cost demanding a faster interpreter. For the first time, the money and the motivation both point at the core.
The Response (two-front war)
Make it faster — the Shannon Plan: Mark Shannon's 5x-in-4-releases proposal (Oct 2020); Microsoft funds the Faster CPython team (Guido, Shannon, Brandt Bucher et al., 2021). Results: 3.11 specializing adaptive interpreter (PEP 659, ~25% avg) and zero-cost exceptions; 3.12 comprehension inlining (PEP 709), per-interpreter GIL (PEP 684 — Eric Snow's decade-long subinterpreter arc pays off); 3.13 experimental copy-and-patch JIT (PEP 744); 3.14 tail-call interpreter, subinterpreters in the stdlib (PEP 734). Sober note: May 2025 Microsoft layoffs gut much of the Faster CPython team [verify who/how many before publishing] — speed work continues, but the funding question reopens.
Remove the lock — nogil: the lineage recap (Stein '99 → Gilectomy 2016–17, Larry Hastings, dies on single-thread perf) → Sam Gross, nogil (Oct 2021): biased reference counting, immortal objects, mimalloc, deferred RC — the first attempt that doesn't tank single-threaded speed. Community deliberation on discuss.python.org → SC conditionally accepts PEP 703 (July 2023) with a phased, reversible plan → 3.13 ships the experimental free-threaded build → PEP 779 makes it officially supported in 3.14 (2025). Meta funds engineer-years; the motivation is PyTorch data loading. The full-circle beat, stated explicitly: the GIL pushed compute into C (ep 1) → the C ecosystem won science (ep 4) → science became AI (this ep) → AI's owners paid to remove the GIL.
Epilogue beat — the pressure never stops, it just changes language: the Rust wave below the line (ruff, uv, polars, pydantic-core, PyO3) as "the new C"; CPython lands official iOS/Android tiers (3.13) and t-strings (PEP 750, 3.14). The lagging-indicator thesis, restated one last time over the credits.
The Fight
PEP 703 discuss.python.org megathreads + the SC acceptance post (archival cards).
"Will there be two Pythons again?" — the community explicitly arguing about not repeating episode 5; the abi/wheel ecosystem debate (cp313t builds).
Faster-CPython vs nogil tension threads (specialization vs free-threading interactions).
Why Your Code Looks Like This
Why python3.13t exists; why some wheels ship two builds; why your NumPy/PyTorch upgrade notes mention free-threading; why "is the GIL gone?" is now a version question, not a yes/no.
Visual
GIL Machine State C: the padlock dissolves, four lanes light simultaneously, meter climbs to 100% — the same component from ep 1/3, one prop changed.
Speed bars: 3.10 → 3.14 relative performance (pyperformance geomeans, cited) [verify current numbers].
Primary Sources
Shannon plan repo; PEP 659/684/703/744/779; SC acceptance post for 703; Sam Gross's original nogil announcement; Beazley-to-Gross lineage links.


Season 2 / Open Threads (footer teaser list — one line each, no pages)
The Packaging Saga: distutils → setuptools → pip → wheels → poetry → uv. The war that never ends (deliberately cut from season 1 — it's a swamp).
The Typing Maximalism Debates: how much static is too much?
Python off the server: WASM/Pyodide, iOS/Android tiers, PyScript.
The Rust Below: what happens to "the new C" thesis if the extensions stop being C.


Cross-cutting production notes
Every [verify] above must be resolved against a linked primary source before that sentence ships — the site's whole brand is "checked against the archives."
Each FULL episode ends with a "Next episode →" footer even when the next is a stub; stubs deep-link back to the timeline.
LinkedIn cuts, per plan: week 1 = GIL Machine section (ep 3/8 material); week 2 = the Accidental Gift diagram + mechanism paragraph (ep 4).


