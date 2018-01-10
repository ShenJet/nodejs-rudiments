/**
 * Created by Administrato on 2018/1/5.
 */
/* www.expressjs.com.cn/4x/api.html */
var express = require('express')

var app = express() ;
//console.log(app)

app.get('/abc',function(req, res){
    /*req.app*/
    /*当cb为外部文件时，用req.app访问express的实例*/
    //console.log(req.app)

    //req.baseUrl 获取路由当前安装的URL路径
    console.log('baseUrl:'+req.baseUrl)

    //req.body
    console.log('req.body: '+req.body)

    //req.fresh
    console.log(req.fresh, req.state)

    //req.hostname 域名
    console.log(req.hostname)

    /**/
    //req.originalUrl  域名之后的路径及参数
    console.log(req.originalUrl)

    //路由的param
    console.log(req.params)

    /**/
    //路径
    console.log(req.path)

    //http  协议
    console.log(req.protocol)

    /**//**/
    //get请求参数 （对象类型）
    console.log(req.query)

    //当前匹配的路由
    console.log(req.route)

    console.log(req.subdomains)

    console.log(req.accepts())

    console.log(req.get('Cache-Control'))

    //获取请求头Content-Type的MIME类型
    //console.log(req.is('Cookie'))

    /* -响应- */

    //追加指定http头
    //res.append()
    res.append( 'Content-Disposition','attachment')
    res.append( 'Content-Type','image/png')
    res.download('/Users/Administrato/WebstormProjects/nodejs/web_module.png')
    //res.cookie(name, value[,option])   设置cookie
    //option: expires / maxAge / path / httpOnly  ....
    //res.cookie('hehe', '666')
    //res.clearCookie()

    //res.download(xxx)  传送指定的文件
    //res.download('./web_module.png')
    //res.get(xx) 返回指定的http头
    res.download('/Users/Administrato/WebstormProjects/nodejs/web_module.png')

    //res.json（xxx） 传送指定的JSON
    //res.json({'name':'jack'})
    //res.status(xxx)  设置http状态码

    //res.type(xx) 设置content-type的MIME类型


    //res.send('hello node')

})
var server = app.listen(3000,'192.168.0.144', function () {
    console.log('listen @3000')

    var host = server.address().address ,
        port = server.address().port

    console.log(host, port)

})