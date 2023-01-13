import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import sassGlobImports from "vite-plugin-sass-glob-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassGlobImports()],
  base: process.env["environment"] === "gh-pages" ? "/pokedex/" : "/",
  css: {
    postcss: {
      plugins: [autoprefixer({})]
    }
  },
  define: {
    "process.env": process.env
  }
});
