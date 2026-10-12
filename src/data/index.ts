export const META = {
  name: "Tut",
  role: "AI/ML Engineer",
  email: "justtuturu@proton.me",
  twitter: "https://x.com/justuturu",
  github: "https://github.com/justtuturu",
  linkedin: "https://linkedin.com/in/teriyumi",
  available: true,
  location: "Ho Chi Minh City, Vietnam",
};

export const PROJECTS = [
  {
    featured: false,
    category: "LLM Agent",
    categoryColor: "rgba(168, 200, 216, 0.82)",
    title: "Chisa-Bot",
    description:
      "Private Discord bot running an LLM agent that answers when mentioned, replied to, or DM'd, uses tools on its own, and keeps per-channel memory with rolling summaries.",
    metrics: ["Discord Bot", "Tool Use", "Per-Channel Memory"],
    tech: ["Python", "Discord.py", "OpenAI", "Tavily"],
    github: "https://github.com/JustTuturu/Chisa-bot",
    demo: "",
    label: "Personal Project",
  },
  {
    featured: true,
    category: "Multimodal ML",
    categoryColor: "#E8A0A8",
    title: "CLIP-BERT Multi-Label Classifier",
    description:
      "Multi-label image tagging that fuses CLIP vision–text embeddings with BERT for richer semantics, then models tag relationships with a label GCN and co-occurrence matrix.",
    metrics: ["3 Architectures", "Label GCN", "t-SNE/PCA Viz"],
    tech: ["Python", "PyTorch", "CLIP", "BERT", "Streamlit"],
    github:
      "https://github.com/JustTuturu/mage-Classification-with-CLIP-and-BERT",
    demo: "",
    label: "Personal Project",
  },
  {
    featured: false,
    category: "LLM App",
    categoryColor: "rgba(168, 200, 216, 0.82)",
    title: "AI English Tutor",
    description:
      "Conversational IELTS coach powered by OpenAI GPT and ElevenLabs voice. Adaptive band scoring (1–9) driven by one-shot prompt engineering.",
    metrics: ["IELTS Band 1–9", "One-Shot Prompting", "Voice AI"],
    tech: ["Python", "OpenAI API", "ElevenLabs", "FastAPI"],
    github: "https://github.com/JustTuturu/AI-English-Tutor-NLP-Project",
    demo: "",
    label: "Hackathon Remake",
  },
  {
    featured: false,
    category: "Agent Pipeline",
    categoryColor: "#E8A0A8",
    title: "MoeMeido",
    description:
      "Local-first software-task pipeline: analyzes a repo, proposes the smallest useful change, reviews it, runs tests, and reports merge readiness through a bounded LangGraph agent loop.",
    metrics: ["LangGraph", "Local-First", "Auto Tests"],
    tech: ["Python", "LangGraph", "SQLite", "LLM Agents"],
    github: "https://github.com/JustTuturu/MoeMeido",
    demo: "",
    label: "Personal Project",
  },
  {
    featured: false,
    category: "Rust CLI",
    categoryColor: "rgba(212, 149, 106, 0.78)",
    title: "Novel Extractor & Translator",
    description:
      "Single-binary Rust CLI that downloads Chinese web novels from Qidian and SFACG, decodes encrypted VIP text via in-browser OCR, and translates chapter by chapter into English.",
    metrics: ["Single Binary", "OCR Decode", "zh→en"],
    tech: ["Rust", "SQLite", "OCR", "Translation"],
    github: "https://github.com/JustTuturu/Qidian",
    demo: "",
    label: "Personal Project",
  },
  {
    featured: false,
    category: "Computer Vision",
    categoryColor: "rgba(212, 149, 106, 0.78)",
    title: "YOLOv10 Fruit Detector",
    description:
      "Fine-tuned YOLOv10 on a custom fruit dataset with a Streamlit inference UI, covering training, evaluation, and weight export.",
    metrics: ["YOLOv10", "Custom Dataset", "Streamlit UI"],
    tech: ["Python", "PyTorch", "YOLOv10", "Streamlit"],
    github: "https://github.com/JustTuturu/Yolov10-CustomDataset",
    demo: "",
    label: "Academic",
  },
];

export const EDUCATION = {
  university: "HCMUS University of Science",
  degree: "Bachelor of Science",
  major: "Information Technology",
  cgpa: "3.0 / 4.0",
  graduation: "October 2025",
  courses: [
    "Machine Learning",
    "NLP",
    "Data Structures & Algorithms",
    "Computer Vision",
  ],
};

export const CERTIFICATIONS = [
  {
    platform: "Coursera",
    name: "Machine Learning by Andrew Ng",
    date: "Aug 2023",
    featured: false,
    url: "",
  },
  {
    platform: "Google",
    name: "Google AI Essentials",
    date: "August 2024",
    featured: false,
    url: "https://coursera.org/share/e5b0c59a751923bead528a8a32506b5b",
  },
];

export const EXPERIENCES = [
  {
    company: "Looking for Opportunities",
    role: "AI/ML Engineer Intern",
    period: "2025",
    type: "Internship",
    seeking: true,
    achievements: [
      "Seeking AI/ML internship roles for October 2025 onward",
      "Open to remote and on-site work",
      "Focused on LLMs, PyTorch, and applied deep learning",
    ],
    tech: ["Python", "PyTorch", "LLMs", "MLOps"],
  },
];
