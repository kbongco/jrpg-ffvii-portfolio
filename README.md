# FFVII Remake Portfolio

A developer portfolio with a Final Fantasy VII Remake aesthetic.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Customise

All placeholder content lives in `src/components/PortfolioRemake.tsx` (desktop)
and `src/components/PortfolioMobile.tsx` (mobile).

Search for these strings and replace them:
- `CLOUD STRIFE` → your name
- `Full Stack Developer` → your title  
- `Ex-SOLDIER` bio paragraphs → your actual bio
- `Midgar` → your location
- Project card titles (Shinra Dashboard, Avalanche Network, Gold Saucer Arcade) → your projects
- `href="#"` on the Email / GitHub buttons → your real links
- Materia slot names → your actual tech stack

## Design tokens

Colors and effects live in `src/styles/portfolio.scss`. The key SCSS variables are:

```scss
$teal:    #00d4e8;   // primary accent
$magenta: #e040c0;   // secondary accent (sidequests, limit break)
$dark:    #050d12;   // background
$slate:   #94a3b8;   // muted text
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Drop it on any static host (Netlify, Vercel, GitHub Pages, etc.).
