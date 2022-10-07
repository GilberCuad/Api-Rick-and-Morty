import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://GilberCuad.github.io/Api-Rick-and-Morty/",
  plugins: [react()]
})
