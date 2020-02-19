const express = require('express')
const router = express.Router();

//  api/post

router.get('/', (req, res) => {
  res.send('posts route')
})

module.exports = router;