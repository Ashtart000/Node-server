const User = require('../models/User.js');

module.exports.createUser = (req, resp) => {
    const {body} = req;
    const user = new User(body);
    user.addUser();
    resp.statusCode = 201;
    resp.send(user)
}

module.exports.getAllUsers = (req, resp) => {
    const users = User.findAll();
    resp.statusCode = 200;
    resp.send(users);
}