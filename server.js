const url = require('url');
const http = require('http');

const server = new http.Server();

let counter = 0;

server.on('request', function (request, response) {
   console.log(request.method, url.parse(request.url));
   console.log(counter);

   response.end('hello')
});

server.listen(8081);

// const Jimp = require('jimp');
// const path = require('path');
//
// const imgPath = path.resolve(__dirname + '/img/paper.jpg');
//
// Jimp.read(imgPath, function (err, image) {
//    if (err) throw new Error('errors in images');
//
//    image.rotate(90).write('nei-img.jpg')
// });
