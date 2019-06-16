var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.send('hi i am home');
});
router.get('/about', function(req, res, next) {
  res.send('hi i am about');
});
router.get('/contact', function(req, res, next) {
  res.send('hi i am contact');
});

module.exports = router;
