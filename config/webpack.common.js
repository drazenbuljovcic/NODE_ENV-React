const webpack = require('webpack'),
  path = require('path'),
  webpackHtml = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': path.join(__dirname, '..', 'app', 'src', 'app.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash:6].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.html' ],
    modules: [ 'node_modules' ],
    alias: {
      '~': path.join(__dirname, 'app', 'src')
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
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    
    new webpackHtml({
      template: path.join(__dirname, '..', 'app', 'index.html')
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