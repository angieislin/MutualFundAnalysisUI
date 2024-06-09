const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/mf',
    createProxyMiddleware({
      target: 'http://192.168.0.156:8080/',
      changeOrigin: true,
    })
  );
};