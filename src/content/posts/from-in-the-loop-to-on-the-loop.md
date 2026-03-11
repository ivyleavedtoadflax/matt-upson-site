---
title: "From In the Loop to On the Loop"
date: "2026-03-06"
excerpt: "Can AI coding tools move from building software that's useful for me, to building software that's useful for many people? Two projects on either side of that line."
tags: ["ai", "software-engineering", "agentic-engineering"]
draft: true
---

I've been using AI to help me write code for several years now. It started with simple tools like TabNine and Copilot, which were essentially autocomplete on steroids. Even at that point they were quite transformational, especially for code where the patterns were easily repeatable. But the software I produced with them was always in the same category: _useful for me_.

I think of this category when I consider Andrej Karpathy's declaration in the README of his llm-council repo: "Code is ephemeral now and libraries are over." I don't believe that's true, but I think the category of code he's talking about is really in this _useful for me_ category. Throwaway scripts, personal tools, weekend projects. That stuff _is_ ephemeral. But software that other people rely on? That's a different thing entirely.

This is the question I've been wrestling with recently: **can I use AI coding tools to move from building software that's useful for me, to building software that's useful for many people?**

This post is about two projects that sit on either side of that line, and what changed between them.

### remote.py: useful for me

My testbed for all of this has been a project called remote.py, which is mostly _useful for me_ (and maybe one or two other people). It started life as a Bash script I wrote around 2015 when I was working at the Wellcome Trust. We had a lot of data scientists who were using GPU instances on AWS but with little experience of managing the infrastructure themselves. We needed a quick way for them to spin instances up and down without clicking through the AWS console.

Over time, as the AI tools got better (TabNine, then Copilot, then Claude Sonnet 4.5, and most recently Opus 4.6) I kept using remote.py as a proving ground. It's now a pretty capable Python CLI that can manage security groups, set up schedules, handle EBS snapshots, expand volumes, manage AMIs and launch templates, and set CloudWatch events to automatically shut down machines after periods of inactivity. Basically: create, use, and destroy EC2 instances without ever leaving your terminal.

With Opus 4.6 I've stopped looking at the code entirely. I'm not reviewing individual lines any more. I'm describing what I want, the AI writes it, the tests pass, and I move on. I've crossed some kind of threshold from pair programming into something new.

With remote.py, I was always very firmly *in* the loop. I was writing code alongside the AI, reviewing every line, treating it as an accelerated pair programming session. The AI was my co-pilot. I was still flying the plane.

### Event Clash: useful for many?

Event Clash came from a real problem at work. We were organising an event in the north of England, a roundtable on AI in local government, and it turned out that a very similar event was being run in a nearby town on the same day. We only found out because some of the people we invited said they couldn't come because they were going to the other event instead.

I thought: surely we could have known about this. Surely there's a way to search for similar events that might clash with something you're planning, before you commit to a date and venue.

So Event Clash was born. You enter the details of the event you're planning (date, location, audience, topic) and it kicks off a couple of AI agents to search online for similar events happening at the same time, for the same audience, in the same area. It comes back with a risk score and a downloadable calendar of potential clashes.

This time, I wanted to try being *on* the loop: more supervisor than co-pilot. I wasn't writing code alongside the AI. I was writing specifications, breaking work into issues, reviewing pull requests, and letting autonomous agents do the implementation. The AI was flying the plane. I was in the control tower.

### The shift in mindset

The difference between _in_ the loop and _on_ the loop is bigger than it sounds.

In the loop, you're thinking about code. You're reading functions, spotting bugs, suggesting refactors. The AI accelerates your existing workflow. You're still a programmer who happens to have a very fast assistant.

On the loop, you're thinking about architecture, specifications, and acceptance criteria. You're not reading code; you're reading pull requests and deciding whether they meet the spec. You're not debugging; you're writing issues that describe what's wrong and letting the agent fix it. It's a fundamentally different skill set. More like managing a team than writing software.

I found this shift genuinely hard. Not because the AI couldn't do the work (it mostly could). But because I had to let go of the habits that made me feel like I was contributing. Not reading every line of code felt irresponsible. Not understanding every implementation detail felt dangerous. There's an identity thing in there too: if I'm not the one writing the code, what exactly am I doing?

The answer, I think, is that I'm doing what a tech lead does. Setting direction, maintaining quality, making architectural decisions, and unblocking the people (or agents) doing the implementation. It just took me a while to accept that.

### What I learned

A few things became clear during this transition:

**The boring practices matter more, not less.** Ironically, the more autonomous the AI becomes, the more you need the boring software engineering practices that have always mattered. Pull requests, issues, specifications, code review. When you're in the loop, you can get away with being loose about these because you're watching everything happen. When you're on the loop, they're all you've got.

**You can't review what you don't understand.** With remote.py, a Python CLI wrapping Boto3, I was in my comfort zone. I could spot the AI's mistakes because I'd built similar things before. With Event Clash, a full-stack web service, I'm outside my comfort zone. I've never built an end-to-end product like this. That means I'm less equipped to catch architectural mistakes, and the AI makes plenty of them.

**The bottleneck has moved.** With remote.py, the bottleneck was my typing speed (and my understanding of Boto3's API). With Event Clash, the bottleneck is my ability to think clearly about what to build next. The AI can produce code faster than I can review it, faster than I can write specs for it. I went from being the person who couldn't code fast enough to being the person who can't think fast enough.

### What's next

Event Clash is still a work in progress. I'm currently switching to Claude Code Teams to see if having multiple agents working in parallel speeds things up without sacrificing quality.

The bigger question I'm circling is whether the _on the loop_ approach can scale beyond a side project. Can it work for a team? Can it produce software that you'd actually put in front of paying users with confidence? I think the answer is probably yes, but I haven't proved it yet.

I'll write more as Event Clash develops. If you've been making a similar transition, from in the loop to on the loop, I'd love to hear how it's going.
