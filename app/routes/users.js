var express = require('express');
var router = express.Router();
const userService = require('../services').userService;

/* GET users listing. */
router.get('/', function(req, res, next) {
  return req.sessionID ? res.redirect('/#!/signin') : res.redirect('/#!/signup');
});

router.post('/', function(req, res) {
  userService.create(req.body.username, req.body.password, req.body.email)
    .then((user) => {
      delete user.password;

      // Store the user in the session.
      req.session.user = user;
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'error creating user'
      });
    });
});

router.post('/signin', function(req, res) {
  userService.signin(req.body)
    .then((user) => {
      delete user.password;
      req.session.user = user;
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'bad signin attempt'
      });
    });
});

router.get('/signout', function(req, res) {
  userService.signout()
    .then((data) => {
      req.session.user = null;
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'error signing out'
      });
    });
});

module.exports = router;
