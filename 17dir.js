/**
 * Created by Administrato on 2018/1/4.
 */
var fs = require('fs')

//第二个参数是权限，可缺省，默认0777
//777 当前用户 所在用户组 其他用户
fs.mkdir('newdir', 0736 , function(err){
    if(err){
        console.error(err)
        return
    }
    console.log('make dir OK')
})