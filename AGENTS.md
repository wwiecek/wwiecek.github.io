# AGENTS.md

## Maintainer Notes

- This repo is a Jekyll site deployed via GitHub Pages through GitHub Actions, not via GitHub Pages' native branch-based Jekyll build.
- Prefer native WSL/Linux Ruby for local work. Keep Bundler installs repo-local via `vendor/bundle`.

## Running And Testing

- You have standing permission to run local Jekyll/Bundler verification commands for this repo without asking again.
- This includes commands such as `bundle exec jekyll build`, `bundle exec jekyll build --trace`, `bundle exec jekyll doctor`, `bundle exec htmlproofer _site ...`, `bundle outdated`, and targeted `bundle update` checks done to verify or refresh site dependencies.
- This standing permission is only for local build, verification, and dependency-maintenance work inside this repo. Still ask before destructive git actions, commits, merges, pushes, or broader system-level installs.

## Current Assumptions

- The intended local environment is WSL/Linux with a working Ruby/Bundler toolchain.
- GitHub Pages deployment is managed by `.github/workflows/pages-deploy.yml`.
