export const META = {
  name: 'Tut',
  role: 'AI/ML Engineer Intern',
  email: 'justtuturu@gmail.com',
  twitter: 'https://x.com/justuturu',
  github: 'https://github.com/justtuturu',
  linkedin: 'https://linkedin.com/in/teriyumi',
  discord: '328694743057825792',
  available: true,
  location: 'Ho Chi Minh City, Vietnam',
};

export const ROLES = [
  'AI/ML Engineer',
  'LLM Fine-Tuning Enthusiast',
  'Deep Learning Explorer',
  'Tuturu~'
];

export const SITE = {
  maintenanceMode: false,
  maintenanceTitle: 'Temporarily Under Maintenance',
  maintenanceMessage: 'I am making a few updates behind the scenes. The site will be back shortly.',
};

export const PROJECTS = [
  {
    featured: true,
    category: 'Multimodal ML',
    categoryColor: '#E8A0A8',
    title: 'CLIP-BERT Multi-Label Classifier',
    description: 'Multi-label image classification combining CLIP vision-text embeddings with BERT for enhanced semantic understanding. Uses label GCN and co-occurrence matrix to model tag correlations.',
    metrics: ['3 Architectures', 'Label GCN', 't-SNE/PCA Viz'],
    tech: ['Python', 'PyTorch', 'CLIP', 'BERT', 'Streamlit'],
    github: 'https://github.com/JustTuturu/mage-Classification-with-CLIP-and-BERT',
    demo: '',
    label: 'Personal Project',
  },
  {
    featured: false,
    category: 'LLM App',
    categoryColor: 'rgba(168, 200, 216, 0.82)',
    title: 'AI English Tutor',
    description: 'Conversational AI tutor for IELTS preparation powered by OpenAI GPT and ElevenLabs voice synthesis. Supports adaptive band scoring from 1–9 with one-shot prompt engineering.',
    metrics: ['IELTS Band 1-9', 'One-Shot Prompting', 'Voice AI'],
    tech: ['Python', 'OpenAI API', 'ElevenLabs', 'FastAPI'],
    github: 'https://github.com/JustTuturu/AI-English-Tutor-NLP-Project',
    demo: '',
    label: 'Hackathon Remake',
  },
  {
    featured: false,
    category: 'Computer Vision',
    categoryColor: 'rgba(212, 149, 106, 0.78)',
    title: 'YOLOv10 Fruit Detector',
    description: 'Fine-tuned YOLOv10 on a custom fruit dataset with Streamlit inference UI. Includes training pipeline, evaluation metrics, and model weight export.',
    metrics: ['YOLOv10 SOTA', 'Custom Dataset', 'Streamlit UI'],
    tech: ['Python', 'PyTorch', 'YOLOv10', 'Streamlit'],
    github: 'https://github.com/JustTuturu/Yolov10-CustomDataset',
    demo: '',
    label: 'Academic',
  },
];

export const EDUCATION = {
  university: 'HCMUS University of Science',
  degree: 'Bachelor of Science',
  major: 'Information Technology',
  cgpa: '3.0/ 4.0',
  graduation: 'October 2025',
  courses: ['Machine Learning', 'NLP', 'Data Structures & Algorithms', 'Computer Vision'],
};

export const CERTIFICATIONS = [
  { platform: 'Coursera', name: 'Machine Learning by Andrew Ng', date: 'Aug 2023', featured: false, url: '' },
  { platform: 'Google', name: 'Google AI Essential', date: 'August 2024', featured: false, url: 'https://coursera.org/share/e5b0c59a751923bead528a8a32506b5b' },
];

export const EXPERIENCES = [
  {
    company: 'Looking for Opportunities',
    role: 'AI/ML Engineer Intern',
    period: '2025',
    type: 'Internship',
    seeking: true,
    achievements: [
      'Actively seeking internship opportunities in AI/ML',
      'Open to remote and on-site positions',
      'Available from October 2025',
    ],
    tech: ['Python', 'PyTorch', 'LLMs', 'MLOps'],
  },
];
