'use strict';

module.exports = function(app) {
  require('./auth_controller')(app);
  require('./home_controller')(app);
};
