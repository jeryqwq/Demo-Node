var filereder = require('./fileReader');
var url = require('url');
var querystring = require('querystring');
function getRecall(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    function recall(data) {
        res.write(data);
        res.end();
    }
    return recall;
}
module.exports = {
    login: function (req, res) {
/**
       // ??????????????????Get????
        var rdata = url.parse(req.url, true).query;
        console.log(rdata);
        if (rdata['email'] != undefined) {
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        } 
 */    //??????????????Post??????????????????????????????
        var post = '';          //??????????post??????????????????????????      

        req.on('data', function (chunk) {        //????req??data??????????????????????????????????????????????post??????      
            post += chunk;
        });
        //-------????????-------------      
        req.on('end', function () {        //??end????????????????querystring.parse??post????????????POST????????????????????????????      
            post = querystring.parse(post);
            console.log('email:' + post['email'] + '\n');
            console.log('pwd:' + post['pwd'] + '\n');
            recall = getRecall(req, res);
            filereder.readfile('./login.html', recall);
        });      
       
    },
    zhuce: function (req, res) {
        recall = getRecall(req, res);
        filereder.readfile('./zhuce.html', recall);
    },
    showImg: function (req, res) {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        filereder.readImg('./beauty.jpg', res);
    }

};