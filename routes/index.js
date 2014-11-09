var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Egidio Pastry Shop | Est. 1912' });
});

module.exports = router;
