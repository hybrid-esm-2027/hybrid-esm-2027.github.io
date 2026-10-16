# Emulated and Hybrid ML-Physics Earth System Models — workshop website

Website for the workshop at the NSF NCAR Mesa Laboratory, Boulder, Colorado, 12–14 May 2027.
Built with [Hugo](https://gohugo.io/) (no external theme) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Editing content

Most updates are edits to YAML files in `data/` — no HTML required.

| To change… | Edit |
|---|---|
| Agenda sessions (times, speakers, chairs, slides) | `data/agenda.yaml` (field reference at top of file) |
| Plenary speakers | `data/speakers.yaml` |
| Organizing committee | `data/organizers.yaml` |
| Themes / readiness scale / planned outputs | `data/themes.yaml`, `data/readiness.yaml`, `data/outputs.yaml` |
| Dates, venue, contact email, registration link | `[params]` in `hugo.toml` |
| Page text | `content/*.md` |
| Announcements | add `content/news/<slug>.md` with `title`, `date`, `description` front matter |
| Homepage banner photo, its focal point, and credit | `[params.hero]` in `hugo.toml`; image file in `assets/images/` |
| Slides, PDFs | put files in `static/files/` and link as `/files/<name>.pdf` |

To open registration, set `registration_open = true` and `registration_url = "..."` in `hugo.toml`.

## Previewing locally

```sh
brew install hugo        # v0.165.0 extended, matching CI
hugo server              # http://localhost:1313, live reload
```

## Publishing

Open a pull request against `main`; merging deploys automatically (Actions → "Deploy site to GitHub Pages").

## Layout

```
hugo.toml               site settings and navigation menu
data/                   agenda, people, themes, readiness scale, outputs
content/                page text (Markdown)
layouts/                templates; layouts/shortcodes/ render the data files
assets/css/site.css     the single stylesheet (light and dark mode)
```

## Image credit

The homepage banner is
[*National Center for Atmospheric Research – Boulder, Colorado*](https://commons.wikimedia.org/wiki/File:National_Center_for_Atmospheric_Research_-_Boulder,_Colorado.jpg)
by Daderot (Wikimedia Commons), licensed
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/); resized and cropped for this site.
The adapted image in `assets/images/` is distributed under the same license. The site footer
carries the required attribution — keep it if the photo stays.
