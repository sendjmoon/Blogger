'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', function($http, $location) {

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

    this.signin = function(userData) {
      $http.post(this.baseUrl + '/users/signin', userData)
        .then((res) => {
          if (res.data === true) {
            $location.path('/home');
          } else {
            alert('error signing in');
          }
        })
        .catch((err) => {
          alert('error signing in');
        });
    };
  }]);
};
