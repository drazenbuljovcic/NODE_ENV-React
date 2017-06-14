const webpackExtract = require('extract-text-webpack-plugin');

module.exports.allStyles = {
  test: /.sass/,
  use: [
    'style-loader', 
    'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader?sourceMap',
    'sass-loader?sourceMap&sourceComments'
  ]
}

module.exports.exportStyles = {
  test: /.sass/,
  use: webpackExtract.extract({
    fallback: 'style-loader',
    use: [
      'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss-loader?sourceMap',
      'sass-loader?sourceMap&sourceComments'
    ]
  })
}

// module.exports.mainStyles = {
//   test: /^\/styles\/main.sass$/,
//   use: webpackExtract.extract({
//     use: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
//   })
// }
// module.exports.inlineStyles = {
//   test: /^\/styles\/inline.sass$/,
//   use: webpackExtract.extract({
//     use: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
//   })
// }