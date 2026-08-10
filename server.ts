import express from 'express';
import path from 'path';
import fs from 'fs';

async function startServer() {
  const app = express();
  const PORT = 3000;

  const distPath = path.join(process.cwd(), 'dist');
  const publicPath = path.join(process.cwd(), 'public');

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'custom',
    });
    
    // Middleware for DEV mode SEO & static files from public/
    app.use((req, res, next) => {
      res.setHeader('X-Robots-Tag', 'all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      next();
    });

    // Serve static files from public/
    app.use(express.static(publicPath));

    // Handle HTML routes with Vite transformIndexHtml
    app.use(async (req, res, next) => {
      const url = req.originalUrl || req.url || '/';
      // Skip assets, node_modules, and files with extensions (except .html)
      if (url.includes('/@') || url.includes('/node_modules/') || url.includes('/src/') || (url.includes('.') && !url.endsWith('.html'))) {
        return next();
      }

      const cleanUrl = url.split('?')[0] || '/';
      if (cleanUrl === '/sitemap.xml' || cleanUrl === '/sitemap') {
        const filePath = path.join(publicPath, 'sitemap.xml');
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          return res.send(fs.readFileSync(filePath, 'utf-8'));
        }
      }
      if (cleanUrl === '/robots.txt') {
        const filePath = path.join(publicPath, 'robots.txt');
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.send(fs.readFileSync(filePath, 'utf-8'));
        }
      }

      if (cleanUrl.startsWith('/google') && cleanUrl.endsWith('.html')) {
        const fileName = cleanUrl.slice(1);
        const filePath = path.join(publicPath, fileName);
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.send(fs.readFileSync(filePath, 'utf-8'));
        }
      }

      try {
        const indexPath = path.resolve(process.cwd(), 'index.html');
        if (!fs.existsSync(indexPath)) {
          return next();
        }
        let template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(cleanUrl, template);
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });

    app.use(vite.middlewares);
  } else {
    // Production Mode
    app.use((req, res, next) => {
      res.setHeader('X-Robots-Tag', 'all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      next();
    });

    // 1. Explicit handlers for key static files to guarantee they never hit SPA fallback
    app.get('/sitemap.xml', (req, res) => {
      const file = path.join(distPath, 'sitemap.xml');
      if (fs.existsSync(file)) {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        return res.sendFile(file);
      }
      const pubFile = path.join(publicPath, 'sitemap.xml');
      if (fs.existsSync(pubFile)) {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        return res.sendFile(pubFile);
      }
      res.status(404).send('Not found');
    });

    app.get('/sitemap', (req, res) => {
      const file = path.join(distPath, 'sitemap.xml');
      if (fs.existsSync(file)) {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        return res.sendFile(file);
      }
      res.status(404).send('Not found');
    });

    app.get('/robots.txt', (req, res) => {
      const file = path.join(distPath, 'robots.txt');
      if (fs.existsSync(file)) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.sendFile(file);
      }
      const pubFile = path.join(publicPath, 'robots.txt');
      if (fs.existsSync(pubFile)) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.sendFile(pubFile);
      }
      res.status(404).send('Not found');
    });

    app.get('/google*.html', (req, res) => {
      const fileName = path.basename(req.path);
      const file = path.join(distPath, fileName);
      if (fs.existsSync(file)) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        return res.sendFile(file);
      }
      const pubFile = path.join(publicPath, fileName);
      if (fs.existsSync(pubFile)) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        return res.sendFile(pubFile);
      }
      res.status(404).send('Not found');
    });

    // 2. Serve static files from dist folder (includes copied public/ contents)
    app.use(express.static(distPath, {
      dotfiles: 'allow',
      index: false
    }));

    // 3. Fallback for any other file in public folder if dist hasn't finished copying or in container
    app.use(express.static(publicPath, {
      dotfiles: 'allow',
      index: false
    }));

    // 4. SPA route fallback to index.html
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
