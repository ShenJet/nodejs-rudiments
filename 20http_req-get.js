/**
 * Created by Administrato on 2018/1/4.
 */

//**GET get请求的参数都在url中携带
var http = require('http'),
    url = require('url'),
    util = require('util') ;

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});

    var info0 = url.parse(req.url, true)
    //**获取get请求体中携带的参数
    var name = info0.query.name
    var age = info0.query.age
    console.log(name, age)

    //console.log(info0)
    //console.log(typeof info0)
    //把对象格式的info0转成了string
    var info = util.inspect(info0)
    res.end(info)

}).listen(3000,function(){
    console.log("listen @3000")
})