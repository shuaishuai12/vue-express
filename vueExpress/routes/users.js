var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/shuai', function(req, res, next) {
  res.send('搞定');
});

module.exports = router;
