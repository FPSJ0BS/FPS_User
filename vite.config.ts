import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api2": {
        target: "https://api.linkedin.com/v2",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api2/, ""),
      },
      "/Url": {
        target: "https://www.linkedin.com/oauth/v2",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/Url/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Assets": path.resolve(__dirname, "src", "assets"),
      "@Components": path.resolve(__dirname, "src", "Components"),
      "@Container": path.resolve(__dirname, "src", "Container"),
      "@Hooks": path.resolve(__dirname, "src", "Hooks"),
      "@Utils": path.resolve(__dirname, "src", "Utils"),
      "@Config": path.resolve(__dirname, "src", "Config"),
      "@Const": path.resolve(__dirname, "src", "Const"),
      "@Type": path.resolve(__dirname, "src", "Type"),
      "@PublicLayout": path.resolve(__dirname, "src", "PublicLayout"),
      "@PrivateLayout": path.resolve(__dirname, "src", "PrivateLayout"),
      "@Store": path.resolve(__dirname, "src", "Store"),
      "@Repo": path.resolve(__dirname, "src", "Repo"),
      "@Navigator": path.resolve(__dirname, "src", "Navigator"),
      "@Context": path.resolve(__dirname, "src", "Context"),
    },
  },
  build: {
    sourcemap: false,
  },
});
