const url = require('url');
const http = require('http');

const server = new http.Server();

server.on('request', function (request, response) {
   console.log(request.method, url.parse(request.url));

   response.end('someday....');
});

server.listen(8081);
