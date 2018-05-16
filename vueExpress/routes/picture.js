

/**
 * Created by Administrator on 2017/11/3 0003.
 */
var express = require('express');
var moment = require('moment');
var router = express.Router();
var multer = require('multer');
moment.locale('zh-cn');
var today = {};
var _today = moment();
today.date = _today.format('YYYY-MM-DD HH-mm-ss'); /*现在的时间*/
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
    cb(null, today.date+'-'+file.originalname)
  }

});
var upload = multer({ storage: storage });


  /*  router.post('/uploadPicture', function (req, res) {
        res.send({message:'ok!!!'});
    });*/

router.post('/uploadPicture',upload.single('file'),function(req,res){


      console.log(req.file.filename);
      console.log(req.file.path);
      console.log(req.file.path);
      var file1=req.file.path;
      data.create({ 							// 创建一组user对象置入model
        Path:file1
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