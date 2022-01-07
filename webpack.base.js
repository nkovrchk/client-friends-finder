const path = require('path');

module.exports = {
  entry: path.resolve('src', 'index.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|ico)$/,
        use: ['url-loader'],
      },
      {
        test: /.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
};
