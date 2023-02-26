const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      publicPath: '/dist'
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname,'dist'),
        publicPath: '/dist',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'content-type,authorization,accept',
    },
    port: 8181,
    historyApiFallback: true,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEV__: true,
    }),
  ],
});
