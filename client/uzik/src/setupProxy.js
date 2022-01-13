const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://52.78.15.113:8080',
      // target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};