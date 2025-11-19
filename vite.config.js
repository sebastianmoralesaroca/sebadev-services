// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ⬅️ Se agrega o modifica esta sección para forzar la conexión
  server: { 
    host: '127.0.0.1', // Usa 127.0.0.1 para forzar la dirección local
    port: 5173        // Mantiene el puerto, o cámbialo a 5174 si hay conflicto
  }
});