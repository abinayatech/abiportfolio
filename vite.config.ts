import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Plain static Vite SPA build (no SSR / Nitro / server runtime).
// Deploys as static files to GitHub Pages — see .github/workflows/deploy.yml.
export default defineConfig({
  // Repo deploys to the root of a GitHub *user/org* Pages site
  // (https://abinayatech.github.io/), so the base path is "/".
  // If this is ever moved to a *project* page instead
  // (https://abinayatech.github.io/abinaya-portfolio/), change this to
  // "/abinaya-portfolio/".
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    tsconfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 8080,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
