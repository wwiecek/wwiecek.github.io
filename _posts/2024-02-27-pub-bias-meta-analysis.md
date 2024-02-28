---
title: Publication bias in meta-analysis
date: 2024-02-27
math: true
---
_Some notes on assessing publication bias. This is my own working in public note, so I will be going a bit into the weeds and skipping over basics._

_If you stumbled on this note, it may make sense to read a general textbook before diving in. For a quick overview you can try [Mathias Harrer's chapter on publication bias](https://bookdown.org/MathiasHarrer/Doing_Meta_Analysis_in_R/pub-bias.html). I will also not get into p-hacking and [other research malpractices](https://forrt.org/glossary/garden-of-forking-paths/) that everyone should be aware of. Please email comments and corrections._

# Publication bias and funnel plots

With that said, here are some basic observations that I find essential:
- Publication bias simply means that probability of publishing findings is affected _post hoc_ by what the findings are.[^pub] 
- The bias is typically thought to affect small studies more. The idea is simple: if I put an effort to conduct a large study, I am incentivised to publish it, no matter the result. 
- Also consider the reverse argument: if I am more inclined to publish significant results, more often these will come from small experiments, because they are cheaper to run, on average less carefully designed, and more prone to exaggerate results. 
- Typical tool for assessing publication bias is a funnel plot. For a good introduction, see Sterne et al (2011). Various tutorials often make simplifying claims about what funnel plots do or don't show, so it's good to check out that paper. 
- Why may funnel plots look asymmetrical or not cover 95% of points? Apart from publication bias we have to consider the following three reasons:
	- Randomness
	- Heterogeneity: if interventions you group don't have exactly the same effect, you will find asymmetric looking funnels.[^designhet] See more on this below.
	- For some outcomes there is artefactual relationship between SEs and effect sizes


[^designhet]:Also note an interesting association between intervention effect and standard error that occurs by design. Early studies of an intervention are typically small. As we learn more about the intervention, we both start calibrating the sample sizes, because we get a better sense of what the effect size may be that we're trying to detect. We also evolve study protocols and intervention designs, which may lead to different effect sizes in subsequent studies. So in some domains there will be a relationship between sample sizes and effects. (For this point I am indebted to Michael Kremer.) 

## Important side note: heterogeneity drives funnel asymmetry 

For heterogeneity, it's important to remember that when studies are heterogeneous in complex ways, this will look symmetrical, the funnel will simply not cover 95% of data points. 

Let's generate some funnels from a meta-analysis that has heterogeneity. In the plot below, we have 20 studies. Each **true** effect is drawn from a $\mathcal{N}(-0.1, 0.2)$ distribution (for example, because each study was designed a bit differently) and then measured in studies with various sample sizes. Check out R code below. This is what happens:

![heterogeneity demonstration 1](/assets/img/post_content/20240111122306.png)

You can see that on average a couple of studies fall outside of the funnel. This is because the funnel is centered at the assumed true, **fixed** effect. It makes no provisions for effects in studies varying for reasons other than sampling variation.

However, now consider a situation where heterogeneity is driven by presence of distinct subgroups. We have 20 studies with true effect of -0.1 and 5 studies with effect of -0.9. If we combine them in a single meta-analysis, the mean estimate will be somewhere around -0.25, but funnel plots will look considerably more asymmetrical:

![heterogeneity demonstration 2](/assets/img/post_content/20240111122430.png)

This type asymmetry disappears once we conduct a subgroup analysis on regress on the covariate. The obvious challenge is that we may not know about these systematic heterogeneity drivers.

[^pub]:Thinking of results as simply published or not can be reductive. You can also think of results that were published somewhere, but cannot be accessed because they had no exposure or haven't been indexed in search, they are no longer available, not yet available, they are in a different language etc. So in a broader sense "published" means "I can find what I need when looking for data to analyse". Consider that studies may have been conducted but then selective in terms of what they reported: for example, in a [meta-analysis of water treatment](https://bfi.uchicago.edu/working-paper/2022-26/) we found that researchers didn't report on child mortality, because it was so rare (very typically single digit numbers of deaths may occur), even though they had these data.

# Checking funnels: Egger's test

The most typically used test Egger's regression test: simply regress z-scores on reciprocal of standard errors. 
- If the intercept is significantly different from zero, that suggests asymmetry
- You can modify the test in many ways (linear model vs meta-regression model, regressig on SEs vs variances vs N's) and if you're conducting the test in R, `meta` and `metafor` have different implementations.
- See R code at the end for a very simple demonstration.
- A simple modification for working with binary data was proposed by Peters et al, which avoids some false positives. 

# How to adjust for publication bias: Andrews and Kasy

Assume you suspect there is publication bias in your analysed sample of studies. We should be able not simply to test for it, but derive some kind of rule on how to penalise for it. A nice paper by Andrews and Kasy (2019) covers how to make this type of adjustment. The core idea is simple enough that it can be outlined in one paragraph and it should make intuitive sense to you.

Assume some heterogeneity, i.e. that the true effects in each study come from a normal distribution

$$
\theta_k \sim \mathcal{N}(\mu, \tau^2)
$$

(you can swap this for a Student's T or another distribution, but a Gaussian is a typical choice). Each study now measures $\theta_k$ as a pair of mean effect and standard error:

$$
\hat{\theta_k} \sim \mathcal{N}(\theta_k, se_k).
$$

This is a standard random-effects model that can be estimated e.g. in [baggr](https://github.com/wwiecek/baggr) or any frequentist meta-analytic software. Now assume that researchers in study $k$ make publication decisions based on one quantity only, the signal to noise ratio $z_k = \hat{\theta_k} / se_k$. That is, we define some arbitrary function that assigns $z$ a publication probability $p(z)$. 

$$
\textrm{published}_k \sim \textrm{Bernoulli}(p(z_k))
$$

We now have access only to studies where $\textrm{published}_k = 1$. However, Andrews and Kasy show that under these simple assumptions, if we assume we know the shape of $p(z)$, we can estimate it up to some constant. In plain language, if, for example, we assume something like a jump in publication likelihood when we meet the 5% significance threshold

$$
p(z) =
\begin{cases}
c,\, \textrm{ if } |z| < 1.96  \\
c \delta  \, \textrm{ otherwise},\\
\end{cases}
$$

we can then estimate $\delta$, the relative publication probability **and retrieving original parameters** $(\mu, \tau^2)$. That means the Andrews and Kasy model returns the publication-bias adjusted quantities. Of course in practice we just need to have some studies with $|z| < 1.96$ and $|z| \geq 1.96$ to carry out estimation.[^indep]

[^indep]:There is an extra complication, which I alluded in an earlier footnote. The inference assumes that standard errors and effect sizes are independent. But we know that this is unlikely to be the case in many domains. I don't have a good intuition on how much of a problem that presents. Unfortunately, it seems like all publication bias assessment methods just assume that. 

If this is still convoluted, we can think of the procedure graphically. For a basic $p(z)$ (symmetrical, with discontinuity at 5% significance) like this, we can think back to the funnel I drew above. (Let's forget about heterogeneity for a moment and think of a fixed effect, just because it's simpler that way.) Imagine you have lots of studies and start counting how many are inside and outside of the funnel. If the process is simply governed by sampling variation, you know 1 in 20 should fall outside. What if you have 900 studies inside the funnel and 100 outside? Well, it means you're missing 1,000 in the middle? (See Figures 3 and 4 in the Andrews and Kasy paper for an illustration.)

A frequentist implementation of this inference on $(\mu, \tau, \delta)$ is implemented not just in R and MATLAB, but also in a Shiny app by Kasy. See it [here](https://maxkasy.github.io/home/metastudy/). (I just made up the notation above, mind.)

# References

- Andrews, Isaiah, and Maximilian Kasy. ‘Identification of and Correction for Publication Bias’. _American Economic Review_ 109, no. 8 (1 August 2019): 2766–94. [https://doi.org/10.1257/aer.20180310](https://doi.org/10.1257/aer.20180310).
- Peters, Jaime L., Alex J. Sutton, David R. Jones, Keith R. Abrams, and Lesley Rushton. ‘Comparison of Two Methods to Detect Publication Bias in Meta-Analysis’. _JAMA_ 295, no. 6 (8 February 2006): 676–80. [https://doi.org/10.1001/jama.295.6.676](https://doi.org/10.1001/jama.295.6.676).
- Sterne, Jonathan A. C., Alex J. Sutton, John P. A. Ioannidis, Norma Terrin, David R. Jones, Joseph Lau, James Carpenter, et al. ‘Recommendations for Examining and Interpreting Funnel Plot Asymmetry in Meta-Analyses of Randomised Controlled Trials’. _BMJ_ 343 (22 July 2011): d4002. [https://doi.org/10.1136/bmj.d4002](https://doi.org/10.1136/bmj.d4002).



# Appendix: R code for these demonstrations

```r
# baggrdev/funnel_heterogen.R

library(metafor)
library(tidyverse)

# unexplained heterogeneity -----
b1 <- replicate(9, {
  rr  <- 0.9
  tau <- 0.2 #on log scale
  Ns <- 20
  true_rr <- exp(rnorm(Ns, log(rr), tau))
  N  <- runif(Ns, 100, 5000)
  p1 <- runif(Ns, 0.01, 0.10)
  n1 <- n2 <- round(N/2)
  c  <- rbinom(Ns, n2, p1)
  a  <- rbinom(Ns, n1, p1*true_rr)
  se <- sqrt(1/a + 1/c + 1/n1 + 1/n2)
  rr_hat <- log((a/n1)/(c/n2))
  df1 <- data.frame(a, c, n1, n2, se, rr_hat) %>% 
    dplyr::filter(!is.infinite(se))
}, simplify = F)

par(mfrow = c(3,3))

lapply(b1, function(x) {
  mf <- rma(data=x, yi=rr_hat, sei=se, method = "FE")
  funnel(mf, ylim = c(0,0.5))
})



# covariate driving heterogeneity -----

# block one
b1 <- replicate(9, {
  rr <- 0.9
  Ns <- 20
  N  <- runif(Ns, 100, 5000)
  p1 <- runif(Ns, 0.01, 0.10)
  n1 <- n2 <- round(N/2)
  c  <- rbinom(Ns, n2, p1)
  a  <- rbinom(Ns, n1, p1*rr)
  se <- sqrt(1/a + 1/c + 1/n1 + 1/n2)
  rr_hat <- log((a/n1)/(c/n2))
  df1 <- data.frame(a, c, n1, n2, se, rr_hat) %>% 
    dplyr::filter(!is.infinite(se))
}, simplify = F)

par(mfrow = c(3,3))

lapply(b1, function(x) {
  mf <- rma(data=x, yi=rr_hat, sei=se)
  funnel(mf, ylim = c(0,0.5))
})

# block two
b2 <- replicate(9, {
  rr <- 0.4
  Ns <- 5
  N  <- runif(Ns, 100, 5000)
  p1 <- runif(Ns, 0.01, 0.10)
  n1 <- n2 <- round(N/2)
  c  <- rbinom(Ns, n2, p1)
  a  <- rbinom(Ns, n1, p1*rr)
  se <- sqrt(1/a + 1/c + 1/n1 + 1/n2)
  rr_hat <- log((a/n1)/(c/n2))
  df2 <- data.frame(a, c, n1, n2, se, rr_hat) %>% filter(!is.infinite(se))
}, simplify = FALSE)

for(i in 1:9) {
  df <- rbind(b1[[i]], b2[[i]])
  mf <- rma(data=df, yi=rr_hat, sei=se)
  # print(ranktest(mf))
  print(regtest(mf))
  funnel(mf, ylim = c(0,0.5))
}


# publication bias -----
pr_signif <- 1
pr_nonsignif <- 0.25

bpb <- replicate(9, {
  rr  <- 0.9
  tau <- 0.2 #on log scale
  Ns <- 50
  true_rr <- exp(rnorm(Ns, log(rr), tau))
  N  <- runif(Ns, 100, 5000)
  p1 <- runif(Ns, 0.01, 0.10)
  n1 <- n2 <- round(N/2)
  c  <- rbinom(Ns, n2, p1)
  a  <- rbinom(Ns, n1, p1*true_rr)
  se <- sqrt(1/a + 1/c + 1/n1 + 1/n2)
  rr_hat <- log((a/n1)/(c/n2))
  
  df1 <- data.frame(a, c, n1, n2, se, rr_hat) %>% 
    dplyr::filter(!is.infinite(se)) %>% 
    mutate(signif = 1*(abs(rr_hat) - 1.96*se > 0)) %>% 
    mutate(pub_pr = ifelse(signif, pr_signif, pr_nonsignif)) %>% 
    mutate(publication = rbinom(nrow(.), 1, pub_pr)) %>% 
    filter(publication == 1)
  
}, simplify = F)

par(mfrow = c(3,3))

# This is how Egger's regression test works
library(meta)
mg <- metagen(TE = rr_hat, seTE = se, data = bpb[[9]])
metabias(mg, method.bias = "linreg")

# you could just do that by hand:
mutate(bpb[[9]],y = rr_hat/se, x = 1/se) %>% 
  lm(data = ., y ~ x) %>% summary 

# but in metafor this is done differently under default settings
# and there is a choice of different predictors
mf <- rma(data=bpb[[9]], yi=rr_hat, sei=se, method = "FE")
regtest(mf, predictor = "se", model = "lm")
regtest(mf) #but the default model is `rma`
```

