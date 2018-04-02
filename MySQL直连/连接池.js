/**
 * Created by john on 2017/5/6.
 */

var OptPool = require('./OptPool');

var optPool = new OptPool();
var pool = optPool.getPool();

//执行SQL语句
pool.getConnection(function(err,conn){
    //----插入
    var userAddSql = 'insert into frm_Administrator (UserName,UserPassword) values(?,?)';
    var param = ['chenjie','123123'];
    conn.query(userAddSql,param,function(err,rs){
        if(err){
            console.log('insert err:',err.message);
            return;
        }
        console.log('insert success');
        //conn.release(); //放回连接池
    })
    //查询
    conn.query('SELECT * from frm_Administrator', function(err, rs) {
        if (err) {
            console.log('[query] - :'+err);
            return;
        }
        for(var i=0;i<rs.length;i++){
            console.log(rs[i].uname);
        }
        conn.release(); //放回连接池
    });
});