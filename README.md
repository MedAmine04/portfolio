# Mohamed Amine Khouchaf — Portfolio

A bento-style portfolio for **Mohamed Amine Khouchaf**: fifth-year engineering student in Data & AI at EMSI.
A grid of cards, light and dark themes (system by default, with a toggle), one cobalt accent.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It was written from the GitHub profile and the README of each pinned repository, and every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` (add an object; it appears in the grid, the detail dialog and the counts) |
| Certifications | `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |

**Resume:** your CV is at `public/assets/Khouchaf_MohamedAmine_CV.pdf` and is linked from `profile.resumePdf`. To update it, replace that file (or change the path). Set `resumePdf: null` to hide the CV download buttons.

**Photo:** your photo is `photo.jpg` (square, 1024 px) in the project root. To change it, replace that file, then run:

```bash
npm run images
```

This rebuilds the WebP portraits and the social share image in `public/assets/`. If you use a larger photo, edit the widths in `scripts/build-images.mjs` and the `portrait` paths in `src/data/portfolio.ts` to match. Set `portrait: null` to go back to the "MA" monogram.

## Deploy

- **Vercel / Netlify:** import the GitHub repository. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** build with `npm run build`, then publish the `dist/` folder (for a project page, set `base: '/<repo-name>/'` in `vite.config.ts` first).

## What's inside

```
src/
  data/portfolio.ts     ← single source of truth (CV + GitHub)
  App.tsx               ← page and theme toggle
  index.css             ← design tokens (light and dark)
  components/
    Header              ← sticky bar, section links, theme toggle, CV
    Hero                ← introduction, portrait, numbers, core stack
    Experience          ← the two HPS internships
    Projects            ← bento grid + detail dialog
    Skills              ← categories; hover a skill to see where it was used
    Background          ← education, certifications, languages
    Contact             ← call to action and links
    Poster, ui          ← project art, shared building blocks
scripts/build-images.mjs ← portrait and share-image pipeline (sharp)
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion (dialog only).

## Accessibility

- `prefers-reduced-motion` is respected and the page is complete without any animation.
- Both themes keep text contrast readable. The dialog closes with Esc, a click outside or the close button.
- Fully usable on a phone: cards stack, the section links scroll horizontally.
