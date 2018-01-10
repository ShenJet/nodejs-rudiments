/**
 * Created by Administrato on 2018/1/3.
 */

//nodejs 模块引入
var http = require('http');

//使用http模块搭建web服务器，监听在3000端口
http.createServer(function(req, res){
    /*响应头设置，200：状态码 */
    res.writeHead(200, {'Content-Type':'text/html'})
                                    //text/plain-纯文本  text/html 解析html标签
    res.end('<h1>hello node</h1>')
}).listen(3000,function(){
    console.log('listen @3000 now')
})




