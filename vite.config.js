import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'


export default defineConfig({
  base: '/Progetto-React/',
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      stats: path.resolve(__dirname, 'src/components/stats')
    }
  }
})
 
