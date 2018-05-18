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
/* 增加 */
router.get('/doadd', function(req, res, next) {
    console.log(req.query);

    data.create({ 							// 创建一组user对象置入model
        name: req.query.name,
        tel: req.query.tel,
        birth:req.query.birth,
        address:req.query.address,
        age:req.query.age,
        sex:req.query.sex
    });

    res.send({docs:"出现了"});
});
/* 更新 */
router.get('/doupdata', function(req, res) {
    console.log('更新',req.query);
    var conditions = {_id:req.query._id};
    var updates = req.query;
    data.update(conditions, updates,function (err,data) {
        if(err){
            console.log(err)
        }else {
            console.log(data);
            res.send({message:"更新成功",reupdata:0});
        }
    });


});

/* 删除 */
router.get('/doremove', function(req, res) {
    //console.log('删除1111111',req.query);
    var _id = req.query._id;
    data.remove({ 							// 创建一组user对象置入model
        _id:_id
    },function (err,data) {
        if(err){
            console.log(err)
        }else {
            //console.log('删除',data)
            res.send({message:"删除成功了",removeid:0});
        }

        
    });


});


//显示
router.get('/xianshivue',function(req, res, next) {

    var page =Number(req.query.currentPage)||1;
    console.log(req.query);
    console.log(page);
    var pagesize=Number(req.query.pageSize)||5;
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
           // console.log("显示部分==========>>>>",{docs:docs,array1:array1})
        })
    })


});

router.get('/dofind',function (req,res) {
    console.log(req.query)
    var name = req.query.name;
    data.find({name:name},function (err,docs) {
        if (err){
            condole.log(err)
        }else{
            console.log('查询结果',docs);
            res.send({docs:docs})
        }
    })

})


module.exports = router;
