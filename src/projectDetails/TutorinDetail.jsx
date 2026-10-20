import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Tutorin",
  category: "Peer Tutoring Platform",
  heroImg: "/images/projects/tutorin-inside.webp",
  tagline:
    "A commercial 1-on-1 peer tutoring platform connecting students with high-achieving mentors, with escrow payments and sessions run over Discord.",
  year: "2026",
  stack: [
    "React 19",
    "React Router 7",
    "Vite",
    "Tailwind CSS v4",
    "Express.js",
    "Prisma",
    "PostgreSQL (Neon)",
    "JWT / bcryptjs",
    "Zod",
  ],
  features: [
    "Mentor discovery and booking with calendar-based availability slots.",
    "Escrow payment flow via payment gateway that releases funds to the mentor only after the session is completed.",
    "Hourly pricing set by mentors with 45/60/90-minute durations and an 8% service fee on top of the mentor's rate.",
    "Mentor wallet with earnings tracking and withdrawals.",
    "Sessions coordinated over Discord with per-mentor invite links.",
    "Role-based access for visitors, students, and mentors, with email/password auth and JWT via httpOnly cookies.",
  ],
  impact: [
    "Connects mentees and mentors safely and transparently.",
    "Protects both sides through escrow, releasing payment only after a session is done.",
    "Gives mentors an income stream while the platform earns from the service fee.",
  ],
  links: {
    repo: "https://github.com/malvinraditya2007/Tutorin",
  },
};

export default function TutorinDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
