# Witold Więcek

_Bayesian statistician and researcher_ 

<!-- 3rd person bio (for presentations):

Witold Więcek is a researcher and a Bayesian statistician working in academia and pharmaceutical consulting. He works on applied problems in health care, health economics, development economics and epidemiology.

As a consultant for Certara, a global drug development consultancy, since 2014 Witold has worked in statistical modelling and project management roles for all major pharmaceutical companies, across many therapeutic areas and all clinical stages. Witold's work at Certara focuses on Bayesian modelling projects on real-world effectiveness of treatments, health technology assessment, and epidemiological modelling. His academic work is recently focused on impact of Covid, primarily with colleagues in academia at Accelerating HT (working with Nobel prize winner Michael Kremer), as well as developing Bayesian meta-analysis methods and tools together with Rachael Meager at London School of Economics where he was previously a Research Fellow.

Witold is a recipient of the Emergent Ventures anti-Covid prize and a multi-year research grant from Schmidt Futures (jointly with Rachael Meager) for work on Bayesian statistics. His academic background is in Mathematics (BSci, MSci at AGH), specialising in algorithmic theory, graph theory, probability. He holds a PhD in statistics from UHasselt, with a thesis on Bayesian hierarchical modelling and Bayesian networks. Witold lives in London.
-->

**Short bio:** I am an independent researcher, working with various universities, research groups and in private consulting. I work on applied problems in health care, health and development economics, epidemiology. I primarily do statistical inference using Bayesian methods. I'm based in London.

