var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "client", 'public')));


var listener = app.listen(4000, function () {
    console.log('Listening on port ' + listener.address().port); //Listening on port 4000
});

app.use('/', indexRouter);
app.use('/api/students', studentsRouter);
module.exports = app;
