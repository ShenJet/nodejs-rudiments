/**
 * Created by Administrato on 2018/1/4.
 */

var fs = require('fs');

//console.info(fs)

fs.readFile('info1.txt', function(err, data){
    if(err){
        console.warn(err)
        return
    }
    console.info(data.toString())

})

var data = fs.readFileSync('info1.txt').toString()
console.info(data)


