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

Pushes to `main` automatically build and deploy via the workflow in `.github/workflows/deploy.yml`.

## License

Content and code are copyright Matt Upson. All rights reserved.
