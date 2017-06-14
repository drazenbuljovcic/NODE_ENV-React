const webpack = require('webpack'),
  webpackMerge = require('webpack-merge');

const devConfig = require('./webpack.dev.js');

module.exports = webpackMerge([devConfig])