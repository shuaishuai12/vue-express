var express = require('express');
var app = express();
var usersRouter = require('./users');
var active =require('./active')
app.use('/users',usersRouter);
app.use('/active',active);




module.exports = app;
