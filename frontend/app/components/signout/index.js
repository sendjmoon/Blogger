'use strict';

module.exports = function(app) {
  app.component('signOut', {
    controller: 'AuthController',
    template: require('./signout-template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
