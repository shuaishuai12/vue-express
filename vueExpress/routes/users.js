var express = require('express');
var router = express.Router();
//引入mongoose
var mongoose=require('mongoose');
var db=require( '../models/db' );
//获取到表
var data =db.getModel('login');



//登录
router.get('/login', function(req, res) {
  console.log("==login==",req.query);
  var name = req.query.user;
  var password = req.query.password;
  data.find({name:name,password:password},function(err,docs){
      if(err){
        console.log('error'+err);
        docs.end('error');
      }
        console.log("==shuju=="+docs)
        if(!docs.length){
          console.log("用户名和密码不对！")
        }else{
          console.log("登录成功！！")
          res.send({'docs':docs})


        }


  })




});





//注册（没有写完）
router.get('/register', function(req, res) {

  var uname = req.query.user;
  var upassword= req.query.password;

  data.create({ 							// 创建一组user对象置入model
    name: uname,
    password: upassword
  });
  res.send({message:"success"});
});
module.exports = router;
