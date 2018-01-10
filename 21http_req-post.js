/**
 * Created by Administrato on 2018/1/4.
 */

//POST ： 和GET请求不一样，参数不在url中携带

var http = require('http'),
    qs = require('querystring'),
    util = require('util') ;

http.createServer(function (req, res) {
    var post = ''
    //定义post变量，用来存储请求体中的参数
    /*通过req的data事件 监听，每当接收到post来的数据，就拼接到post变量中去*/
    req.on('data',function(chunk){
        post += chunk ;
    })
    /**/
    req.on('end', function () {
        post = qs.parse(post)
        res.end(util.inspect(post))
    })
}).listen(3000, function () {
    console.log('listen @3000')
})