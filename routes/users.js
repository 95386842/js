var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {


  var b = new Buffer("123456789中国");
  var ox =(121234869).toString(16);
  console.log(ox);
  console.log(b.length);
  console.log(b);



  res.json({ user: 'tobi' })
});

module.exports = router;