A lot of my recent work is focused on COVID, primarily with colleagues in academia at [Accelerating HT](https://www.acceleratinght.org/home) (working with a recent Nobel prize winner Michael Kremer). I've also been helping [1 Day Sooner](https://1daysooner.org/), a Covid human challenge trial advocacy group. I am also developing [Bayesian meta-analysis methods](https://github.com/wwiecek/baggr/) together with [Rachael Meager](https://sites.google.com/view/rachaelmeager/home) at London School of Economics where I was previously a Research Fellow. 

I am a consultant in health care at Certara, where since 2014 I worked on projects with all major pharma companies (both hands-on and managing projects) across all stages of clinical trial development. In my work in health I try to focus on improving Bayesian modelling techniques in three areas: modelling real-world effectiveness of treatments, health technology assessment (incl. meta-analyses), and epidemiological modelling of infectious diseases. 

Witold is a recipient of the [Emergent Ventures anti-Covid prize](https://www.mercatus.org/emergent-ventures) and a multi-year research grant from Schmidt Futures (jointly with Rachael Meager) for work on Bayesian statistics. 

I studied Mathematics (BSci, MSci at AGH), specialising in algorithmic theory, graph theory, probability. I hold a PhD in statistics from UHasselt. [My thesis](https://ibiostat.be/publications/phd/witoldwiecek.pdf) was on Bayesian hierarchical modelling and Bayesian networks.

[GitHub](https://github.com/wwiecek) | [LinkedIn](https://www.linkedin.com/in/witold-wiecek-308089126/) | [Google Schoolar](https://scholar.google.com/citations?user=r6uDNqEAAAAJ&hl=en&oi=ao)



## Some ongoing projects (summer 2020)

- **COVID-19 research** with [Accelerating HT](https://www.acceleratinght.org/home), mainly on epidemiological or Bayesian support for economic models of COVID-19 vaccines. The model that the group developed is available on the linked website.
- **Improving Bayesian meta-analysis methods** with special focus on economics
    + [baggr](https://github.com/wwiecek/baggr) is our R package for Bayesian meta-analyses and hierarchical models with [Stan](https://mc-stan.org/)
	+ The package is [available on CRAN](https://cran.r-project.org/web/packages/baggr/index.html) and updated regularly.
    + I gave [a short talk about baggr at StanCon 2020](https://www.youtube.com/watch?v=Lau2v6uHaKM). Download the slides [here](https://www.dropbox.com/s/l95t19bkiu3p6me/baggr_stancon_2020.pdf?dl=1) and the presentation notebook (code) [here](https://www.dropbox.com/s/lv3c9lie9e7wqxs/baggr_stancon_2020.Rmd?dl=1).
- **Modelling heterogeneity in treatment effects in a poverty alleviation program**, with Rachael Meager (LSE), Andrew Gelman (Columbia), Dean Karlan and Christopher Udry (Northwestern)
- COVID-19 modelling for evaluating pharmaceutical interventions; a Gates Therapeutics Accelerator/Certara project
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

Some other consulting work is not available publically.





## Some publications

My Hasselt PhD is available [online](https://ibiostat.be/publications/phd/witoldwiecek.pdf).

A complete list of my publications and posters is on [Google Schoolar](https://scholar.google.com/citations?user=r6uDNqEAAAAJ&hl=en&oi=ao) and [Research Gate](https://www.researchgate.net/profile/Witold_Wiecek).

* Wiecek, Witold, Jean-Lou Dorne, Nadia Quignot, Camille Bechaux, and Billy Amzal. ‘A Generic Bayesian Hierarchical Model for the Meta-Analysis of Human Population Variability in Kinetics and Its Applications in Chemical Risk Assessment’. Computational Toxicology 12 (November 2019): 100106. <https://doi.org/10.1016/j.comtox.2019.100106>.
* (arXiv only) Wiecek, Witold, Frederic Y. Bois, and Ghislaine Gayraud. ‘Structure Learning of Bayesian Networks Involving Cyclic Structures’. ArXiv:1906.04992 [Stat], 12 June 2019. <http://arxiv.org/abs/1906.04992>.
* Quignot, Nadia, Witold Wiecek, Billy Amzal, and Jean-Lou Dorne. _The Yin-Yang of CYP3A4: A Bayesian Meta-Analysis to Quantify Inhibition and Induction of CYP3A4 Metabolism in Humans and Refine Uncertainty Factors for Mixture Risk Assessment._ Archives of Toxicology, October 8, 2018. <https://doi.org/10.1007/s00204-018-2325-6>.
* Rajaram, Sankarasubramanian, Witold Wiecek, Richard Lawson, Betina T. Blak, Yanli Zhao, Judith Hackett, Robert Brody, Vishal Patel, and Billy Amzal. _Impact of Increased Influenza Vaccination in 2-3-Year-Old Children on Disease Burden within the General Population: A Bayesian Model-Based Approach._ PloS One 12, no. 12 (2017): e0186739. <https://doi.org/10.1371/journal.pone.0186739>.
* Rajaram, Sankarasubramanian, Witold Wiecek, Richard Lawson, Betina Blak, Yanli Zhao, Judith Hackett, Robert Brody, Tehseen Salimi, Billy Amzal, and Vishal Patel. _A Retrospective Observational Analysis of Post-Pandemic Influenza-Related Outcomes in the United Kingdom, 2010-2014._ Human Vaccines & Immunotherapeutics 14, no. 2 (01 2018): 368–77. <https://doi.org/10.1080/21645515.2017.1403696>.
* Schmidt, Elvira, Johanna Lister, Monika Neumann, Witold Wiecek, Shuai Fu, Anne-Lise Vataire, Jelena Sostar, Shengnan Huang, and Florence Marteau. _Cabozantinib Versus Standard-of-Care Comparators in the Treatment of Advanced/Metastatic Renal Cell Carcinoma in Treatment-Naïve Patients: A Systematic Review and Network Meta-Analysis._ Targeted Oncology 13, no. 2 (April 2018): 205–16. <https://doi.org/10.1007/s11523-018-0559-0>.
* Wiecek, Witold, and Helene Karcher. _Nivolumab versus Cabozantinib: Comparing Overall Survival in Metastatic Renal Cell Carcinoma._ PloS One 11, no. 6 (2016): e0155389. <https://doi.org/10.1371/journal.pone.0155389>.


