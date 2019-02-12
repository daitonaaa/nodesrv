const fs = require('fs');
const url = require('url');
const http = require('http');

const server = new http.Server();

server.on('request', function (request, response) {
   if (request.url === '/') {
      fs.readFile('index.html', function (err, info) {
         if (err) {
            response.statusCode = 500;
            response.end('Server Internal Error');

            throw new Error(err.message);
         }
         response.end(info);
      });
   } else if (request.url === '/now') {
      response.end(new Date().toString());
   } else response.end('page not supported');
});

server.listen(8081);
