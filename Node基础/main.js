var http = require('http');
var otherfun = require("./fun.js");
http.createServer(function (request, repose) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url !== "/favicon.ico") {    //�����2�˷���
        //fun1(response);
        //-------���ַ������ö�Ӧ�ĺ���---
        funname = 'fun2';
        otherfun[funname](response);
        //otherfun['fun3'](response);
        response.end('');
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');