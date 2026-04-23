# TANTRO — Website

**Think next-gen industry. Think Tantro.**

Production website for [tantro.in](https://tantro.in) — a premium, investor-grade industrial technology site built with React, Tailwind, Framer Motion, and Three.js.

---

## Table of Contents

1. [Quick start](#quick-start)
2. [Project structure](#project-structure)
3. [Editing content](#editing-content-the-one-file-you-need)
4. [Editing design tokens](#editing-design-tokens-colors-fonts)
5. [Deploying to Vercel (recommended)](#deploying-to-vercel-recommended)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)
7. [Connecting the contact form to a real backend](#connecting-the-contact-form-to-a-real-backend)
8. [Adding a blog later](#adding-a-blog-later)
9. [Troubleshooting](#troubleshooting)

---

## Quick start

Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload at http://localhost:5173)
npm run dev

# 3. Build for production (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

That's it. No backend, no database, no API keys needed to run locally.

---

## Project structure

```
tantro/
├── public/
│   ├── logo.png             ← your brand logo (favicon + nav + footer)
│   └── CNAME                ← custom domain file for GitHub Pages (tantro.in)
├── src/
│   ├── content.js           ← ★ ALL SITE TEXT LIVES HERE ★
│   ├── App.jsx              ← top-level layout, imports every section
│   ├── main.jsx             ← React entry point
│   ├── index.css            ← Tailwind layers + custom utility classes
│   ├── components/
│   │   ├── Nav.jsx          ← fixed top nav + mobile drawer
│   │   ├── HeroCanvas.jsx   ← Three.js wireframe sphere background
│   │   ├── Reveal.jsx       ← scroll-triggered fade/slide wrapper
│   │   └── SectionHeader.jsx← reusable /NN + eyebrow + title block
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Industries.jsx
│       ├── Products.jsx
│       ├── Knowledge.jsx
│       ├── WhyTantro.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── index.html               ← SEO meta, Open Graph, JSON-LD, Google Fonts
├── tailwind.config.js       ← brand colors, fonts, animations
├── vite.config.js           ← build config (change `base` for project-site hosting)
├── postcss.config.js
└── package.json
```

**Mental model:** each section is an independent React component. They are assembled in `src/App.jsx` in the order they appear. All text comes from `src/content.js`.

---

## Editing content (the one file you need)

Open `src/content.js`. Everything you see on the site — headlines, services, industries, products, contact info — is exported from here as plain JavaScript objects.

### Change your contact email or location

```js
export const brand = {
  name: 'TANTRO',
  tagline: 'Think next-gen industry. Think Tantro.',
  domain: 'tantro.in',
  email: 'hello@tantro.in',     // ← change this
  location: 'Bengaluru, India', // ← change this
}
```

### Change the hero headline or subtitle

```js
export const hero = {
  eyebrow: 'Industry 5.0 / Ready',
  headline: ['Engineering the', 'industrial future.'], // ← two lines; last line gets the gradient
  sub: 'TANTRO builds the intelligence layer for modern industry — ...',
  primaryCta: { label: 'Start a project', href: '#contact' },
  secondaryCta: { label: 'Explore services', href: '#services' },
  stats: [
    { value: '24/7', label: 'Real-time telemetry' }, // ← edit / add / remove freely
    { value: '5.0',  label: 'Industry readiness' },
    { value: '∞',    label: 'Scalable by design' },
  ],
}
```

### Add, remove, or edit a service

```js
export const services = {
  // ...
  items: [
    {
      icon: Gauge,                          // pick any icon from lucide-react
      name: 'Industrial Solutions',
      blurb: 'Real-time data acquisition...',
      bullets: ['Edge sensing & SCADA', '...'],
      accent: 'azure',                      // 'azure' | 'violet' | 'teal'
    },
    // add a new object here to add a fourth service card
  ],
}
```

To add a new service, copy a whole `{ icon, name, blurb, bullets, accent }` object, paste it into the `items` array, and change the fields. The grid re-flows automatically.

### Add or remove an industry

Industries are a flat list — just add or remove entries:

```js
export const industries = {
  items: [
    { icon: Factory, label: 'Manufacturing' },
    // add new entries here — the grid re-flows automatically
  ],
}
```

For a new icon, browse [lucide.dev/icons](https://lucide.dev/icons) and add the import at the top of the file.

### Update products, knowledge posts, Why Tantro points, contact section

Same pattern — find the relevant exported object in `content.js` and edit or add list items. You never need to touch JSX.

---

## Editing design tokens (colors, fonts)

If you want to change brand colors, open `tailwind.config.js`:

```js
colors: {
  azure:  { DEFAULT: '#2E6BFF', glow: '#5B8CFF' },
  violet: { DEFAULT: '#7A4FFF', glow: '#9B76FF' },
  teal:   { DEFAULT: '#20D5A5', glow: '#4DE6BD' },
  // ink-950 is the page background, ink-900/800/700 are surfaces
}
```

Fonts are loaded from Google Fonts in `index.html`. The default stack is **Space Grotesk** (display), **Inter** (body), and **JetBrains Mono** (mono/technical accents).

---

## Deploying to Vercel (recommended)

Vercel is the fastest path to production and works out of the box.

1. Push the project to a GitHub repo (see the **Git setup** section below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.
4. Add your custom domain:
   - In the Vercel project → **Settings → Domains** → add `tantro.in` and `www.tantro.in`.
   - At your domain registrar (where you bought `tantro.in`), set the DNS records Vercel shows you.

Every push to `main` auto-deploys. Preview deploys are created for every pull request.

---

## Deploying to GitHub Pages

GitHub Pages works well for this site since it's fully static. Two things to know:

1. The `public/CNAME` file already contains `tantro.in`, so your custom domain will be picked up automatically.
2. **If you deploy to `https://username.github.io/tantro-site/` (a "project site"), you must edit `vite.config.js`** and set the `base` option:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/tantro-site/', // ← the name of your repo, with slashes
   })
   ```

   If you are using the custom domain `tantro.in`, leave `base: '/'` as-is.

### Option A: GitHub Actions (automatic on push) — **recommended**

This repo ships with `.github/workflows/deploy.yml`. To enable it:

1. Push the code to GitHub.
2. In the repo → **Settings → Pages** → under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow builds the site and publishes it.
4. Under **Settings → Pages → Custom domain**, enter `tantro.in`. GitHub will detect the `CNAME` file and confirm.
5. At your registrar, point `tantro.in` to GitHub's IPs — instructions are [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Option B: Manual deploy with `gh-pages`

The `gh-pages` npm package is already in `devDependencies`.

```bash
npm run build
npm run deploy
```

This pushes `dist/` to a `gh-pages` branch. In **Settings → Pages**, set the source to the `gh-pages` branch root.

### Git setup (first time)

```bash
git init
git add .
git commit -m "Initial: Tantro site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## Connecting the contact form to a real backend

The contact form in `src/sections/Contact.jsx` currently uses a `mailto:` fallback so the site works with zero configuration. For real production lead capture, pick one of these and replace the marked block:

### Option 1: Formspree (easiest, free tier)

1. Sign up at [formspree.io](https://formspree.io), create a form, and grab the endpoint URL (like `https://formspree.io/f/abc123`).
2. In `src/sections/Contact.jsx`, find the comment `// === ENDPOINT ===` and replace the block with:

   ```js
   const r = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
     body: JSON.stringify(form),
   })
   if (r.ok) setState('sent')
   else setState('error')
   ```

### Option 2: Web3Forms (free, no signup)

Same structure, just swap the URL and include an `access_key`. See [web3forms.com](https://web3forms.com).

### Option 3: Your own endpoint

If you have a backend (Supabase Edge Function, Cloudflare Worker, Node API, etc.), `POST` the `form` object to it. The form already has client-side validation via HTML5 `required` attributes.

---

## Adding a blog later

The Knowledge Hub currently shows three placeholder posts from `content.js`. When you're ready to add a real blog, you have two paths:

### Path A: Hand-written Markdown posts (simple, no CMS)

Best for an engineering team that's comfortable editing files in Git.

1. Install Vite's Markdown plugin:

   ```bash
   npm install @mdx-js/rollup @mdx-js/react --save-dev
   ```

2. Create `src/posts/` and write each post as `.mdx` (Markdown + JSX):

   ```md
   ---
   title: "Why physics-informed twins outperform pure ML"
   date: "2026-05-01"
   tag: "Digital Twin"
   read: "6 min read"
   ---

   Your post body here...
   ```

3. Update `vite.config.js` to register the MDX plugin, then create a `src/pages/blog/[slug].jsx` route using a client-side router (see next bullet) or a simple frontmatter-driven list.

4. Add a router — [`react-router-dom`](https://reactrouter.com) is the standard choice:

   ```bash
   npm install react-router-dom
   ```

   Wrap `<App />` in a `<BrowserRouter>` and create `/blog` and `/blog/:slug` routes that import and render MDX files.

### Path B: Headless CMS (scalable, non-technical editors)

If you want marketing or non-developers to publish posts:

- [**Sanity**](https://www.sanity.io) — powerful, free for small teams
- [**Contentful**](https://www.contentful.com) — enterprise-grade
- [**Notion as CMS**](https://developers.notion.com) — write posts in Notion, pull via API

Replace the `knowledge.posts` array in `content.js` with a `fetch()` call in a `useEffect` hook, and render the returned posts with the same card layout that's already built.

### Path C: Migrate to Next.js (if you want SSR + routing + CMS out of the box)

For a serious content operation, migrating from Vite to Next.js is ~a day of work and gets you file-based routing, built-in MDX, image optimization, and static generation. The Tailwind config, content structure, and all section components port over with almost no changes.

---

## Troubleshooting

**`npm install` fails**
Make sure you're on Node 18 or newer: `node --version`. If you use `nvm`, run `nvm use 18`.

**Icons show as empty squares**
A specific icon name may have changed in lucide-react. Open [lucide.dev/icons](https://lucide.dev/icons), find the new name, and update the import in `src/content.js`.

**Three.js hero is slow on low-end devices**
The wireframe sphere is the heaviest piece (~150KB of Three.js). If you need to drop it, delete `import HeroCanvas from '../components/HeroCanvas'` and the `<HeroCanvas />` line in `src/sections/Hero.jsx`. The grid + gradient background alone still looks premium.

**Blank page on GitHub Pages after deploy**
You almost certainly need to set `base` in `vite.config.js` to match your repo name. See the GitHub Pages section above.

**Fonts not loading**
Google Fonts can be blocked in some networks. For a fully offline build, download Space Grotesk, Inter, and JetBrains Mono, drop the `.woff2` files into `public/fonts/`, and add `@font-face` rules to `src/index.css`.

---

## Credits

- **Design & build:** rebuilt from scratch to replace the Nicepage-generated original.
- **Icons:** [Lucide](https://lucide.dev)
- **Fonts:** Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- **3D:** [Three.js](https://threejs.org)
- **Motion:** [Framer Motion](https://www.framer.com/motion/)

---

© TANTRO. All rights reserved.
