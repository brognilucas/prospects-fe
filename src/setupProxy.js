const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/api', '/api2'],
        createProxyMiddleware({
            target: 'https://n1b5o73b8g.execute-api.eu-west-1.amazonaws.com/dev/',
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/',
            }
        })
    );
};
