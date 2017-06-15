const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  path = require('path');

const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  target: 'node',
  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
    'react-addons-test-utils': 'react-dom', // <- added this
  },
  module: {
    rules: [
      require('./styles.config.js').allStyles
    ]
  },
  
});

// module.exports = {
//   target: 'node',
//   entry: {
//     'app': path.join(__dirname, '..', 'app', 'src', 'app-browser.js')
//   },
//   output: {
//     path: path.join(__dirname, '..', 'dist'),
//     filename: 'js/[name].[hash:6].js',
//     publicPath: '/',
//     libraryTarget: 'commonjs',
//   },
//   resolve: {
//     extensions: [ '.js' ],
//     modules: [ 'node_modules' ]
//   },
//   node: {
//     fs: 'empty'
//   },
//   externals: [
//     /^(?!\.|\/).+/i,
//   ],
//   module: {
//     rules: [
//       {
//         test: /.jsx?/,
//         exclude: /node_modules/,
//         use: 'babel-loader'
//       },
//     ]
//   }
// };