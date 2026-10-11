# Pragya Apurva — Personal Portfolio

A responsive data engineering and data science portfolio featuring professional experience, education, technical skills, and three pipeline projects. The GitHub repository is public.

**Portfolio:** [ishuapurva1996.github.io/personal-portfolio-website](https://ishuapurva1996.github.io/personal-portfolio-website/)

## Featured work

- [Movie analytics pipeline](https://github.com/ishuapurva1996/movie-analytics-pipeline) — IMDb and TMDB ingestion, S3, Snowflake, dbt, and validated dashboard publication.
- [EV infrastructure and adoption](https://github.com/ishuapurva1996/EV-dashboard) — city/state/state-year data models and charging coverage analysis. Collaborative SJSU coursework.
- [Weather forecasting and evaluation](https://github.com/ishuapurva1996/weather-forecasting-dashboard) — linked Airflow workflows, Snowflake ML forecasts, and dbt validation. Collaborative SJSU coursework.

Each project includes a real dashboard preview, a pipeline architecture view, and links to the live dashboard and repository. Dashboard previews are snapshots; live links show current data.

## Local preview

No dependencies, framework, or package installation is required. Open `index.html` directly, or use Node.js 22+:

```sh
node serve.mjs
```

Open http://127.0.0.1:4173. To assemble static hosting output:

```sh
node build.mjs
```

GitHub Pages publishes the portfolio from the root of the `main` branch. Changes committed to `main` trigger a Pages deployment. No visitor sign-in is required. The `dist/` build can also be deployed to another static host.

## Updating the portfolio

Edit copy and links in `index.html`, the design in `styles.css`, and interactions in `script.js`. Replace `Pragya_Apurva_Resume.pdf` when the resume changes. Update dashboard images alongside project changes. Font CSS and font files are self-hosted so the site does not need third-party font requests.

## Design and assets

The portfolio uses static HTML, CSS, and JavaScript with a black and violet theme, serif headings, a minimal Sources → Ingest → Transform → Insights pipeline, a career timeline, and dashboard/architecture previews.

GitHub and LinkedIn SVG icons come from Primer Octicons and Bootstrap Icons under the MIT License; their notices are retained in `index.html`.

Content comes from Pragya Apurva’s Summer 2027 resume and the linked repositories. Project previews come from the corresponding project dashboards. Instrument Serif and DM Sans are distributed under the SIL Open Font License; see the included font license files.

Accessibility includes semantic landmarks, a skip link, keyboard navigation, accessible preview tabs, visible focus indicators, saved light/dark themes, and reduced-motion support. No tracking, contact-form backend, API keys, or warehouse credentials are included.
