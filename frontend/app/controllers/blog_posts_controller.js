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

    this.getAllPosts = function() {
      $http.get(this.baseUrl + '/posts/all')
        .then((allPosts) => {
          this.allPosts = allPosts.data;
        })
        .catch((err) => {
          alert('error getting posts');
        });
    };

    this.viewByAuthor = function() {
      $http.get(this.baseUrl + '/posts/author/586b0b7056b36bb6d2778ff8')
        .then((authorPosts) => {
          this.authorPosts = authorPosts.data;
        })
        .catch((err) => {
          alert('error finding author');
        });
    };
  }]);
};
