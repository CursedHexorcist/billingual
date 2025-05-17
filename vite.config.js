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
        // Abaikan warning 'this is likely unintended external'
        if (
          warning.message &&
          warning.message.includes('This is most likely unintended because it can break your application')
        ) {
          return
        }
        warn(warning)
      },
      external: [], // kosongkan dulu, jangan pakai external sembarangan
    }
  }
})

