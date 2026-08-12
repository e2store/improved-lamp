import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "pages",
  base: "/improved-lamp/",
  publicDir: "../public",
  plugins: [react()],
  build: {
    outDir: "../github-pages",
    emptyOutDir: true,
  },
});
