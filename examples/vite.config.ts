import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'cross-origin'
    }
  },
  optimizeDeps: {
    exclude: ['@mediapipe/tasks-genai']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'mediapipe-wasm': ['@mediapipe/tasks-genai']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@mediapipe/tasks-genai': resolve(__dirname, 'node_modules/@mediapipe/tasks-genai'),
      '@lyndonkl/gemma': resolve(__dirname, '../dist')
    }
  },
  ssr: {
    noExternal: ['@mediapipe/tasks-genai']
  }
}); 