var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', content: 'Wassup dude' });
});

router.get('/projects', function(req, res) {
  res.render('project', {title:'Project'});
})

module.exports = router;
