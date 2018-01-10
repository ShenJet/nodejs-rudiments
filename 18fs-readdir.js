/**
 * Created by Administrato on 2018/1/4.
 */
var fs = require('fs')

fs.readdir('./newdir', function (err, files) {
    if(err){}

    console.log(files)
    files.forEach(function(file){
        //是文件类型，打印
        fs.stat('./newdir/'+file,function(err, stat){
            if(stat.isFile()){
                console.log(file)
            }
        })
    })
})