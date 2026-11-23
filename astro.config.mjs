import { defineConfig } from 'astro/config';

// BASE_PATH lets the same build run on a custom domain ("/") or a GitHub Pages
// project URL ("/jiwadevelopment"). The GitHub Actions workflow sets it.
export default defineConfig({
  site: process.env.SITE_URL || 'https://jiwadevelopment.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
