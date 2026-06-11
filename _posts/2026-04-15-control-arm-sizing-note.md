---
title: "Allocating sample across control and treatment"
date: 2026-04-15
math: true
---


## Summary

**In a randomised controlled trial, should your treatment arm(s) and control be allocated the same number of observations? What are the efficiency gains from optimal allocation?**

1. In a simple treatment vs control comparison, it is usually OK to have 1:1 allocation, unless there are large differences in cost.
2. If you have an RCT with K treatment arms, in most cases you should consider scaling up the control arm by $\sqrt{K}$. 
3. If testing many highly similar treatments, you could increase the size of the control arm even further and consider borrowing strength across treatment arms for large efficiency gains.
4. Gains can be large for large $K$. For $K = 5$, you reduce sample size by about one eighth by sizing up the control arm. For $K = 5$ and highly correlated treatments, you can reduce sample size by even _one third_ by borrowing information and increasing the control arm further.
5. If you care about comparing treatments to each other, you should not increase the size of the control arm.


## Single treatment vs control

In a randomised controlled trial with two arms, T and C, variance for
difference of means is

$$
Var(\delta) = \sigma_T^2/n_T + \sigma_C^2/n_C
$$

where $\sigma^2$ is variance in each group and $n$ is sample size. In
inferring treatment effects it is optimal to set $n_T = n_C$, a 1:1
randomisation, if (1) we assume that treatment does not change
variance, and (2) cost per control or treatment subject is the same.

If either (1) or (2) is violated, it is very easy to solve: put
relatively more sample where outcomes are noisier or where subjects are
cheaper. (1) usually has little practical impact.[^1]

[^1]: The ratio $\sigma_T / \sigma_C$ matters only when it is far from 1. Even in the extreme case where $\sigma_T / \sigma_C = 2$, optimal allocation shrinks sample size by about 10%. If $\sigma_T / \sigma_C = 1.25$ the gain is about 1%. Generally 1:1 split is a good choice (see Kondylis and Loesler 2021 for more thoughts).

In some cases it is practical to set the treatment arm larger because we
learn additional information. In medicine, for example, we use the
treatment arm to learn about both efficacy and safety, so a treated
patient is more valuable than a control patient.

## Multi-arm treatment

If we have $k$ treatment arms, it can be optimal to set sample sizes so
that

$$
n_C = \sqrt{k} \cdot n_T.
$$

This follows from the same variance formula. Each additional
control observation is used in every treatment-versus-control
comparison, so control observations have higher value. Setting
$\sqrt{k}$ scaling minimises total variance across $k$ comparisons.

However, there are other optimal allocations for a
multi-arm trial. They depend on what the goal is.

- If the goal is to also estimate an average treatment effect across
  all $k$ arms compared to control, you would set
  $n_C = k \cdot n_T$, i.e. set $n_C$ to the same size as all
  treatment arms together.
- This can be improved on further if you assume that different treatment arms are similar but not the same. See below.
- If the main value of the trial is comparison between treatment arms, or ranking treatments against each other, one may instead want more sample in treatment arms.

Also note that increasing size of control arm by $\sqrt{k}$ also does not apply when we study interactions or complementarity. For a factorial design it is still optimal to spread the sample across all arms, since the effects are estimated using a single model.

## How large are the gains?

If the goal is maximising power in $k$ individual comparisons against a
shared control, the implied total sample savings add up as $k$ increases.

| $k$ | Optimal control:treatment ratio | Total sample saving |
| --- | ---: | ---: |
| 1 |   1:1 | 0.0% |
| 2 | 1.4:1 | 2.9% |
| 3 | 1.7:1 | 6.7% |
| 4 |   2:1 | 10.0% |
| 5 | 2.2:1 | 12.7% |


For $k = 5$, if equal ($n_T = n_C$) allocation gives about 80% power
for some treatment effect, the optimal allocation raises that to about
85% at the same total sample size.[^2]

[^2]: The exact power gain depends on the effect size, significance threshold, and inferential setup; the sample-size savings in the table are the more general result.

[^3]: To be more methodologically precise, the relevant design quantity is not correlation alone, but between-arm heterogeneity relative to sampling noise. High correlation is one way of describing closely related treatment effects, but whether partial pooling helps, and how much extra control is useful, depends on how large true differences across arms are relative to the uncertainty with which each arm is estimated.


## Borrowing of information across treatment arms

The efficiency gains can be much larger if the active treatments are
closely related and we account for that in the model. Simple examples
include testing different doses of the same drug or different delivery
methods for a behavioural intervention. If we see an intervention work
at low intensity of delivery, we may reasonably become more confident,
though not certain, that it will work at high intensity.

Even without modifying allocation, the gains from this procedure can be very large when correlations are high.[^3] Continuing with the $k=5$ example and $\sqrt{k}$:1 allocation, at 90% correlation the required sample would be about 30% smaller if using a partially pooled model---if the goal is estimating significant arm-specific effects (i.e. maximising average marginal arm-specific power).

In these cases it is also optimal to further increase size of control arm. As noted, if $k$ treatment arms are pooled into a single analysis, then it is optimal to set $n_C = k \cdot n_T$. Therefore usually the optimal
size of $n_C$ will be somewhere between $\sqrt{k}$ times ("no pooling")
to $k$ times ("full pooling") larger than $n_T$.

Moving to 5:1 allocation in this highly correlated example would reduce sample size by a further 7%. Taken together, that is about a one-third saving relative to no pooling under the classical $\sqrt{k}$ allocation.

To be clear: these gains are purely illustrative and in practice we do not know how closely correlated treatments will be. Therefore this choice should be used cautiously both in design and analysis of experiments.


## Practical implications

There are four practical conclusions.

- J-PAL already has a short, accessible guide to power calculations.
  For general guidance on power calculations, one should make use of it, or revise it slightly to incorporate the points on allocation and stratification (J-PAL 2025).
- In a multi-arm trial with $k$ separate comparisons against a common
  control, control arm should be scaled up by $\sqrt{k}$. This can
  shrink samples by 10% if you have 4 treatment arms.
- The solution is different when we are concerned with the average treatment effect
  across all arms (larger control arm) or comparisons across arms
  (larger treatment arms).
- If treatment arms are closely related, partial pooling of information should be done
  as an additional step. It may offer much larger efficiency gains than the
  optimal sample allocation, although at the cost of making additional assumptions.
  
  
## References

Kondylis and Loesler, 2021. *You’re probably doing it right: Experimental design with heterogeneous treatment effects*. Development Impact Blog. [URL](https://blogs.worldbank.org/en/impactevaluations/youre-probably-doing-it-right-experimental-design-heterogeneous-treatment-effects)
J-PAL. 2025. *Power Calculations*. Abdul Latif Jameel Poverty Action
Lab. [URL](https://www.povertyactionlab.org/resource/power-calculations)
