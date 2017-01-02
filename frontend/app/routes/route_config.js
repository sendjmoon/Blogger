'use strict';

module.exports = function($routeProvider) {
  $routeProvider
    .when('/home', {
      template: require('../html/home.html'),
      controller: 'HomeController',
    })
    .when('/signup', {
      template: require('../html/signup.html'),
      controller: 'AuthController',
      controllerAs: 'ac',
    })
    .otherwise({
      redirectTo: '/signup',
    });
};
