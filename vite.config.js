import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/breeze.ai-process-model/' : '/',
  server: {
    host: '0.0.0.0',
    port: 8080
  }
})