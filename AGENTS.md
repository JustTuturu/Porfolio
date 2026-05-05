# Agent Rules — Tut Portfolio

## Meta
- **Owner**: Tut (justtuturu@gmail.com)
- **Site**: https://justtuturu.dev
- **Stack**: Astro 6.x + Tailwind 4.x + Vercel
- **Pkg**: pnpm | Node 24.x

## File Map
```
src/
  components/     .astro files only
  data/           all content (index.ts + playlist.ts)
  layouts/        BaseLayout.astro (SEO, fonts, nav scripts)
  pages/          index.astro
  styles/         global.css (CSS vars + Tailwind @import)
```

## DO
- [ ] Read `src/data/index.ts` before editing any content
- [ ] Use CSS vars from `global.css` — never hardcode colors
- [ ] Wrap every section in `<section id="..." class="section-padding">` + inner `<div class="content-container">`
  - `.section-padding` = **vertical padding only** (4rem/5rem/6rem)
  - `.content-container` = **horizontal padding** (1rem mobile / 1.5rem tablet+) + max-width 840px
- [ ] Add `aria-labelledby` on every `<section>`
- [ ] Use `is:inline` for all client `<script>` tags
- [ ] Use `var` (not let/const) in inline scripts
- [ ] Import data from `src/data/index.ts`, never hardcode text in components

## DON'T
- [ ] Add `<hr>` between sections — dividers are auto via `::before` in `global.css`
- [ ] Use `composes:` — Tailwind 4 does not support it
- [ ] Commit `docs/` folder — keep agent docs local-only (already in `.gitignore`)
- [ ] Change font loading strategy in BaseLayout (uses `media="print"` swap)
- [ ] Add custom padding on sections — use `.section-padding`

## CSS Vars (Global)
```css
--bg-base: #0D0E18;   --bg-surface: #161828;
--text-primary: #F0E8E0;  --text-muted: rgba(240,232,224,0.6);
--accent-pink: #E8A0A8;   --accent-purple: #C4A8C8;
--accent-blue: #8BAEC8;   --accent-coral: #F2C4B0;
--accent-orange: #D4956A; --accent-cyan: #A8C8D8;
```

## Typography Classes
| Class | Font | Use For |
|-------|------|---------|
| `.section-label` | JetBrains Mono 11px uppercase | `// about`, `// projects` |
| `.section-heading` | Space Grotesk clamp(1.75rem,4vw,2.25rem) | Section titles |
| `.type-body-medium` | Inter 14px | Body text |
| `.type-label-small` | JetBrains Mono 11px uppercase | Badges, metadata |
| `.card-title` | Space Grotesk 22px | Card headings |

## Component Patterns

### New Section Template
```astro
<section id="my-section" class="section-padding" aria-labelledby="my-heading">
  <div class="content-container">
    <span class="section-label animate-on-scroll" id="my-heading">// label</span>
    <h2 class="section-heading animate-on-scroll">Title</h2>
    <!-- content -->
  </div>
</section>
```

### Client Script Template
```astro
<script is:inline>
  (function() {
    var el = document.getElementById('...');
    if (!el) return;
    // vanilla JS only
  })();
</script>
```

## Special Components
| Component | Notes |
|-----------|-------|
| `MusicWidget` | Fixed overlay, NOT a `<section>`, controlled by `#music-btn` + arrow keys |
| `About` | Discord Lanyard API integration (`api.lanyard.rest`) |
| `Projects` | Featured card (horizontal) + 2-col subgrid |
| `BaseLayout` | Contains all SEO meta, font preconnect, scroll/navbar scripts |

## Data Schema
```ts
// src/data/index.ts
PROJECTS: { featured, category, categoryColor, title, description, metrics[], tech[], github, demo, label }
EDUCATION: { university, degree, major, cgpa, graduation, courses[] }
EXPERIENCES: { company, role, period, type, seeking, achievements[], tech[] }
CERTIFICATIONS: { platform, name, date, featured, url }
META: { name, role, email, twitter, github, linkedin, discord, available, location }
SITE: { maintenanceMode, maintenanceTitle, maintenanceMessage }
```

## Deploy
```bash
pnpm install
pnpm dev     # localhost:4321
pnpm build   # dist/ → Vercel
```

## .gitignore (Never Commit)
```
.env  node_modules/  dist/  .astro/  .vercel/  docs/
```
