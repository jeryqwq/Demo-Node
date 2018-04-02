var async = require('async');
function AsynFun1() {
    ii = 0;
    setInterval(function () {
        console.log('1' + new Date());
        ii++;
        if (ii === 3) {
            clearInterval(this);
        }
    }, 1000)
    console.log('1 end');
};
function AsycFun2() {
    ii = 0;
    setInterval(function () {
        console.log('2' + new Date());
        ii++;
        if (ii === 3) {
            clearInterval(this);
        }
    }, 1000)

    console.log('2end');
}
function AsycFun3() {
    console.log('�����첽�¼���');

}