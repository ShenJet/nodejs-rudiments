/**
 * Created by shenjie on 2018/1/10.
 */

// AJAX : Asynchronous JavaScript And XML
//

var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')

var buf = new Buffer(1024)
var urlencodedParser = bodyParser.urlencoded({extended: false})
var app = express()


app.use(express.static('static'))

app.get('/',function(req, res){
    res.sendFile(__dirname + '/static/form/layui_demo/06ajax.html')
})
app.get('/newcode', function(req, res){
    fs.readFile(__dirname + '/newcode.json' , function(err, buffer){
        if(err){
            console.log(err)
            res.send('获取错误')
            return
        }
        console.log(buffer)
        var data =buffer.toString() // 得到文件内容，字符串类型
        data = JSON.parse(data) //得到JSON格式内容
        res.json(data)
        //res.send(JSON.stringify(buffer))
    })
})
app.post('/newcode1', urlencodedParser, function (req, res) {

    console.log(req.body)
    //读文件
    fs.readFile('newcode.json',function(err ,buffer){
        var obj = JSON.parse(buffer.toString())//得到源文件内容，且是对象格式

        obj.code = req.body.info
        obj = JSON.stringify(obj)
        //    写入源文件
        fs.writeFile('newcode.json', obj, function(err){
            if(err){
                res.send('0')
            }else{
                res.send('1')
            }
        })
    })
})

var s = app.listen(3000,function(){
    console.log('listen @3000')
})

