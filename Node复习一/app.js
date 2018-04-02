var http=require('http');


http.createServer(function(req,res){
  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url !== "/favicon.ico") {    
respone.write('123');
        response.end('');
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');