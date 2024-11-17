import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/leetcode': {
        target: 'https://coderme.vercel.app/leetcode',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/leetcode/, ''),
      },
      '/gfg': {
        target: 'https://geeks-for-geeks-api.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gfg/, ''),
      },
    },
  },
});
