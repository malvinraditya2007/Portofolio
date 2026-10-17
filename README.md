# Portfolio — Malvin Raditya Nugraha

Personal portfolio website of Malvin Raditya Nugraha — an AI Engineer & Full-Stack
Developer based in Indonesia. Built as an animated single-page site with smooth
scrolling and a case-study page for each project.

## Features

- Animated hero with CV preview & download.
- Project gallery with case-study pages (open as a modal or a full page).
- Dark / light mode.
- Smooth scrolling (Lenis) + scroll-linked animations (GSAP ScrollTrigger).
- Responsive design across mobile, tablet, and desktop.
- Respects the OS `prefers-reduced-motion` setting (motion is reduced automatically).

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- React Router
- lucide-react & react-icons

## Prerequisites

- Node.js 22 or newer
- npm 10 or newer

## Running Locally

Install dependencies:

```bash
npm install
```

Start the dev server (open the URL Vite prints, usually `http://localhost:5173`):

```bash
npm run dev
```

## Available Scripts

- `npm run dev` — start the development server.
- `npm run start` — alias for `npm run dev`.
- `npm run build` — create a production build in `build/`.
- `npm run preview` — preview the production build locally.
- `npm run check` — build + audit production dependencies.
- `npm run format` — format the code with Prettier.

## Project Structure

```text
.
├── index.html
├── public/                 # static assets (project images, CV, favicon, og image)
├── src/
│   ├── components/         # UI components for each section
│   │   └── projects/       # project gallery + detail modal
│   ├── context/            # ThemeContext (dark/light)
│   ├── data/               # project card metadata (projectMeta.js)
│   ├── hooks/              # custom hooks (Lenis, scroll)
│   ├── pages/              # route-level pages (Home)
│   ├── projectDetails/     # per-project detail components + registry
│   └── utils/              # animation + easing helpers
├── tailwind.config.js
├── vite.config.js
└── build/                  # production output (generated)
```

## Featured Projects

### VidNote — Local AI / Speech Processing

Repo : [github.com/malvinraditya2007/VidNote](https://github.com/malvinraditya2007/VidNote)

### SentimenID — NLP / Machine Learning

Repo : [github.com/malvinraditya2007/SentimenID](https://github.com/malvinraditya2007/SentimenID)

Live Demo : [huggingface.co/spaces/MalvinR/SentimenID](https://huggingface.co/spaces/MalvinR/SentimenID)

### TrashClassifier — Computer Vision

Repo : [github.com/malvinraditya2007/TrashClassifier](https://github.com/malvinraditya2007/TrashClassifier)

Live Demo : [huggingface.co/spaces/Gutstavo/TrashClassifier](https://huggingface.co/spaces/Gutstavo/TrashClassifier)

### Pinjemin — Peer-to-Peer Lending Platform

Repo : [github.com/malvinraditya2007/Pinjemin](https://github.com/malvinraditya2007/Pinjemin)

### Tutorin — Peer Tutoring Platform

Repo : [github.com/malvinraditya2007/Tutorin](https://github.com/malvinraditya2007/Tutorin)

Gallery card metadata lives in `src/data/projectMeta.js`, and each project's detail
component lives in `src/projectDetails/` (registered via `projectRegistry.js`).

## Adding a New Project

1. Add card metadata in `src/data/projectMeta.js` (use a unique `slug`).
2. Create a detail component in `src/projectDetails/` with the same `slug`.
3. Register that component in `src/projectDetails/projectRegistry.js`.

## Deploy

Deploy the `build/` folder to any static host (Netlify, Vercel, Cloudflare Pages,
GitHub Pages, etc.). Because this is an SPA, configure a rewrite/fallback so every
route serves `index.html`, otherwise deep links such as project detail pages will 404
on direct load.

## Contact

- Email: [malvinraditya2007@gmail.com](mailto:malvinraditya2007@gmail.com)
- GitHub: [@malvinraditya2007](https://github.com/malvinraditya2007)
- LinkedIn: [Malvin Raditya Nugraha](https://www.linkedin.com/in/malvin-raditya-nugraha/)
