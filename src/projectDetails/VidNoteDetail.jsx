import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "VidNote",
  category: "Local AI / Speech Processing",
  heroImg: "/images/projects/vidnote-inside.webp",
  tagline:
    "A local AI app that turns videos (files or YouTube links) into speaker-colored hardsubs, clickable transcripts, and timestamped summaries.",
  year: "2026",
  stack: [
    "Python",
    "FastAPI",
    "Whisper",
    "Speaker Diarization",
    "Ollama (Gemma)",
    "FFmpeg",
  ],
  features: [
    "Video input from a file upload or a YouTube link.",
    "Hardsub video with subtitles colored per speaker.",
    "Clickable transcript per speaker that jumps to the matching moment.",
    "Timestamped summary generated locally with Gemma via Ollama.",
    "GPU/CPU fallback so the app runs on low-VRAM devices.",
  ],
  impact: [
    "Turns long videos into searchable notes without sending data to cloud APIs.",
    "Makes lectures and meetings faster to review through speaker-based transcripts and summaries.",
    "Runs fully on a personal machine, keeping private videos private.",
  ],
  links: {
    repo: "https://github.com/malvinraditya2007/VidNote",
  },
};

export default function VidNoteDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
