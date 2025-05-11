import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        'react-dom/server',
        // tambahkan modul lain jika error build menyebutnya
      ],
    },
  },
})
