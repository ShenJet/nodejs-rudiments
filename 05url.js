/**
 * Created by Administrato on 2018/1/3.
 */
var http = require('http'),
    url = require('url') ;

function start(route){
    http.createServer(function(req, res){
        //接收到请求 触发下方代码
        console.log(req.url)//req.url  路径及参数
        var pathname = url.parse(req.url).pathname ;
        var query = url.parse(req.url).query ;
        console.log(query)

        //路由处理
        route(pathname)

        //响应
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('123')
    }).listen(3000, function () {
        console.log('listen @3000')
    })
}

//暴露模块，使其可以被其他文件引用
//exports:全局对象
//定义了一个新模块 start
exports.start = start ;