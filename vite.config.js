import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        product: 'pages/product.html',
        contact: 'pages/contact.html',
      },
    },
  },
  server: {
    open: false,
    port: 5173,
    strictPort: true,
  },
})
