import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {}
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      onwarn(warning, warn) {
        // Abaikan warning tertentu yang tidak fatal
        if (
          warning.message &&
          warning.message.includes('This is most likely unintended because it can break your application')
        ) {
          return
        }
        warn(warning)
      },
      external: [] // Kosongkan dulu, nanti isi jika sudah tahu modul spesifik
    }
  }
})
