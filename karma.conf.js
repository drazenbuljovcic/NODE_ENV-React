// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

const webpackConfig = require('./config/webpack.test');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [ 'mocha' ],
    plugins: [
      require('karma-chai'),
      require('karma-mocha'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './karma.entry.js', watched: false }
    ],
    preprocessors: {
      './karma.entry.js': [ 'webpack' ]
    },
    mime: {
      'text/x-typescript': [ 'js','jsx' ]
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: [ 'progress' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
