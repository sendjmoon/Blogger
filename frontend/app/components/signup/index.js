'use strict';

module.exports = function(app) {
  app.component('signUp', {
    controller: 'AuthController',
    template: require('./signup-template.html'),
    bindings: {
      baseUrl: '<',
    },
  });
};
