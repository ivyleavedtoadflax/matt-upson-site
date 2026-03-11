---
title: "Why AI Projects Go Wrong and What We Can Do About It"
date: "2024-09-25"
excerpt: "Three critical failure modes from years of AI consulting: poorly defined outcomes, data issues, and lack of ongoing support. Lessons from the Mantis NLP portfolio."
tags: ["ai", "consulting", "project-management"]
originalUrl: "https://medium.com/mantisnlp/why-projects-go-wrong-and-what-we-can-do-about-it-7d43015cdabe"
---

In the years since starting Mantis, we've worked on a lot of projects with many organisations. We're confident that we've been able to deliver value on all the projects that we have worked on, not least because our clients tell us so.

But, despite our best efforts and the best efforts of our clients, sometimes the course of a project can be bumpy. AI projects are complex, so too are the organisations that commission them, and it's sometimes in the overlap of this complexity that issues can arise.

This blog post summarises the lessons we've learned from many projects. We wanted to articulate these lessons so that both we at Mantis and the organisations that we work with are aware of the most common issues that can arise in projects, so that we tackle them together in advance.

Broadly speaking there are three common issues that we've seen cause projects to go awry.

### Poorly defined project outcomes

Defining the desired outcomes for a project seems like an obvious thing to get right, but at the outset of a project it's not always clear that the outcomes have been well defined. The most common cause, we find, is not having the right people in the room from the start of the project.

Getting the right people in the room on the client side is critical so that the project actually delivers business value.

We're used to working closely with technical teams, but sometimes, the business leader (who is often also the budget holder) is not close enough to the work to spot that the technical deliverables do not align with the business value that they want to get from the work.

Ensuring that this doesn't happen is critical, but it is also difficult, because each organisation has its own structure and politics, and it can be difficult for us to navigate that based on just a few meetings. For this reason, this critical stakeholder management is as much the responsibility of the team commissioning the work, as it is ours to get right, and we need to work together to ensure shared success.

We've learned from experience that whilst we may deliver a very successful project from the technical point of view, it will be viewed as a failure more widely if it later fails to deliver business value in the client organisation.

For this reason, we involve a client delivery manager in all our projects. Part of their job is to help to identify key stakeholders, and to advocate for their involvement in the project at an early stage. The client delivery manager also plays an important role in translating important business objectives into technical requirements.

### Data issues

Complaints about data are an old cliche among data professionals. But the reality is that many projects run into difficulties due to issues with data. These issues typically fall into two broad categories: availability and quality.

#### Data availability

AI models typically need to be "trained" on data relevant to the problem that we're trying to solve. If that data doesn't exist, or isn't available, then it can make it impossible for a project to get off the ground.

The good news is that in recent years the arrival of Generative AI models like LLMs mean that it's not always necessary to have data in advance. Nonetheless, even if we can leverage these kinds of models, we almost always need some data to evaluate their performance.

In some cases, we may need to ask the client to use their subject matter expertise to help us annotate some data so that we can evaluate our work against their expectations. This annotation can be time consuming and a little onerous, but it is an essential step to ensure that we can meet client expectations.

Sometimes the data we need exists, but getting access to it takes time due to lengthy internal processes. This can be the case with large organisations where many stakeholders are involved in authorising the sharing of data. This all takes time, and if we don't anticipate this, the project budget can be eaten away by delays.

#### Data quality

Not all data is good data, and there is an old adage "rubbish in, rubbish out", meaning that an AI model is only as good as the data that it is trained on. But assessing the quality of data is hard, especially when the quantities are large. Moreover, data means a lot of things to different people, and data experts who use data for one thing may be unaware of the issues that beset the data when used for something else, like training an AI model.

#### Mitigating data issues

The best way to mitigate data issues is to investigate the data at the earliest opportunity in advance of starting a project. For this reason we always advocate for a short period of discovery during which we will assess the quality of the data, and it allows both sides to see how easy it will be to get access to the appropriate data. During discovery we'll also be able to see if we will need to ask the client to annotate some data, so that they can plan for this.

### Lack of ongoing support

Singing the praises of an ongoing support contract is going to sound like a sales pitch. But honestly, our biggest failures have been in cases where we didn't advocate strongly enough for providing additional support to follow on at the end of a project.

There are many reasons why it might make sense to budget some extra time to account for unexpected things that come up after the bulk of the work is done. Two that we have seen repeated are: not accounting for the pace of change of the AI sector, and underestimating how long it will take for our clients to fully take ownership of a piece of work that we deliver.

The pace of change in AI is so rapid now, that many things we considered impossible twelve months ago, are now eminently possible, perhaps even trivial. So budgeting for some "office hours" during which we are available to help keep the project up to date with the latest developments can be a good investment.

Taking full ownership of a piece of work that we deliver to a client can take time. There are lots of complexities to AI projects, and integrating a model into an organisation's systems can throw up unexpected issues, especially in enterprise organisations or where the team is not used to working with AI.

The worst outcome for everyone is that the value of an otherwise successful project is not fully realised because there are minor unresolved issues after the main contract was concluded, but that could easily have been resolved with a small number of flexible "office hours."

### Planning for success

At the end of every project we conduct a retrospective both with the client, and internally, and take forward those learnings into future projects. This blog post provides the rationale for why we advocate strongly for:

- Getting the business users in the room early on, and involving them in defining successful project outcomes.
- A discovery period to look into the project in detail, and amongst other things, investigate the data readiness.
- A follow-on "office hours" contract to allow any issues to be addressed after the bulk of the work has been completed.
