const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  friendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: '#cheap-module-eval-source',
  devServer: {
    hot: true,
    inline: true,
    port: 3000
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new friendlyErrorsPlugin()
  ]
})
