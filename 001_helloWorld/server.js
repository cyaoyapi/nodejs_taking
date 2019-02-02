let http = require('http'); 
let url = require('url'); 
let querystring = require('querystring');

// A HTTP Server(web) creation 
let server = http.createServer(function(request, response){
	let page = url.parse(request.url).pathname;
	let kwargs = querystring.parse(url.parse(request.url).query);
	let name = 'dear visitor';
	if('name' in kwargs){
		name = kwargs['name'];
	}
	
	let message = '';
	let responseStatusCode = 200;
	if(page === '/')
	{
		message = 'You are in home page';
	}else if(page === '/blog'){
		message = 'You are in blog espace';
	}else if(page === '/forum'){
		message = 'You are in forum espace';
	}else if(page === '/contact'){
		message = 'You are in contact page';
	}else {
		message = '<span style="color:red">This page does not exist!</p>';
		responseStatusCode = 404;
	}

	response.writeHead(responseStatusCode, {"Content-Type": "text/html"});
	response.write(`<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>My first page with Node.js</title>
			</head>
			<body>
				<p>Hello ${name}<p>
				<p>You're <strong>welcome</strong>!</p>
				<p>${page} : ${message}</em></p>
			</body>
		</html>`
	);
	response.end();
});

server.listen(8070); // The server wil listen on port 8070