'use strict';

module.exports = function(app) {
  require('./signup')(app);
  require('./home')(app);
};
