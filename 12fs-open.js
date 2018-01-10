/**
 * Created by Administrato on 2018/1/4.
 */
var fs = require('fs');

//文件的打开
//fs.open(path, flags [,mode] , callback )
// flag : r r+读写 rs rs+ w wx w+ wx+ a ax a+ ax+
//runoob.com/nodejs/nodejs-fs.html

fs.open('info2.txt','r+',function(err, data){
    if(err){
        console.log(err)
        return
    }
    console.log('open OK')
})

//读取文件信息
fs.stat('info2.txt',function(err, stat){
    if(err){
        console.log(err)
        return
    }
    //stat包含了文件的各种时间
    console.log(stat)
    //stat ： .isFile()  .isDirectory()  .isBlockDevice()  .isCharacterDevice()
    //runoob.com/nodejs/nodejs-fs.html
    //判断是否是文件
    if(stat.isFile()){
        console.log('isFile')
    }else if(stat.isDirectory()){
        console.log('isDirectory')
    }

})






