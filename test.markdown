---
layout: page
permalink: /projects/
---

Last updated Jan 2023.

- **Clean water interventions and child survival, a meta-analysis** [working paper](https://bfi.uchicago.edu/working-paper/2022-26/) with Michael Kremer, Stephen Luby, Ricardo Maertens, Brandon Tan. We estimate a possible reduction in child mortality of 25% from improving water quality in low and middle-income countries.
- **Fractional dosing of Covid vaccines** a [PNAS paper](https://www.pnas.org/doi/10.1073/pnas.2116932119) making the case for giving smaller doses of vaccine 

- **Accelerating Covid-19 vaccines** with colleagues in economics
	+ 2022: [Testing fractional doses of COVID-19 vaccines](https://www.pnas.org/doi/10.1073/pnas.2116932119) argues for more testing and use of lower doses of COVID-19 vaccines 
    + 2021: a [paper in Science](https://science.sciencemag.org/content/371/6534/1107.summary) summarises work on how market design could accelerate the vaccine supply
- **Risk of Covid-19 Human Challenge Trials**, with [1 Day Sooner](https://1daysooner.org/). I helped 1DS to [write a paper](https://onlinelibrary.wiley.com/doi/full/10.1111/risa.13726), which looks at risk of hospitalisation and death for HCT volunteers. There is also an [interactive tool](https://www.1daysooner.org/risk-model).
- **Improving Bayesian meta-analysis methods**, particularly with focus on users in social sciences
    + [baggr](https://github.com/wwiecek/baggr) is our R package for Bayesian meta-analyses and hierarchical models that makes fitting [Stan](https://mc-stan.org/) models more user-friendly
	+ The package is [available on CRAN](https://cran.r-project.org/web/packages/baggr/index.html) and updated regularly.
    + I gave [a short intro to baggr at StanCon 2020](https://www.youtube.com/watch?v=Lau2v6uHaKM). Slides [here](https://www.dropbox.com/s/l95t19bkiu3p6me/baggr_stancon_2020.pdf?dl=1), presentation notebook (code) [here](https://www.dropbox.com/s/lv3c9lie9e7wqxs/baggr_stancon_2020.Rmd?dl=1).
- **Modelling heterogeneity in treatment effects in a poverty alleviation program**, with Rachael Meager (LSE), Andrew Gelman (Columbia), Dean Karlan and Christopher Udry (Northwestern)

## Publications

See on [Google Scholar](https://scholar.google.com/citations?user=r6uDNqEAAAAJ&hl=en). 

I'm also on [Research Gate](https://www.researchgate.net/profile/Witold_Wiecek) for some reason. 

My PhD (Hasselt University) on Bayesian hiererchical modeling is available [online](https://ibiostat.be/publications/phd/witoldwiecek.pdf).

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
	
