const webpack = require('webpack'),
  webpackMerge = require('webpack-merge');

const devConfig = require('./webpack.dev.js');

module.exports = webpackMerge(devConfig, {
  devServer: {
    hot: true,
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      require('./styles.config.js').allStyles
    ]
  }
})