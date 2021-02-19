var fs=require('fs');
var Read_module={
    readFiledata:function(fn){
        fs.readFile(fn,function(err,data){
            if(err){
                console.log("getting error");
            }else{
                console.log("not error");
            }
        });
    }
}
module.exports=Read_module;