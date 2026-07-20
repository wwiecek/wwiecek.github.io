---
title: "Market shaping and trial design belong together"
date: 2026-07-20
math: false
---

![Abstract blue-and-pink graphic](/assets/img/post_content/market-shaping-and-trial-design/market-shaping-and-trial-design.jpg)

*Originally posted at [Clinical Trials Abundance Substack](https://www.clinicaltrialsabundance.blog/p/market-shaping-and-trial-design-belong).*

**(1) Innovative trial designs**

In a nutshell, innovative trial designs (see glossary in a box below) can reduce costs and speed up testing of interventions. They achieve higher efficiency by creating shared trial infrastructures, borrowing information across populations, and adapting testing to information that is learned during the experiment. I previously argued that [trial innovation is particularly important in this period of AI advances](https://docs.google.com/document/d/1VEG1Cd6ndDtL3kAO8ensjlrslwXmXFS01b03OS3tSnE/edit?usp=sharing): as drug discovery improves, having an efficient infrastructure for testing innovations in the real world will increasingly become the main bottleneck.

Historically, most methodological innovation in trials came from medicine. However, clinical trials remain overly conservative. Drug regulators are not adequately equipped to support trial innovation. Pharma companies are averse to it, especially for expensive late-stage trials. Existing research infrastructure and contract research organisations are set up for conducting traditional trials. Outside of clinical trials, e.g. in development, adoption of innovative designs is also limited.

To illustrate this slow rate of progress, [the first FDA draft guidance for Bayesian clinical trials](https://www.clinicaltrialsabundance.blog/p/will-bayesian-statistics-transform) of drugs and biologics was only published this year. And a [review paper by Griessbach et al](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2816496) found only 127 platform RCTs in total, with over 80% most of them in oncology and COVID. In contrast, every year the FDA receives over 2,000 investigational new drug applications and over 20,000 new trials are registered on [ClinicalTrials.gov](http://ClinicalTrials.gov).

For medical interventions that need regulatory approval this creates an additional chicken-and-egg problem: regulators are not set-up for innovation because producers do not demand it and producers do not demand it because regulators are not set-up for innovation.

For that reason we should not expect the trial innovation to come from producers or regulators.

| Glossary of innovative trial designs  There is [a broader need for trial innovation](https://learninghealthadam.substack.com/cp/201171882), but here I talk about their statistical aspect, trial *designs*. “Innovative designs” (sometimes “complex innovative designs”) is a catch-all terms without a clear definition, but it’s good to distinguish the following: platform trials, which focus on creating infrastructure for many (sometimes dynamically added) treatments;  adaptive trials, which pre-register dynamic decisions (e.g. dropping a treatment or changing dose based on results in an initial set of patients);  Bayesian trials, which can borrow relevant information, e.g. across trials or patient groups;  related to the platform idea are multi-stage, multi-arm trials, which are built for comparison of many promising interventions (and eliminating the less promising ones with time) and seamless trials, which use a single trial protocol for e.g. choosing the best dose of treatment (Phase 2\) and then large-scale testing of its effects (Phase 3); basket trials (one therapy, many diseases) and umbrella trials (many therapies, one disease) are typically used for targeting treatments in cancer.  There can be a lot of overlap in these definitions and most trials meet several of these definitions.  Example: adaptive platform trial for patients hospitalised with Covid-19  RECOVERY, a large-scale platform trial that started in the UK, was responsible for rapidly evaluating many possible COVID treatments in 2020\. It was run within the UK's National Health Service. Its headline finding was that dexamethasone, a cheap generic steroid, could reduce a large fraction of mortality during that phase of the pandemic—as well as several other potentially beneficial treatments. This required testing 20 treatments with a flexible protocol that was adapted dozens of times. I will give more examples later in this note.  |
| :---- |

**(2) Market shaping**

In science and global health, large philanthropic and public bodies plug gaps left by private R\&D—both in terms of existing and new technologies.

For existing technologies, let us stay with the example of clinical trials. In that world producers, in pursuit of regulatory approval, may prefer for evidence to stay fragmented and put effort into carefully choosing trial design features (population, outcome, comparators) to ensure the most favourable results. At the same time, producers also underinvest in socially valuable evidence. For example, (1) adjusting dosage, (2) impact of combining several drugs, (3) repurposing (unless there is a lot of time left on the patent—see below). Public and philanthropic funding is often directed to resolve these issues.

Beyond generating such new evidence for existing technologies, these funders also look to support new technologies for which there is currently a market failure. They can do it through [using market shaping](https://atlasofinnovation.org/) with “push” or “pull” funding. In simple terms:

* **push model (pay for inputs):** funder pays upfront, with a traditional, no-risk research funding model: e.g. paying for a Phase 1 clinical trial for a highly promising universal flu vaccine;
* **pull model (pay for outcome):** funder promises to pay for an invention, e.g. committing to purchase a billion doses of a universal vaccine—provided it gets approved by the regulator.

The most important difference is that pull funding can work if the funder can clearly specify in advance what would count as success, but producers know more than the funder about how to get there. Pull initiatives include supporting development of [pneumococcal vaccines](https://www.aeaweb.org/articles?id=10.1257%2Fpandp.20201017), [neonatal sepsis tests](https://www.cgdev.org/project/neotest), or [carbon removal technologies](https://frontierclimate.com/).

Pull and push can be used not just for new technologies, but also to solve the R\&D gaps that I just mentioned in existing technologies. As an example, [pull funding mechanisms have been proposed for repurposing.](https://www.cgdev.org/blog/case-pull-funding-national-institutes-health) That is because in many cases repurposing targets are off-patent medicines, where the main barrier to repurposing is efficient research, as no single company can easily generate revenue to fund a large confirmatory trial.

**(3) An example of how market shaping and trial design fit together**

I argue that innovative designs are very relevant to funders interested in market shaping. At a basic level any funder wants to ensure that all evaluations of possible solutions are as fast, powerful, and inexpensive as possible. This is something that innovative designs can help with. However, there are also some cases where innovative designs have some unique advantages for market shaping.

To make this concrete, let’s imagine a funder who wants to support development of a broad spectrum antiviral. They do it by creating an advance market commitment: a promise to buy a large number of doses of an antiviral, provided it gets regulatory approval and meets a target product profile (TPP), e.g. some efficacy threshold.

Five firms that had ideas for how to develop an antiviral now decide to move into human subject testing, hoping to get their product approved, meet the TPP, and win the big AMC market. All five of them do well in early trials and are now interested in proving efficacy. How should these five antivirals be tested?

(Is five firms a high number? For many innovations we will only have one or a couple of firms that can move to this stage, but I will argue below that with time it may change.)

In one world there are five separate trials aimed at proving efficacy: five protocols, five placebo groups. Each company designs their trials in a way that they think will get them to regulatory approval and meet the TPP—and unlikely to generate any information beyond this, e.g. on dosing.

In another world (which I prefer), the AMC designer is also the trial designer. Firms are given an offer to participate in a platform trial. In exchange for playing under the same rules as competitors they get access to unified trial infrastructure: patients, trial approval, regulatory oversight.

This trial design can extend further. It can dynamically remove treatments that do not show promising results. It may start as a small scale evaluation and then seamlessly transition into a large-scale efficacy trial of the best candidate. It may also look at adjusting dosages or considering combinations of treatments.

**(4) Advantages of jointly tackling trial and market design**

What are the major advantages of my suggestion?

1) Because everything is done in the same trial, it is cheaper, faster, and statistically more efficient (less bias, more power).

2) A shared design allows the funder to make better head-to-head comparisons between these antivirals. In some cases it also avoids companies from competing for trial subjects.

3) It can de-risk a sensitive part of the R\&D process for firms. For producers many uncertainties revolve around whether their intervention can feasibly be tested. Under this proposal the funder gets control of the information that is generated, but assumes (some of) the burden of creating the testing infrastructure. This solution can also be thought about as an intermediate solution between push and pull funding—especially if the funder also covers some/all costs of the trial.

It’s important to add that while above I tried to give a specific example, this idea is not about a particular trial design, particular type of innovation, or a set number of firms.

At the same time, complex trials like in my example are not always needed, or even feasible. Continuing the example, if each of the five antivirals was developed at a different time, it would not be advisable to have a single shared control group due to time lags. (Although there are ways of working around this issue that are worth discussing separately.) More generally, sometimes an innovative design is counterproductive—e.g. when it imposes considerable overheads—and a traditional RCT is the best choice.

However, even when there is no need for any innovative elements, it may be best to avoid leaving the trials entirely to firms, for the following two reasons. First, many nascent technologies come from academic research teams or, in the biomedical field, from small biotechs. Neither of them tend to have enough expertise to run good trials. Second, harmonising trials (outcomes, measurements, inclusion/exclusion criteria) will make them more comparable.

To sum up, while firms have private information and expertise that usually means it’s good for them to be drivers of innovation, they (1) they may be less efficient at testing their innovations (insufficient know-how or lack of coordination), (2) have incentives against producing most publicly useful information (e.g. comparison with other technologies, dosing).

**(5) Why now is the right time to support joint design**

The idea of using innovative trial designs by public funders to address public good questions is not new. At start I mentioned RECOVERY, which in essence was a platform trial for repurposing treatments in a pandemic. Another trial embedded within the UK’s NHS, [STAMPEDE, is a multi-stage, multi-arm trial](https://www.nihr.ac.uk/story/stampede-turning-point-trial-design) that has been evaluating treatments for prostate cancer. Both have led to changes in treatment standards in the UK. [REFINE, a basket trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC7614585/), has been looking at dropping intensity for many cancer immunotherapies. Publicly-funded innovative trials like these can evaluate both new and existing treatments, at scale and speed that would not be possible otherwise.[^1]

**The new idea, one that I hope emerges in the coming years, is for market design innovation and trial design innovation to work together, or even be considered as a single problem. To put it more technically, embedded in each problem of how to optimally fund some innovation there is also an implicit optimal approach to testing if it really works. In this note I argued that this optimal approach is sometimes (but not always\!) quite distant from the current practice of largely leaving the testing to producers.**

I think the case for doing this has always been compelling, but this moment may be uniquely good in this historic moment. As I mentioned at the beginning of this note, I think the value of testing is going to increase, possibly very steeply, if AI is able to deliver many new candidate innovations. Therefore any improvements to evaluations will become increasingly valuable too.

If AI produces a lot of candidate innovations, our approach overall to testing may have to change wholesale, since we will increasingly be dealing with a large volume of candidates—all of which we would like to ideally compare head-to-head. That future may look increasingly like the case of checkpoint inhibitor therapies for cancer of 2010s. After the first of these drugs showed large benefits, many companies quickly developed new treatments—similar enough that they sometimes got called “me too” therapies. Each of these drugs came with hugely expensive trials, often fine-tuned to show narrow and marginal claims of advantage over competitors. They all looked great, but at the end of the day clinicians and payers did not know which one was needed in which situation (and dose, and combination).

The second point is that market shaping is a very natural fit for huge—and hugely ambitious—efforts that the [third wave of philanthropic funding](https://nanransohoff.substack.com/p/the-third-wave-of-american-philanthropy) will want to fund. With very large funding we should be thinking not only about ambitious innovations, but also about unlocking a centralised systems of testing. With additional funding much larger and more complex trials of public goods will become much more feasible. The sooner we start working on how to design them, the sooner we can reap their benefits.

*Thanks to MSA colleagues Leah Rosenzweig, Siddh Haria, Sarrin Chethik, as well as Colin Aitken, Saloni Dattani, Adam Kroetsch, Arthur Baker, Michael Kremer, and Adam Howes for making many great suggestions.*

## An extended example: far-UV lamps

**Example 1: active role in evidence generation for far-UV lamps**
Consider a funder of a pull mechanism for far-UV lamps, aimed at reducing transmission of infectious diseases. The mechanism can take the form of an advance market commitment where a number of large firms will purchase the lamps if they are proven to be efficacious.
However, no single entity may be able to design an RCT that reliably detects health impacts, because testing is prohibitively expensive, too difficult to implement, or does not have enough external validity.
By taking an active role in trial design and evidence synthesis, a large philanthropic funder may be able to combine (1) series of smaller RCT collecting comprehensive individual-level and environmental data (2) a mechanistic/prediction model for how disease spreads (e.g. based on lab studies of lamps and "room-scale physics" models) to evaluate health impacts (3) large scale observational studies from settings with air cleaning technologies, e.g. HEPA filters. Participating firms can commit to a tiered scale-up (combined with continued evaluation) based not on a single metric from a single RCT, but a synthetic metric of effectiveness.

*Market shaping and trial innovation will require a multidisciplinary approach. Most of the know-how on trial design can currently be found in clinical trials. Economists and policy experts involved in market design offer a perspective that is absent even in the best medical research organisations. In particular, they focus on decision problems—especially relevant when considering the question of when to scale up from pilot into large scale testing, which may involve synthesising public information and private results of several trials from different producers. They also tend to think in terms of value of information—relevant, for example, when dynamically allocating patients.*

[^1]:  To spell this out, the innovative designs don’t have to be limited to existing, already approved, drugs. Also, while it is no coincidence that these examples all come from the UK, which has a single payer system and great methodological expertise, there are some great examples of large basket, umbrella, and platform trials in the US that were funded by NIH and NCI.
