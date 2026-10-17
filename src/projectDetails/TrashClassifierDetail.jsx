import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "TrashClassifier",
  category: "Computer Vision",
  heroImg: "/images/projects/trashclassifier-inside.webp",
  tagline:
    "An SVM-based waste image classifier that reaches 89.5% accuracy, served through a Streamlit web app.",
  year: "2026",
  stack: [
    "Python",
    "Scikit-learn",
    "OpenCV",
    "SVM",
    "Streamlit",
    "Hugging Face Spaces",
  ],
  features: [
    "Image upload with instant waste category prediction.",
    "OpenCV preprocessing before feature extraction and classification.",
    "SVM model tuned with grouped 5-fold cross-validation for reliable evaluation.",
    "Deployed on Hugging Face Spaces for online access.",
  ],
  impact: [
    "Supports faster and more accurate waste sorting.",
    "Raises awareness about proper waste separation through a simple demo.",
    "Demonstrates a complete pipeline from preprocessing to deployment.",
  ],
  links: {
    live: "https://huggingface.co/spaces/Gutstavo/TrashClassifier",
    repo: "https://github.com/malvinraditya2007/TrashClassifier",
  },
};

export default function TrashClassifierDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
