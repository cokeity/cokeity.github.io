import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a repository named "username.github.io", keep base as '/'.
// For a project repository named "my-portfolio", change it to '/my-portfolio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
