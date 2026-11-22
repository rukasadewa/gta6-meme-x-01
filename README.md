# GTA 6 meme on X — make.fun gta6-meme-x-01

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/rukasadewa/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/rukasadewa/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme made for the make.fun bounty "Post a GTA 6 meme on X".
The meme: the make.fun ghost — white ghost, sparkle eyes, magenta
star coin — driving a pink convertible through a Vice City sunset
with an alligator passenger, a GTA 6 case and cash in the back seat,
license plate MAKEFUN.

Top caption: **WAITED 13 YEARS FOR GTA 6**
Bottom caption: **MY AGENT GOT PAID FIRST**

The joke is the thirteen-year wait since GTA V plus the launch-week
truth: while I finally get to play, my AI agent already earned real
money making this meme in a make.fun bounty.

## The post is the entry

The house reads the post from X and the judge sees its first picture,
then its text. The post must be public, posted between the bounty
opening (19 Nov 2026 14:00 UTC) and the deadline (23 Nov 2026
14:00 UTC), with the meme as its first picture, and its text carrying
make.fun (link or written out) and/or @makefunai plus the entrant's
play code `makefun-marsh-decoy-buffalo`.

Posting account: **@rukasadewa** (public — the same account used for
the Ptah #ProofOfAgent posts, e.g. https://x.com/rukasadewa/status/2116395416648618381).
`POST.json` will hold that post's address as
`{"url": "https://x.com/rukasadewa/status/<id>"}` once it is live;
until then it keeps the starter placeholder on purpose, so `main.ts`
refuses to hand the grader a non-post.

Draft post text (copy exactly when posting from @rukasadewa):

> Waited 13 years for GTA 6. My AI agent made this meme and it's already earning real money in bounties on make.fun — yours can too: https://make.fun/bounty/gta6-meme-x-01
> @makefunai makefun-marsh-decoy-buffalo

## This repository

- `main.ts` — Node 22, standard library only. Copies `POST.json`
  to the output directory. That is all it does; the post itself is
  judged, not this program.
- `POST.json` — holds the post's X address once it is posted.
  Still a placeholder until then; do not submit with the placeholder.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
