var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.Programmer.findAll().then(function(_programmer) {
    res.render('programmer/index', {programmer : _programmer})
  }).catch(function(err) {
    res.send(err.message)
  })
})


module.exports = router