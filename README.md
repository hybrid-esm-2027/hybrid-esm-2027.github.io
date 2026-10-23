# Emulated and Hybrid ML-Physics Earth System Models — workshop website

One-page site for the workshop at the NSF NCAR Mesa Laboratory, Boulder, Colorado, 12–14 May 2027.
Built with [Hugo](https://gohugo.io/) and deployed to GitHub Pages by `.github/workflows/deploy.yml`
on every push to `main`.

## Editing

| To change… | Edit |
|---|---|
| Page text, themes, organizers | `layouts/index.html` (plain HTML) |
| Dates, registration link, abstract form link, contact email | `[params]` in `hugo.toml` |
| Colors and layout | `assets/style.css` |
| "Supported by" logos | image files in `static/logos/`; the row is in `layouts/index.html` |

When a registration or abstract link is left empty in `hugo.toml`, the page shows "Opens soon".

## Previewing locally

```sh
brew install hugo        # v0.165.0, matching CI
hugo server              # http://localhost:1313, live reload
```

## Publishing

Open a pull request against `main`; merging deploys automatically (Actions → "Deploy site to GitHub Pages").

The earlier multi-page version of the site (agenda, readiness scale, seven themes, and so on) is in the git history before the one-page rewrite.
