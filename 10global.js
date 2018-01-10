/**
 * Created by Administrato on 2018/1/4.
 */

// __filename 绝对路径
console.log(__filename)

// __dirname  当前文件所在目录的绝对路径
console.log(__dirname)

//延时定时器
var t = setTimeout(function(){
    console.log('setTimeout')
}, 2000)
clearTimeout(t)

//
var t1 = setInterval(function(){
    console.log('setInterval')
}, 1000)

clearInterval(t1)

// console
console.log(console)
console.warn('warnwarnwarn')
console.error('errorerrorerrorerror')
console.info('infoinfoinfoinfoinfo')