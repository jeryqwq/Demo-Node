var http = require('http');
var url = require('url');
var router = require('./Router');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    if (request.url !== "/favicon.ico") {
        var pathname = url.parse(request.url).pathname;
        console.log(pathname);
        pathname = pathname.replace(/\//, '');
        try {
            router[pathname](request, response);
        }
        catch (err) {
            console.log('Catch A Error' + err);
            response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            response.write(err.toString());
            response.end();

        }
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');