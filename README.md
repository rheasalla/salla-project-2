# Kabankalan Catholic College Landing Page

This Project 2 site adapts the supplied Bootstrap education template into an enrollment-focused landing page for Kabankalan Catholic College, Inc. It remains a static multi-page Bootstrap site so it can be tested locally and deployed through GitHub Pages.

## Run locally

From the project folder, run:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000/`.

## Main pages

The landing page is in `index.html`. Supporting pages are `about.html`, `courses.html`, `course-details.html`, `events.html`, `trainers.html`, `pricing.html`, and `contact.html`. Shared presentation lives in `assets/css/main.css`, behavior lives in `assets/js/main.js`, and the original Bootstrap vendor files remain under `assets/vendor/`.

The contact form currently shows a static confirmation because GitHub Pages does not process server-side form submissions. Connect an approved form service before collecting live inquiries. Verify the official admissions details and replace any text if the school updates them.

The managed static build copies the root Bootstrap pages and `assets/` folder into `public/` before publication, so the clean hosted output contains `public/index.html` and the complete multi-page site.

## Content sources

The design uses the official KCC crest and selected public gallery photos from [kcc.edu.ph](https://kcc.edu.ph/). See `SOURCES.md` for the exact asset paths and source notes.
