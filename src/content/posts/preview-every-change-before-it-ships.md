---
title: "Preview Every Change Before It Ships"
date: "2026-08-06"
excerpt: "A pull request diff tells you what changed in the template. It tells you nothing about what the reader will see. Here's how I wired per-PR previews into this site, and the one trap that nearly made them useless."
tags: ["software-engineering", "ci-cd", "reproducibility"]
---

Static sites are easy to deploy and surprisingly hard to review. A pull request on this site shows me that a template changed, that a helper gained an argument, that some CSS moved. What it does not show me is the thing that actually matters: what the page looks like to somebody reading it.

So I did what I should have done at the start, and wired up per-pull-request previews. Every PR now builds the whole site and publishes it to its own URL. I click the link in the PR, I look at the page, and then I merge. No local checkout, no "looks fine to me" based on a diff of Astro templates.

## Sharing one branch with production

GitHub Pages allows exactly one deployment source per repository, which is the constraint the whole design falls out of. If previews are going to live on Pages alongside the live site, they have to share it: production at the root, each preview in a subdirectory keyed by PR number.

That is a mildly annoying arrangement, and it has one genuinely sharp edge. The production deploy has to be told not to delete the previews when it publishes, or every merge to `main` quietly wipes the preview of every other open PR. One line of configuration, and an afternoon of confusion if you miss it.

## The trap: links that escape

Here is the part I would not have predicted. Previews are served from a subpath — `/pr-preview/pr-42/` rather than `/` — and this site, like most, was written with root-absolute internal links:

```html
<a href="/services">Learn more</a>
```

That link works perfectly in production. In a preview it points at `/services` on the live domain. The preview loads, looks entirely correct, and then throws you out onto the real site the moment you click anything.

The tempting fix is the build tool's base path setting, and it does not save you. It rewrites what the framework generates — bundled assets, generated routes — but a hardcoded string in a template is just a string. It stays exactly as you typed it.

The actual fix is unglamorous: route every internal link through a helper that prefixes the configured base, and stop writing raw paths.

```astro
<a href={url('/services')}>Learn more</a>
```

Now a preview is genuinely self-contained. Navigate around inside it and you stay inside it.

Two smaller things worth doing while you are in there: have preview builds emit `noindex`, and point their canonical URLs at production. Otherwise you have quietly published a dozen near-duplicate copies of your site and invited search engines to rank them against each other.

## Worth it

None of this is clever. It is about an hour of work and a helper function of six lines. But it changes the review question from *does this diff look right* to *does this page look right*, and those turn out to be very different questions.
