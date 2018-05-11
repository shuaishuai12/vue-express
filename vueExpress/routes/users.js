var express = require('express');
var router = express.Router();
//引入mongoose
var mongoose=require('mongoose');
var db=require( '../models/db' );
//获取到表
var data =db.getModel('login');
/* GET users listing. */
router.get('/shuai', function(req, res, next) {
  res.send('搞定');
});
router.get('/register', function(req, res, next) {
  console.log(req.query);
  var uname = req.query.user;
  var upassword= req.query.password;
  data.create({ 							// 创建一组user对象置入model
    name: uname,
    password: upassword
  });
  res.send({message:"success"});
});
module.exports = router;
