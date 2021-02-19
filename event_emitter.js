var em=require('events'); 
var ev= new em.EventEmitter();
function sum(a,b){
    console.log(a+b);
}
ev.on('sumofTwonumber',sum);
ev.emit('sumofTwonumber',5,15);

//ev.on('sumofTwonumber',function(a,b){
//    console.log(a+b);
//});
//ev.emit('sumofTwonumber',5,10);