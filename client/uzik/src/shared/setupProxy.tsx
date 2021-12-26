export const proxy = require('http-proxy-middleware');
const WORKNET_API_KEY: any = process.env.WORKNET_API_KEY;

module.exports = function(app: any) {
  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: `http://openapi.work.go.kr/opi/opi/opia/jobSrch.do?authKey=${WORKNET_API_KEY}&returnType=XML&target=JOBCD`,
      changeOrigin: true,
      pathRewrite: {
        '^/api' : ''
      }
    }))
}