const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'https://www.cnb.cz',
    changeOrigin: true,
};
module.exports = function (app) {
    app.use(
        '/en/financial-markets/foreign-exchange-market',
        createProxyMiddleware(proxy),
    );
};
