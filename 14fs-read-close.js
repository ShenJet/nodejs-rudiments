/**
 * Created by Administrato on 2018/1/4.
 */
var fs = require('fs');
//文件缓冲区
var buf = new Buffer(1024)
//异步模式读取
fs.open('info4.txt', 'r+',function(err,fd){//fd表示file data
    if(err){
        console.log(err)
        return
    }
    console.log('open OK')
    fs.read(fd, buf, 0, buf.length, 0, function(err,bytes){
        if(err){
            console.log(err)
            return
        }
        console.log('read OK . totaly ' + bytes + 'bytes')
        //输出被读取的字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString())
        }
        //关闭文件
        fs.close(fd,function(err){
            if(err){
                console.log(err)
                return
            }
        })
    })
})
