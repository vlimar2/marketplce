'use strict'

const Data = require('./environments_parameters.json')

const TEST_ENV = process.env.TEST_ENV || 'local'
let environmentParameters

switch (TEST_ENV) {
  case 'local':
    environmentParameters = Data[0].local
    break
}

exports.config = {
  seleniumAddress: environmentParameters.seleniumAddress,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,
  getPageTimeout: 50000,
  allScriptsTimeout: 30000,
  rootElement: '*[ng-app]',
  baseUrl: environmentParameters.baseUrl,
  params: {
      loginCredentials: {
          'user': '73390365',
          'password':'Avon@123'
      }


  },

  specs: [
    'features/*.feature'
  ],

  exclude: [
  ],

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        '--disable-gpu'
      ]
    }
  },

  cucumberOpts: {
    require: '../features/step_definitions/*.js',
    tags: ['@login', '@reg', '@dev'],
    format: ['json:results.json'],
    profile: false,
    'no-source': true
  },

  beforeLaunch: function () {
    setTimeout(function () {
      browser.driver.executeScript(function () {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight
        }
      }).then(function (result) {
        browser.driver.manage().window().setSize(result.width, result.height)
      })
    })
  },

  onPrepare: function () {
    // Use only for angular applications
    // False: app Angular
    // True: app not Angular
    browser.ignoreSynchronization = true
  },

  afterLaunch: function () {
    var reporter = require('cucumber-html-reporter')

    var options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.0.1',
        'Test Environment': 'PRODUCTION',
        'Browser': 'Chrome  67.0.3396.99',
        'Platform': 'OSX',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
      }
    }

    reporter.generate(options)
  }
}
