# Developer Portfolio — Vite + React + TypeScript

A dark-mode portfolio focused on full-stack engineering, AI-enabled software, and visually strong project presentation.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Main folder structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── ui/
│       ├── HeroVisual.tsx
│       ├── ProjectVisual.tsx
│       ├── Reveal.tsx
│       ├── SectionHeading.tsx
│       └── TechBadge.tsx
├── data/
│   └── portfolio.ts
├── hooks/
│   └── useReveal.ts
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx
```

## Customize your portfolio

Edit:

```text
src/data/portfolio.ts
```

This contains:
- Name
- Role
- Email
- GitHub
- LinkedIn
- Hero text
- About text
- Projects
- Skills
- Education

Replace placeholder `#` project links with real GitHub/demo URLs.

## Deploy with Vercel

1. Push the folder to GitHub.
2. Go to Vercel.
3. Import the repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

## Deploy with Netlify

1. Push the folder to GitHub.
2. Create a new Netlify site from Git.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

## Deploy with GitHub Pages

Install the GitHub Pages deployment helper if you prefer a script-based workflow:

```bash
npm install --save-dev gh-pages
```

If the repository is named `portfolio`, update `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

For a custom domain or `username.github.io` repository, use:

```ts
base: '/'
```

Then deploy the `dist` directory using GitHub Actions or `gh-pages`.

## Recommended production setup

GitHub → Vercel → custom domain.

This gives you automatic deployments after pushes and a public GitHub repository recruiters can inspect.
