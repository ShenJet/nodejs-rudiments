/**
 * Created by shenjie on 2018/1/6.
 */

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express()
//静态表单文件在/static/form/layui_demo下
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: false}));

//此处是定义表单元素name=image的文件的暂存目录=系统的tmp目录
app.use(multer({dest: '/tmp/'}).array('image'));

app.get('/',function (req, res) {
    /*发送一张表单*/
    res.sendFile(__dirname+'/static/form/layui_demo/04form-fileupload.html')
})
app.post("/upload", function (req, res) {
    //跟前端一样，也是.files[0] 可以拿到上传的文件
    console.log(req.files[0])
    console.log('__dirname: '+__dirname)

    /*判断下目录是否存在*/
    fs.exists('upload',function (res) {
        if(!res){
            fs.mkdir('upload', 0777 , function(err){
                if(err){
                    console.error(err)
                    return
                }
                console.log('make dir OK')
            })
        }
    })


    var des_file = __dirname + '/upload/' + req.files[0].originalname ;
    fs.readFile( req.files[0].path, function (err ,data) {
        fs.writeFile( des_file, data, function (err) {
            if(err){
                console.log(err)

                var response = err
            }else{
                var response = {
                    msg:"file upload success" ,
                    filename: req.files[0].originalname ,
                    filepath: des_file
                }
            }
            console.log(response)
            res.send(JSON.stringify(response))
        })
    })



})



var s = app.listen(3000,function () {
    console.log('listen @3000')
})

