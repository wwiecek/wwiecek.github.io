---
title: FDA Guidance on Bayesian Clinical Trials
date: 2025-01-28
math: false
---

So, "FDA is Bayesian now!"?

Published originally [on Andrew's blog](https://statmodeling.stat.columbia.edu/2026/01/15/fda-guidance-on-bayesian-clinical-trials/).

![](/assets/img/post_content/fda_guidance.png)

The Food & Drug Administration just released a guidance for industry document on **"Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products"**:

> This draft guidance provides guidance to sponsors and applicants submitting investigational new drug applications (INDs), new drug applications (NDAs), biologics licensing applications (BLAs), or supplemental applications on the appropriate use of Bayesian methods in clinical trials. Bayesian methods can be used in various ways in clinical trials. For example, Bayesian calculations can be used to govern the timing and adaptation rules for an interim analysis in an adaptive design, to inform design elements (e.g., dose selection) for subsequent clinical trials, or to support primary inference in a trial. The primary focus of this guidance is on the use of Bayesian methods to support primary inference in clinical trials intended to support the effectiveness and safety of drugs.

[Find it here.](https://www.fda.gov/media/190505/download) It's not a very long read, about 20 pages of pretty accessible text.

I saw several people on Twitter talking it up, with someone claiming that "FDA is Bayesian now!". Well, apparently that level of analysis is the entry bar for punditry, so that instantly made me feel qualified.

More seriously though, I bet some of the readers will have interesting takes on this, so I thought it's good to post it and have a discussion in comments. From my side, I will try to give a short understanding of what such a document is and a few impressions.

---

First of all, what is a guidance document? The FDA issues and updates dozens of such documents every year. First time you encounter one, it is a bit entertaining, because it opens up with a Big Disclaimer stating not only that this sets out FDA's "thinking" and is not binding, but even all the way down to explaining the meaning of word "should". Why? Well, as a gov't agency the FDA sensibly doesn't want to give an impression of creating a law. More broadly, however, it wants to keep their options open in what they approve and what they don't.

But then why issue guidance at all? In some sense it is pharma companies that want to have their hands tied. Drug developers are very risk averse---and for a good reason. Given the scale of investment involved in clinical trials, high uncertainty, and timelines that can stretch into decades, producers just crave predictability. So instead of taking time to interact with the FDA to vet every trial decision, it's good to have a set of rules.

By the way, each FDA division can have its own guidance. This new one deals with drugs and vaccines. FDA released a [guidance for Bayesian stats in medical device clinical trials (PDF version)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-use-bayesian-statistics-medical-device-clinical-trials-pdf-version) back in 2010. This makes sense, these trials are quite different from drug or vaccine trials and people have used Bayesian techniques there for a long time, or so I'm told---I have not read that 2010 guidance (although I can report that the actual header for the doc says "baysian statistics", sic).

Is this related to the current US gov't and recent changes at the FDA? That's very unlikely. (Sorry to disappoint another Twitter commenter who concluded that "Trump admin is Bayesian".) When I [blogged about this three years ago](https://wwiecek.github.io/posts/bayes-fda/), the guidance was already scheduled to come out in 2025. Documents like this do take a long while to create.

---

Onto the document. As I said, I will just share a few impressions and hope that others will have more interesting comments. (Or I may also just write a second blog post on this.) Here is what jumps out scrolling through the doc:

1. There are some basic definitions to start with, but I don't think this matters much. It's interesting, however, to see what type of uses the guidance lists in the second section. That probably covers the type of trials that drug and vaccine developers want to run---or that the FDA would like to see more of.
2. The list of use cases has six categories, five of which are roughly about "borrowing": across clinical trial phases, across subpopulations of patients, across age groups (especially extrapolating to children), or across diseases. It's very nice that this general idea is broken down across several practical categories and given actual real-life examples in each. Lastly, there is a slightly different category of a problem, which is dose-finding, especially in cancer drugs, where you try to balance toxicity with drug's effect.
3. What about "fancier" adaptive types of trials? For example, trials where you add/remove treatment/dosages arms dynamically and seamlessly move across clinical trial phases. They are already covered elsewhere and the FDA is working on a separate broader guidance on "complex innovative designs". So I don't think there is too much about them here, although they are covered in discussion of priors.
4. Then there are sections on success criteria and operating characteristics, which set out how to design the trials. The first proposed approach to design is... "Calibration to Type I Error Rate". That does not sound encouraging! Frank Harrel had [a great short blog post](https://www.fharrell.com/post/hybrid/) that gave a practical example of a trial where mixing Bayesian and frequentist reasoning can lead to a mess. So at first glance this is a bit disappointing...
5. ...but right next the document talks about cases where sponsor and the FDA agree to not calibrate to Type I error. There is guidance on doing things more "Bayesianly": for example, there is even "Success Criteria Based on Benefit-Risk Assessment or Decision-Theoretic Approaches". "A decision-theoretic approach might include assessment of the potential negative consequences of approving an ineffective drug or of not approving an effective drug." That's very nice! However, at the same time it's also highly generic---the bit I just listed is limited to a single paragraph. It's hard for me to imagine someone just reading this and confidently concluding that they can build a trial around it.
   
   _OK, I am skimming at this point, as I think this is 1,000 words already. This will probably be a follow-up blog._

6. Then there is a long section on priors. There are many reassuring bits, because examples seem quite specific. There is a discussion of what should be considered in construction of priors. There is a discussion of "dynamic discounting". Pretty complex and detailed. But then in talking about borrowing, the guidance says: "Areas where informative priors have been most often proposed include pediatrics and rare diseases. Additional areas can be considered on a case-by-case basis, and FDA advises early discussion of such proposals with the Agency." Again, if this is on "case-by-case" basis, apart from two areas where we already are Bayesian, then a guidance does not seem very helpful.

---

So... is the FDA Bayesian now? Well, the real question should be, does a guidance document give trial designers enough confidence to run Bayesian clinical trials in situations where there is a rationale to run a Bayesian trial? Time will tell, for now there is probably a great "the guidance is directionally correct, but is it significant?" joke in there somewhere.
