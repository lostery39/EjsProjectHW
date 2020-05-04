var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hellos from the Allen Game Shop');
  res.render('allensgameshop', { title: 'Allens Game shop' })
});

/* GET users listing. */
router.get('/help', function(req, res, next) {
  //res.send('Hellos from the Allen Game Shop');
  res.render('allenshelp', { title: 'Allens Game shop' })
})

/* GET users listing. */
router.get('/register', function(req, res, next) {
  //res.send('Hellos from the Allen Game Shop');
  res.render('allensregister', { title: 'Allens Game shop' })
})
module.exports = router;
