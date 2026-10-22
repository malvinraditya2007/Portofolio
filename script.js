/**
 * MALVIN RADITYA NUGRAHA — PORTFOLIO (VANILLA JAVASCRIPT)
 * Zero dependencies, pure native DOM manipulation.
 */

// ── Project Data Registry ──
const PROJECTS_DATA = {
  sentimenid: {
    id: 1,
    slug: "sentimenid",
    title: "SentimenID",
    category: "NLP / Machine Learning",
    role: "Project Lead & ML Engineer",
    team: "Team of 3",
    contributions: [
      "Led a team of 3 to build an end-to-end ML pipeline, from preprocessing to a Streamlit app for tweet classification.",
      "Built and compared KNN, Logistic Regression, Naive Bayes, and Random Forest with Count and TF-IDF, reaching 76.4% F1-score."
    ],
    heroImg: "assets/images/projects/sentimenid-inside.webp",
    frontImg: "assets/images/projects/sentimenid-frontpage.webp",
    tagline: "A web app that detects hate speech and abusive language in Indonesian tweets using classical machine learning models.",
    year: "2026",
    stack: [
      "Python",
      "Scikit-learn",
      "Count Vectorizer / TF-IDF",
      "Streamlit",
      "Model Serialization (Pickle)"
    ],
    features: [
      "Text input for instant hate speech and abusive language detection.",
      "Four models compared: KNN, Logistic Regression, Naive Bayes, and Random Forest.",
      "Count and TF-IDF feature extraction to test which representation performs best.",
      "Pre-trained models and vectorizers saved for fast inference in the app."
    ],
    impact: [
      "Helps flag harmful Indonesian-language content on social media.",
      "Shows how different models and text features perform on the same dataset.",
      "Can serve as a starting point for content moderation tools."
    ],
    links: {
      live: "https://huggingface.co/spaces/MalvinR/SentimenID",
      repo: "https://github.com/malvinraditya2007/SentimenID"
    }
  },
  pinjemin: {
    id: 2,
    slug: "pinjemin",
    title: "Pinjemin",
    category: "Peer-to-Peer Lending Platform",
    role: "Project Lead & Full-Stack Developer",
    team: "Team of 5",
    contributions: [
      "Led a team of 5 to build a lending platform, developing the REST APIs for the borrow request, owner approval, and item return flow.",
      "Built the frontend with HTML, CSS, and JavaScript, including an interactive Leaflet.js location map."
    ],
    heroImg: "assets/images/projects/pinjemin-inside.webp",
    frontImg: "assets/images/projects/pinjemin-frontpage.webp",
    tagline: "A neighborhood platform for borrowing and lending items, with owner approval and nearby-item search on an interactive map.",
    year: "2026",
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL (NeonDB)",
      "Prisma",
      "Leaflet.js",
      "JWT / bcrypt",
      "Vanilla JS"
    ],
    features: [
      "Borrow workflow: request, owner approval, active status, and return.",
      "Nearby-item catalog sorted by distance using the Haversine formula, with category filters.",
      "Interactive Leaflet map with GPS-based location detection.",
      "Dashboard showing borrowing metrics and pending requests.",
      "Reviews and trust score to build community trust after each loan."
    ],
    impact: [
      "Encourages sharing rarely used items instead of buying new ones.",
      "Helps neighbors find available items close to them.",
      "Builds trust between users through ratings and a reputation system."
    ],
    links: {
      live: "https://pinjemin-frontend.vercel.app/",
      repo: "https://github.com/malvinraditya2007/Pinjemin"
    }
  },
  tutorin: {
    id: 3,
    slug: "tutorin",
    title: "Tutorin",
    category: "Peer Tutoring Platform",
    role: "Backend & Database Developer",
    team: "Team of 3",
    contributions: [
      "Designed the MySQL schema with seed data for mentors, subjects, slots, and reviews.",
      "Built the mentor flow covering profile onboarding, availability slot management, session completion, and wallet earnings with withdrawals."
    ],
    heroImg: "assets/images/projects/tutorin-inside.webp",
    frontImg: "assets/images/projects/tutorin-frontpage.webp",
    tagline: "A commercial 1-on-1 peer tutoring platform connecting students with high-achieving mentors, with escrow payments and sessions run over Discord.",
    year: "2026",
    stack: [
      "React 19",
      "React Router 7",
      "Vite",
      "Tailwind CSS v4",
      "Express.js",
      "Raw SQL (mysql2)",
      "MySQL 8",
      "JWT / bcryptjs",
      "Zod"
    ],
    features: [
      "Mentor discovery and booking with calendar-based availability slots.",
      "Escrow payment flow via payment gateway that releases funds to the mentor only after the session is completed.",
      "Hourly pricing set by mentors with 60-minute sessions and an 8% service fee on top of the mentor's rate.",
      "Mentor wallet with earnings tracking and withdrawals.",
      "Sessions coordinated over Discord with per-mentor invite links.",
      "Role-based access for visitors, students, and mentors, with email/password auth and JWT via httpOnly cookies."
    ],
    impact: [
      "Connects mentees and mentors safely and transparently.",
      "Protects both sides through escrow, releasing payment only after a session is done.",
      "Gives mentors an income stream while the platform earns from the service fee."
    ],
    links: {
      repo: "https://github.com/malvinraditya2007/Tutorin"
    }
  },
  trashclassifier: {
    id: 4,
    slug: "trashclassifier",
    title: "TrashClassifier",
    category: "Computer Vision",
    role: "Machine Learning Engineer",
    team: "Team of 5",
    contributions: [
      "Built an OpenCV augmentation pipeline (6 variants per image) with parallelized feature extraction via joblib.",
      "Prevented data leakage by grouping augmented copies by source image for grouped 5-fold CV."
    ],
    heroImg: "assets/images/projects/trashclassifier-inside.webp",
    frontImg: "assets/images/projects/trashclassifier-frontpage.webp",
    tagline: "An SVM-based waste image classifier that reaches 89.5% accuracy, served through a Streamlit web app.",
    year: "2026",
    stack: [
      "Python",
      "Scikit-learn",
      "OpenCV",
      "Joblib",
      "SVM",
      "Streamlit",
      "Hugging Face Spaces"
    ],
    features: [
      "Image upload with instant waste category prediction.",
      "OpenCV preprocessing and augmentation pipeline before feature extraction.",
      "SVM model tuned with grouped 5-fold cross-validation for reliable evaluation.",
      "Deployed on Hugging Face Spaces for online access."
    ],
    impact: [
      "Supports faster and more accurate waste sorting.",
      "Raises awareness about proper waste separation through a simple demo.",
      "Demonstrates a complete pipeline from preprocessing to deployment."
    ],
    links: {
      live: "https://huggingface.co/spaces/Gutstavo/TrashClassifier",
      repo: "https://github.com/malvinraditya2007/TrashClassifier"
    }
  },
  eurusd: {
    id: 5,
    slug: "eurusd",
    title: "EUR/USD Price Prediction",
    category: "Time Series / Quantitative ML",
    role: "Machine Learning Engineer",
    team: "Team of 5",
    contributions: [
      "Preprocessed OHLC data with time-shift features, chronological split, and leakage-free Min-Max scaling.",
      "Documented the full ML pipeline in a 10-section notebook and README."
    ],
    heroImg: "assets/images/projects/eurusd-inside.webp",
    frontImg: "assets/images/projects/eurusd-frontpage.webp",
    tagline: "A machine learning project that predicts the next 15-minute candle Close price of EUR/USD using Multiple Linear Regression built from scratch with Gradient Descent.",
    year: "2026",
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Gradient Descent",
      "Streamlit",
      "Hugging Face Spaces"
    ],
    features: [
      "Multiple Linear Regression implemented from scratch in pure NumPy without third-party ML training models.",
      "Weights and bias optimized via Gradient Descent minimizing Mean Squared Error (1,000 iterations, learning rate 0.1).",
      "Time-shift feature engineering (predicting Close at t+1) with chronological 70/30 train-test split.",
      "Leakage-free Min-Max normalization computed strictly on the training set.",
      "Comprehensive Exploratory Data Analysis (EDA) with OHLC distributions, Pearson correlation heatmaps, scatter plots, and yearly boxplots.",
      "Interactive Streamlit web app deployed on Hugging Face Spaces with live OHLC form input and trend signals (UPTREND / DOWNTREND)."
    ],
    impact: [
      "Provides short-term forex direction forecasting while outperforming naive baselines.",
      "Demonstrates core mathematical ML principles from first principles using pure vector math in NumPy.",
      "Offers actionable visual trading signals and price delta calculations."
    ],
    links: {
      live: "https://huggingface.co/spaces/MalvinR/EURUSD_Prediction_App",
      repo: "https://github.com/malvinraditya2007/EUR-USD-Prediction"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLiveClocks();
  initCustomCursor();
  initSmoothScroll();
  initMobileMenu();
  initModals();
});

