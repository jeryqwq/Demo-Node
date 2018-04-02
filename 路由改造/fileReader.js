var fs = require('fs');
module.exports = {
    readfile: function (path, recall) {          //�첽ִ��
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                //	console.log(data.toString());
                recall(data);
            }
        });
        console.log("�첽����ִ�����");
    },
    readfileSync: function (path) {      //ͬ����ȡ
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log("ͬ������ִ�����");
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
    writefile: function (path, data, recall) {    //�첽��ʽ
        fs.writeFile(path, data, function (err) {
            if (err) {
                throw err;
            }
            console.log('It\'s  saved to write your file');  //�ļ�������
            recall('д�ļ��ɹ���');
        });
    }
};


