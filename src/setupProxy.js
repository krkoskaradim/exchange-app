const { createProxyMiddleware } = require('http-proxy-middleware');
const { CONSTANTS } = require('./constants');

const proxy = {
    target: 'https://www.cnb.cz',
    changeOrigin: true,
};
module.exports = function (app) {
    app.use(
        CONSTANTS.API.EXCHANGE_RATES_LIST,
        createProxyMiddleware(proxy),
    );
};
