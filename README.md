# mattupson.com

Personal website and blog for Matt Upson — AI consultant, former UK government data scientist, and co-founder of MantisNLP.

**Live at [mattupson.com](https://mattupson.com)**

## What's here

- **Writing** — blog posts on AI, data, leadership, and government
- **Archive** — full blog post history (2014–present) linking to Medium, Substack, and other publications
- **Papers** — academic publications in data science and agroforestry
- **Services** — AI consulting offerings
- **About** — career arc and background

## Tech stack

- [Astro](https://astro.build/) — static site generator
- Deployed to GitHub Pages via GitHub Actions
- Custom domain with HTTPS

## Development

```sh
npm install
npm run dev       # local dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview production build locally
```

## Deployment

Pushes to `main` build and publish `dist/` to the root of the `gh-pages` branch, via
`.github/workflows/deploy.yml`. GitHub Pages serves that branch.

### PR previews

Every pull request from this repo is built and published to the `gh-pages` branch under
`pr-preview/pr-<number>/`, and a bot comment on the PR links to it:

```
https://mattupson.com/pr-preview/pr-123/
```

The preview updates on each push and is deleted when the PR closes
(`.github/workflows/pr-preview.yml`).

Because previews are served from a subpath, **internal links must be base-aware**. Use the
`url()` helper from `src/lib/url.ts` for root-relative paths rather than hardcoding them:

```astro
---
import { url } from '../lib/url';
---
<a href={url('/services')}>Services</a>
```

A hardcoded `href="/services"` will jump out of the preview and back to the live site.
Preview builds also emit `<meta name="robots" content="noindex, nofollow">` and canonicalise
to the production URL, so they won't be indexed.

Previews for pull requests from forks are skipped — forked PRs get a read-only token and
can't publish to the branch.

### One-time Pages setup

This repo publishes from a branch rather than via the Pages Actions artifact (Pages allows
only one deployment source, and per-PR previews need the branch). After the first `main`
build creates `gh-pages`, set **Settings → Pages → Source** to *Deploy from a branch*, with
branch `gh-pages` and folder `/ (root)`. The custom domain is preserved by `public/CNAME`,
which ships in every build.

## License

Content and code are copyright Matt Upson. All rights reserved.
