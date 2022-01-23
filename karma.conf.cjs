/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge')

// Karma configuration
// Generated on Mon Jan 03 2022 13:17:49 GMT+0100 (hora estándar de Europa central)

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {

      frameworks: ['mocha', 'chai'],

      client: {
        mocha: { ui: 'bdd' }
      },

      files: [
        {
          pattern: 'test/**/*_test.js',
          type: 'module'
        }
      ],

      esm: {
        nodeResolve: true
      },

      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      singleRun: false,
      autoWatch: true,

      // start these browsers
      // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
      browsers: ['Chrome'],
    })
  );

  return config;
}
