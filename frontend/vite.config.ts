import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.app', '.ngrok.io'],
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
