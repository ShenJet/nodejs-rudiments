/**
 * Created by Administrato on 2018/1/4.
 */
var fs = require('fs')

//文件的删除
fs.unlink('info6.txt', function(err){
    if(err){
        console.error(err)
        return
    }
    console.log('unlink OK')
})

