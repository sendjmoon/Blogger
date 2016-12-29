'use strict';
const Promise = require('bluebird');
const User = require('../model/user.js');

module.exports = function() {
  const createUser = function(userData) {
    const newUser = new User(userData);
    return new Promise((resolve, reject) => {
      newUser.save()
        .then(resolve)
        .catch(reject);
    });
  };

  return {
    create: createUser
  };
};
