import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log("[vite]: mode:", mode);

  // Load environment variables
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());
  console.log("[vite]: env:", env);

  return {
    plugins: [react()],
  };
});