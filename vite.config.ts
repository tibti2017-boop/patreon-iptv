import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function seoAndStaticFilesPlugin(): Plugin {
  return {
    name: 'seo-and-static-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        res.setHeader('X-Robots-Tag', 'all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        
        const url = req.url || '';
        
        if (url === '/sitemap.xml' || url === '/sitemap') {
          const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
          if (fs.existsSync(sitemapPath)) {
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            return res.end(fs.readFileSync(sitemapPath, 'utf-8'));
          }
        }
        
        if (url === '/robots.txt') {
          const robotsPath = path.resolve(__dirname, 'public/robots.txt');
          if (fs.existsSync(robotsPath)) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.end(fs.readFileSync(robotsPath, 'utf-8'));
          }
        }

        if (url.startsWith('/google') && url.endsWith('.html')) {
          const fileName = url.slice(1);
          const googlePath = path.resolve(__dirname, 'public', fileName);
          if (fs.existsSync(googlePath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            return res.end(fs.readFileSync(googlePath, 'utf-8'));
          }
        }

        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        res.setHeader('X-Robots-Tag', 'all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        
        const url = req.url || '';
        if (url === '/sitemap.xml' || url === '/sitemap') {
          const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
          if (fs.existsSync(sitemapPath)) {
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            return res.end(fs.readFileSync(sitemapPath, 'utf-8'));
          }
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    publicDir: 'public',
    plugins: [react(), tailwindcss(), seoAndStaticFilesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      copyPublicDir: true,
      emptyOutDir: true,
    },
    server: {
      headers: {
        'X-Robots-Tag': 'all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    preview: {
      headers: {
        'X-Robots-Tag': 'all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
  };
});
