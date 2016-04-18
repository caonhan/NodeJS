//Import core module
var http= require("http");

/*
*
*	NodeJS has server for itselft
*
*/

/*
*	Create Server
*/
http.createServer(function(request, response) {

	//Send HTTP Header
	//Status: HTTP : 200 : OK
	//Content type:: text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	//Send one response with content "Hellow World" to client
	response.end('Hello World\n');

}).listen(8081);

// Console print so log
console.log('Server running at http://127.0.0.1:8081');

