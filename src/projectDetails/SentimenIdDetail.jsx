import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "SentimenID",
  category: "NLP / Machine Learning",
  heroImg: "/images/projects/sentimenid-inside.webp",
  tagline:
    "A web app that detects hate speech and abusive language in Indonesian tweets using classical machine learning models.",
  year: "2026",
  stack: [
    "Python",
    "Scikit-learn",
    "Count Vectorizer / TF-IDF",
    "Streamlit",
    "Model Serialization (Pickle)",
  ],
  features: [
    "Text input for instant hate speech and abusive language detection.",
    "Four models compared: KNN, Logistic Regression, Naive Bayes, and Random Forest.",
    "Count and TF-IDF feature extraction to test which representation performs best.",
    "Pre-trained models and vectorizers saved for fast inference in the app.",
  ],
  impact: [
    "Helps flag harmful Indonesian-language content on social media.",
    "Shows how different models and text features perform on the same dataset.",
    "Can serve as a starting point for content moderation tools.",
  ],
  links: {
    live: "https://huggingface.co/spaces/MalvinR/SentimenID",
    repo: "https://github.com/malvinraditya2007/SentimenID",
  },
};

export default function SentimenIdDetail({ onClose, mode }) {
  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
    />
  );
}
