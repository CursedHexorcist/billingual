import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // alias kalau perlu
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      external: ['react', 'react-dom']  // tandai react dan react-dom sebagai external
    }
  },
})
