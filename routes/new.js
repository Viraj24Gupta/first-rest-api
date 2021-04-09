var express = require('express');
var router = express.Router();

//get new.ejs on home page

router.get('/', function(req, res, next) {
    res.render('new',{title: 'first rest api'});
});

module.exports = router;