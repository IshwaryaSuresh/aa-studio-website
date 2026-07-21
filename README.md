# AA+ Studio — Website

The public website for **AA+ Studio** — an architecture, landscape and interiors
practice in Puducherry, India, founded by Ar. Ishwarya Suresh and Ar. Shrinithe Ramesh.

Built as a fast, dependency-free static site (plain HTML, CSS and a little JavaScript),
so it can be hosted anywhere and edited by hand.

## Structure

```
aa-studio-website/
├── index.html          → all page content
├── styles.css          → brand system + layout
├── script.js           → nav, scroll reveals, image lightbox
└── assets/
    ├── brand/           → favicon / logo mark
    └── projects/        → project photography & renders
```

## Run it locally

Any static server works. For example:

```bash
cd aa-studio-website
npx serve .          # then open the printed http://localhost:… address
```

## Publish it (free options)

- **Netlify** – drag the `aa-studio-website` folder onto https://app.netlify.com/drop
- **Vercel** – `npx vercel` from inside the folder
- **GitHub Pages** – push the folder to a repo and enable Pages

You can point a custom domain (e.g. `aaplusstudio.in`) at any of these.

## The five projects

| # | Project | Location | Status |
|---|---------|----------|--------|
| 01 | Cherry Pond | Puducherry | Completed |
| 02 | Kalahasthi Waterfront | Srikalahasthi, Andhra Pradesh | In progress |
| 03 | Thiruvannamalai Residence | Thiruvannamalai, Tamil Nadu | In progress |
| 04 | ECR Villa Landscape | East Coast Road, Tamil Nadu | In progress |
| 05 | Navin Residence | South India | In progress |

Every project now uses real imagery from the studio's own files: Cherry Pond photos,
Kalahasthi renders, Thiruvannamalai interiors, ECR Villa master plans / planting sheets
(from the ECR presentation), and the Navin Residence master plan plus a planting-palette
of the specified species (from the Navin Keynote).

The site also includes a **Group** page (`ashhirwaad.html`) and a homepage band drawn
from the Ashhirwaad Associates portfolio (the parent company): completed built works
(residences, heritage restoration, St. Thomas Church, the testing lab) and academic
urban design studies. Group assets live in `assets/group/`.

## Swapping or adding images

1. Drop a web-sized JPG (ideally ≤ ~1800px wide, < 1 MB) into `assets/projects/`.
2. In `index.html`, update the matching `<img src="assets/projects/…">`.
3. To turn a drawing panel (ECR / Navin) into a photo project, replace the
   `<div class="drawing">…</div>` block with the same `frame`/`gallery-strip`
   markup used by Cherry Pond or Thiruvannamalai.

## Editing text

All copy lives in `index.html` — headings, project descriptions, the people
bios and contact details are plain text you can edit directly.
