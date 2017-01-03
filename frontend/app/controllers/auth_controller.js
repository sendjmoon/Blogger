'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', function($http, $location) {

    this.signup = function(userData) {
      $http.post(this.baseUrl + '/users', userData)
        .then((res) => {
<<<<<<< HEAD
=======
          this.user.username = userData.emailOrUsername;
          this.user.email = userData.email;
>>>>>>> 443d4fbfbcf2dd0ff32bda0031d7aa24ef44dc97
          $location.path('/home');
        })
        .catch((err) => {
          alert('error creating user');
        });
    };

    this.signin = function(userData) {
      $http.post(this.baseUrl + '/users/signin', userData)
        .then((res) => {
<<<<<<< HEAD
          $location.path('/home');
=======
          if (res.data === true) {
            $location.path('/home');
          } else {
            alert('error signing in');
          }
>>>>>>> 443d4fbfbcf2dd0ff32bda0031d7aa24ef44dc97
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
