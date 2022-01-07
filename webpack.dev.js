const path = require('path');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:8081',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
    })
  ],

};
