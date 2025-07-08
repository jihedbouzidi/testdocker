import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 👈 permet l'accès de l'extérieur du conteneur
    port: 5173,         // 👈 le port exposé
    strictPort: true,   // ne change pas de port si 5173 est occupé
  },
})
