'use strict';

module.exports = function(app) {
  require('./signin')(app);
  require('./signup')(app);
  require('./home')(app);
};
