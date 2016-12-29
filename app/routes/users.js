var express = require('express');
var router = express.Router();
const userService = require('../services').userService;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  userService.create(req.body.username, req.body.password, req.body.email)
    .then((user) => {
      delete user.password;
      res.json(user);
    }).catch((err) => {
      res.status(500).json({
        error: 'error creating user'
      });
    });
});

module.exports = router;
