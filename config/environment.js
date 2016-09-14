/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'conqueror',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase: {
        apiKey: "AIzaSyD_A4OiMnC5Gt43fZEVbEi__nz9qastmxE",
        authDomain: "conqueror-22ee3.firebaseapp.com",
        databaseURL: "https://conqueror-22ee3.firebaseio.com",
        storageBucket: "conqueror-22ee3.appspot.com",
        messagingSenderId: "198833117723"
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
