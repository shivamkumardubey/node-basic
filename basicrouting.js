var http=require('http');
var fs=require('fs');
var server =http.createServer(function(req,res){
    if(req.url==='/home'||req.url==="/")
     {
        res.writeHead(200,{'content-type':'text/html'});
        var readstream=fs.createReadStream(__dirname+'/index.html');
        readstream.pipe(res);
     }
     else if(req.url==='/contact')
     {
        res.writeHead(200,{'content-type':'text/html'});
        var readstream=fs.createReadStream(__dirname+'/contact.html');
        readstream.pipe(res);
     }
     else if(req.url==='/aboutus')
     {
        res.writeHead(200,{'content-type':'text/html'});
        var readstream=fs.createReadStream(__dirname+'/aboutus.html');
        readstream.pipe(res);
     }
     else{
      res.writeHead(404,{'content-type':'text/html'});
      var readstream=fs.createReadStream(__dirname+'/notfound.html');
      readstream.pipe(res);
     }
   
}
);

server.listen(3000,'127.0.0.1');
console.log("server is running");