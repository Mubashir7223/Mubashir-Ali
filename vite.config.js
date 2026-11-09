import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// When a custom domain (CNAME) is used with GitHub Pages the site is served
// from the root, so the base is always '/'. The env-based logic below keeps
// things working for both the custom-domain deployment and plain gh-pages URLs.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const hasCustomDomain = true  // muhammadmubashir.tech — always serve from root
const base = hasCustomDomain ? '/' : (process.env.GITHUB_ACTIONS && repository ? `/${repository}/` : '/')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
