var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.appendFile('./NewFile.html', '\nSome additional text.', function(err){
        if(err) throw err;
        console.log("Saved");
    });
}).listen(8080);