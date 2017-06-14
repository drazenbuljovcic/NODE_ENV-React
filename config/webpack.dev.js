const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  friendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: '#cheap-module-eval-source',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new friendlyErrorsPlugin()
  ],
})
