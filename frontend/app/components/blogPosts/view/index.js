'use strict';

module.exports = function(app) {
  require('./post')(app);
  require('./allPosts')(app);
  require('./byAuthor')(app);
};
