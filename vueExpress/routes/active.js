var express = require('express');
var router = express.Router();
//引入mongoose
var mongoose=require('mongoose');
var db=require( '../models/db' );
//获取到表
var data =db.getModel('shuju');

/* GET home page. */
router.get('/shuai', function(req, res, next) {
  res.render('index', { title: '出现了' });
});
/* GET home page. */
router.get('/doadd', function(req, res, next) {
    console.log(req.query);
    var uname = req.query.name;
    var utel= req.query.tel;
    data.create({ 							// 创建一组user对象置入model
        name: uname,
        tel: utel
    });

    res.send({docs:"出现了"});
});

//test
router.get('/xianshivue',function(req, res, next) {
    var page =req.query.page||1;
    console.log(req.query);
    var pagesize=Number(req.query.pagesize);
    data.count({}).exec(function (err,count1) {
        if(err){
            console.log(err)
        }
        var zongshu=count1;
        var tiao=zongshu/pagesize;
        var yeshu=Math.ceil(tiao);
        var count=(page-1)*pagesize;
        var array1={"zongshu":zongshu,"page":page,"yeshu":yeshu}
        data.find({}).limit(pagesize).skip(count).exec(function (err,docs) {
            if(err){
                console.log(err)
            }
            res.send({docs:docs,array1:array1});
            console.log("显示部分==========>>>>",{docs:docs,array1:array1})
        })


    })


});




module.exports = router;
