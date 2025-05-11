import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
        'aos',
        'swiper',  // jika ada error terkait dengan modul lainnya
        'react-slick',  // misalnya jika react-slick digunakan
      ],
    },
  },
})
