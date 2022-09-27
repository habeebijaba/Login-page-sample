var express = require('express');
var router = express.Router();
var signup = require('../helpers/signup')

/* GET users listing. */
router.get('/', function (req, res, next) {
  
    let isLoggedIn=req.session.user
    if(isLoggedIn){
      res.redirect('/')
    }else{

    res.render('login', {})
  }
  
})
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
  
    
  })

  // reviewer edit

  router.get('/logout', (req, res) => {

    req.session.destroy(()=>{
      res.redirect('/login')
      

    })
  })




module.exports = router;
