import http = require('http');
var port = process.env.port || 1337;

var jade = require('jade'); //this is breaking it on work computer....retarted

http.createServer(function (req, res) {

    
    var fn = jade.compile('string of jade');

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write(fn);

    res.end('Hello World\n' + fn);
}).listen(port);