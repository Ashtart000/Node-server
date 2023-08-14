const http = require('http');
const fs = require('fs/promises');

const PORT = 5000;

const requestListener = async (req, resp) => {
    const {url} = req;

    if(url === '/index.html') {
        try {
            const data = await fs.readFile('./index.html', 'utf-8');
            resp.statusCode = 200;
            resp.end(data);
        } catch (error) {
            resp.statusCode = 404;
            resp.end(error.message);
        }
    } else {
        resp.statusCode = 404;
        resp.end();
    }   
}

const server = http.createServer(requestListener);

server.listen(PORT);