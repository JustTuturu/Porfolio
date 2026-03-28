export const META = {
  name: 'Tut',
  role: 'AI/ML Engineer Intern',
  email: 'justtuturu@gmail.com',
  github: 'https://github.com/justtuturu',
  linkedin: 'https://linkedin.com/in/justtuturu',
  available: true,
  availableFrom: 'July 2025',
  location: 'Ho Chi Minh City, Vietnam',
  university: 'HCMUS University of Science',
  graduationYear: '2025',
  cgpa: '2.9 / 4.0',
};

export const ROLES = [
  'AI/ML Engineer',
  'LLM Fine-Tuning Enthusiast',
  'Deep Learning Explorer',
  'Open Source Contributor',
];

export const SKILLS = [
  { name: 'Python', icon: '🐍', desc: 'Primary language', proficiency: 5, category: 'lang', exploring: false },
  { name: 'PyTorch', icon: '🔥', desc: 'Deep learning framework', proficiency: 4, category: 'ml', exploring: false },
  { name: 'Transformers', icon: '🤗', desc: 'HuggingFace ecosystem', proficiency: 4, category: 'ml', exploring: false },
  { name: 'LangChain', icon: '⛓️', desc: 'LLM orchestration', proficiency: 3, category: 'llm', exploring: false },
  { name: 'RAG Pipelines', icon: '🔍', desc: 'Retrieval-augmented gen', proficiency: 3, category: 'llm', exploring: true },
  { name: 'Computer Vision', icon: '👁️', desc: 'Image understanding', proficiency: 3, category: 'ml', exploring: false },
  { name: 'FastAPI', icon: '⚡', desc: 'Python API framework', proficiency: 4, category: 'tool', exploring: false },
  { name: 'Docker', icon: '🐳', desc: 'Containerization', proficiency: 3, category: 'tool', exploring: false },
  { name: 'Git / GitHub', icon: '🐙', desc: 'Version control', proficiency: 5, category: 'tool', exploring: false },
  { name: 'SQL', icon: '🗄️', desc: 'Relational databases', proficiency: 3, category: 'tool', exploring: false },
  { name: 'Prompt Eng.', icon: '✏️', desc: 'LLM prompt design', proficiency: 4, category: 'llm', exploring: false },
  { name: 'Linux', icon: '🐧', desc: 'CLI & system tooling', proficiency: 3, category: 'tool', exploring: false },
];

export const PROJECTS = [
  {
    featured: true,
    category: 'LLM App',
    categoryColor: '#7C3AED',
    title: 'Your Featured Project',
    description: 'A short 2-line description of what you built and why it matters.',
    metrics: ['87.3% Accuracy', '< 200ms Latency'],
    tech: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
    github: 'https://github.com/yourusername/project',
    demo: '',
    label: 'Personal Project',
  },
  {
    featured: false,
    category: 'ML Tool',
    categoryColor: '#06B6D4',
    title: 'Project Two',
    description: 'Brief description of your second project.',
    metrics: ['95% Precision'],
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/yourusername/project2',
    demo: '',
    label: 'Open Source',
  },
  {
    featured: false,
    category: 'Data',
    categoryColor: '#F59E0B',
    title: 'Project Three',
    description: 'Brief description of your third project.',
    metrics: ['100K+ Dataset'],
    tech: ['Python', 'SQL'],
    github: 'https://github.com/yourusername/project3',
    demo: '',
    label: 'Academic',
  },
  {
    featured: false,
    category: 'Web',
    categoryColor: '#F97316',
    title: 'Project Four',
    description: 'Brief description of your fourth project.',
    metrics: ['10K Users'],
    tech: ['FastAPI', 'React'],
    github: 'https://github.com/yourusername/project4',
    demo: '',
    label: 'Internship',
  },
];

export const EDUCATION = {
  university: 'HCMUS University of Science',
  degree: 'Bachelor of Science',
  major: 'Information Technology',
  cgpa: '2.9/ 4.0',
  graduation: 'October 2025',
  courses: ['Machine Learning', 'NLP', 'Data Structures & Algorithms', 'Computer Vision'],
};

export const CERTIFICATIONS = [
  { platform: 'DeepLearning.AI', name: 'Deep Learning Specialization', date: 'Jan 2024', featured: true, url: '#' },
  { platform: 'Coursera', name: 'Machine Learning by Andrew Ng', date: 'Aug 2023', featured: false, url: '#' },
  { platform: 'Google', name: 'TensorFlow Developer Certificate', date: 'Mar 2024', featured: false, url: '#' },
];

export const REPOS = [
  { name: 'your-repo', desc: 'Short description', lang: 'Python', stars: 12, forks: 3, url: '#' },
  { name: 'another-repo', desc: 'Short description', lang: 'TypeScript', stars: 5, forks: 1, url: '#' },
];
