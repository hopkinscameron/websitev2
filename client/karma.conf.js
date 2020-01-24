// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
	  require('karma-coverage-istanbul-reporter'),
	  require('karma-coverage'),
	  require('karma-spec-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/client'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
	},
	angularCli: {
		environment: 'dev'
	},
	reporters: ['coverage', 'progress', 'kjhtml', 'spec'],
	specReporters: {
		suppressErrorSummary: false,
		suppressFailed: false,
		suppressPassed: false,
		suppressSkipped: false,
		showSpecTiming: true,
		failFast: false
	},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
	autoWatch: true,
	captureTimeout: 60000,
	browserNoActivityTimeout: 60000,
	browsers: ['Chrome'],
    singleRun: true, // set to true for deployment?
    restartOnFileChange: true
  });
};
