import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import path from 'node:path';

// Static build for GitHub Pages (custom domain tantro.in → base '/').
export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  base: '/',
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  build: { outDir: 'dist' },
});
