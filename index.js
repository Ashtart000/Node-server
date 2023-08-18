const express = require('express');
const { validateUser } = require('./middlewares');
const { createUser } = require('./controllers/userController');
const app = express();
const PORT = 5000;

const bodyParser = express.json();

app.get('/', (req, resp, next) => {
    console.log('first');
    req.newField = 'super-important-value';
    next()
}, (req, resp, next) => {
    console.log('second');
    next()
}, (req, resp, next) => {
    console.log('third');
    console.log(req.newField)
})

app.post('/user', bodyParser, validateUser, createUser);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})