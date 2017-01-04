'use strict';

module.exports = function(app) {
  app.component('createBlogPost', {
    controller: 'BlogPostsController',
    template: require('./create-blog-post-template.html'),
    bindings: {},
  });
};
