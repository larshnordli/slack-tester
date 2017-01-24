// custom-route.js
// Route to do custom stuff
// Reached on /api/custom-route

var express = require('express');
var router = express.Router();

//POST something
router.post('/', function(req, res, next) {
  var reqBody = req.body;
});

//GET something
router.get('/', function(req, res, next) {
  var reqBody = req.body;
});

//PUT something
router.put('/', function(req, res, next) {
  var reqBody = req.body;
});

//DELETE something
router.delete('/', function(req, res, next) {
  var reqBody = req.body;
});

module.exports = router;
