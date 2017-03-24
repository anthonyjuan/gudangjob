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
                db.ProjectProgrammer.findAll()
                                    .then((_relations) => {
                                        let _data = db.ProjectProgrammer.getJumlahPendaftar(_projects,_relations)
                                        res.render('project', {datas:_data , title:'List of Projects'});
                                    })

            })
            .catch((err) => {
                res.send(err.message);
            })

})

router.post('/projects/add-project' , function(req, res) {
  // res.send(JSON.stringify(req.body));
  let data = {
    name: req.body.namaproject,
    description: req.body.deskripsiproject,
    budget: req.body.budgetproject
  }


  db.Project.create(data)
            .then(() => {
              res.redirect('/projects')
            })
            .catch((err) => {
              res.send(err.message)
            })
})


router.get('/projects/details/:id', function(req, res) {
  db.Project.findById(req.params.id)
            .then((_data) => {
              res.render('project-details/index', {data:_data});
            })
            .catch((err) => {
              res.redirect('/projects');
            })
})

// router.get('/projects/add-project', function(req, res) {
//   res.render('project-details/add-project');
// })

router.get('/projects/apply-form/:idProject', function(req, res) {
  res.render('project-details/apply-form', {idproject: req.params.idProject});
})

router.post('/projects/apply-form/:idProject', function(req , res) {
  let programmer = {
    name:req.body.nama,
    email:req.body.email,
    phone:req.body.phone,
    skills:req.body.skills,
    address:req.body.address,
    personal_site:req.body.personal_site
  }

  db.Programmer.create(programmer)
               .then((data) => {
                 db.ProjectProgrammer.create({ProjectId:req.params.idProject,ProgrammerId:data.id ,status:false})
                                     .then(() => {
                                       res.redirect('/projects')
                                     })
                                     .catch((err) => {
                                       res.send(err.message);
                                     })
               })
})

module.exports = router;
