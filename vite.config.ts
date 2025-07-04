import { reactRouter } from "@react-router/dev/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    include: "./app/**/*.tsx"
  }), reactRouter(), tailwindcss(), tsconfigPaths()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
