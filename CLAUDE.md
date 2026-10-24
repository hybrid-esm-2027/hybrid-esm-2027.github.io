# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

One-page website for the workshop "Emulated and Hybrid ML-Physics Earth System Models" (NSF NCAR Mesa Laboratory, 12–14 May 2027). Plain Hugo, no theme, no npm, no tests. The design follows the CLIVAR CMIP7 Hackathon site (https://ncar.github.io/CMIP7_hackathon_2027/).

## Commands

```sh
hugo server              # local preview at http://localhost:1313
hugo --minify            # production build into public/ (what CI runs; use it as the build check)
```

CI pins Hugo 0.165.0 (`HUGO_VERSION` in `.github/workflows/deploy.yml`). PRs get a build-only check; pushes to `main` deploy to GitHub Pages. Work on a branch and open a PR.

## Structure

The whole site is three files:

- `layouts/index.html` — the complete page (head, nav, all sections, footer) as plain HTML. Text, themes and organizers are written directly here.
- `hugo.toml` — `[params]` for dates, `registration_url` (NCAR registration), `abstract_url` (Google Form) and `contact_email`. An empty URL makes the page show a disabled "Opens soon" button.
- `assets/style.css` — single stylesheet, colors as `:root` tokens with dark values under `prefers-color-scheme: dark`.

`disableKinds` in `hugo.toml` turns off every page type except the home page. Keep it a single page: the organizers decided (meeting of 23 Oct 2026) to keep the site minimal and add logistics (hotels, transport, schedule) only once they exist.

## Writing style

The organizers asked for copy that does not read as AI-generated. For any text on the page: plain academic register, no contractions, varied sentence length, no lists of three, no "rather than / not X but Y" framing, no inflated verbs (enhance, ensure, crucial, elevate), no metaphors or dramatic openings, and no summarizing sentence at the end of a paragraph.
