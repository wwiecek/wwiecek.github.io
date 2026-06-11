# Changelog

## 2026-06-09

- Replaced the default Chirpy post-list homepage with a short bio, a generated list of the five latest posts, and a compact recent-projects section led by BEAR.
- Renamed the archives navigation tab to `/blog/` while keeping `/archives/` as a redirect and preserving the existing `/posts/:title/` post permalinks.
- Removed the local tags and categories navigation pages and disabled category/tag archive generation.
- Refined the homepage with project and paper lists, newsletter links, a Bio tab, and a left-sidebar links section for active projects and resources.

## 2026-04-16

- Realigned local `master` to `origin/master` after a bad merge; created a local backup branch `backup-pre-gh-align-2026-04-16` pointing to the pre-reset state first.
- Updated `.github/workflows/pages-deploy.yml` to force JavaScript Actions onto Node 24 and bumped `actions/upload-pages-artifact` from `v4` to `v5` to address the GitHub Actions Node 20 deprecation warning while keeping the existing Pages workflow structure.
- Corrected the Bayesian FDA guidance post year from `2025` to `2026`, renamed the post file to match the corrected publish date, and added a redirect from the old typo URL.

## 2026-04-15

- Added a draft blog post at `_posts/2026-04-15-control-arm-sizing-note.md` based on `../weiss/multiarm_power/control-arm-sizing-note.md`.
- Copied the three referenced PNG figures into `assets/img/post_content/control-arm-sizing-note/` and rewired the post to those site-local asset paths.
- Created the `control-arm-sizing-note-draft` branch for review before any commit.
- Refreshed the Jekyll lockfile to newer compatible versions of `addressable`, `rexml`, `webrick`, `nokogiri`, `google-protobuf`, and related transitive dependencies to address Dependabot alerts while keeping the current Chirpy/Jekyll stack.
- Updated `.github/workflows/pages-deploy.yml` to current GitHub Pages Actions versions and set `timezone: Europe/London` in `_config.yml` for more deterministic local and CI builds.
- Removed the `author` front matter from `_posts/2026-04-15-control-arm-sizing-note.md` after `htmlproofer` showed it rendered an empty author link in the current theme setup.
- Added a project-level `AGENTS.md` recording standing permission to run local Jekyll/Bundler verification commands without asking again.
