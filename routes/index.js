var express = require('express');
var router = express.Router();
var reg = require('../Models/env')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', async function(req, res, next) {
  
  data = await reg.create(req.body)
  res.status(201).json({
    sttus:'success',
    data
  })

});

module.exports = router;
