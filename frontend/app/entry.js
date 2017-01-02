'use strict';

const angular = require('angular');

const bloggerApp = angular.module('bloggerApp', [require('angular-route')]);

require('./controllers')(bloggerApp);
require('./components')(bloggerApp);

bloggerApp.run(['$rootScope', ($rs) => {
  $rs.baseUrl = `${__API_URL__}`,
  $rs.userConfig = {
    Headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    },
  };
}]);

bloggerApp.config(require('./routes/route_config'));
