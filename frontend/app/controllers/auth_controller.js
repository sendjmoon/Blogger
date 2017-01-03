'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', function($http, $location) {

    this.signup = function(userData) {
      $http.post(this.baseUrl + '/users', userData)
        .then((res) => {
          $location.path('/home');
        })
        .catch((err) => {
          alert('error creating user');
        });
    };

    this.authenticateUser = function(userData) {
      $http.post(this.baseUrl + '/users/signin', userData)
        .then((res) => {
          res.data === true ? $location.path('/home') : alert('error signing in');
        })
        .catch((err) => {
          alert('error signing in');
        });
    };

    this.signout = function() {
      $http.get(this.baseUrl + '/users/signout')
        .then((res) => {
          $location.path('/signin');
        })
        .catch((err) => {
          alert('error signing out');
        });
    };
  }]);
};
