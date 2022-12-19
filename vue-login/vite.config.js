import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert' // https

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
})
