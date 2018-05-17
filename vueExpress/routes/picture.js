

/**
 * Created by Administrator on 2017/11/3 0003.
 */
var express = require('express');

var router = express.Router();
var multer = require('multer');
//
//var moment = require('moment');
//moment.locale('zh-cn');
//var today = {};
//var _today = moment();
//today.date = _today.format('YYYY-MM-DD HH-mm-ss'); /*现在的时间*/
var timestamp=new Date().getTime();
console.log('111111111',timestamp);

var newTime = new Date(timestamp).toLocaleString();


//引入mongoose
var mongoose=require('mongoose');
var db=require( '../models/db' );
//获取到表
var data =db.getModel('pictures');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/pictureUploads')
  },
  filename: function (req, file, cb) {
    cb(null, timestamp+file.originalname)
  }

});
var upload = multer({ storage: storage });


  /*  router.post('/uploadPicture', function (req, res) {
        res.send({message:'ok!!!'});
    });*/


router.get('/showPicture',function(req,res){
    //console.log(req)


    data.find({},function (err,docs) {
        if(err){
            console.log(err)
        }

        res.send({"data":docs})

        // console.log("显示部分==========>>>>",{docs:docs,array1:array1})
    })



    });
    //删除图片
    router.get('/deletePicture',function(req,res){
        //console.log(req)

        var _id = req.query._id;
        console.log('删除',_id);
        data.remove({ 				    			// 创建一组user对象置入model
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


router.post('/uploadPicture',upload.single('file'),function(req,res){
    console.log('name',req.file.filename);
    console.log(req.file);
    console.log(req.file.path);
    var file1=req.file.path;
    data.create({ 							// 创建一组user对象置入model
        Path:file1,
        picId:timestamp,
        picTime:newTime,
        name:req.file.filename

    });


    res.send('ok');
});

module.exports = router;

/*module.exports = function (app) {*/
/*router('/uploadPicture', function (req, res) {

    res.send({message:'ok!!!'});
  });*/
 /* app.post('/upload',upload.single('avatar'),function(req,res,next){

    var shuaishuai1 = global.db.getModel('lujing');
    console.log(req.file.filename);
    console.log(req.file.path);
    console.log(req.file.path);

    var file1=req.file.path;
    shuaishuai1.create({ 							// 创建一组user对象置入model
      Path:file1
    });


    res.send('ok');
  });
};*/