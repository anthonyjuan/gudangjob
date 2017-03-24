var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.Programmer.findAll().then(function(_programmer) {
    res.render('admin/index', {programmer : _programmer})
  }).catch(function(err) {
    res.send(err.message)
  })
})

router.get('/projects/details/accept/:idProgrammer', function(req, res) {
  db.ProjectProgrammer.findOne({where: {ProgrammerId:req.params.idProgrammer}})
                      .then((programmer) => {
                        programmer.updateAttributes({status:true})
                                  .then(() => {
                                    res.redirect('/admin/projects')
                                  })
                      })
})

router.get('/programmer', function(req, res, next) {
  db.Programmer.findAll().then(function(_programmer) {
    res.render('admin/programmer', {programmer : _programmer})
  }).catch(function(err) {
    res.send(err.message)
  })
})

// render projects
router.get('/projects', function(req, res) {
  db.Project.findAll({order:'id ASC'})
            .then((_projects) => {
              db.ProjectProgrammer.findAll()
                                  .then((_relations) => {
                                    db.Programmer.findAll()
                                                 .then((_programmers) => {
                                                   let _datas = db.Project.getProjectStatus(_projects,_relations,_programmers);
                                                   res.render('admin/project', {datas:_datas, title:'List of Projects'});

                                                 })
                                  })
                // res.render('admin/project', {projects:_projects, title:'List of Projects'});
            })
            .catch((err) => {
                res.send(err.message);
            })

})

// CREATE PROJECT
router.post('/projects/add-project' , function(req, res) {
  // res.send(JSON.stringify(req.body));
  let data = {
    name: req.body.namaproject,
    description: req.body.deskripsiproject,
    budget: req.body.budgetproject
  }


  db.Project.create(data)
            .then(() => {
              res.redirect('/admin/projects')
            })
            .catch((err) => {
              res.send(err.message)
            })
})



router.get('/projects/details/:id', function(req, res) {
  db.Project.findById(req.params.id)
            .then((_data) => {
              _data.getProgrammers()
                   .then((_programmers) => {


                      res.render('admin/admin-project-details/index', {data:_data, programmers: _programmers});
                   })
                   .catch((err) => {
                     res.send(err.message);
                   })

            })
            .catch((err) => {
              res.redirect('/projects');
            })
})

// RENDER FORM ADD PROJECT
router.get('/projects/add-project', function(req, res) {
  res.render('admin/admin-add-project');
})

// RENDER FORM EDIT PROJECT
router.get('/projects/details/:id/edit-project', function(req, res, next) {
  db.Project.findById(req.params.id).then(function(data) {
    res.render('admin/admin-edit-project/index', {data_project : data})
  }).catch(function(err) {
    console.log(err.message);
  })
})

// UPDATE PROJECT
router.post('/projects/details/:id/edit-project', function(req, res, next) {
  db.Project.findById(req.params.id).then(function(projects) {
    projects.update({
      name        : req.body.name,
      description : req.body.description,
      budget      : req.body.budget
    }).then(function(hasil) {
      console.log("=============== " + hasil);
      res.redirect('/admin/projects/details/' + req.params.id)
    }).catch(function(err) {
      res.send(err.message)
    })
  })
})

// DELETE PROJECT
router.get('/projects/details/:id/delete-project', function(req, res, next) {
  db.Project.destroy({
    where : { id : req.params.id}
  }).then(function() {
    res.redirect('/admin/projects')
  })
})



// RENDER FORM APPLY PROJECT
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


// delete Programmer
router.get('/admin/programmer/delete/:id', function(req, res, next) {
  db.Programmer.destroy({
    where : {id : req.params.id}
  }).then(function() {
    res.redirect('/admin/programmer')
  })
})



module.exports = router