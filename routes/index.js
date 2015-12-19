var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Vehicle ]
  }).then(function(users) {
    res.render('index', {
      title: 'Dealership',
      users: users
    });
  });
});

module.exports = router;
