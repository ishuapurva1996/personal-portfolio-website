# Pragya Apurva — Personal Portfolio

A responsive data engineering portfolio featuring professional experience, education, technical skills, and three pipeline projects. The GitHub repository is private.

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

Upload the generated `dist/` directory to a static host. Repository visibility and website audience are separate settings; this repository should remain private.

## Updating the portfolio

Edit copy and links in `index.html`, the design in `styles.css`, and interactions in `script.js`. Replace `Pragya_Apurva_Resume.pdf` when the resume changes. Update dashboard images alongside project changes. Font CSS and font files are self-hosted so the site does not need third-party font requests.

## Design and assets

Original implementation inspired by the formatting, structure, and visual style of [Priyanshu Singh’s portfolio](https://github.com/singhpriyanshu5/personal-portfolio-website): dark navy and mint colors, serif headings, data-themed geometry, timeline, and dashboard/architecture previews. The reference owner's code and personal assets are not included.

Content comes from Pragya Apurva’s Summer 2027 resume and the linked repositories. Project previews come from the corresponding project dashboards. Instrument Serif and DM Sans are distributed under the SIL Open Font License; see the included font license files.

Accessibility includes semantic landmarks, a skip link, keyboard navigation, accessible preview tabs, visible focus indicators, saved light/dark themes, and reduced-motion support. No tracking, contact-form backend, API keys, or warehouse credentials are included.
