import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@features',
        replacement: fileURLToPath(new URL('./src/features', import.meta.url)),
      },
      {
        find: '@apis',
        replacement: fileURLToPath(new URL('./src/common/apis', import.meta.url)),
      },
      {
        find: '@models',
        replacement: fileURLToPath(new URL('./src/common/models', import.meta.url)),
      },
      {
        find: '@constants',
        replacement: fileURLToPath(new URL('./src/common/constants', import.meta.url)),
      },
    ],
  },
})
