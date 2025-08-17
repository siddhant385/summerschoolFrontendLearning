import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';  // <-- missing import


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: [
      'devserver-unstable--summerschooljlug.netlify.app',
      'localhost'
    ]
  },
  
})
