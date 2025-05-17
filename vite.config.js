import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Jika kamu perlu alias khusus, tambahkan di sini, misal:
      // 'react-swipeable-views': 'react-swipeable-views', 
      // Tapi biasanya ini nggak perlu kecuali kamu pakai custom path.
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
})
