var filereder = require('./fileReader');

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
        recall = getRecall(req, res);
        //  filereder.readfileSync('./login.html');
        filereder.readfile('./login.html', recall);
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