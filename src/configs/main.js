var HOST = process.env.HOST || "127.0.0.1";
var PORT = process.env.PORT || "8888";
var WEBPACK_DEVTOOL = process.env.WEBPACK_DEVTOOL || 'eval-source-map';
var env = {
  dev: 'development',
  prod: 'production'
};

module.exports = {
  HOST,
  PORT,
  WEBPACK_DEVTOOL,
  env,
};
