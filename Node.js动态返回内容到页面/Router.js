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
       // ʹ�ñ��ܼ���ϵ͵�Get����
        var rdata = url.parse(req.url, true).query;
        console.log(rdata);
        if (rdata['email'] != undefined) {
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        } 
 */    //ʹ����԰�ȫ��Post���գ�Ӧ�������ļ������ܸ���
        var post = '';          //������һ��post�����������ݴ����������Ϣ      

        req.on('data', function (chunk) {        //ͨ��req��data�¼�����������ÿ�����ܵ�����������ݣ����ۼӵ�post������      
            post += chunk;
        });
        //-------ע���첽-------------      
        req.on('end', function () {        //��end�¼�������ͨ��querystring.parse��post����Ϊ������POST�����ʽ��Ȼ����ͻ��˷��ء�      
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
                res.end('');//��д��û��httpЭ��β
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