import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Tutorin",
  category: "Peer Tutoring Platform",
  heroImg: "/images/projects/tutorin-inside.webp",
  tagline:
    "A tutoring platform that connects students with mentors, with scheduling, escrow payment, and mentor wallets.",
  year: "2026",
  stack: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "NextAuth",
  ],
  features: [
    "Mentor discovery and booking with calendar-based scheduling.",
    "Escrow payment flow that holds funds until the session is completed.",
    "Digital wallet for mentors to track earnings.",
    "Interactive mentor dashboard for managing sessions and schedules.",
    "Role-based access for students and mentors, with credentials and Google login.",
  ],
  impact: [
    "Makes it easier for students to find and book the right mentor.",
    "Protects both students and mentors through the escrow payment flow.",
    "Gives mentors one place to manage schedules and earnings.",
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