// ── 1. Theme Management (Light / Dark) ──
function initTheme() {
  const root = document.documentElement;
  const themeToggles = document.querySelectorAll(".theme-toggle");

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  themeToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isDark = root.classList.contains("dark");
      const nextTheme = isDark ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    updateThemeIconState(theme === "dark");
  }

  function updateThemeIconState(isDark) {
    document.querySelectorAll(".theme-icon-sun").forEach((el) => {
      el.style.transform = isDark ? "scale(0) rotate(-90deg)" : "scale(1) rotate(0deg)";
      el.style.opacity = isDark ? "0" : "1";
    });
    document.querySelectorAll(".theme-icon-moon").forEach((el) => {
      el.style.transform = isDark ? "scale(1) rotate(0deg)" : "scale(0) rotate(90deg)";
      el.style.opacity = isDark ? "1" : "0";
    });
  }
}

// ── 2. Live Clocks ──
function initLiveClocks() {
  const heroTimeEl = document.getElementById("hero-live-time");
  const footerTimeEl = document.getElementById("footer-live-time");

  const jakartaFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  function update() {
    const now = new Date();
    if (heroTimeEl) {
      heroTimeEl.textContent = jakartaFormatter.format(now);
    }
    if (footerTimeEl) {
      footerTimeEl.textContent =
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        }) + " LOCAL";
    }
  }

  update();
  setInterval(update, 1000);
}

