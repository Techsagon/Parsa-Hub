import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Parsa-Hub/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});