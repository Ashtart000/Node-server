const http = require('http');
const fs = require('fs/promises');

const PORT = 5000;
const users = [];

const requestListener = async (req, resp) => {
    const {url, method} = req;

    if(method === 'GET') {
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
        } else {
            try {
                const data = await fs.readFile('./404.html', 'utf-8');
                resp.statusCode = 404;
                resp.end(data);
            } catch (error) {
                resp.end(error.message);
            }
        }   
    }
    else if (method === 'POST') {
        if (url === '/user') {
            let jsonString = '';
            req.on('data', (chunk) => {
                jsonString += chunk
            })
            req.on('end', () => {
                const user = JSON.parse(jsonString);          
                users.push(user);
                console.log(users);
                resp.statusCode = 201;
                resp.end();
            })
        }
    }
    else {
        resp.statusCode = 500;
        resp.end()
    }
    
}

const server = http.createServer(requestListener);

server.listen(PORT);