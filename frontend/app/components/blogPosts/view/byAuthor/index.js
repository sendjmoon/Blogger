'use strict';

module.exports = function(app) {
  app.component('viewByAuthor', {
    controller: 'BlogPostsController',
    template: require('./view-by-author-template.html'),
    bindings: {
      baseUrl: '<',
    },
  });
};
