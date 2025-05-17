import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@heroicons/react',
        '@emotion/react',
        '@emotion/styled',
        'styled-components',
        'swiper',
        'react-slick',
        // Tambahkan di sini sesuai modul error
      ],
    },
  },
});
