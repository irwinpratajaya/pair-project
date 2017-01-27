var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */

router.get('/', function (req, res, next) {
  models.Instructur.findAll({raw: true}).then(function (data) {
    res.render('index', {title: 'Hacktiv8', hacktivdata: data})
  })
})

router.post('/add', function (req, res, next) {
  console.log(req.body);
  models.Instructur.create({
    StudentName: req.body.StudentName,
    score: req.body.score
  }).then(function (data) {
    res.redirect('/')
  })
})

router.post('/update',function (req, res, next) {

  models.Instructur.findById(req.body.id).then(function (data) {
    data.update({
      score: req.body.score
    }).then(function () {
      res.redirect('/')
    })
  })
})

router.get('/edit/:id', function (req, res, next) {
  models.Instructur.findById(req.params.id).then(function (data) {
    res.render('edit', {editData: data})
  })
})

router.get('/delete/:id', function (req, res ,next) {
  models.Instructur.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/')
})
module.exports = router;
