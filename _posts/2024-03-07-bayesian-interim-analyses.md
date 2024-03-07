---
title: Bayesian interim analyses in clinical trials
date: 2024-03-07
math: false
---

These are some basic notes that explain the idea of Bayesian interim analysis in clinical trials in plain language, contrasting it to the frequentist idea. These notes are very simplistic by design, but I provide links at the end that go into more detail and give examples.

Let's say I am running a vaccine trial. In a typical situation, the statistical analysis is supposed to be triggered at some predefined number of cases. Once enough cases have accrued, I will I calculate some statistical quantity of interest and test it "against" some hypothesis: e.g. vaccine effectiveness is greater than 0. I then calculate a p-value, asking if more extreme values of the tested quantity could have been generated "by chance", i.e. under the null effect. This is the type 1 error. If this chance is small, that means "I'm onto something" aka my result is "significant". This is null hypothesis significance testing, of course.

Crucially, this reasoning only works if I make a reference to what could have happened. This hypothetical is what leads to penalties/adjustments for making more tests: more often I look at data, the more chances I there are for data to assume extreme values (and reject the null). Interim analysis, i.e. looking at my data multiple times throughout the trial, is one such example. If I decided to conduct some interim analyses, subgroup testing, or look at multiple outcomes, I would need to be more stringent in choosing the p-values. Fortunately, frequentist statistics deals with these types of adjustments on a regular basis, so there are consistent rules for how much to penalise myself for these extra looks.

In contrast to this, Bayesian methods do not require such adjustments. Bayesian clinical trialist would simply ask if the effect is real (conditional on the prior belief), without needing to refer to what could have happened in infinite number of hypothetical trials. In other words, Bayesians calculate probability of effect; frequentists calculate probability of data. Of course our _belief_ about what the effect is changes with more data, but there is only one true effect and that effect is not affected by how many times we measure it. 

This core philosophical difference between the two approaches has big practical consequences. Bayesians can evaluate their hypotheses, however defined, at any moment in the study, even day 1, and do it as often as they want, too. The only thing they have to do is to commit to their prior before conducting the study. Moreover, Bayesian inference simplifies (in a certain sense) not only interim analyses, but also various adaptive notions, [which I wrote about briefly elsewhere](https://wwiecek.github.io/posts/bayes-fda/).

The terms "interim" and "final" analysis, as they are used, may in fact obfuscate the purpose of statistical analysis altogether. The decision maker cares about vaccine effectiveness, period, not vaccine effectiveness once prespecified number of cases have accrued. This pre-specification is to meet some technical criteria and to avoid cheating, but ideally we would continue collecting data for as long as feasible and make use of all of it.

Is any of this of practical importance in the real world? Unfortunately, usually the answer is no. First of all, purely in terms of final analysis, the Bayesian and frequentist results will coincide, with exception of cases where a (very) strong prior would be used. That is good, of course! But what about the interim analyses, stopping rules etc? If the decision maker, e.g. the FDA, is frequentist (and they all are), they will expect the researcher to control for type 1 error anyway, that is, to penalise for multiple looks. So this mixes two concepts that should not be mixed, Bayesian inference and frequentist decision making. But that is simply the current reality of (late-stage) clinical trials.[^adj] This confusion probably nullifies the benefits of going Bayesian. [Frank Harrell wrote up a short practical example](https://www.fharrell.com/post/hybrid/) of a Bayesian trial that was not significant, despite probability of efficacy being 96%. This may get better with time: in my other blog post ([Bayesian clinical trials and the FDA](https://wwiecek.github.io/posts/bayes-fda/)) I wrote about how this may change in the coming years. 

[^adj]:To give a full picture, we should distinguish between stopping trial for futility (unlikely that the desired effect can be obtained) and for efficacy (the opposite holds). If the stopping rule is just about futility, then no adjustment for type 1 error in a Bayesian trial is needed. Ryan et al explain it very nicely.

## Some further reading

Textbook-length this is covered by Spiegelhalter and Berry, but for a blog/article length materials that may be of interest:

- Best overview of advantages of Bayesian approach: [Statistical Thinking - Continuous Learning from Data: No Multiplicities from Computing and Using Bayesian Posterior Probabilities as Often as Desired (fharrell.com)](https://www.fharrell.com/post/bayes-seq/#introduction)
- How numbers of cases are determined in trial design, a simple explanation: [Full article: Statistical Observations on Vaccine Clinical Development for Pandemic Diseases (tandfonline.com)](https://www.tandfonline.com/doi/full/10.1080/19466315.2021.1919197?casa_token=tqdGo8J3_0AAAAAA%3APl_WQlOCGluMKikNPcTK-B8lRpilo_iJ6UMXcDfSZHgF4A6LTyAsamaTfCIWKlVPvgHW1qZ6Uju0Pw)
- Comments on Pfizer's COVID-19 vaccine which used Bayesian analysis by Stephen Senn: [The design and analysis of vaccine trials for COVID‐19 for the purpose of estimating efficacy - PMC (nih.gov)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9350415/)
- Ryan et al: [Do we need to adjust for interim analyses in a Bayesian adaptive trial design? | BMC Medical Research Methodology (springer.com)](https://link.springer.com/article/10.1186/s12874-020-01042-7) (the answer is yes)
