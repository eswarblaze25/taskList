var express = require('express');
var router = express.Router();

//  @route authorization api/auth
router.get('/', function(req, res, next) {
  res.send('auth route');
});

module.exports = router;