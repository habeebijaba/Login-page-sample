var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login')


var db = require('./config/connection')
var session = require('express-session')
const cacheControl = require('express-cache-controller')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// caching disabled for every route
app.use((req, res, next)=> {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "key", cookie: { maxAge: 60000 } }))

db.connect((err) => {
  if (err) console.log("connection error" + err);
  else console.log("connection succes");
})

//cache clearing
// app.use((req, res, next) => {
//   res.set('Cache-Control', 'no-store')
//   next()
// })









app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter)
// app.use('/logout',loginRouter)







// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
