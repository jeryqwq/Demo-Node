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
       // 使用保密级别较低的Get方法
        var rdata = url.parse(req.url, true).query;
        console.log(rdata);
        if (rdata['email'] != undefined) {
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        } 
 */    //使用相对安全的Post接收，应许更大的文件，保密更高
        var post = '';          //定义了一个post变量，用于暂存请求体的信息      

        req.on('data', function (chunk) {        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中      
            post += chunk;
        });
        //-------注意异步-------------      
        req.on('end', function () {        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。      
            post = querystring.parse(post);
          //  console.log('email:' + post['email'] + '\n');
          //  console.log('pwd:' + post['pwd'] + '\n');
          //  recall = getRecall(req, res);
            arr = ['email', 'pwd'];
            function recall(data) {
                dataStr = data.toString();
                for (var i = 0; i < arr.length; i++) {
                    re = new RegExp('{' + arr[i] + '}', 'g'); // /\{name\}/g
                    dataStr = dataStr.replace(re, post[arr[i]]);
                }
                res.write(dataStr);
                res.end('');//不写则没有http协议尾
            }
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