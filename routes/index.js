const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api', (req, res, next) => {
  console.log(req.body);
  res.json({message: 'stuff!'});
})

module.exports = router;
