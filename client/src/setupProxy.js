const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://bitside.net",
      //target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
};
