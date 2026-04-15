# Changelog

## 2026-04-15

- Added a draft blog post at `_posts/2026-04-15-control-arm-sizing-note.md` based on `../weiss/multiarm_power/control-arm-sizing-note.md`.
- Copied the three referenced PNG figures into `assets/img/post_content/control-arm-sizing-note/` and rewired the post to those site-local asset paths.
- Created the `control-arm-sizing-note-draft` branch for review before any commit.
- Refreshed the Jekyll lockfile to newer compatible versions of `addressable`, `rexml`, `webrick`, `nokogiri`, `google-protobuf`, and related transitive dependencies to address Dependabot alerts while keeping the current Chirpy/Jekyll stack.
- Updated `.github/workflows/pages-deploy.yml` to current GitHub Pages Actions versions and set `timezone: Europe/London` in `_config.yml` for more deterministic local and CI builds.
- Removed the `author` front matter from `_posts/2026-04-15-control-arm-sizing-note.md` after `htmlproofer` showed it rendered an empty author link in the current theme setup.
- Added a project-level `AGENTS.md` recording standing permission to run local Jekyll/Bundler verification commands without asking again.
