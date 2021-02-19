var em=require('events');
var ev=new em.EventEmitter();
var fs=require('fs');
var content='i m  not goood';
ev.on('write',writeFileData)
/*ev.on('read',readFileData);
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
ev.emit('write.txt');*/
//function readFileData(){
//    fs.readFile('write.txt');
//    console.log('file read');
//}
//ev.emit('write.txt');
function writeFileData(){
    fs.writeFile('write.txt',content,function(err,data){
        if(err){
            console.log("error");
        }else{
            console.log('no error');
        }
    });
    console.log('no error');
}
ev.emit('write.txt');
