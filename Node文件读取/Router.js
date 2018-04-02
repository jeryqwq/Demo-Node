var filereder = require('./fileReader');
module.exports = {
    login: function (req, res) {
        //  filereder.readfileSync('./login.html');
        function recall(data) {
            res.write(data);
            res.end('');
           
        }
        filereder.readfile('./login.html', recall);
    },
    zhuce: function (req, res) {
        function recall(data) {
            res.write(data);
            res.end('');
          
        }
        filereder.readfile('./zhuce.html', recall);
    }
}