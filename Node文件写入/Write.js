var fs = require('fs');
module.exports = {
    writefile: function (path, data,recall) {    //�첽��ʽ
        fs.writeFile(path, data, function (err) {
            if (err) {
                throw err;
            }
            console.log('It\'s  saved to write your file');  //�ļ�������
            recall('д�ļ��ɹ���');
        });
    },
    writeFileSync: function (path, data) {  //ͬ����ʽ
        fs.writeFileSync(path, data);
        console.log("ͬ��д�ļ����");
    }
}