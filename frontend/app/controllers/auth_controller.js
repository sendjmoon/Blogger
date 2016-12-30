'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$log', '$http', '$location', function($log, $http, $location) {

    this.user = {};

    this.signup = function(userData) {
      $http.post(this.baseUrl + '/users', userData)
        .then((res) => {
          this.user.username = userData.username;
          this.user.email = userData.email;
          $location.path('/home');
        })
        .catch((err) => {
          alert('error creating user');
        });
    };
  }]);
};
