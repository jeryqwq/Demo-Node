module .exports={
    fun2:function(res){
    console.log("我是fn'2");
    res.write("你好。我是fun2");
    },
    fun3:function(res){
        console.log("我是fun3");
         res.write("你好，我是fun3");
    }
}
