let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {
    if (request.url.startsWith("/")) {
        let filePath = '';
        if(request.url === '/') {
            filePath = '../public/index.html';
        }
        else {
            filePath = '../public' + request.url;
        }
        fs.readFile(filePath, function (error, data) {

            if (error) {
                response.statusCode = 404;
                response.end('No resources found!!!');
            }
            else {
                response.end(data);
            }
            return;
        })
    }
    else {
        response.end('Error!');
    }
}).listen(3000, function() {
    console.log('server is running 3000');
});