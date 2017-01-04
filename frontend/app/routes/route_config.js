'use strict';

module.exports = function($routeProvider) {
  $routeProvider
    .when('/posts', {
      template: require('../html/blog-posts.html'),
      controller: 'BlogPostsController'
    })
    .when('/signup', {
      template: require('../html/signup.html'),
      controller: 'AuthController',
      controllerAs: 'ac',
    })
    .when('/signin', {
      template: require('../html/signin.html'),
      controller: 'AuthController',
    })
    .otherwise({
      redirectTo: '/signin',
    });
};
