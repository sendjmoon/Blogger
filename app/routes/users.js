var express = require('express');
var router = express.Router();
const userService = require('../services').userService;

const checkSessionExists = require('../lib/check_session_exists');

/* GET users listing. */
router.get('/', checkSessionExists, function(req, res, next) {
  res.send('get request /users route');
});

router.post('/', function(req, res) {
  userService.create(req.body.username, req.body.email, req.body.password)
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
  userService.authenticateUser(req.body.emailOrUsername, req.body.password)
    .then((user) => {
      delete user.password;
      req.session.user = user;
      res.json(true);
    })
    .catch((err) => {
      res.status(400).json({
        error: 'bad signin attempt'
      });
    });
});

router.get('/signout', function(req, res) {
  req.session.user = null;
  res.json('signed out');
});

module.exports = router;
