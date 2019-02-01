let http = require('http'); // A HTTP object
// A HTTP Server(web) creation 
let server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write('<!DOCTYPE html>'+
		'<html>'+
			'<head>'+
				'<meta charset="utf-8">'+
				'<title>My first page with Node.js</title>'+
			'</head>'+
			'<body>'+
				"<p>Hello world!<p><p>You're <strong>welcome</strong>!</p>"+
			'</body>'+
		'</html>'
	);
	response.end();
});

server.listen(8070); // The server wil listen on port 8070