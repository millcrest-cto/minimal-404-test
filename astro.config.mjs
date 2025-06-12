// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://tytonei.com",
  server: {
    host: "0.0.0.0",
  },
  output: "server",
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
