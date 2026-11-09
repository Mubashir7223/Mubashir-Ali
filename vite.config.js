import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom domain muhammadmubashir.tech is active — GitHub Pages serves
// everything from root '/', so base is always '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
