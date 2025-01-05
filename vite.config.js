import { defineConfig } from 'vite'

export default defineConfig({
  root: "./src",
  server: {
    host: "0.0.0.0",
  },
  publicDir: "../public",
  build: {
    outDir: "../dist",
  }
})