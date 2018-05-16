var express = require('express');
var app = express();
var usersRouter = require('./users');
var active =require('./active');
var picture =require('./picture');
app.use('/users',usersRouter);
app.use('/active',active);
app.use('/picture',picture);





module.exports = app;
