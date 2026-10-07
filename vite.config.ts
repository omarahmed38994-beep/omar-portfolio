import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' works for both https://user.github.io/repo/ and a custom domain.
export default defineConfig({ base: './', plugins: [react()] })
