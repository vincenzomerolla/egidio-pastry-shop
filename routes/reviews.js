var express = require('express');
var router = express.Router();
var yelpApi = require('yelp');
var _ = require('lodash');

var yelp = yelpApi.createClient({
  consumer_key: 'oBfR-CITU8B7tmO8K_QOeA', 
  consumer_secret: 'b0RHVkbeOFjeveheysqLmY3x33g',
  token: '2Jlq6lbqmG2WwM4WzRk4c35V-idHHgcC',
  token_secret: 'tx1j7JciUQsBBxh4T9bfMpdV_qw'
});


/* GET users listing. */
router.get('/', function(req, res) {
  yelp.business('all-star-burger-austin', function(err, data) {
    var reviews = _.where(data.reviews, {'rating': 5});
    console.log(data);
    res.send(data.reviews);
  });
});

module.exports = router;