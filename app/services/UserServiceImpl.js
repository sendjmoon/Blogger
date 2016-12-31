'use strict';
const Promise = require('bluebird');
const bcrypt = require('bcrypt');

module.exports = function(userDao) {
  const _userDao = userDao;

  const create = function(username, password, email) {
    return new Promise((resolve, reject) => {
      hashPassword(password)
        .then((hashedPassword) => {
          const userData = {
            username: username,
            password: hashedPassword,
            email: email,
          };
          return _userDao.create(userData);
        })
        .then(resolve)
        .catch(reject);
    });
  };

  const hashPassword = function(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 6)
        .then(resolve)
        .catch(reject);
    });
  };

  const signin = function(userData) {
    return new Promise((resolve, reject) => {
      _userDao.signin(userData)
        .then((user) => {
          comparePassword(userData.password, user.password)
          .then((res) => {
            res === true ? resolve(user) : reject(res);
          })
          .catch(reject);
        })
        .catch(reject);
    });
  };

  const comparePassword = function(password, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash)
        .then((res) => {
          resolve(res);
        })
        .catch(reject);
    });
  };

  const signout = function() {
    return new Promise((resolve, reject) => {
      resolve(console.log('user signed out'));
      reject({
        error: 'error signing out'
      });
    });
  };

  return {
    create: create,
    signin: signin,
    signout: signout,
  };
};
