/**
 * Created by Administrato on 2018/1/3.
 */

//回调函数：
    // 做完某些事情之后执行的函数，统称为回调函数

//同步：Sync
    //阻塞式
//异步：Async
    //非阻塞式

//fs模块：文件操作模块
var fs = require('fs') ;
var data = fs.readFileSync('./repl.txt')
//当文件同步读取完之后才会打印
console.log('over')

fs.readFile('./repl.txt', function(err, data){
    if(err) {
        console.log(err)
        return 0
    }
    console.log(data.toString())
})

console.log('异步over')