// ── 3. Custom Cursor Follower ──
function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!hasFinePointer) {
    cursor.style.display = "none";
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let currentX = -100;
  let currentY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function render() {
    // Smooth trailing
    currentX += (mouseX - currentX) * 0.22;
    currentY += (mouseY - currentY) * 0.22;
    cursor.style.transform = `translate3d(${currentX - 7}px, ${currentY - 7}px, 0)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Hover expansion on interactive elements
  const hoverables = document.querySelectorAll("a, button, .project-card, .matrix-cell");
  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "30px";
      cursor.style.height = "30px";
      cursor.style.opacity = "0.75";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width = "14px";
      cursor.style.height = "14px";
      cursor.style.opacity = "1";
    });
  });
}

// ── 4. Smooth Section Scroll Navigation ──
function initSmoothScroll() {
  const scrollTriggers = document.querySelectorAll("[data-scroll-to]");

  scrollTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute("data-scroll-to");
      const targetEl = document.getElementById(targetId);

      // Close mobile menu if open
      const mobileOverlay = document.querySelector(".mobile-overlay");
      if (mobileOverlay && mobileOverlay.classList.contains("open")) {
        closeMobileMenu();
      }

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ── 5. Mobile Navigation Menu ──
let isMobileMenuOpen = false;
function initMobileMenu() {
  const toggleBtn = document.querySelector(".nav-mobile-toggle");
  const overlay = document.querySelector(".mobile-overlay");
  const closeBtns = document.querySelectorAll(".close-mobile-menu");

  if (!toggleBtn || !overlay) return;

  toggleBtn.addEventListener("click", () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  closeBtns.forEach((btn) => btn.addEventListener("click", closeMobileMenu));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMobileMenuOpen) closeMobileMenu();
  });
}

function openMobileMenu() {
  const overlay = document.querySelector(".mobile-overlay");
  if (!overlay) return;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  isMobileMenuOpen = true;
}

function closeMobileMenu() {
  const overlay = document.querySelector(".mobile-overlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  isMobileMenuOpen = false;
}

// ── 6. Modals (CV Preview & Project Case Study) ──
function initModals() {
  // CV Modal
  const cvModal = document.getElementById("cv-modal");
  const openCvBtns = document.querySelectorAll(".open-cv-btn");
  const closeCvBtns = document.querySelectorAll(".close-cv-btn");

  openCvBtns.forEach((btn) => {
    btn.addEventListener("click", () => openModal(cvModal));
  });

  closeCvBtns.forEach((btn) => {
    btn.addEventListener("click", () => closeModal(cvModal));
  });

  // Project Case Study Modal
  const projectModal = document.getElementById("project-modal");
  const projectCards = document.querySelectorAll(".project-card");
  const closeProjectBtns = document.querySelectorAll(".close-project-btn");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const slug = card.getAttribute("data-slug");
      const project = PROJECTS_DATA[slug];
      if (project) {
        populateProjectModal(project);
        openModal(projectModal);
      }
    });
  });

  closeProjectBtns.forEach((btn) => {
    btn.addEventListener("click", () => closeModal(projectModal));
  });

  // Escape key and backdrop clicks
  [cvModal, projectModal].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (cvModal && cvModal.classList.contains("open")) closeModal(cvModal);
      if (projectModal && projectModal.classList.contains("open")) closeModal(projectModal);
    }
  });
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("open");
  document.body.style.overflow = "";
}

function populateProjectModal(project) {
  document.getElementById("case-category").textContent = project.category;
  document.getElementById("case-title").textContent = project.title;
  document.getElementById("case-tagline").textContent = project.tagline;

  // Role and Team
  const roleEl = document.getElementById("case-role");
  if (roleEl) roleEl.textContent = project.role || "Developer";

  const teamEl = document.getElementById("case-team");
  if (teamEl) teamEl.textContent = project.team || "";

  const heroImg = document.getElementById("case-hero-img");
  if (heroImg) {
    heroImg.src = project.heroImg;
    heroImg.alt = project.title;
  }

  // Links
  const linksWrap = document.getElementById("case-links-wrap");
  linksWrap.innerHTML = "";

  if (project.links?.live) {
    const liveLink = document.createElement("a");
    liveLink.href = project.links.live;
    liveLink.target = "_blank";
    liveLink.rel = "noreferrer";
    liveLink.className = "btn-primary";
    liveLink.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      View Live
    `;
    linksWrap.appendChild(liveLink);
  }

  if (project.links?.repo) {
    const repoLink = document.createElement("a");
    repoLink.href = project.links.repo;
    repoLink.target = "_blank";
    repoLink.rel = "noreferrer";
    repoLink.className = "btn-secondary";
    repoLink.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      Repository
    `;
    linksWrap.appendChild(repoLink);
  }

  // Role & Key Contributions
  const contributionsList = document.getElementById("case-contributions-list");
  if (contributionsList) {
    contributionsList.innerHTML = "";
    if (project.contributions && project.contributions.length > 0) {
      project.contributions.forEach((contrib) => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="bullet"></span><span>${contrib}</span>`;
        contributionsList.appendChild(li);
      });
    }
  }

  // Key Features
  const featuresList = document.getElementById("case-features-list");
  featuresList.innerHTML = "";
  project.features.forEach((feat) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="bullet"></span><span>${feat}</span>`;
    featuresList.appendChild(li);
  });

  // Outcome & Impact
  const impactList = document.getElementById("case-impact-list");
  impactList.innerHTML = "";
  project.impact.forEach((imp) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="bullet"></span><span>${imp}</span>`;
    impactList.appendChild(li);
  });

  // Tech Stack Badges
  const stackWrap = document.getElementById("case-stack-wrap");
  stackWrap.innerHTML = "";
  project.stack.forEach((tech) => {
    const badge = document.createElement("span");
    badge.className = "case-badge";
    badge.textContent = tech;
    stackWrap.appendChild(badge);
  });
}
