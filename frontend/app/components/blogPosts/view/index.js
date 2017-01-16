'use strict';

module.exports = function(app) {
  require('./allPosts')(app);
  require('./byAuthor')(app);
};
