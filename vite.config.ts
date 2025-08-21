import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "./src/hooks"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@customTypes",
        replacement: path.resolve(__dirname, "./src/customTypes"),
      },
      {
        find: "@axiosInstance",
        replacement: path.resolve(__dirname, "./src/axiosInstance"),
      },
    ],
  },
});
