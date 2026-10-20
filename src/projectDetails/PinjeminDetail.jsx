import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Pinjemin",
  category: "Peer-to-Peer Lending Platform",
  heroImg: "/images/projects/pinjemin-inside.webp",
  tagline:
    "A neighborhood platform for borrowing and lending items, with owner approval and nearby-item search on an interactive map.",
  year: "2026",
  stack: [
    "Node.js",
    "Express.js",
    "PostgreSQL (NeonDB)",
    "Prisma",
    "Leaflet.js",
    "JWT / bcrypt",
    "Vanilla JS",
  ],
  features: [
    "Borrow workflow: request, owner approval, active status, and return.",
    "Nearby-item catalog sorted by distance using the Haversine formula, with category filters.",
    "Interactive Leaflet map with GPS-based location detection.",
    "Dashboard showing borrowing metrics and pending requests.",
    "Reviews and trust score to build community trust after each loan.",
  ],
  impact: [
    "Encourages sharing rarely used items instead of buying new ones.",
    "Helps neighbors find available items close to them.",
    "Builds trust between users through ratings and a reputation system.",
  ],
  links: {
    live: "https://pinjemin-frontend.vercel.app/",
    repo: "https://github.com/malvinraditya2007/Pinjemin",
  },
};

export default function PinjeminDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
