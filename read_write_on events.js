var em=require('events');
var ev=new em.EventEmitter();
var fs=require('fs');
ev.on('writeFile',function(){
    fs.writeFile('write.txt',content,function(err,data){
        if(err){
            console.log("error");
        }else{
            console.log("no error");
        }
    });
});
ev.on('readFile',function(){
    fs.readFile('write.txt',content,function(err,data){
        if(err){
            console.log("no error");
        }else{
            console.log("error");
        }
    });
});
ev.emit('writeFile',);