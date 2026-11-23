import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repo-name>/, so the deploy
  // workflow sets VITE_BASE_PATH to that. Locally (npm run dev/build) this
  // is unset and falls back to root, which is what you want on localhost.
  base: process.env.VITE_BASE_PATH || '/',
})
