// custom-route.js
// Route to do custom stuff

// Reached on /api/custom-route
var route = '/api/custom-route';

var WatsonService = require('../models/custom-model');

var express = require('express');
var router = express.Router();

//POST something
router.post('/' + route, function(req, res, next) {
  var action = WatsonService.apiFunction();

  var reqBody = req.body;

  var data = {
    message: "Hi, there!"
  };

  res.status(200).json(data);
});

//GET something
router.get('/' + route, function(req, res, next) {
  var reqBody = req.body;
});

//PUT something
router.put('/' + route, function(req, res, next) {
  var reqBody = req.body;
});

//DELETE something
router.delete('/' + route, function(req, res, next) {
  var reqBody = req.body;
});

module.exports = router;
