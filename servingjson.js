var http=require('http');
var fs=require('fs')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'});
    var myobj={
        name:'ryu',
        job:'Ninja',
        age:'29'

    };
   res.end(JSON.stringify(myobj));
 
});
server.listen(3000,'127.0.0.1');
console.log('server is work at 3000');