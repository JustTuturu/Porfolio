import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Static output — deployed to Cloudflare Pages as plain files.
  // No platform adapter needed: Pages serves the dist/ directory directly.
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false
    },
  }
});