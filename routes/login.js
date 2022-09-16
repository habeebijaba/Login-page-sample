var express = require('express');
var router = express.Router();
var signup = require('../helpers/signup')

/* GET users listing. */
router.get('/', function (req, res, next) {
  req.session.destroy(() => {
    res.render('login', {})
  })
});
router.post('/', (req, res, next) => {

  signup.login(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true
      req.session.user = response.user
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  })
  // router.get('/login', (req, res) => {
  //   console.log("haii");

  //   req.session.destroy()
  //   res.redirect('/login')
  // })

})




module.exports = router;
