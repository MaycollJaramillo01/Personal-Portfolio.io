// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = process.env.SITE_URL ?? 'https://maycolljaramillo.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';
const normalizedBase =
  BASE_PATH && BASE_PATH !== '/'
    ? `/${BASE_PATH.replace(/^\/+|\/+$/g, '')}/`
    : '/';
const resolvedSite = new URL(normalizedBase, SITE_URL).toString().replace(/\/$/, '');

export default defineConfig({
  site: resolvedSite,
  base: normalizedBase,
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
