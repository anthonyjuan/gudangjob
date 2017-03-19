var express = require('express');
var router = express.Router();
var db = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', content: 'Wassup dude' });
});

router.get('/projects', function(req, res) {
  db.Project.findAll()
            .then((_projects) => {
                res.render('project', {projects:_projects, title:'List of Projects'});
            })
            .catch((err) => {
                res.send(err.message);
            })

})

router.post('/projects/getdata' , function(req, res) {
  // res.send(JSON.stringify(req.body));
  let data = {
    nama: req.body.namaproject,
    deskripsi: req.body.deskripsiproject,
    budget: req.body.budgetproject
  }

  db.Project.create(data)
            .then(() => {
              res.redirect('project')
            })
            .catch((err) => {
              res.send(err.message)
            })
})


router.get('/project/details/:id', function(req, res) {
  db.Project.findById(req.params.id)
            .then((_data) => {
              res.render('project-details/index', {data:_data});
            })
            .catch((err) => {
              res.redirect('/projects');
            })
})


module.exports = router;
