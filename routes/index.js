var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', footer: 'Masajes Erótico: +54 9 381 567 3421' });
});

module.exports = router;
