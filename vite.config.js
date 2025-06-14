import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow network access (like 192.168.x.x)
    port: 5173,
    strictPort: true,
    open: true,
    historyApiFallback: true
  }
});
