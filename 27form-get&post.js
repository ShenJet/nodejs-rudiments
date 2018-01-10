/**
 * Created by Administrato on 2018/1/5.
 */

var express = require('express');
var bodyParser = require('body-parser')
var app = express()

app.use(express.static('static'))

//创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})


app.get('/userinfo',function(req,res){
    //传回表单到客户端
    console.log(__dirname)
    res.sendFile(__dirname+'/static/form/layui_demo/02form.html')
})
app.get('/form_get',function(req,res){
    //接收到表单信息
    console.log(req.query)
    res.send('OK')
})


app.get('/userinfo1',function(req,res){
    //传回表单到客户端
    console.log(__dirname)
    res.sendFile(__dirname+'/static/form/layui_demo/03form-post.html')
})
app.post('/form_post', urlencodedParser, function(req,res){
    //接收到表单信息
    console.log(req.body)
    var res_str = req.body.
    res.send('OK')
})

var s = app.listen(3000,function(){
    console.log('l @3000')
})
