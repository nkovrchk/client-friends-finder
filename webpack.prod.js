const baseConfig = require('./webpack.base');

module.exports = {
  ...baseConfig,
  mode: 'production',
  devtool: 'source-map',
};
