import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor_react'
            }
            if (id.includes('swiper')) {
              return 'vendor_swiper'
            }
            if (id.includes('react-slick')) {
              return 'vendor_react_slick'
            }
            if (id.includes('react-swipeable-views')) {
              return 'vendor_swipeable_views'
            }
            // Semua modul node_modules lainnya masuk ke 'vendor'
            return 'vendor'
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // naikkan limit warning agar build tidak terlalu banyak peringatan
  },
})
