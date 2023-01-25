---
layout: post
title:  "Water Treatment and Child Mortality: A Meta-analysis and Cost-effectiveness Analysis"
date:   2023-01-24
---
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

Cross-posting this from [a guest post I wrote for Andrew Gelman's blog](https://statmodeling.stat.columbia.edu/2023/01/25/water-treatment-and-child-mortality-a-meta-analysis-and-cost-effectiveness-analysis/).

I thought the readers of this blog would find [this pre-print](https://bfi.uchicago.edu/working-paper/2022-26/) interesting. It's a meta-analysis of how improving water quality can reduce child mortality by _a quarter_. If true, this has very large real-world implications, but there are of course statistical considerations of power, publication bias etc. So I thought that maybe some of you will have methodological comments and others may be interested in this finding. It also ties to a couple of follow-up posts I'd like to write on effective altruism and finding cost-effective interventions.

First, a word on why this is important. Globally, for each 1,000-births 37 children will die before age of 5. Thankfully this is already half of what it was in 2000. But that's still about 5 million deaths per year. One of the leading causes for death in children is diarrhea, caused by enteric infections. While chlorinating water[^chlor] is easy, inexpensive, and proven to remove pathogens from water, there are many countries where most people still don't have access to clean water.

[^chlor]:For simplicity I simply say "chlorination" but this may refer to chlorinating at home, at the point from which water is drawn, or even using a device in the pipe, if households have piped water which may be contaminated. Each of these will have different effectiveness (primarily due to how convenient it is to use) and costs. So differentiating between them is very important for a policy maker. But in this post I group all of this to keep things simple. There are also other methods of improving quality, e.g. filtration. If you're interested, this is covered in more detail in the meta-analyses that I link to. ] 

One way to argue for importance of clean water is to quantify its link to mortality. 
However, while there is now good experimental evidence for [reductions in diarrhea](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004794.pub3/full), making a link between clean water and mortality either requires either an additional, "indirect", model linking disease to deaths, which is hard,[^morb] or directly measuring deaths, which are rare (hence also hard)*.[^power]

[^power]:If you're aiming for 80% power to detect 10% reduction in mortality you will need RCT data on tens of thousands of children. Exact number of course depends on how high baseline mortality rate is in the studies.

[^morb]:Why is extrapolating from evidence on diarrhea into mortality hard? First, it is possible that reduction in severe disease is higher (in the same way that vaccine may not protect you from infection, but it will almost definitely protect you from dying). Second, clean water also has lots of other benefits, e.g. it likely makes children less susceptible to other infections, nutritional deficiencies, and also makes their mothers healthier (which could in turn lead to fewer deaths during birth). So while these are just hypotheses, it's hard a priori to say how a reduction in diarrhea would translate to a reduction in mortality.

In this new pre-print[^paper], together with my colleagues Michael Kremer, Steve Luby, Ricardo Maertens, and Brandon Tan we identify 53 RCTs of water quality treatments. Contacting the authors of each study resulted in 15 estimates that could be meta-analysed, with about 25,000 children. (Why only 15 out of 53? Apparently because the studies were not powered for mortality, each one of them contributing just a handful of deaths, in some cases the authors decided to not collect, retain or report deaths. Hence the need to contact them directly.)

[^paper]:Or, to be precise, an update to a version of this pre-print which we released in February 2022. If you happened to read the previous version of the paper, both main methods and results are unchanged, but we added extra publication bias checks, characterization of the sample and rewrote most of the paper for clarity.

We conduct a Bayesian meta-analysis of these 15 studies using a logit model and find _a 30% reduction in all-cause mortality_ (OR = 0.70, with a 95% interval 0.49 to 0.93), albeit with high (and uncertain) heterogeneity across studies, which means the predictive distribution for a new study has a considerably wider interval and sightly higher mean OR=0.75. This is to be expected considering we compare different types of interventions in different populations across a few decades.[^time]

[^time]:That last aspect of heterogeneity seems important, because some have argued that the impact of clean water may diminish with time. There is a trace of that in our data (see Supplement), but with 15 studies the power to test for this time trend is very low (which I show using a simulation approach).

The Bayesian analysis is implemented in [baggr](https://github.com/wwiecek/baggr), an R package that provides meta-analysis interface for Stan. There are some interesting methodological questions related to modeling of rare events, but repeating this analysis using frequentist methods (random-effects model on Peto OR has mean OR of 0.72) as well as various sensitivity analyses we could think of all lead to similar results. We also think that publication bias is unlikely. Still, perhaps there are things we missed.

Based on this we calculate about $3,000 cost per child death averted, or, in terms of DALYs, the cost is under $40. It's hard to convey how extremely cost-effective this is, but basically $40/DALY is on par with the most cost-effective child health interventions such as vaccinations.

Since the cost-effectiveness is potentially so high, there are obviously big real-world implications. Some funders have been reacting to the new evidence already. For example, some months ago [GiveWell](https://www.givewell.org/), an effective altruism non-profit that many readers will already be familiar with, conducted their own analysis of water quality interventions and in a "major update" of their assessment [recommended a grant of $65 million](https://blog.givewell.org/2022/04/06/water-quality-overview/) toward a particular chlorination implementation[^gw]. 

[^gw]:GiveWell's analysis included their own meta-analysis and led to more conservative estimates of mortality reductions. As I mention at the end of this post, this is something I will try to blog about separately. Their grant will fund [Dispensers for Safe Water](https://www.givingwhatwecan.org/charities/dispensers-for-safe-water), an intervention which gives people access to chlorine at the water source. GW's analysis also suggested a much larger funding gap in water qulity interventions, of about $350 million per year.

(GiveWell's assessment is an interesting case study in its own right and I hope to  blog about it separately in the next few days. Their analysis works with point estimates and then makes a series of internal and external validity adjustments to make it specific to countries they're interested in. They also combine it with the indirect evidence from diarrhea reductions which I mentioned. )

Of course in the longer term more RCTs will contribute to precision of this estimate (several are being worked on already), but generating evidence is a slow and costly process. In the short term the funding decisions will be driven by the existing evidence (and our paper is still a pre-print), so it would be fantastic to see if readers have comments on methods and its real-world implications.


