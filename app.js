var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var session      = require('express-session');

var app = express();

var configDB = require('./config/db.js');

mongoose.connect(configDB.url);
require('./config/passport')(passport);

//var users  = require('./routes/users');

// view engine setup
//app.set('views', path.join(__dirname, 'app/views'));
//app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'terp' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//app.use('*', routes);
//app.use('/users', users);

require('./config/routes.js')(app, passport);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
