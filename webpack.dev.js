const path = require('path');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
    proxy: {
      "/api/v1": process.env.PROXY_URI,
      '/auth': process.env.PROXY_URI,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
    })
  ],

};
