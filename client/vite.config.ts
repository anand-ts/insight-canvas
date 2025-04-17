import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Check if index.html exists in the correct location
const indexPath = path.resolve(__dirname, 'index.html');
const publicIndexPath = path.resolve(__dirname, 'public', 'index.html');

// If index.html isn't in the root, copy it there
if (!fs.existsSync(indexPath) && fs.existsSync(publicIndexPath)) {
  fs.copyFileSync(publicIndexPath, indexPath);
  console.log('Copied index.html to project root for Vite');
}

export default defineConfig({
  plugins: [react()],
  root: '.', // Explicitly set root to current directory
  base: '/', // Ensure base path is set correctly
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true, // This enables listening on all network interfaces
    strictPort: true, // This ensures Vite doesn't try another port if 3000 is taken
    open: true, // This opens the browser automatically
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});