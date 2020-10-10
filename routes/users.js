var express = require('express');
var router = express.Router();

//File Name: Week03 Part02
//Eljin Viernes
//300750971
//October 8, 2020

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
