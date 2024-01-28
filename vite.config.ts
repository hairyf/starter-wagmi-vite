import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import unocss from 'unocss/vite'
import envParsing from 'unplugin-env-parsing/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
    plugins: [
      envParsing({ mode, dts: './src/types/env.d.ts' }),
      react(),
      pages(),
      unocss(),
    ],
  }
})
