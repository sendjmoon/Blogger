'use strict';

module.exports = function(app) {
  app.component('signIn', {
    controller: 'AuthController',
    template: require('./signin-template.html'),
    bindings: {
      baseUrl: '<',
    },
  });
};
