const http = require('http');
const fs = require('fs/promises');

const PORT = 5000;

const requestListener = (req, resp) => {
    const {url} = req;

    if(url === '/index.html') {
        fs.readFile('./index.html', 'utf-8')
        .then((data) => {
            resp.end(data)
        })
    } else {
        resp.statusCode = 404;
        resp.end();
    }   
}

const server = http.createServer(requestListener);

server.listen(PORT);