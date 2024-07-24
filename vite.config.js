import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: "key/cert.key",
      cert: "key/cert.crt",
    },
  },

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "BreadApp",
        short_name: "BreadApp",
        icons: [
          {
            src: "favicon-assets/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "favicon-assets/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "favicon-assets/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "favicon-assets/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: "/",
        id: "/",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        description: "A simple react PWA ",
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpeg}",
          "**/assets/**.{png,jpeg,jpg}",
        ],
        maximumFileSizeToCacheInBytes: 50000000, // 50mb max cache size
        cleanupOutdatedCaches: true,
      },
    }),
  ],
});
