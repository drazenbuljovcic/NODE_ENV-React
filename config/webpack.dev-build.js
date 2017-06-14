const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackExtract = require('extract-text-webpack-plugin');

const devConfig = require('./webpack.dev.js');

const config = webpackMerge(devConfig, {
  module: {
    rules: [
      require('./styles.config.js').exportStyles
    ]
  },
  plugins: [
    new webpackExtract({
      filename: 'css/[name].[hash:6].css',
      allChunks: true
    })
  ]
});

module.exports = config;