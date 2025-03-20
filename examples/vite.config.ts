import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  },
  optimizeDeps: {
    exclude: [
      '@mediapipe/tasks-genai'
    ]
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
      '@mediapipe/tasks-genai': resolve(__dirname, 'node_modules/@mediapipe/tasks-genai')
    }
  },
  ssr: {
    noExternal: ['@mediapipe/tasks-genai']
  },
  assetsInclude: ['**/*.js'],
  publicDir: 'public',
  base: '/',
  worker: {
    format: 'iife',
    plugins: () => []
  }
}); 