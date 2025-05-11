import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
        '@emotion/react',
        '@emotion/styled',
        'swiper',
        'react-slick',
        // Tambahkan modul-modul lain yang mungkin menyebabkan masalah
      ],
    },
  },
})
