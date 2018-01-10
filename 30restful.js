/**
 * Created by shenjie on 2018/1/7.
 */

/*REST：Representational State Transfer*/
/*是一种设计风格，而不是标准。*/
/*通常使用JSON数据格式*/

/*REST基本架构的四个HTTP方法*/
/*GET - 数据获取*/
/*PUT - 数据更新/添加*/
/*DELETE - 删除数据*/
/*POST - 用于添加数据*/

/*基于REST架构的Web Services即是RESTful*/

//1.创建 users.json文件
    //存储用户信息

//2.创建 RESTful API

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var multer = require('multer')


var app = express();
//1.get方法
app.get('/listUsers',function (req, res) {
    fs.readFile(__dirname+'/users.json', 'utf8', function (err, data) {
        console.log(typeof data )//string
        res.end( data )
    })
})

//2.post

//创建 application/x-www-form-urlencoded 编码解析
//var urlencodedParser = bodyParser.urlencoded({extended: false})

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// for parsing multipart/form-data
app.use(multer({dest: '/tmp/'}).array('image','zip','txt','gz'));

app.post('/adduser', function (req, res) {
    console.log(req.body)
    res.json(req.body)
})

var s = app.listen(3000, function () {
    console.log('listen @3000')
})





