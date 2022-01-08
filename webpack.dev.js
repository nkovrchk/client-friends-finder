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
      '/api': process.env.PROXY_URL || 'http://localhost:8081',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
    })
  ],

};
