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
    } else if(url === '/style.css') {
        try {
            const data = await fs.readFile('./style.css', 'utf-8');
            resp.statusCode = 200;
            resp.end(data);
        } catch (error) {
            resp.end(error.message);
        }
    }
    
    else {
        try {
            const data = await fs.readFile('./404.html', 'utf-8');
            resp.statusCode = 404;
            resp.end(data);
        } catch (error) {
            resp.end(error.message);
        }
    }   
}

const server = http.createServer(requestListener);

server.listen(PORT);