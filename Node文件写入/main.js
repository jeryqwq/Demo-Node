var http = require('http');
var write = require('./Write');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;        charset=utf-8' });
    if (request.url !== "/favicon.ico") {
       
        function recall(data) {

        }
        write.writefile('./new.txt', "Hey!Your Brower Should Be Updata",recall);
        response.end('');
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');