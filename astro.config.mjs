// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [{
    provider: fontProviders.google(),
    name: "Crimson Pro",
    cssVariable: "--font-crimson"
  }],

  integrations: [react()],

  adapter: node({
    mode: "standalone",
  }),
});