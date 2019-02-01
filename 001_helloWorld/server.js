let http = require('http'); // A HTTP object
// A HTTP Server(web) creation 
let server = http.createServer(function(request, response){
	response.writeHead(200);
	response.end("Hello world! You're welcome!");
});

server.listen(8070); // The server wil listen on port 8070