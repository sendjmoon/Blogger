'use strict';

module.exports = function(app) {
  app.component('blogPost', {
    contorller: 'BlogPostsController',
    template: require('./post-template.html'),
    bindings: {
      post: '=',
      baseUrl: '<',
    },
  });
};
