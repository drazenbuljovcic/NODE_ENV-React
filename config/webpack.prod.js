const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackExtract = require('extract-text-webpack-plugin'),
  webpackManifest = require('webpack-manifest-plugin'),
  webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
  webpackPreload = require('preload-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const ANALYZE = !!process.env.ANALYZE;

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [
      require('./styles.config.js').exportStyles
    ]
  },
  resolve: {
    alias: {
      // 'react': 'preact-compat',
      // 'react-dom': 'preact-compat'
    },
  },
  plugins: [
    new webpackManifest({
      fileName: 'webpack-manifest.json',
      basePath: '/'
    }),
    new webpackBundleAnalyzer({
      analyzerMode: ANALYZE ? 'server': 'disabled',
      analyzerHost: '127.0.0.1',
      analyzerPort: 3001,
      openAnalyzer: ANALYZE,
      generateStatsFile: false,
    }),
    new webpackPreload({
      rel: 'preload',
      as: 'script',
      include: [ 'manifest', 'vendor', 'app' ],
      fileBlacklist: [ /\.map/, /\.css/ ]
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        warnings: false, // good for prod apps so users can't peek behind curtain
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true, // strips console statements
        sequences: true,
        booleans: true,
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),

    new webpackExtract({
      filename: 'css/[name].[hash:6].css',
      allChunks: true
    })
  ]
})