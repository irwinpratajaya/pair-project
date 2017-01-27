var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */

router.get('/', function (req, res, next) {
  models.Instructur.findAll({raw: true}).then(function (data) {
    res.render('index', {title: 'Hacktiv8', hacktivdata: data})
  })
})

router.post('/add', function (res, req, next) {
  models.Instructur.create({
    StudentName: req.body.StudentName,
    score: req.body.score
  }).then(function (data) {
    res.redirect('/')
  })
})

module.exports = router;
