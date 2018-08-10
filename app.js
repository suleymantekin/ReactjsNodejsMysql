var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql')

var indexRouter = require('./routes/index');
var actorsRouter = require('./routes/actors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "client", 'public')));

var listener = app.listen(8888, function () {
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.use('/', indexRouter);
app.use('/api/actors', actorsRouter);
module.exports = app;
