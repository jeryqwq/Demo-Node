var fs = require('fs');
module.exports = {
    readfile: function (path, recall) {          //异步执行
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                //	console.log(data.toString());
                recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync: function (path) {      //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
        return data;
    },
    readImg: function (path, res) {
        fs.readFile(path, 'binary', function (err, filedata) {
            if (err) {
                console.log(err);
            } else {
                res.write(filedata, 'binary');
                res.end();
            }

        });
    },
    writefile: function (path, data, recall) {    //异步方式
        fs.writeFile(path, data, function (err) {
            if (err) {
                throw err;
            }
            console.log('It\'s  saved to write your file');  //文件被保存
            recall('写文件成功！');
        });
    }
};


