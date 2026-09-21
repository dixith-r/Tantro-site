# Tantro — Website

Coming-soon site for Tantro with an interactive Connect → See → Act sequence.
Static React + Vite + Tailwind v4, deployed to GitHub Pages at https://tantro.in.

```sh
npm ci
npm run dev     # local preview
npm run build   # outputs dist/
```

Any push to `main` redeploys automatically via `.github/workflows/deploy.yml`.
Page and animation: `src/App.tsx`; styling: `src/globals.css`.
