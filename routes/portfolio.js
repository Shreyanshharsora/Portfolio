/*
* Project Name: Resume  / Personal Portfolio 
* Author: Shreyansh Suthar
* Author Contact: Shreyanshharsora@gmail.com
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('portfolio');
  

});

module.exports = router;
