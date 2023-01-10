---
layout: post
title:  "A few comments on cost-effectiveness of water quality interventions"
date:   2023-01-10
---

Here are some extra notes and details on [GiveWell's](https://www.givewell.org/) [Change Our Mind](https://blog.givewell.org/2022/12/15/change-our-mind-contest-winners/) entry on cost-effectiveness of water quality interventions by Matthew Romer and Paul Romer Present (MRPRP henceforth). Their entry is [here](https://forum.effectivealtruism.org/posts/6cJM2pWH8dz9TnBRy/an-examination-of-givewell-s-water-quality-intervention-cost ).

I won't summarise the article as it already has a very nice and short abstract. The relevant result that I want to focus here is that they estimate a decrease in dispensers for safe water (DSW) but not in-line chlorination (ILC) cost-effectiveness:

>Using our updated approach, the cost-effectiveness of in-line chlorination falls by 0.21% and the cost-effectiveness estimate of Dispensers for Safe Water falls by 23%.

This difference is attributable to several factors (see Fig 2 in MRPRP entry), but for this exploration I care about the adjustment to deaths only. (This is the factor pulling the DSW estimates downwards and I am not competent to talk about other parts of their analysis.)
For deaths, their calculation uses a new approach, which combines updated meta-analysis[^ma], aka _Direct approach_, and  the _Indirect approach_ (what was the "plausbility cap" for GW)  using a probabilistic calculation.

[^ma]: They do not change the approach to meta-analysis of mortality reductions. It's still a fixed-effects analysis (compared to random-effects model in our meta-analysis, Kremer et al. 2022). But that's for another time.

All of the relevant references (links to GW's and their calculations) are at the end.

## Looking at the spreadsheet and calculations

- Main inputs into the new analysis of are not much changed and if they are, they change in favour of water interventions:
	- They get a larger number than GW: "Pooled relative risk is now 0.81, compared to 0.86 originally"
	- For indirect approach, "Diarrhea RR, adjusted is now 0.82, compared to 0.81 originally"
	- Moreover, "Internal validity adjustment for over-5 mortality is now 0.46-0.56, compared to 0.51 originally"
- However, they still get a more negative result
	- For example, for Kenya DSW (which will be my running example), GW started with meta-analysis estimate of 6.1% reduction, falling down to 5.6% after adjustments. Under this new analysis, they start with meta-analysis estimate of 8.4% but it falls to 4.6%. 
	- Hence mortality effects estimated under MRPRP analysis can be ~10-20% lower than the original adjusted values that GW used.
	- There is also a (slightly lower) drop for ILC, but in this case the subsequent adjustments compensate for this lower mortality estimate.
- The reason for the difference is mainly the new probabilistic analysis, i.e. how direct and indirect evidence is combined.
- In other words, the mortality estimate (direct evidence) gets pulled away from 0.81 toward 0.89. To understand why it's necessary to look at the model they use closely.
	- This is essentially in [this part ](https://docs.google.com/spreadsheets/d/1BnuHlq4b0NSDjDmcEZ-79gjqrsQdi89zVn4ifSkPQ5k/edit#gid=798836071)of the spreadsheet and GitHub code [here](https://github.com/secondhandmaps/WQ-CEA-Analysis/blob/main/stan_model_for_water_quality_v3.stan).
	- Adjustments around direct effect (mortality model) are plausible and would on their own not lead to a decrease in DSW's effect. It is therefore due to indirect effects (morbidity) model.

I will now quickly compare the GW and MRPRP approach to indirect evidence.

## Indirect approach in GW's case

Calculations for this are captured in "internal validity adjustments" in GW spreadsheet ([Water quality CEA (ILC and DSW) (public) - Google Sheets](https://docs.google.com/spreadsheets/d/1dxRfhPnTBJ_UYAeoAyVd8u6Orxh4pR9hB3wvdfZcXFs/edit#gid=62665356)). GW assumes the following ([Mortality plausibility modeling (public) - Google Sheets](https://docs.google.com/spreadsheets/d/1TGlqAp3aZvsG8lagYajP1h27z_nN-4flLsHVhQrhDMU/edit#gid=2078125475))

>"All infectious diseases and nutritional deficiencies are affected. X% reduction in mortality.  Half of "other nonatal disorders" are directly or indirectly related to infection (my very rough assumption), so these are reduced by X/2%." 	

Calculation of plausibility cap $PC$ then proceeds as follows (this is my notation):

$$PC = S*(1-RR)*IV*EV$$

- $S$: share of all-cause GBD mortality that could be linked to morbidity affected by water
- $RR$: risk reduction in Clasen et al. meta-analysis of diarrhea reductions
- $IV$: internal validity adjustment[^1]
- $EV$: external validity adjustment (in case of Kenya DSW just adherence)

Hence $(1-RR)*IV*EV$ corresponds to morbidity reduction. In the case of Kenya DSW[^kenyadsw] the numbers are:

$$68.6\% * (1-0.81) * 0.9 * 0.49 = 68.6\% * 8.6\% = 5.6\%.$$

[^1]: They say: "This is a general internal validity adjustment for limitations of the trials included in the Clasen et al. 2015 meta-analysis, which is the basis for our mortality reduction estimate.  We correct for self-report bias separately, so this reflects our rough guess of the degree to which the effect size estimate is overestimated for other reasons.  We have not put much thought into this adjustment because morbidity only makes up a small share of total benefits." see [cell E3](https://docs.google.com/spreadsheets/d/1dxRfhPnTBJ_UYAeoAyVd8u6Orxh4pR9hB3wvdfZcXFs/edit#gid=1674952052)

[^kenyadsw]: Cell B12 in this sheet: [Water quality CEA (ILC and DSW) (public) - Google Sheets](https://docs.google.com/spreadsheets/d/1dxRfhPnTBJ_UYAeoAyVd8u6Orxh4pR9hB3wvdfZcXFs/edit#gid=1674952052)



## MRPRP calculation using indirect approach

Following the same formula for morbidity reduction but using [the new calculation](https://docs.google.com/spreadsheets/d/1BnuHlq4b0NSDjDmcEZ-79gjqrsQdi89zVn4ifSkPQ5k/edit#gid=255622053) we'd get:

$(1-RR)*IV*EV = (1-0.78) * 0.9 * 0.52 = 10.2\%$

So this is higher than GiveWell (10.2% vs 8.6%). However, rather than multiplying this by $S$ (68.6%), this will now be subject to statistical model.
NB the analysis itself introduces additional factors and adjustments, e.g. relationship between morbidity and mortality reductions (see [this sheet](https://docs.google.com/spreadsheets/d/1BnuHlq4b0NSDjDmcEZ-79gjqrsQdi89zVn4ifSkPQ5k/edit#gid=254577142)). These adjustments seem to me similarly arbitrary to GW's adjustments (not in a bad way) and in any case I am not enough of an expert to comment on them.

The crucial change seems to be that MRPRP interpret the GW's plausibility cap on share of deaths affected as "2SDs away from the mean". Important to cite this verbatim:

>Mills-Reincke effect: Modeled as the fraction of all deaths that the X% reduction in mortality applies to. Normal distribution with mean equal to the sum of deaths due to enteric infections, respiratory infections, and a quarter of other infections and nutritional deficiencies, and standard deviation such that "Assumption 4" in GiveWell's mortality plausibility modeling is 2 standard deviations above the mean.

In the case of Kenya DSW this means $S$ has a mean of 42% and a 95% interval from 21% to 67%, compared to the 68.6% in GW's cap.

While other adjustments are made by the authors, if we used the previously mentioned formula, $PC$ = $S*(1-RR)*IV*EV$, we get average reduction using indirect evidence of

$42\% * (1-0.78) * 0.9 * 0.52 = 4.3\%$ 

(Once again, this is not how the calculation is done exactly, but it serves as an illustration.)

This estimate of 4.3% reduction is then averaged (probabilistically) with estimate of deaths avoided from direct approach. The combined estimate (incorporating the direct approach, i.e. meta-analysis on mortality) for Kenya DSW is 4.6%.

Just to reiterate: __where GW calculated the "plausibility cap", the authors here interpret it as the upper bound of a probabilistic quantity and then incorporate it directly into the model. This is likely what drives down the overall effect, although I'd have to look closer at other adjustments.__


## But what happens if we assume more deaths could be affected?

After looking at this model I was interested in how uncertainty in the new assumptions drives the estimates. So I made one basic type of modification to the new analysis. Rather than assume Gaussian distribution on $S$ with mean of 42% and SD set to about 12% (mean + 2SD = 68%, GW's plausibility cap)^[The parameter I'm talking about is `frac_of_deaths_impacted_base` in MRPRP Stan code], I did the following: 

(Remember that GW's original estimate for Kenya DSW was 5.6% reduction, this new analysis got 4.6%.)

1. Used same mean and SD, but instead of Gaussian I assumed a Student's T distribution (df=1), obtaining 5.1%.
2. Used Gaussian with the same mean, but doubling the SD to 0.24. I got 5.5% reduction.
3. Used uniform distribution from 0.1 to 0.75. I got 5.1% reduction.
4. Used Gaussian with mean of 68% and SD of 0.05, assuming that plausibility cap is in fact our "mean" belief and we're highly confident in it. I got 6.8% reduction in mortality.

I am not positing that any of these is the right (or wrong) way to go about this. But 

Arguably we could also choose to model the proportion on a log scale. If using a lognormal distribution with the same 95% interpretation I get the same value as MRPRP.

## Conclusion

- MRPRP probabilistic calculation of reductions is a very nice step forward from using a plausibility cap.
- It's likely that the benefits of water quality interventions are sensitive to the assumption surrounding the share of deaths that can be prevented. Authors interpret the GW's assumption on share of all-cause mortality that can be affected (Mills-Reincke) as the upper end of 95% Gaussian interval.
- A lot of the new result seems to be driven by level of confidence in this belief. In other words, the results of this new analysis may be substantially different even without changing the "average" belief about Mills-Reincke effect, but simply by reducing confidence in this one input.
- In a couple of modifications (intended for illustrative purposes only) I saw that the mortality reductions under Kenya DSW changed from 4.6% (authors new estimate) to over 5%.
- All of the above is intended only as a demonstration of how the model is sensitive to assumptions. I do not have the expertise to intuit the particular values that should be used. 

## Links

Contest entry is here: [An Examination of GiveWell’s Water Quality Intervention Cost-Effectiveness Analysis - EA Forum (effectivealtruism.org)](https://forum.effectivealtruism.org/posts/6cJM2pWH8dz9TnBRy/an-examination-of-givewell-s-water-quality-intervention-cost)
Original GW spreadsheet is here: [Water quality CEA (ILC and DSW) (public) - Google Sheets](https://docs.google.com/spreadsheets/d/1dxRfhPnTBJ_UYAeoAyVd8u6Orxh4pR9hB3wvdfZcXFs/edit#gid=62665356)
New calculations (spreadsheet): [GiveWell Water Quality CEA Examination (ILC and DSW) - Google Sheets](https://docs.google.com/spreadsheets/d/1BnuHlq4b0NSDjDmcEZ-79gjqrsQdi89zVn4ifSkPQ5k/edit#gid=1031252506)
Code behind the Bayesian part of new calculations: [R code](https://github.com/secondhandmaps/WQ-CEA-Analysis/blob/main/modeling_mortality_effect_via_stan_v3.R) and [stan code](https://github.com/secondhandmaps/WQ-CEA-Analysis/blob/main/stan_model_for_water_quality_v3.stan)
