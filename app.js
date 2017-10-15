var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users_v1 = require('./routes/v1/users');
var admin_v1 = require('./routes/v1/admin');
var courses_v1 = require('./routes/v1/courses');
var bikes_v1 = require('./routes/v1/bikes');
var datings_v1 = require('./routes/v1/datings');

var users_v2 = require('./routes/v2/users');
var admin_v2 = require('./routes/v2/admin');
var courses_v2 = require('./routes/v2/courses');
var bikes_v2 = require('./routes/v2/bikes');
var datings_v2 = require('./routes/v2/datings');
var coachs_v2 = require('./routes/v2/coachs');
var companies_v2 = require('./routes/v2/companies');
var news_v2 = require('./routes/v2/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/v1/users', users_v1);
app.use('/v1/admin', admin_v1);
app.use('/v1/courses', courses_v1);
app.use('/v1/datings', datings_v1);
app.use('/v1/bikes', bikes_v1);

app.use('/v2/users', users_v2);
app.use('/v2/admin', admin_v2);
app.use('/v2/courses', courses_v2);
app.use('/v2/datings', datings_v2);
app.use('/v2/bikes', bikes_v2);
app.use('/v2/coachs', coachs_v2);
app.use('/v2/companies', companies_v2);
app.use('/v2/news', news_v2);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
