import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/WEB-FE-HTML-TAILWIND-BONICE/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },

});