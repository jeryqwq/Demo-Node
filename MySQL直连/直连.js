var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27018/blog', function (err) {
    if (err) {
        console.log(err);
    } else {

        console.log(('Success!'));
    }
}); 