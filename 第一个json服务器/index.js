/**
 * Created by john on 2017/7/22.
 */
var http=require('http');
var fs=require('fs');

function load_img_list(callback) {
    fs.readdir(
        "img",
        function(err,files){
            if(err){console.log("err");
                return;
            };
            callback(null,files);
        }
    )
};

function  handle_incoming_request(req,res) {
    console.log('Request:'+req.method+' '+req.url);
    load_img_list(function (err,img) {
        if (err){
            console.log(err.toString());
            return;
        }
        var out={error:null,
        data:{img:img}};
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(out)+'\n');
    })

}

var s=http.createServer(handle_incoming_request);
s.listen(8080);