import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import fs from "fs";
import path from "path";
const spaRedirectPlugin = () => ({
  name: "spa-redirect-plugin",
  closeBundle() {
    const distPath = path.resolve(import.meta.dirname, "dist");
    if (fs.existsSync(distPath)) {
      fs.copyFileSync(
        path.join(distPath, "index.html"),
        path.join(distPath, "404.html")
      );
      console.log("✅ Created global 404.html fallback for all platforms!");
    }
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),spaRedirectPlugin()],
})
