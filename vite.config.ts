import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  plugins: [
    react(),
    pages(),
    unocss(),
  ],
})
