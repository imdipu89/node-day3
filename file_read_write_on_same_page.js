var fm=require('./file_read_module')
var event=require('events');
var em=new event.EventEmitter();
em.on('readFiledata',fm.readFiledata);
em.emit('readFIledata',"./write.txt");