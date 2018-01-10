/**
 * Created by Administrato on 2018/1/5.
 */

var express = require('express')

var app = express()

/*本章知识点：
 * 1.app.get() app.post()
 * 2.路由配置
 * 3.静态资源的目录设置
 * */

//配置静态资源所在根目录
app.use(express.static('static')) ;

app.get('/', function (req, res) {
    console.log('get 请求 /')
    res.send('hello world')

})
app.get('/name', function (req, res) {
    console.log('get 请求 /name')
    res.send('shenjie')

})
app.get('/users', function (req, res) {
    console.log('get 请求 /users')

    res.send('<ol>' +
        '<li>jack</li>' +
        '<li>Tom</li>' +
        '<li>Helen</li>' +
        '</ol>')

})
app.post('/', function (req, res) {
    console.log('post 请求 /')
    res.send('hello post /')

})
app.post('/user/pwd', function (req, res) {
    console.log('post 请求 /user/pwd')
    res.send('your pwd is root123')

})



var server = app.listen(3000, function () {
    console.log('listen @3000')
})

