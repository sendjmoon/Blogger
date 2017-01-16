'use strict';

module.exports = function(app) {
  app.component('updateBlogPost', {
    controller: 'BlogPostsController',
    template: require('./update-blog-post-template.html'),
    bindings: {
      baseUrl: '<',
      post: '=',
      editing: '=',
    },
  });
};
