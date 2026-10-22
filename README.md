# Portfolio — Malvin Raditya Nugraha

Personal portfolio website of Malvin Raditya Nugraha — AI Engineer & Full-Stack Developer based in Indonesia. Built as a high-performance, responsive single-page portfolio with pure HTML5, modern CSS, and Vanilla JavaScript.

> [!NOTE]
> The previous React 19 version of this portfolio is preserved in the [`react-version`](../../tree/react-version) Git branch.

## Features

- **Responsive Single-Page Layout**: Smooth layout across mobile, tablet, and desktop.
- **Theme Switch**: Light and Dark mode with animated sun/moon SVG morphing and `localStorage` persistence.
- **Dynamic Clocks**: Live Asia/Jakarta time in the hero section and local time in the footer.
- **CV Preview Modal**: Interactive WebP preview with direct PDF download.
- **Project Gallery & Case Study Modals**: In-depth modal case study for each project without page reloads (VidNote, SentimenID, Pinjemin, Tutorin, TrashClassifier).
- **Interactive Capabilities Matrix**: Hover lighting and cascade entry effect.
- **Custom Cursor Follower**: Smooth hardware-accelerated cursor for desktop mice.
- **Zero Build Step**: Pure static files. No `npm install`, `node_modules`, or bundler required.

## Tech Stack

- **Markup**: HTML5 (semantic, accessible)
- **Styling**: Pure Modern CSS (CSS Variables, Flexbox, Grid, keyframe animations)
- **Scripting**: Vanilla JavaScript (ES6+, DOM APIs, IntersectionObserver)
- **Typography**: Space Grotesk (Google Fonts)

## Running Locally

Simply open `index.html` directly in any web browser, or serve it with Python/Node:

```bash
# Python
python -m http.server 3000

# Or Node npx
npx serve .
```

Open `http://localhost:3000` in your browser.

## Project Structure

```text
.
├── index.html          # Main HTML structure & semantics
├── style.css           # Styling, themes, animations, & responsive layout
├── script.js           # Client logic, theme toggle, modals, & clocks
├── assets/             # Images, project screenshots, CV, icons
└── vercel.json         # Static hosting configuration for Vercel
```
