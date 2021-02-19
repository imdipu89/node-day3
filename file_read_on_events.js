var em=require('events');
var ev= new em.EventEmitter();
var fs=require('fs');
ev.on('readFile',function(){
    fs.readFile('write.txt',function(err,data){
    if(err){
        console.log(' error');
    }else{
        console.log('no error');
    }
});
});
ev.emit('readFile');
module.exports=;

