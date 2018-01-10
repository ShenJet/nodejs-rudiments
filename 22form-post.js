/**
 * Created by Administrato on 2018/1/4.
 */
//POST �� ��GET����һ������������url��Я��

var http = require('http'),
    qs = require('querystring'),
    util = require('util') ;

var form = "<!DOCTYPE html>"+
"<html>"+
"<head>"+
"<meta charset='UTF-8'>"+
"<title></title>"+
"</head>"+
"<body>"+
"<form method='post' >"+
"user:<input type='text' name='name'/> <br/>"+
"pwd:<input type='password' name='pwd'/> <br/>"+
"mail:<input type='text' name='mail'/> <br/>"+
"<button type='submit' value=''>提交</button> <br/>"+
"</form>"+
"</body>"+
"</html>" ;

//�е�
http.createServer(function (req, res) {
    var body = "" ;
    req.on('data',function(chunk){
        body += chunk;
    })
    req.on('end',function(){
        //��������
        body = qs.parse(body);

        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        console.log(body)
        /*�ж��Ƿ����û��ı��ύ����*/
        if(body.name && body.pwd && body.mail){
            res.write('<p>'+body.name+'</p>')
            res.write('<p>'+body.pwd+'</p>')
            var username = 'root',pwd = 'root'
            if(username == body.name && pwd == body.pwd){
                res.write('username/pws OK')
            }else{
                res.write('username/pws ERROR')
            }
        }else{
            res.write(form)
        }
        res.end()
    })
}).listen(3000, function () {
    console.log('listen @3000')
})