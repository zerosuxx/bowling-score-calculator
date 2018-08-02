// Karma configuration
'use strict'

module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'browserify'],
    files: [
      'src/**/*.js',
    ],
    preprocessors: {
      'src/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            presets: 'es2015'
          }
        ], [
          'browserify-istanbul',
          {
            instrumenterConfig: {
              embedSource: true
            }
          }
        ]
      ]
    },
    reporters: ['mocha']
  })
}