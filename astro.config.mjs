import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Actions supplies these values automatically. For other hosts, set
// SITE_URL and leave BASE_PATH empty (or set it to the deployed subdirectory).
export default defineConfig({
  site: process.env.SITE_URL || 'https://192qq-maker.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
