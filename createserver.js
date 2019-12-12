// var http= require('http');
//  var server=http.createServer(function(req,res){
//      res.writeHead(200,{'content-type':'text/plain'});
//      res.end('Hey ninjas');
//  });

//  server.listen(3000,'127.0.0.1');
//  console.log('every thing is good');





// new project reading the file and display to user
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname +'/readMe.txt','utf8');
    myReadStream.pipe(res);

});


server.listen('3000','127.0.0.1');
