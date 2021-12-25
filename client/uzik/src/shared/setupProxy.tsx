export const { createProxyMiddleware } = require('http-proxy-middleware');
const WORKNET_API_KEY: any = process.env.WORKNET_API_KEY;

module.exports = function(app: any) {
  app.use(
    `/opi/opi/opia/jobSrch.do?authKey=${WORKNET_API_KEY}&returnType=XML&target=JOBCD`,
    createProxyMiddleware({
      target: 'http://openapi.work.go.kr',
      changeOrigin: true,
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
