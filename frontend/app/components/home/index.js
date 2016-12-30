'use strict';

module.exports = function(app) {
  app.component('home', {
    controller: 'HomeController',
    template: require('./home-template.html'),
    bindings: {
      baseUrl: '<',
    },
  });
};
