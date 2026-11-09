import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site at /<repo-name>/ unless a custom domain CNAME
// is active.  Read the repo name injected by the Actions runner so the base
// is always correct — no manual editing needed when the repo is renamed.
//
// When the custom domain muhammadmubashir.tech is fully set up (DNS A-records
// pointing to GitHub), GitHub Pages serves from the root ('/') automatically
// and the CNAME file in /public handles that.  Until then the repo-subdirectory
// base keeps everything working on the github.io URL.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_ACTIONS && repository ? `/${repository}/` : '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
