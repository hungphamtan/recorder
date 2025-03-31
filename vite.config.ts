import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import type { ViteDevServer } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'recorder',
  plugins: [
    react(),
    {
      name: 'configure-response-headers',
      configureServer: (server: ViteDevServer) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      features: resolve(__dirname, 'src/features'),
      components: resolve(__dirname, 'src/components'),
      hooks: resolve(__dirname, 'src/hooks'),
      contexts: resolve(__dirname, 'src/contexts'),
      services: resolve(__dirname, 'src/services'),
      styles: resolve(__dirname, 'src/styles'),
      assets: resolve(__dirname, 'src/assets'),
    },
  },
});
