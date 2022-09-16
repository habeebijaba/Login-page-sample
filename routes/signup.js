var express = require('express');
var router = express.Router();
var signup = require('../helpers/signup')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('signup', {})
});
router.post('/', (req, res, next) => {
  // res.redirect('/')
  // res.end();
  // console.log(req.body);
  signup.signup(req.body).then((response) => {

    res.redirect('/login')
  })
})
module.exports = router;
