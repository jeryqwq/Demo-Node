var fs = require('fs');
module.exports = {
	readfile: function (path,recall) {          //�첽ִ��
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
	}
}