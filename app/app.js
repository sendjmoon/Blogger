const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const redis = require('redis');
const redisClient = redis.createClient();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blogger');

const index = require('./routes/index');
const users = require('./routes/users');
const blogPosts = require('./routes/blogPosts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
const sessionOptions = {

  // If secret is used then it should really be retrieved from a source
  // (e.g. db, environment variable) instead of being hard coded.
  secret: 'some super secret',
  store: new RedisStore({
    client: redisClient,
  }),
  name: 'blogger',
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 86400 * 365
  },
};
if (app.get('env') === 'production') {
  sessionOptions.cookie.secure = true;
}

app.use(session(sessionOptions));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/posts', blogPosts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
