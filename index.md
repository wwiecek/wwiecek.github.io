# Witold Więcek

_Bayesian statistician and consultant --- London --- Research Fellow at **London School of Economics (STICERD)** --- Consultant at **Certara** (pharmacometric and health economic consulting) --- Scientific Collaborator at **Hasselt University** (Centre for Statistics)_ 

**Short bio:** I studied Mathematics (BSci, MSci, AGH Kraków), specialising in algorithmic theory, graph theory, probability. 
At Certara, I work on predictive, patient-level modelling of real world drug effectiveness, (network) meta-analyses, infectious disease models (influenza), survival analysis. 
At LSE, I work on Bayesian inference for modelling heterogeneity in treatment effects, including an R package development for evidence synthesis with Stan and a hierarchical model for a poverty alleviation study, with Andrew Gelman (Columbia University) and Dean Karlan (Northwestern Uni) as project advisors. 
I plan to defend my PhD, _Innovative methodology for Bayesian hierarchical modelling, with applications in biology and toxicology_, at Hasselt University in September 2019. 

links: [GitHub](https://github.com/wwiecek), [LinkedIn](https://www.linkedin.com/in/witold-wiecek-308089126/), CV



## Recent output/links (July 2019)

* Work with European Food Safety Authority (via Certara) on chemical risk assessment
    + Sept 2018: [EFSA Conference poster on TKPlate](https://drive.google.com/open?id=1aFVlBTc8oDMedJHXg9jj6rh2HpyHUi9D) (TK modelling GUI) 
    + 8 Feb 2019: [Seminar at Hasselt University Center for Statistics](https://www.dropbox.com/s/5pr4p7ct5bxc4c2/hasselt_seminar_8feb.html?dl=1) on meta-analyses in food/drug safety
    + Feb 2019: our paper on meta-analyses in submission to _Computational Toxicology_
    + 11 July 2019: [Workshop presentation at ISOP Paris](https://www.dropbox.com/s/i5grx70cmkmb0y0/paris_workshop_11july.pdf?dl=0)
* Modelling cyclical structures in Bayesian networks:
    * Jul 2019: paper in submission, pre-print available at [arXiv](<https://arxiv.org/abs/1906.04992>) 
    * May 2019: *graph_sampler* has been ported to R (still work in progress): see [here](<https://github.com/wwiecek/rgraphsampler>)
* Jan 2018: Short presentation on [real world evidence in pharma research & medical publishing](https://drive.google.com/open?id=1sX87rBcz6UvoWoiEW0of2KaswV2O2BaH), from a discussion panel at European meeting for International Society for Medical Publication Professionals (via Analytica Laser/Certara)



## Ongoing projects in the public domain

* [baggr](https://github.com/wwiecek/baggr) with [Rachael Meager (LSE)](https://sites.google.com/view/rachaelmeager/home); R package for meta-analyses with Stan; not yet on CRAN 
* [graph_sampler](http://www.nongnu.org/graphsampler/) with Frederic Bois (INERIS) and Ghislaine Gayraud (UTC Compiegne); open-source (GNU Savannah) software in C for inferring Bayesian network structure, including efficient MCMC sampler over discrete space of graphs; also an [R package](<https://github.com/wwiecek/rgraphsampler>)
* [httkgui/TKPlate](https://zenodo.org/record/2548850) with European Food Safety Authority; R package including Shiny app - a raw prototype for a graphical user interface for running generic toxicokinetic models, including ODE TK models in C; also on my GitHub
* [survivalnma](<https://github.com/certara/survivalnma>) is a limited release of an R package I built internally at Certara for network meta-analyses of survival data (such as occurs in oncology), aimed at improving health technology assessment models



## Publications 2016-2018

* Quignot, Nadia, Witold Wiecek, Billy Amzal, and Jean-Lou Dorne. _The Yin-Yang of CYP3A4: A Bayesian Meta-Analysis to Quantify Inhibition and Induction of CYP3A4 Metabolism in Humans and Refine Uncertainty Factors for Mixture Risk Assessment._ Archives of Toxicology, October 8, 2018. <https://doi.org/10.1007/s00204-018-2325-6>.
* Rajaram, Sankarasubramanian, Witold Wiecek, Richard Lawson, Betina T. Blak, Yanli Zhao, Judith Hackett, Robert Brody, Vishal Patel, and Billy Amzal. _Impact of Increased Influenza Vaccination in 2-3-Year-Old Children on Disease Burden within the General Population: A Bayesian Model-Based Approach._ PloS One 12, no. 12 (2017): e0186739. <https://doi.org/10.1371/journal.pone.0186739>.
* Rajaram, Sankarasubramanian, Witold Wiecek, Richard Lawson, Betina Blak, Yanli Zhao, Judith Hackett, Robert Brody, Tehseen Salimi, Billy Amzal, and Vishal Patel. _A Retrospective Observational Analysis of Post-Pandemic Influenza-Related Outcomes in the United Kingdom, 2010-2014._ Human Vaccines & Immunotherapeutics 14, no. 2 (01 2018): 368–77. <https://doi.org/10.1080/21645515.2017.1403696>.
* Schmidt, Elvira, Johanna Lister, Monika Neumann, Witold Wiecek, Shuai Fu, Anne-Lise Vataire, Jelena Sostar, Shengnan Huang, and Florence Marteau. _Cabozantinib Versus Standard-of-Care Comparators in the Treatment of Advanced/Metastatic Renal Cell Carcinoma in Treatment-Naïve Patients: A Systematic Review and Network Meta-Analysis._ Targeted Oncology 13, no. 2 (April 2018): 205–16. <https://doi.org/10.1007/s11523-018-0559-0>.
* Wiecek, Witold, and Helene Karcher. _Nivolumab versus Cabozantinib: Comparing Overall Survival in Metastatic Renal Cell Carcinoma._ PloS One 11, no. 6 (2016): e0155389. <https://doi.org/10.1371/journal.pone.0155389>.



## Posters

_(I included only the posters that were abstracted in literature.)_

__2018-2019__

* Wiecek, Witold, Nadia Quignot, Billy Amzal, and Jean-Lou Dorne. TKPlate: R Package Prototype for TK Models Graphical Interface. Zenodo, 2019. <https://doi.org/10.5281/zenodo.2548850>.
* Dorne, J. -L. C. M., B. Amzal, N. Quignot, W. Wiecek, A. Grech, C. Brochot, R. Beaudouin, et al. “Reconnecting Exposure, Toxicokinetics and Toxicity in Food Safety: OpenFoodTox and TKplate for Human Health, Animal Health and Ecological Risk Assessment.” Toxicology Letters, ABSTRACTS of the 54th Congress of the European Societies of Toxicology (EUROTOX 2018) TOXICOLOGY OUT OF THE BOX Brussels, Belgium, 2nd – 5th of September, 2018, 295 (October 10, 2018): S29. <https://doi.org/10.1016/j.toxlet.2018.06.1128>.
* Dorne, J. -L. C. M., B. Amzal, N. Quignot, W. Wiecek, C. Bechaux, K. Darney, A. Grech, et al. “Developing TK Databases and Tools to Support Food Safety Assessment.” Toxicology Letters, ABSTRACTS of the 54th Congress of the European Societies of Toxicology (EUROTOX 2018) TOXICOLOGY OUT OF THE BOX Brussels, Belgium, 2nd – 5th of September, 2018, 295 (October 10, 2018): S5–6. <https://doi.org/10.1016/j.toxlet.2018.06.023>.



__2015-2017__

- Amzal, B., W. Wiecek, T. Obadia, and F. Benzaghou. _Interval-Censored Survival Data Analysis: Learnings From Phase Iii Trial In Prostate Cancer._ Value in Health 19, no. 3 (May 1, 2016): A98–99. <https://doi.org/10.1016/j.jval.2016.03.1711>.
- Karcher, H., W. Wiecek, M. Nikodem, E. Voss, A. Sena, and S. Cepeda. _A NEW TOOL TO AUTOMATE NETWORK META-ANALYSES OF STUDIES EXTRACTED FROM CLINICALTRIALS.GOV._ Value in Health 19, no. 3 (May 1, 2016): A91. <https://doi.org/10.1016/j.jval.2016.03.1823>.
- Wiecek, W., B. Amzal, S. Bakshi, V. Patel, and T. Van Staa. _Age Related Consultation Rates of Clinically-Diagnosed Influenza And Acute Respiratory Illnesses Observed Through A Network of Gp Practices Across England._ Value in Health 18, no. 7 (November 1, 2015): A579. <https://doi.org/10.1016/j.jval.2015.09.1931>.
- Wiecek, W., and H. Karcher. _Comparing Cost-Effectiveness Of Emerging Drugs In Advanced Cancer Without Hazard Ratios For Progression._ Value in Health 18, no. 7 (November 1, 2015): A688. <https://doi.org/10.1016/j.jval.2015.09.2551>.
- Wiecek, W., H. Karcher, B. Amzal, A. Beyer, T. Hoekstra, B. Fasolo, and J. L. Hillege. _Impact of Drug’s Presentation on Patients’ Perception of Treatment’s Risks & Benefits Through New Ordinal Gee Modelling Method: Results from Imi Protect Wp6._ Value in Health 18, no. 7 (November 1, 2015): A484–85. <https://doi.org/10.1016/j.jval.2015.09.1326>.
- Wiecek, W., M. Nikodem, and H. Karcher. _Meta-Analyses Of Overall Survival In Metastatic Renal Cell Carcinoma._ Value in Health 19, no. 3 (May 1, 2016): A140. <https://doi.org/10.1016/j.jval.2016.03.1660>.
- Karcher, H., W. Wiecek, R. Casciano, E. Coeytaux, S. Bixer, B. Amzal, and L. Abenhaim. _Evaluating the Impact of PCSK9 Inhibitors on Cardiovascular Disease._ Value in Health 20, no. 9 (October 1, 2017): A630. <https://doi.org/10.1016/j.jval.2017.08.1404>.
