/**
 * Created by Administrato on 2018/1/5.
 */


/*runoob.com/nodejs/nodejs-path-module.html*/

var os = require('os')

/*返回系统临时目录*/
console.log(os.tmpdir())

/*返回系统名称*/
console.log(os.hostname())

console.log(os.platform())

console.log(os.arch())

console.log(os.type())

console.log(os.release())

console.log(os.totalmem())

console.log(os.freemem())

console.log(os.cpus())

console.log(os.networkInterfaces()) /*ipconfig类似*/

/**/

var path = require('path')

console.log(path.normalize('./test/a.txt'))

console.log(path.parse('./test/a.txt'))


//...


