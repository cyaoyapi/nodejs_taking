let http = require('http'); 
let url = require('url'); 

// A HTTP Server(web) creation 
let server = http.createServer(function(request, response){
	let page = url.parse(request.url).pathname;
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(`<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>My first page with Node.js</title>
			</head>
			<body>è
				<p>Hello world!<p>
				<p>You're <strong>welcome</strong>!</p>
				<p>The request come from : <em>${page}</em></p>
			</body>
		</html>`
	);
	response.end();
});

server.listen(8070); // The server wil listen on port 8070