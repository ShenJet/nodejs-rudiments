/**
 * Created by shenjie on 2018/1/6.
 */
var express = require('express')

var cookieparser = require('cookie-parser')

var app = express()
app.use(cookieparser())

app.get('/', function (req, res) {
    console.log(req.cookies)
    res.send('ok')
}).listen(3000)
