import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  adapter: cloudflare(),

  vite: {
    resolve: {
      alias: {
        'react-dom/server': 'react-dom/server.edge'
      }
    },
    plugins: [tailwindcss()]
  }
});