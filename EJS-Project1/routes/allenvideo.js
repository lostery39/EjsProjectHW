var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hellos from the Allen Game Shop');
  res.render('allensvideoshop', { title: 'Allens Video shop' })
});


