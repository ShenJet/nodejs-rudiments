/**
 * Created by Administrato on 2018/1/4.
 */

var fs = require('fs')

fs.rmdir('./test',function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('remove OK')
})

//fs.chmod(path,mode,cb)  修改文件权限  0777

//fs.fchown()

//fs.chown() 修改文件所有者

//fs.rename(oldname,newname,cb)

// runoob.com/nodejs/nodejs-fs.html