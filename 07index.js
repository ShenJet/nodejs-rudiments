/**
 * Created by Administrato on 2018/1/3.
 */

    //自定义模块的路径
var server = require('/Users/Administrato/WebstormProjects/nodejs/05url'),
    route = require('./06route')

server.start(route.route)