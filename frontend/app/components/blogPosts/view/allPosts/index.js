'use strict';

module.exports = function(app) {
  app.component('viewAllPosts', {
    controller: 'BlogPostsController',
    template: require('./view-all-posts-template.html'),
    bindings: {
      baseUrl: '<',
    },
  });
};
