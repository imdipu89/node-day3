var em=require('events');
var ev=new em.EventEmitter();
var fs=require('fs');
var content="this is event phase";
ev.on('writeFile',function(){
    fs.writeFile('write.txt',content,function(err,data){
        if(err){
            console.log("error");
        }else{
            console.log("no error");
        }
    });
});
ev.emit('writeFile');