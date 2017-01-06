'use strict';

module.exports = function(app) {
  app.controller('BlogPostsController', ['$http', function($http) {
    console.log('blog posts controller');

    this.create = function(postData) {
      $http.post(this.baseUrl + '/posts', postData)
        .then((res) => {
          alert('created post');
        })
        .catch((err) => {
          alert('error creating post');
        });
    };

    this.viewByAuthor = function(authorData) {
      this.testData = {
        username: 'james',
        email: 'james@james.com',
      };

      $http.post(this.baseUrl + '/posts/author', this.testData)
    }
  }]);
};
