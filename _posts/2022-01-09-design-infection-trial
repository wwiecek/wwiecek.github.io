---
layout: post
title:  "Power calculations for an infection trial"
date:   2022-01-09
hidden: true
---

Here are some simple notes on how experimental design for infection experiments. The goal is to detect statistically significant difference in infection rates. I start with back-of-envelope calculations, then show R code that makes the calculation a bit realistic.

This is work in progress.

### Basic epi maths 
- Start with a simple model of a closed environment. On day 0 of the experiment there are $I_0$ infections. After that infections occur due to interactions between participants
- There will be approximately $R_0$ infections per generation. If $I_0$ is not high, with 2 generations you will have approximately $I_0(R_0 + R_0^2)$ new infections, with 3 you will have $I_0(R_0 + R_0^2 + R_0^3)$.
- This is very simplified but works for a small $I_0$. Also, we say $R_0$ (rather than $R$), because we assume that participants are susceptible, otherwise math is more complicated.
- If you reduce infection risk by some number $\gamma$, you simply scale the reproduction number $R_0(1-\gamma)$ 
- For many pathogens it makes sense to assume $R_0$ slightly above 1, since people tend to modify their behaviour to reduce risk. Therefore 1 is a good conservative assumption, even if in the real world it can be as high as 3-4 for coronavirus. 

### How to calculate number of new infections during the study

