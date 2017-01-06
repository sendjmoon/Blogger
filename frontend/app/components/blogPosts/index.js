'use strict';

module.exports = function(app) {
  require('./create')(app);
  require('./view')(app);
};
