# justtuturu.dev — Visual Layout Map

> File này để tham khảo nhanh layout web khi không cần dùng browser tools.

---

## Color Scheme

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#0a0b14` | Page background |
| `--bg-card` | `rgba(22,24,40,0.6)` | Card backgrounds |
| `--text-primary` | `rgba(241,245,249,0.9)` | Headings, body |
| `--text-muted` | `rgba(240,232,224,0.6)` | Secondary text |
| `--accent-pink` | `#E8A0A8` | Labels, hover, active states |
| `--accent-purple` | `rgba(196,168,200,0.3)` | Glow effects |
| `--accent-blue` | `rgba(139,174,200,0.3)` | Glow effects |
| `--glass-border` | `rgba(196,168,200,0.12)` | Card borders |

## Typography

| Level | Font | Size | Style |
|-------|------|------|-------|
| Hero H1 | Space Grotesk | `48→96px` | Bold, white |
| Section H2 | Space Grotesk | Large | Bold |
| Body | Inter | `0.8–1rem` | Normal |
| Labels/Mono | JetBrains Mono | `0.58–0.72rem` | Uppercase, wide tracking |

## Section Flow (top → bottom)

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR (fixed, ~64px, z-50)                              │
│  [TUT]  [ABOUT] [PROJECTS] [CONTACT]        [♫ music]   │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  HERO (100vh, centered)                                    │
│                                                             │
│              AI/ML                                          │
│              Tut                                            │
│     LLM Fine-Tuning Enthusiast                              │
│     Crafting intelligent systems...                         │
│              [View my work →]                               │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  // ABOUT                                                   │
│  About Me                                                    │
│                                                             │
│  [Bio text...]                              [Quick links]   │
│                                             Resume          │
│  [Discord status widget]                    Email           │
│  // DISCORD                                 LinkedIn        │
│  DO NOT DISTURB                             X               │
│  suzu                                       GitHub          │
│                                                             │
│  LOCATION: Ho Chi Minh City, Vietnam                        │
│  STATUS:   Available for internships                        │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  // PROJECTS                                                │
│  Featured Projects                                           │
│                                                             │
│  ┌───────────────────────────────────────────────────┐      │
│  │  MULTIMODAL ML · Personal Project                    │      │
│  │  CLIP-BERT Multi-Label Classifier                    │      │
│  │  [Description...]                                    │      │
│  │  3 Architectures  Label GCN  t-SNE/PCA Viz           │      │
│  │  Python  PyTorch  CLIP  BERT  Streamlit              │      │
│  │  [View Code →]                                       │      │
│  └───────────────────────────────────────────────────┘      │
│                                                             │
│  ┌──────────────────────────┐  ┌──────────────────────────┐ │
│  │  LLM App · Hackathon        │  │  Computer Vision · Academic  │ │
│  │  AI English Tutor            │  │  YOLOv10 Fruit Detector      │ │
│  │  [desc...]                   │  │  [desc...]                   │ │
│  │  [metrics]                   │  │  [metrics]                   │ │
│  │  [tech tags]                 │  │  [tech tags]                 │ │
│  │  [View Code →]              │  │  [View Code →]              │ │
│  └──────────────────────────┘  └──────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  // EDUCATION                                               │
│  Education & Certifications                                  │
│                                                             │
│  DEGREE                           CERTIFICATIONS             │
│  HCMUS University of Science      Machine Learning...        │
│  BSc — Information Technology     Coursera · Aug 2023       │
│  GRADUATION: Oct 2025             Google AI Essential        │
│  GPA: 3.0/4.0                     Google · Aug 2024         │
│  [ML] [NLP] [DSA] [CV]                                       │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│  // CONTACT                                                 │
│  Get In Touch                                                │
│  Open to internships and collaborations...                   │
│                                                             │
│  EMAIL    justtuturu@gmail.com                               │
│  GITHUB   @justtuturu                                        │
│  LINKEDIN @justtuturu                                        │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                        FOOTER                                │
│                                                             │
│                        TUT                                  │
│         built with curiosity & too much coffee ☕            │
│                        © 2026                              │
└─────────────────────────────────────────────────────────┘
```

---

## Fixed Overlays

### Music Player Widget
- **Position:** `fixed top-16 right-4`, z-index: 100
- **Trigger:** Navbar music icon ♫ or `ArrowUp` key
- **Size:** `min(21.5rem, calc(100vw - 1.5rem))`
- **Features:** Play/Pause, Prev/Next, Seek bar, Album art

### Section Dot Nav (right edge)
- **Position:** `fixed right-side`, vertically centered
- **Items:** Hero ● About ● Projects ● Education
- **Active:** Accent pink dot

---

## Source Files

| Purpose | Path |
|---------|------|
| Page | `src/pages/index.astro` |
| Layout | `src/layouts/BaseLayout.astro` |
| Data | `src/data/index.ts`, `src/data/playlist.ts` |
| Styles | `src/styles/global.css` |
| Config | `astro.config.mjs` |

### Component → Section mapping

| Component | Section | Data Source |
|-----------|---------|-------------|
| `Navbar.astro` | Top nav | `META` |
| `Hero.astro` | Hero | Hardcoded |
| `About.astro` | About | `META` |
| `Projects.astro` | Projects | `PROJECTS[]` |
| `Education.astro` | Education | `EDUCATION`, `CERTIFICATIONS[]` |
| `Contact.astro` | Contact | `META` |
| `Footer.astro` | Footer | Hardcoded |
| `MusicWidget.astro` | Overlay | `PLAYLIST[]` |
