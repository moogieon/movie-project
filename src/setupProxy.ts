const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/v1/search/movie.json', {
      target: 'https://openapi.naver.com',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://127.0.0.1:5173/',
      changeOrigin: true,
    }),
  );
};