var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.open('./NewFile2.html', 'w', function(err, file){
        if(err) throw err;
        console.log("Saved");
    });
}).listen(8080);