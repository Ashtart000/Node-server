const express = require('express');
const { validateUser } = require('./middlewares');
const { createUser, getAllUsers } = require('./controllers/userController');
const app = express();
const PORT = 5000;

const bodyParser = express.json();

app.get('/users', getAllUsers);

app.post('/user', bodyParser, validateUser, createUser);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})