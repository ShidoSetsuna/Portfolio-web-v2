import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "v8", // or 'istanbul'
    },
    browser: {
      provider: playwright(),
      enabled: true,
      //headless: true,
      // at least one instance is required
      instances: [{ browser: "chromium" }],
    },
  },
});
