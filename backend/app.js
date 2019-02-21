var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const passport = require("./auth/local");

//Getting Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var randomImg = require('./routes/randomImg');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "Itadakimasu", 
    resave: false,
    saveUninitialized: true
  })
);

//Getting user auth:
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

//Getting router indentification:
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/influers', usersRouter);  //getting dashboard
app.use('/influers', randomImg );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;