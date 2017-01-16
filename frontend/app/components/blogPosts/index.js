'use strict';

module.exports = function(app) {
  require('./create')(app);
  require('./update')(app);
  require('./view')(app);
};
