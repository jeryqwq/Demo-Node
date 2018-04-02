var http = require('http');
var file = require("./fileReader");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type':'image/jpeg'});
    if (request.url !== "/favicon.ico") {
        file.readImg('./beauty.jpg', response);
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');