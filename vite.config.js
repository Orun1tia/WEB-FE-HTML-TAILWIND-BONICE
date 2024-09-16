import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Orun1tia.github.io/WEB-FE-HTML-TAILWIND-BONICE',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },

});