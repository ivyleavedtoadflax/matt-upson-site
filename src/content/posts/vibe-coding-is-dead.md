---
title: "Vibe Coding is Dead: Long Live Agentic Engineering"
date: "2026-03-06"
excerpt: "The modern AI development stack, from Claude Code to Ralph Wiggum loops. What it takes to move from reviewing every line to supervising autonomous agents."
tags: ["ai", "software-engineering", "agentic-engineering"]
draft: true
---

AI luminary, Andrej Karpathy, coined the term "vibe coding" about a year ago: the idea that you can describe what you want, give in to the vibes, and forget that the code even exists. He's since moved on from it. His current preferred term is "agentic engineering", and I think that's the right direction.

As Peter Steinberger (the creator of OpenClaw) put it, "vibe coding" has become a bit pejorative: it trivialises what is actually a real skill. I like his line: "I do agentic engineering and then maybe after 3am I switch to vibe coding and then I have regrets the next day."

Whatever you want to call it, agentic engineering is here to stay, and I think (if we're not already there) that we just need to get used to the fact that models are going to write most of our code for us. I've been experimenting recently with what it takes to move from working _in the loop_ (reviewing every single line of code) to working _on the loop_ (letting the AI just get on with it). In a future blog post I'll talk about what it is I've actually been building. But for now this post is about some of the tools and practices I've been incorporating into my workflow. This stuff moves fast, and half of what I write here will probably be out of date by the time you read it. But for what it's worth, here's where I've landed.

### 1. Choose your tools

#### Claude Code

Claude has been my weapon of choice for a while, but with the release of Opus 4.6 things have really accelerated. I've worked with other models (Gemini 3.0, GPT 5.2) and they're all capable at this level, but my experience is that Claude is *just better at writing code*.

I know some very sensible people who swear by Gemini 3, or even GPT 5.2, but my experience with Claude is quite a lot better than the competition. Maybe its idiosyncrasies are just closest to my own. Also, and whilst this is by no means the reason for my choice: I respect Dario Amodei for taking a stance over not allowing Claude to be used for mass citizen surveillance or smart weapons. Integrity counts.

#### Handy

[Handy](https://github.com/cjpais/Handy) has probably been the single biggest change to my workflow. It runs a model like Whisper or Parakeet locally on your machine for speech-to-text. I use it for everything now: talking to Claude, writing WhatsApps, drafting blog posts (half of this one started as voice notes). Complete game changer for reducing typing. Works brilliantly out of the box. Totally recommend it.

### 2. Plan before you build

#### SpecKit

[SpecKit](https://github.com/github/spec-kit) is GitHub's toolkit for spec-driven development. I like it, but it's a specific tool for a specific job. It generates very formalised, detailed specifications from a high-level description, and if you want it to produce a feature end-to-end from greenfield, it's brilliant. The detail it forces you to write up front is what makes it work.

Where it falls down is small changes to an existing codebase. It's overkill for tweaks. And honestly, I've not got it to work well when you're modifying rather than creating. For smaller, more contained tasks, Claude Code's built-in plan mode is better. But for a new feature from scratch, SpecKit is the best thing I've found.

#### Google Stitch

Claude is, let's be honest, pretty unimaginative when it comes to frontend design. You can spot a Claude-built UI from a mile off. Google Stitch helps with this: you generate screen mockups using Google's models before writing any frontend code, then pass those to Claude for implementation. The caveat is that I still have basically zero design sense, so I'm not always sure what the right questions are to ask Stitch either. It's better, but you probably still need someone with an eye for design to get something genuinely good.

The Stitch MCP for Claude Code is fantastic. Combined with the Anthropic Playground plugin, which generates an interactive HTML page with dials and controls for customising UI features, you can actually iterate on frontend design without it all looking like the same Bootstrap template.

### 3. Get outside the loop

#### Ralph Wiggum Loops

The [Ralph Wiggum loop](https://ghuntley.com/ralph/) is an autonomous development loop for Claude Code. In its simplest form, it's a bash `while` loop that repeatedly feeds Claude a prompt until completion. You point it at a specification like a GitHub Issue, it reads the codebase, makes changes, runs tests, and opens a PR, maybe even merges it. Then it moves to the next issue.

There's now an official Claude Code plugin for this, which works well since it (_now_) properly clears the context window between iterations like the bash loop approach (earlier versions didn't). I typically point it at a set of GitHub Issues and let it churn through them.

#### GitHub Issues

Nothing new here. I use GitHub Issues exactly as I would for a human team. I write issues (or have Claude generate them from a spec), and the Ralph loop cycles through them. You can even work with the AI to create the issues: I'll often step through the frontend, spot problems, and have Claude write up an issue for each one. The point is that you don't stop doing this just because you're working with agents. If anything, well-scoped issues matter _more_ when the executor is an AI, because it works better with tight constraints than with vague ambitions.

### 4. Review like you mean it

Treat the AI like a junior engineer, not like a magic wand. It's good to think about your agent as another member of your team: it has strengths and weaknesses, and you need to incorporate it into your usual workflow. That means writing up issues, coding in pull requests, doing code review, incorporating CI/CD, all the things you'd do normally.

Obviously don't let the AI commit straight to main. Make it open PRs. Review them. Get an AI to review too: use the biggest model you can afford for the review. Implement all the usual CI/CD checks: tests, linting, type checks, all of it. Claude has a pretty nice GitHub Action for code review, and there are many other products out there that do this too.

At Mantis NLP we used to have a rule that no pull request could be larger than 250–300 lines of code. With agentic engineering, that goes out the window. I'm routinely putting in pull requests of 6,000 lines. That's extremely difficult for a human to review. Impossible, I would argue. So the key skill is understanding exactly where human review is needed and relying on agentic code review where it's not.

Be adversarial. I've got into the habit of asking the agent, after pushing a PR, something like: "Play devil's advocate. Look at the code you've just written, pick out the worst parts, tell me what could be done better, and create GitHub issues for each one. Then iterate until complete." This works surprisingly well.

I've also got into the habit of sitting with the AI and stepping through features I don't like, just asking it to create issues as we go, dragging and dropping or pasting screenshots into the CLI where needed.

### 5. Lock it down

#### OpenClaw

I'm cautious about OpenClaw. Obviously it's incredibly powerful, and *if you believe the hype* people online are doing impressive things with it. But until the security limitations are properly addressed, it's fundamentally limited in what you should trust it with.

Where I have found it useful is running a locked-down Telegram bot that talks directly to my locked-down AWS instance where the Ralph loops are running. That's quite nice: I can have a conversation about kicking off the next set of loops without being tethered to a terminal. I use it with Gemini 3.0 and GPT 5.2 via Open Router (depending on the task), which also helps keep control of costs. Crucially, this approach doesn't break the Claude terms of service because you're still running Claude through its own binary.

#### A locked-down AWS instance

Call me paranoid, but I prefer to run my Ralph loops on a locked-down AWS instance rather than locally, even in a sandbox. I use an auto-shutdown rule that kills the instance after thirty minutes of inactivity, just to keep costs low.

The risk from prompt injection is real: you could theoretically lose control of the instance. But the blast radius is small because I use limited API keys (e.g. via Open Router). Worst case, something gets hold of your Claude key and burns through your tokens. It can't get further than that.

#### Shannon

[Shannon](https://github.com/KeygraphHQ/shannon) is a tool for AI-powered penetration testing. I'll be honest: I feel a bit out of my depth with it, but it looks impressive. Before shipping a recent project, I did a full pen test using Shannon. They claim on the website that you can do essentially CI/CD penetration testing for around $16, compared to say $10,000 for a traditional pen test. My experience is that it costs more like $30, which is still not expensive. But it does require some expertise to interpret the results.

### But what about quality?

Massimo Re Ferre from AWS wrote a useful [framework for adopting AI assistants](https://it20.info/2024/5/a-framework-to-adopt-generative-ai-assistants-for-builders/) that describes a "boost zone" (tasks close to your skill level where AI speeds you up), a "learning zone" (where you're stretching into unfamiliar territory and the AI helps you grow), and a "danger zone" (where you're so far outside your expertise that you can't evaluate what the AI produces).

I think Massimo's framework is broadly correct. Working in the boost zone is incredible: you can do things that would have taken days in hours. But I find myself in the danger zone more often than I'd like. When I use Stitch to do design, I'm in the danger zone. When I use Shannon to do pen testing, I'm in the danger zone. When I ask Claude to build a whole application for me in TypeScript (a language I've got no experience of), front end and back end, I'm firmly in the danger zone. It seems legit, but who really knows?

The consolation is that working with an agent lets you expand your boost zone faster than ever before. You can learn by doing in a way that wasn't possible when every mistake cost hours of debugging. Your danger zone should be shrinking over time. But you need to be honest with yourself about which zone you're in right now.

And then there's the time. Laura Summers wrote a piece called [The Human-in-the-Loop is Tired](https://pydantic.dev/articles/the-human-in-the-loop-is-tired) and I felt that in my bones. Agentic engineering, if you're not careful, eats up all of your free time. It never stops. You can always start another issue, kick off another agent, open another window. It's always waiting, until you run out of tokens.

I regularly find myself managing three, four, five terminal windows simultaneously, each with an agent working on a different issue. There's this pressure (I feel it acutely) to squeeze as much as possible out of my daily Claude Code token window. Not doing more feels like a waste. The reality is that you're probably better off dealing with one thing at a time and doing it really well, testing it really well. But the temptation to try to parallelise is strong.

I _feel_ like the bottleneck now. The AI produces code faster than I can review it, faster than I can write specs for it, faster than I can decide what to build next. The constraint has shifted from typing speed to thinking speed.

And ultimately, we're concentrating all of this power in a small handful of companies. The Anthropic outage last week was telling. It reminded me of [that XKCD comic](https://xkcd.com/2347/) about all modern digital infrastructure depending on a project some random person in Nebraska has been maintaining since 2003. Except now it's not Nebraska; it's a handful of AI labs in San Francisco. Claude has become the new GitHub. I'm not sure how I feel about that.

If you've been experimenting with similar approaches, I'd love to hear about it.

I'll be honest: there's something hard to swallow about all of this. I've spent the last ten years deriving real satisfaction from the way I code, from the expertise I've built up. And now I watch an AI do it in seconds. It's not always better, but it's _often_ better. Certainly quicker. Something I enjoyed, something I developed genuine expertise in, is suddenly less valuable for me to do by hand.

But when I talk to people still hand-crafting bespoke code _without using AI_, it already feels _incredibly_ anachronistic. And that's both incredible and worrying, because it highlights how dependent we're all becoming on a handful of model builders like OpenAI and Anthropic.
