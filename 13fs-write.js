/**
 * Created by Administrato on 2018/1/4.
 */
var fs = require('fs');

//覆盖原内容
fs.writeFile('info3.txt',"123456789", function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("write ok")
})
