For information on formatting posts, see [here](https://chirpy.cotes.page/posts/text-and-typography/) (especially the [mathematics section](https://chirpy.cotes.page/posts/write-a-new-post/#mathematics)). Some basic info is below:

Here's a non-exhaustive list of most of the useful front matter variables:
```
---
# layout: is redundant
title:  "Clinical trials for accelerating pandemic vaccines"
date:   2022-12-27
math: true 
# categories: [Category, Subcategory]
# tags: [tag] # tag names should always be lowercase
# pin: true
---
```
To render $ as a dollar sign (in normal text and/or mathjax), you need to precede it with a double backslash: \\\\$

Also note is that the table of contents at the right hand side of the posts generally only display headings that are of ## size or larger. This is true unless there is a ### size heading below a ## (or larger) heading, in which case the contents displays it as a sub-section/sub-heading underneath the ## heading.


# Chirpy Starter

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

When installing the [**Chirpy**][chirpy] theme through [RubyGems.org][gem], Jekyll can only read files in the folders
`_data`, `_layouts`, `_includes`, `_sass` and `assets`, as well as a small part of options of the `_config.yml` file
from the theme's gem. If you have ever installed this theme gem, you can use the command
`bundle info --path jekyll-theme-chirpy` to locate these files.

The Jekyll team claims that this is to leave the ball in the user’s court, but this also results in users not being
able to enjoy the out-of-the-box experience when using feature-rich themes.

To fully use all the features of **Chirpy**, you need to copy the other critical files from the theme's gem to your
Jekyll site. The following is a list of targets:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

To save you time, and also in case you lose some files while copying, we extract those files/configurations of the
latest version of the **Chirpy** theme and the [CD][CD] workflow to here, so that you can start writing in minutes.

## Prerequisites

Follow the instructions in the [Jekyll Docs](https://jekyllrb.com/docs/installation/) to complete the installation of
the basic environment. [Git](https://git-scm.com/) also needs to be installed.

## Installation

Sign in to GitHub and [**use this template**][use-template] to generate a brand new repository and name it
`USERNAME.github.io`, where `USERNAME` represents your GitHub username.

Then clone it to your local machine and run:

```console
$ bundle
```

## Usage

Please see the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy#documentation).

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[use-template]: https://github.com/cotes2020/chirpy-starter/generate
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
