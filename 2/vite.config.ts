import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: [
      '.e2b.app',  // 允许所有 E2B 域名
      '.e2b.dev',  // 允许所有 E2B 开发域名
      'localhost'  // 允许本地访问
    ],
  }
})
