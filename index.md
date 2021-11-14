# Witold Więcek

_Bayesian statistician and researcher_ 

<!-- 3rd person bio (for presentations, focus on medical crowd):

Witold Więcek is a researcher and a Bayesian statistician working in academia and pharmaceutical consulting. He works on applied problems in health care, health economics, development economics and epidemiology.

As a consultant for Certara, a global drug development consultancy, since 2014 Witold has worked in statistical modelling and project management roles for all major pharmaceutical companies, across many therapeutic areas and all clinical stages. Witold's work at Certara focuses on Bayesian modelling projects on real-world effectiveness of treatments, health technology assessment, and epidemiological modelling. His academic work is recently focused on impact of Covid, primarily with colleagues in academia at Accelerating HT (working with Nobel prize winner Michael Kremer), as well as developing Bayesian meta-analysis methods and tools together with Rachael Meager at London School of Economics where he was previously a Research Fellow.

Witold is a recipient of the Emergent Ventures anti-Covid prize and a multi-year research grant from Schmidt Futures (jointly with Rachael Meager) for work on Bayesian statistics. His academic background is in Mathematics (BSci, MSci at AGH), specialising in algorithmic theory, graph theory, probability. He holds a PhD in statistics from UHasselt, with a thesis on Bayesian hierarchical modelling and Bayesian networks. Witold lives in London.
-->

<!-- SHORTER VERSION THAT IS OK FOR DEV ECON WORK:

Witold Więcek is a researcher and a Bayesian statistician working on applied problems in health, development economics, and epidemiology.

As a scientific consultant in drug development, Witold has worked in statistical modelling on real-world effectiveness of treatments, health technology assessment, and epidemiological modelling. His academic work is currently focused on the impact of Covid and health interventions with colleagues at DIL UChicago, as well as developing Bayesian meta-analysis methods and tools together with Rachael Meager at London School of Economics, where he was previously a Research Fellow.

Witold is a recipient of the Emergent Ventures anti-Covid prize and a multi-year research grant from Eric Schmidt (ex-Google CEO; awarded jointly with Rachael Meager) for work on Bayesian statistics.
-->

