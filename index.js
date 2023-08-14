const http = require('http');

const PORT = 5000;

const requestListener = (req, resp) => {
    const {url, method} = req;
    console.log(url, method)
}

const server = http.createServer(requestListener);

server.listen(PORT);