 var http=require('http');
 var fs=require('fs')
 var server=http.createServer(function(req,res){
     res.writeHead(200,{'content-type':'text/html'});
     var readstream=fs.createReadStream(__dirname +'/index.html','utf8');
     readstream.pipe(res);
 });
 server.listen(3000,'127.0.0.1');
 console.log('server is work at 3000');


 //without using express