import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  // server: {
  //   host: true,
  //   port: 5173,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3001/", // Backend server
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