- The motivating example above is too simple, because 
- At the end of this doc I paste a very simple script in R to simulate number of infections in a closed population. ([[#Code to calculate number infected in experiment]])
- This simple code is for an SIR model, the simplest epidemiological model. It simulates the spread of an infectious disease in a closed population, where it takes D days for each new generation of the virus to develop, I0 people are infected on day 0, and the reproduction number is R0. SIR model assumes that individuals in the population can be in one of three states: susceptible (S), infected (I), or recovered (R). 
- You want to run this code twice, one time with R in controls and then lower R, in treatment group. This calculation then feeds into calculation of statistical power.

### Statistical power; what is measured in the trial?

- We are interested in "significant" differences between two groups
- By "significant" we mean setting a 5% significance level, a de facto norm for design of clinical trials.[^f]
- We will then try to see how power (see footnote) varies as a function of sample size. The typical target in clinical trials is to achieve 80% power.
- So when we say "difference", we mean a difference in terms of proportions of people infected. We assume that the treatment reduces reproduction number of the virus by some percentage.

[^f]:Statistical **significance** is a measure of how likely it is that the results of a statistical test are due to chance rather than a real effect. It is usually expressed as a probability, with a commonly used threshold of 5%. This means that if the probability of getting the observed results by chance is less than 5%, then the results are considered statistically significant. **Power** is a measure of the ability of a statistical test to detect a real effect, if one exists. A test with high power is more likely to detect an effect if one exists, while a test with low power is less likely to detect an effect. Power is usually expressed as a probability, with a commonly used threshold of 80%. This means that if the probability of detecting an effect if it exists is greater than 80%, then the test has high power.

- I include code to calculate sample size needed to achieve 80% power in [[#Using the code to calculate sample sizes]]

### Open experiment

- If the environment is open, that is, subjects can get infected not just within, but also outside of, the experiment, we need to expand the model to account for that.
- An example R code is in [[#Modification for open environment]]
- The model I provide is an SIR model with two groups. 
- In general, when you have many groups, the number of new infections in group $i$ acquired from group $j$ is now defined as $S_i(t) \cdot q \cdot c_{ij} \cdot{I_j(t)}$, 
	- $q$ is probability of getting infected on contact
	- $c_{ij}$ is the average number of contacts that person in group $i$ makes with people in group $j$
	- $I_j$ is the _proportion_ in group $j$ that is infected (in other words, we normalise group sizes to 1)

### Made up example (cruise ship)

(Ignore this for now, this is just an outdated illustration.)

- Assume 4000 subjects.
- If starting from 10 infected (2.5% of population being carriers) and R0 of about 1, this will lead to about 20 new infections (5% AR)
- If the effect of treatment is to reduce infection risk by 25% (a priori I consider that large) then in expectation we are comparing 20 (5%) vs 13 (3.3%)
	- But this only works so nicely with extra generations
- At these event rates you'd need 1700 subjects
- Possible solutions are 
	- more people: If you started out with 40 infections (10%), then you can get to 20% vs 13% AR respectively, at which point you can find a significant difference with 80% power
	- more generations (longer experiments)

There are several caveats:
- 25% is a very large effect and that means study has bad statistical properties + not great for policymaking
- This is much worse in real-world due to heterogeneities. We should simulate it to get the answer.

### Next steps

- It may be better to create a stochastic model. A pretty straightforward implementation is presented in this [R vignette for _odin_ package](https://cran.r-project.org/web/packages/odin/vignettes/discrete.html) (which is excellent for simulating from all kinds of epidemiological models)
- Stochastic models are preferable because in small populations there will be a lot of variation due to chance
- 

### Code to calculate number infected in experiment

```r
# Set the number of days to simulate
N <- 30
# Set the number of days for each new generation of the virus
D <- 3
# Set the initial number of infected individuals
I0 <- 1
# Set the reproduction number
R0 <- 2
# Experiment length
days <- 10

# Create vectors to store the number of susceptible, infected, and recovered individuals over time
S <- rep(0, days)
S[1] <- N-I0
I <- rep(0, days)
I[1] <- I0
R <- rep(0, days)
R[1] <- 0
total_inf <- rep(0, days)

# Loop through each day and update the number of susceptible, infected, and recovered individuals
for (t in 2:days) {
  S[t] <- S[t-1] - (R0 / D) * S[t-1] * (I[t-1]/N)
  I[t] <- I[t-1] + (R0 / D) * S[t-1] * (I[t-1]/N) - I[t-1] / D
  R[t] <- R[t-1] + I[t-1] / D
  total_inf[t] <- total_inf[t-1] + (R0 / D) * S[t-1] * (I[t-1]/N)
}

# Plot the number of susceptible, infected, and recovered individuals over time
plot(1:days, S, type = "l", col = "blue", ylab = "Number of individuals", xlab = "Time (days)", ylim = c(0, N))
lines(1:days, I, type = "l", col = "red")
lines(1:days, R, type = "l", col = "green")
legend("topright", c("Susceptible", "Infected", "Recovered", "Total new infections"), lty = 1, col = c("blue", "red", "green", "black"))

lines(1:days, total_inf, type = "l", col = "black", lty = "dotted")
total_inf
```

### Using the code to calculate sample sizes 

```r
#Same as above, but now it's a function
epi_sim <- function(R0 = 2,
                    N = 30,
                    D = 3,
                    I0 = 1,
                    days = 10) {
  S <- rep(0, days)
  S[1] <- N-I0
  I <- rep(0, days)
  I[1] <- I0
  R <- rep(0, days)
  R[1] <- 0
  total_inf <- rep(0, days)
  for (t in 2:days) {
    S[t] <- S[t-1] - (R0 / D) * S[t-1] * (I[t-1]/N)
    I[t] <- I[t-1] + (R0 / D) * S[t-1] * (I[t-1]/N) - I[t-1] / D
    R[t] <- R[t-1] + I[t-1] / D
    total_inf[t] <- total_inf[t-1] + (R0 / D) * S[t-1] * (I[t-1]/N)
  }
  total_inf[days]
}

# Calculate power
rr <- 0.5 #reduction in R0
pA = epi_sim()/30 #% infected in each batch of 30 (control)
pB = epi_sim(2*(1-rr))/30 #same, but in treatment

kappa=1
alpha=0.05
beta=0.20
(nB=(pA*(1-pA)/kappa+pB*(1-pB))*((qnorm(1-alpha/2)+qnorm(1-beta))/(pA-pB))^2)
ceiling(nB) # 70
# z=(pA-pB)/sqrt(pA*(1-pA)/nB/kappa+pB*(1-pB)/nB)
# (Power=pnorm(z-qnorm(1-alpha/2))+pnorm(-z-qnorm(1-alpha/2)))

```

### Modification for open environment

```r
# Consider the same example as below, but now we have two environments
# - within the experiment setting
# - outside of the experiment
# We can simulate this by treating S, I, and R as two-dimensional vectors
D <- 2; days <- 10

# Normalise population sizes to 1 (we will do everything in relative terms)
Ne <- 1 
No <- 1
# Percentage infected at beginning of the experiment
I0e <- .01 
I0o <- .01
# Infection rates within and outside of the experiment are determined by contacts within and across groups
c_ee <- 14
c_oo <- 0
c_eo <- 0
c_oe <- 0
q <- .1

# Create vectors to store the number of susceptible, infected, and recovered individuals over time
Se <- rep(0, days)
Se[1] <- Ne-I0e
Ie <- rep(0, days)
Ie[1] <- I0e
Re <- rep(0, days)
Re[1] <- 0

# outside of experiment
So <- rep(0, days)
So[1] <- Ne-I0o
Io <- rep(0, days)
Io[1] <- I0o
Ro <- rep(0, days)
Ro[1] <- 0

# Loop through each day and update the number of susceptible, infected, and recovered individuals
for (t in 2:days) {
  Se[t] <- Se[t-1] - (q*c_ee / D) * Se[t-1] * (Ie[t-1]) - (q*c_eo / D) * So[t-1] * (Io[t-1])
  So[t] <- So[t-1] - (q*c_oo / D) * So[t-1] * (Io[t-1]) - (q*c_oe / D) * So[t-1] * (Ie[t-1])
  Ie[t] <- Ie[t-1] + (q*c_ee / D) * Se[t-1] * (Ie[t-1]) + (q*c_eo / D) * So[t-1] * (Io[t-1]) - Ie[t-1] / D
  Io[t] <- Io[t-1] + (q*c_oo / D) * So[t-1] * (Io[t-1]) + (q*c_oe / D) * So[t-1] * (Ie[t-1]) - Io[t-1] / D
  Re[t] <- Re[t-1] + Ie[t-1] / D
  Ro[t] <- Ro[t-1] + Io[t-1] / D
}

# Plot the number of susceptible, infected, and recovered individuals over time
plot(1:days, Se, type = "l", col = "blue", ylab = "Number of individuals", xlab = "Time (days)", ylim = c(0, Ne))
lines(1:days, Ie, type = "l", col = "red")
lines(1:days, Re, type = "l", col = "green")
legend("topright", c("Susceptible", "Infected", "Recovered"), lty = 1, col = c("blue", "red", "green"))
```
