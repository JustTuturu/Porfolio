import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false
    },
  }
});
