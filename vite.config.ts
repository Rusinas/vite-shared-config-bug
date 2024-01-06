import { fileURLToPath, URL } from 'node:url'

import { ViteConfigBase } from 'vite-config'

import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(mergeConfig(ViteConfigBase, {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
}))
