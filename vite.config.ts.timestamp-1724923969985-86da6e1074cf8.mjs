// vite.config.ts
import { defineConfig } from "file:///C:/Users/ssoni/Desktop/FPS%20Jobs/FPS_User/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ssoni/Desktop/FPS%20Jobs/FPS_User/node_modules/@vitejs/plugin-react-swc/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "C:\\Users\\ssoni\\Desktop\\FPS Jobs\\FPS_User";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api2": {
        target: "https://api.linkedin.com/v2",
        changeOrigin: true,
        secure: true,
        rewrite: (path2) => path2.replace(/^\/api2/, "")
      },
      "/Url": {
        target: "https://www.linkedin.com/oauth/v2",
        changeOrigin: true,
        secure: true,
        rewrite: (path2) => path2.replace(/^\/Url/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@Assets": path.resolve(__vite_injected_original_dirname, "src", "assets"),
      "@Components": path.resolve(__vite_injected_original_dirname, "src", "Components"),
      "@Container": path.resolve(__vite_injected_original_dirname, "src", "Container"),
      "@Hooks": path.resolve(__vite_injected_original_dirname, "src", "Hooks"),
      "@Utils": path.resolve(__vite_injected_original_dirname, "src", "Utils"),
      "@Config": path.resolve(__vite_injected_original_dirname, "src", "Config"),
      "@Const": path.resolve(__vite_injected_original_dirname, "src", "Const"),
      "@Type": path.resolve(__vite_injected_original_dirname, "src", "Type"),
      "@PublicLayout": path.resolve(__vite_injected_original_dirname, "src", "PublicLayout"),
      "@PrivateLayout": path.resolve(__vite_injected_original_dirname, "src", "PrivateLayout"),
      "@Store": path.resolve(__vite_injected_original_dirname, "src", "Store"),
      "@Repo": path.resolve(__vite_injected_original_dirname, "src", "Repo"),
      "@Navigator": path.resolve(__vite_injected_original_dirname, "src", "Navigator"),
      "@Context": path.resolve(__vite_injected_original_dirname, "src", "Context")
    }
  },
  build: {
    sourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzc29uaVxcXFxEZXNrdG9wXFxcXEZQUyBKb2JzXFxcXEZQU19Vc2VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzc29uaVxcXFxEZXNrdG9wXFxcXEZQUyBKb2JzXFxcXEZQU19Vc2VyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9zc29uaS9EZXNrdG9wL0ZQUyUyMEpvYnMvRlBTX1VzZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHtcclxuICAgICAgXCIvYXBpMlwiOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBcImh0dHBzOi8vYXBpLmxpbmtlZGluLmNvbS92MlwiLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaTIvLCBcIlwiKSxcclxuICAgICAgfSxcclxuICAgICAgXCIvVXJsXCI6IHtcclxuICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL29hdXRoL3YyXCIsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvVXJsLywgXCJcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxyXG4gICAgICBcIkBBc3NldHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJhc3NldHNcIiksXHJcbiAgICAgIFwiQENvbXBvbmVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJDb21wb25lbnRzXCIpLFxyXG4gICAgICBcIkBDb250YWluZXJcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJDb250YWluZXJcIiksXHJcbiAgICAgIFwiQEhvb2tzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIsIFwiSG9va3NcIiksXHJcbiAgICAgIFwiQFV0aWxzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIsIFwiVXRpbHNcIiksXHJcbiAgICAgIFwiQENvbmZpZ1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcIkNvbmZpZ1wiKSxcclxuICAgICAgXCJAQ29uc3RcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJDb25zdFwiKSxcclxuICAgICAgXCJAVHlwZVwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcIlR5cGVcIiksXHJcbiAgICAgIFwiQFB1YmxpY0xheW91dFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcIlB1YmxpY0xheW91dFwiKSxcclxuICAgICAgXCJAUHJpdmF0ZUxheW91dFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiLCBcIlByaXZhdGVMYXlvdXRcIiksXHJcbiAgICAgIFwiQFN0b3JlXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIsIFwiU3RvcmVcIiksXHJcbiAgICAgIFwiQFJlcG9cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJSZXBvXCIpLFxyXG4gICAgICBcIkBOYXZpZ2F0b3JcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJOYXZpZ2F0b3JcIiksXHJcbiAgICAgIFwiQENvbnRleHRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiwgXCJDb250ZXh0XCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdULFNBQVMsb0JBQW9CO0FBQ3JWLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFGdEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLFdBQVcsRUFBRTtBQUFBLE1BQy9DO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsUUFDUixTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFVLGFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ2xDLFdBQWdCLGFBQVEsa0NBQVcsT0FBTyxRQUFRO0FBQUEsTUFDbEQsZUFBb0IsYUFBUSxrQ0FBVyxPQUFPLFlBQVk7QUFBQSxNQUMxRCxjQUFtQixhQUFRLGtDQUFXLE9BQU8sV0FBVztBQUFBLE1BQ3hELFVBQWUsYUFBUSxrQ0FBVyxPQUFPLE9BQU87QUFBQSxNQUNoRCxVQUFlLGFBQVEsa0NBQVcsT0FBTyxPQUFPO0FBQUEsTUFDaEQsV0FBZ0IsYUFBUSxrQ0FBVyxPQUFPLFFBQVE7QUFBQSxNQUNsRCxVQUFlLGFBQVEsa0NBQVcsT0FBTyxPQUFPO0FBQUEsTUFDaEQsU0FBYyxhQUFRLGtDQUFXLE9BQU8sTUFBTTtBQUFBLE1BQzlDLGlCQUFzQixhQUFRLGtDQUFXLE9BQU8sY0FBYztBQUFBLE1BQzlELGtCQUF1QixhQUFRLGtDQUFXLE9BQU8sZUFBZTtBQUFBLE1BQ2hFLFVBQWUsYUFBUSxrQ0FBVyxPQUFPLE9BQU87QUFBQSxNQUNoRCxTQUFjLGFBQVEsa0NBQVcsT0FBTyxNQUFNO0FBQUEsTUFDOUMsY0FBbUIsYUFBUSxrQ0FBVyxPQUFPLFdBQVc7QUFBQSxNQUN4RCxZQUFpQixhQUFRLGtDQUFXLE9BQU8sU0FBUztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLEVBQ2I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
