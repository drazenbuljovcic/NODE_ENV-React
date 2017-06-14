const webpack = require('webpack'),
  path = require('path'),
  webpackHtml = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': path.join(__dirname, '..', 'app', 'src', 'app-browser.js')
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'js/[name].[hash:6].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.html', '.sass' ],
    modules: [ 'node_modules' ],
    alias: {
      '~': path.join(__dirname, '..', 'app', 'src'),
      '@': path.join(__dirname, '..', 'app')
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    
    new webpackHtml({
      template: path.join(__dirname, '..', 'app', 'index.html')
    }),
    new webpack.DefinePlugin({
      'env': JSON.stringify(process.env.NODE_ENV || '')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      filename: 'js/[name].[hash:6].js',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
  ]
}