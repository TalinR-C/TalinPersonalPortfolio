# talinphoenix.com

Talin Russo-Christoffelsz's portfolio. A static site: plain HTML, CSS and JavaScript in `site/`, no build step.

- `site/js/data.js` holds all the copy: profile, skills and projects.
- `site/js/timelines.js` holds each project's dated timeline.
- `site/js/app.js` renders the pages (hash routes such as `#/projects` and `#/project/elev8ed`).
- `site/CNAME` keeps the custom domain. Don't delete it: a deploy replaces the whole `gh-pages` branch.

`npm run dev` serves `site/` at http://localhost:5173. `npm run deploy` publishes `site/` to the `gh-pages` branch, which GitHub Pages serves at https://talinphoenix.com.
