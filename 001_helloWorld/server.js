let http = require('http'); // A HTTP object
// A HTTP Server(web) creation 
let server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("<p>Hello world!<p><p>You're <strong>welcome</strong>!</p>");
});

server.listen(8070); // The server wil listen on port 8070