var fs = require('fs');
module.exports = {
    writefile: function (path, data,recall) {    //异步方式
        fs.writeFile(path, data, function (err) {
            if (err) {
                throw err;
            }
            console.log('It\'s  saved to write your file');  //文件被保存
            recall('写文件成功！');
        });
    },
    writeFileSync: function (path, data) {  //同步方式
        fs.writeFileSync(path, data);
        console.log("同步写文件完成");
    }
}