var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username,
    password: req.body.password
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:user_id/vehicle/create', function (req, res) {
  models.Vehicle.create({
    title: req.body.title,
    description: req.body.description,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/vehicle/:vehicle_id/destroy', function (req, res) {
  models.Vehicle.destroy({
    where: {
      id: req.params.vehicle_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