**Short bio:** I work on applied problems in development economics, health, and epidemiology. 
I do grant-funded and consultancy work with various universities and research groups, as well as private consulting. I have a PhD in statistics, with focus on biostatistics and Bayesian methods. I am a recipient of the [Emergent Ventures anti-Covid prize](https://www.mercatus.org/emergent-ventures) (2020) and a multi-year research grant from [Schmidt Futures](https://schmidtfutures.com/) (2019-2021, jointly with Rachael Meager) for work on Bayesian statistics and evidence synthesis.

A lot of my recent work is focused on COVID-19, primarily with colleagues in academia at [Accelerating HT](https://www.acceleratinght.org/home) (working with a recent Nobel prize winner Michael Kremer). I've also been a statistics and modeling advisor for [1 Day Sooner](https://1daysooner.org/), a Covid human challenge trial advocacy group. In addition to COVID work, I am developing [Bayesian meta-analysis methods](https://github.com/wwiecek/baggr/) together with [Rachael Meager](https://sites.google.com/view/rachaelmeager/home) at London School of Economics where I was previously a Research Fellow. 

As a consultant in health care at Certara, since 2014 I worked in all stages of drug development, with focus on improving Bayesian modelling techniques for real-world effectiveness of treatments, health technology assessment (incl. meta-analyses), and transmission of infectious diseases. 

<!-- I studied Mathematics (BSci, MSci at AGH), specialising in algorithmic theory, graph theory, probability. I hold a PhD in statistics from UHasselt. [My thesis](https://ibiostat.be/publications/phd/witoldwiecek.pdf) was on Bayesian hierarchical modelling and Bayesian networks. -->

[GitHub](https://github.com/wwiecek) | [LinkedIn](https://www.linkedin.com/in/witold-wi%C4%99cek-308089126) | [Google Schoolar](https://scholar.google.com/citations?user=r6uDNqEAAAAJ&hl=en)

## Some ongoing projects and papers (summer 2021)

- **Accelerating Covid-19 vaccines** with colleagues in econ, mainly at Development Innovation Lab at University of Chicago. 
	+ June 2021: [Working paper on dose "stretching" of COVID vaccines](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3864485) argues for testing and use of lower doses of currently available vaccines 
    + March 2021: a [paper in Science](https://science.sciencemag.org/content/371/6534/1107.summary) summarises our work on how market design could accelerate the vaccine supply
- **Risk of Covid-19 Human Challenge Trials**, with [1 Day Sooner](https://1daysooner.org/). I helped 1DS to [write a paper](https://onlinelibrary.wiley.com/doi/full/10.1111/risa.13726), which looks at risk of hospitalisation and death for HCT volunteers. There is also an [interactive tool](https://www.1daysooner.org/risk-model).
- **Improving Bayesian meta-analysis methods**, particularly with focus on users in social sciences
    + [baggr](https://github.com/wwiecek/baggr) is our R package for Bayesian meta-analyses and hierarchical models that makes fitting [Stan](https://mc-stan.org/) models more user-friendly
	+ The package is [available on CRAN](https://cran.r-project.org/web/packages/baggr/index.html) and updated regularly.
    + I gave [a short intro to baggr at StanCon 2020](https://www.youtube.com/watch?v=Lau2v6uHaKM). Slides [here](https://www.dropbox.com/s/l95t19bkiu3p6me/baggr_stancon_2020.pdf?dl=1), presentation notebook (code) [here](https://www.dropbox.com/s/lv3c9lie9e7wqxs/baggr_stancon_2020.Rmd?dl=1).
- **Modelling heterogeneity in treatment effects in a poverty alleviation program**, with Rachael Meager (LSE), Andrew Gelman (Columbia), Dean Karlan and Christopher Udry (Northwestern)



## Some older projects (2019-2020)

- **Cyclical structures in Bayesian networks** using [graph_sampler](http://www.nongnu.org/graphsampler/), with Frederic Bois (INERIS/Certara) and Ghislaine Gayraud (UTC Compiegne)
    + Theory paper is in submission, pre-print available at [arXiv](<https://arxiv.org/abs/1906.04992>) 
    + Dec 2019: [a talk on the cyclical structures in graph_sampler at CMStatistics 2019](https://www.dropbox.com/s/5848p24vy2942ap/ercim_wwiecek_graph_sampler.pdf?dl=1) conference in London
    + May 2019: *graph_sampler* has been ported to R (still work in progress): see [here](<https://github.com/wwiecek/rgraphsampler>)
	+ graph_sampler is open-source (GNU Savannah) software written by F. Bois in C; it can be used for inferring Bayesian network structure, and includes an efficient MCMC sampler over discrete space of graphs
	
- **Supporting chemical risk assessment with Bayesian modelling and meta-analysis methods**: work, at Certara, with European Food Safety Authority
    + Mini git repository for this model is [on GitHub](https://github.com/wwiecek/bayesian-ma-risk). Happy to share more code if anyone needs it, please contact me.
    + Nov 2020: short presentation of the model included in _Computational Toxicology_ paper at ACoP11, slides [here](https://github.com/wwiecek/bayesian-ma-risk/blob/master/acop_presentation_5oct2020.pdf) 
    + Apr 2020: Submitted a third paper in the series on using the Bayesian methods for RA meta-analysis
    + Sept 2019: Second (theory) paper has been published in _Computational Toxicology_: see the citation below
    + 11 July 2019: [Workshop presentation at ISOP Paris](https://www.dropbox.com/s/i5grx70cmkmb0y0/paris_workshop_11july.pdf?dl=0)
	+ 8 Feb 2019: [Seminar at Hasselt University Center for Statistics](https://www.dropbox.com/s/5pr4p7ct5bxc4c2/hasselt_seminar_8feb.html?dl=1) on meta-analyses in food/drug safety
    + Sept 2018: [EFSA Conference](https://drive.google.com/open?id=1aFVlBTc8oDMedJHXg9jj6rh2HpyHUi9D) (TK modelling GUI -- poster)
	+ [httkgui/TKPlate](https://zenodo.org/record/2548850) R package including Shiny app - a raw prototype for a graphical user interface for running generic toxicokinetic models

- **Improving network meta-analysis for survival curves**
    + [survivalnma](<https://github.com/certara/survivalnma>) is a limited release of an R package I built internally at Certara for network meta-analyses of survival data (typical in oncology), aimed at improving health technology assessment with Bayesian models that are a bit more user-friendly
	+ A methods poster is available within the repo.
	
## Publications

See on [Google Schoolar](https://scholar.google.com/citations?user=r6uDNqEAAAAJ&hl=en). I'm also on [Research Gate](https://www.researchgate.net/profile/Witold_Wiecek). My PhD (Hasselt University) on Bayesian hiererchical modeling is available [online](https://ibiostat.be/publications/phd/witoldwiecek.pdf).
