var http = require('http');
var otherfun = require("./fun.js");
http.createServer(function (request, repose) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url !== "/favicon.ico") {    //清除第2此访问
        funname = 'fun2';
        otherfun[funname](response);
        response.end('');
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');