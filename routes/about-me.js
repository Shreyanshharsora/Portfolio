/*
* Project Name: Resume  / Personal Portfolio 
* Author: Shreyansh Suthar
* Author Contact: Shreyanshharsora@gmail.com
*/


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {  
    res.render('about-me');
});

module.exports = router;
